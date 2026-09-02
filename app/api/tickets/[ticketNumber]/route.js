// app/api/tickets/[ticketNumber]/route.js
import { NextResponse } from "next/server";
import { Ticket, TicketMessage, ChatLog, ensureSynced } from "@/models";
import { isSupportRequest, supportAuth, publicTicket } from "@/lib/ticketing";
import { notifyTicketUpdated, notifyTicketMessage } from "@/lib/notifyOps";

/**
 * Replaces app/api/tickets/[id]/route.js, which took the raw database id and
 * had NO authorisation: anyone could PATCH any ticket's status, priority or
 * assignee by guessing an integer. Now keyed on the public ticket number, and
 * every mutation is gated.
 *
 * Added here:
 *   - GET stamps agentSeenAt, so the console can show which tickets nobody has
 *     opened yet instead of every ticket looking the same.
 *   - The first support reply stamps firstResponseAt, which is what the
 *     "waiting for a first reply" and "SLA breached" counters are built on.
 *   - Resolving stamps resolvedAt; closing releases dedupeKey so the customer
 *     can raise the same issue again in future.
 *   - Customer replies now emit a socket event. Previously a reply on an open
 *     ticket was completely silent and sat unseen until someone refreshed.
 */

async function loadTicket(ticketNumber) {
  return Ticket.findOne({ where: { ticketNumber } });
}

function opsPayload(ticket) {
  return {
    ...publicTicket(ticket),
    userName: ticket.userName,
    userEmail: ticket.userEmail,
    userPhone: ticket.userPhone,
    firstResponseAt: ticket.firstResponseAt,
    agentSeenAt: ticket.agentSeenAt,
  };
}

/**
 * GET — the full thread for one ticket, for the agent console.
 *
 * Support only. The user-facing read is
 * `GET /api/tickets?ticketNumber=..&token=..`, which filters internal notes
 * out; this one deliberately includes them.
 */
/**
 * The folder decides the param name: app/api/tickets/[ticketNumber]/ gives
 * `params.ticketNumber`, the old app/api/tickets/[id]/ gives `params.id`. If
 * this file is dropped into the old folder, destructuring only `ticketNumber`
 * yields undefined and Sequelize throws
 * `WHERE parameter "ticketNumber" has invalid "undefined" value`.
 * Reading both makes the route work either way — but delete the [id] folder
 * anyway: that older route accepted the raw database id with no authorisation.
 */
async function readTicketNumber(params) {
  const p = (await params) || {};
  return p.ticketNumber || p.id || null;
}

export async function GET(req, { params }) {
  try {
    await ensureSynced().catch(() => {});
    const auth = supportAuth(req);
    if (!auth.ok) {
      console.warn(`[ticket] support rejected — ${auth.reason}`);
      return NextResponse.json({ error: "Not authorised." }, { status: 401 });
    }

    const ticketNumber = await readTicketNumber(params);
    const ticket = ticketNumber ? await loadTicket(ticketNumber) : null;
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    let messages = await TicketMessage.findAll({
      where: { ticketId: ticket.id },
      order: [["createdAt", "ASC"]],
      attributes: ["author", "authorName", "body", "internal", "createdAt"],
    });

    // Legacy tickets (raised before the thread existed) have no rows at all —
    // the agent would see "No messages yet" and not even the original question.
    // The stored message and bot answer are shown instead. Not persisted: the
    // thread stays the source of truth for everything written from now on.
    if (!messages.length) {
      messages = [
        {
          author: "user",
          authorName: ticket.userName,
          body: ticket.message,
          internal: false,
          createdAt: ticket.createdAt,
        },
        ...(ticket.aiAnswer
          ? [{
              author: "ai",
              authorName: null,
              body: ticket.aiAnswer,
              internal: false,
              createdAt: ticket.createdAt,
            }]
          : []),
      ];
    }

    // The chat that led to the ticket. The agent could see one seeded message
    // and nothing else, so every ticket looked context-free — "connect team"
    // with no idea what the person had been asking about for five turns.
    // chat_logs already had it; nothing was reading it.
    let transcript = [];
    try {
      const rows = await ChatLog.findAll({
        where: { sessionId: ticket.sessionId },
        order: [["id", "ASC"]],
        limit: 60,
        attributes: ["sender", "message", "createdAt"],
      });
      transcript = rows.map((r) => ({
        sender: r.sender,
        message: r.message,
        createdAt: r.createdAt,
      }));
    } catch (err) {
      // A missing transcript must never break the ticket view.
      console.error("Transcript read failed (non-fatal):", err.message);
    }

    // Mark as seen the first time an agent opens it.
    if (!ticket.agentSeenAt) {
      ticket.agentSeenAt = new Date();
      await ticket.save();
      notifyTicketUpdated(opsPayload(ticket));
    }

    return NextResponse.json({
      // Agents need the contact details, so this returns more than
      // publicTicket() does — but only behind the support session.
      ticket: {
        ...publicTicket(ticket),
        userName: ticket.userName,
        userEmail: ticket.userEmail,
        userPhone: ticket.userPhone,
        message: ticket.message,
        aiAnswer: ticket.aiAnswer,
        escalationReason: ticket.escalationReason,
        firstResponseAt: ticket.firstResponseAt,
        resolvedAt: ticket.resolvedAt,
        agentSeenAt: ticket.agentSeenAt,
      },
      messages,
      transcript,
    });
  } catch (err) {
    console.error("Ticket read error:", err);
    return NextResponse.json({ error: "Could not load the ticket." }, { status: 500 });
  }
}

/**
 * POST — add a note to the ticket. SUPPORT ONLY.
 *
 * There is no customer ticket page in this setup: the customer's side of the
 * conversation happens in the chat widget, and the team follows up by phone or
 * email. So every note written here is an internal team note — nobody outside
 * the console can read it, and nothing written here is delivered to anyone.
 * The old user-with-token path is gone; leaving it in would have been an
 * unauthenticated write endpoint with no reader.
 */
export async function POST(req, { params }) {
  try {
    await ensureSynced().catch(() => {});
    const ticketNumber = await readTicketNumber(params);
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const message = String(body.message || "").trim().slice(0, 4000);
    if (!message) {
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
    }

    if (!isSupportRequest(req)) {
      return NextResponse.json({ error: "Not authorised." }, { status: 401 });
    }

    const ticket = await loadTicket(ticketNumber);
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    const authorName = String(body.agentName || "").trim() || "Support";

    await TicketMessage.create({
      ticketId: ticket.id,
      author: "support",
      authorName,
      body: message,
      internal: true, // team-only by definition; nothing here is customer-facing
    });

    // The first note is the signal that somebody actually worked the ticket —
    // that is what the "no follow-up yet" counter in the console counts.
    if (!ticket.firstResponseAt) ticket.firstResponseAt = new Date();
    if (ticket.status === "open") ticket.status = "in_progress";
    await ticket.save();

    notifyTicketMessage({
      ticketNumber: ticket.ticketNumber,
      author: "support",
      authorName,
      preview: message,
      internal: true,
    });
    notifyTicketUpdated(opsPayload(ticket));

    return NextResponse.json({ ok: true, ticket: publicTicket(ticket) });
  } catch (err) {
    console.error("Ticket reply error:", err);
    return NextResponse.json({ error: "Could not send your message." }, { status: 500 });
  }
}

/** PATCH — status / priority / assignment. Support only. */
export async function PATCH(req, { params }) {
  try {
    await ensureSynced().catch(() => {});
    const auth = supportAuth(req);
    if (!auth.ok) {
      console.warn(`[ticket] support rejected — ${auth.reason}`);
      return NextResponse.json({ error: "Not authorised." }, { status: 401 });
    }

    const ticketNumber = await readTicketNumber(params);
    const { status, assignedTo, priority, agentName } = await req.json();

    const ticket = await loadTicket(ticketNumber);
    if (!ticket) {
      return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
    }

    const changes = [];
    if (status && status !== ticket.status) {
      changes.push(`status: ${ticket.status} → ${status}`);
      ticket.status = status;
      if (status === "resolved") {
        ticket.resolvedBy = "human";
        ticket.resolvedAt = new Date();
      }
      if (status === "closed") {
        // Release the duplicate fingerprint: the same customer may legitimately
        // raise the same question again months later, and a closed ticket must
        // not block that.
        ticket.dedupeKey = null;
      }
    }
    if (priority && priority !== ticket.priority) {
      changes.push(`priority: ${ticket.priority} → ${priority}`);
      ticket.priority = priority;
    }
    if (assignedTo !== undefined && assignedTo !== ticket.assignedTo) {
      changes.push(assignedTo ? `assigned to ${assignedTo}` : "unassigned");
      ticket.assignedTo = assignedTo || null;
    }

    if (!changes.length) {
      return NextResponse.json({ ok: true, ticket: publicTicket(ticket) });
    }

    await ticket.save();

    // Lifecycle events live in the same thread, so the history reads in order.
    await TicketMessage.create({
      ticketId: ticket.id,
      author: "system",
      authorName: agentName || "Support",
      body: changes.join(", "),
    });

    notifyTicketUpdated(opsPayload(ticket));

    return NextResponse.json({ ok: true, ticket: publicTicket(ticket) });
  } catch (err) {
    console.error("Ticket update error:", err);
    return NextResponse.json({ error: "Could not update the ticket." }, { status: 500 });
  }
}