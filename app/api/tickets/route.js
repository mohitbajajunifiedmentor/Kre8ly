// app/api/tickets/route.js
import { NextResponse } from "next/server";
import { Op, fn, col, literal } from "sequelize";
import { Ticket, ensureSynced } from "@/models";
import { supportAuth } from "@/lib/ticketing";

/**
 * SECURITY — what this route used to do:
 *
 *   GET /api/tickets  ->  Ticket.findAll()  ->  every ticket, every email,
 *                         every phone number, to anybody who asked.
 *
 * ONE audience: the ops team, signed in via the httpOnly session cookie (or
 * the raw x-support-key header for scripts). There is no customer-facing
 * ticket page in this setup — the customer asks in the chat widget, the team
 * reads the ticket here and calls or emails them back — so the old
 * `?ticketNumber=..&token=..` lookup has been removed rather than left open as
 * an unauthenticated way to read names and phone numbers.
 *
 * New: `?view=stats` returns the counters the ops dashboard shows at the top.
 * Computing them in SQL beats fetching every ticket into the browser to count
 * them, which is what the console was effectively doing.
 */

const PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 100;
const SORTS = {
  newest: [["createdAt", "DESC"]],
  oldest: [["createdAt", "ASC"]],
  updated: [["updatedAt", "DESC"]],
  // urgent first, then oldest — the queue an agent should actually work.
  priority: [
    [literal(`CASE "priority" WHEN 'urgent' THEN 0 WHEN 'high' THEN 1 WHEN 'medium' THEN 2 ELSE 3 END`), "ASC"],
    ["createdAt", "ASC"],
  ],
};

export async function GET(req) {
  // Short per-request id so the two lines a single call produces can be tied
  // together in a busy log.
  const rid = Math.random().toString(36).slice(2, 9);

  try {
    await ensureSynced().catch(() => {});
    const { searchParams } = new URL(req.url);

    /* ---------- support only ---------- */
    const auth = supportAuth(req);
    if (!auth.ok) {
      console.warn(`[tickets:${rid}] support path rejected — ${auth.reason}`);
      return NextResponse.json({ error: "Not authorised." }, { status: 401 });
    }

    /* ---------- dashboard counters ---------- */
    if (searchParams.get("view") === "stats") {
      const byStatus = await Ticket.findAll({
        attributes: ["status", [fn("COUNT", col("id")), "count"]],
        group: ["status"],
        raw: true,
      });
      const byPriority = await Ticket.findAll({
        attributes: ["priority", [fn("COUNT", col("id")), "count"]],
        where: { status: { [Op.notIn]: ["resolved", "closed"] } },
        group: ["priority"],
        raw: true,
      });

      const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const unanswered = await Ticket.count({
        where: { status: "open", firstResponseAt: null },
      });
      const unseen = await Ticket.count({ where: { agentSeenAt: null, status: "open" } });
      const breached = await Ticket.count({
        where: { status: "open", firstResponseAt: null, createdAt: { [Op.lt]: dayAgo } },
      });
      const today = await Ticket.count({
        where: { createdAt: { [Op.gte]: new Date(new Date().setHours(0, 0, 0, 0)) } },
      });

      return NextResponse.json({
        status: Object.fromEntries(byStatus.map((r) => [r.status, Number(r.count)])),
        priority: Object.fromEntries(byPriority.map((r) => [r.priority, Number(r.count)])),
        unanswered, // open, nobody has replied yet
        unseen, // open, no agent has even looked
        breached, // open and unanswered for more than 24h
        today,
      });
    }

    const status = searchParams.get("status");
    const priority = searchParams.get("priority");
    const assignedTo = searchParams.get("assignedTo");
    const sort = SORTS[searchParams.get("sort")] || SORTS.newest;
    const q = (searchParams.get("q") || "").trim();
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10) || 1);
    const limit = Math.min(
      MAX_PAGE_SIZE,
      Math.max(1, parseInt(searchParams.get("limit") || PAGE_SIZE, 10) || PAGE_SIZE)
    );

    const where = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (assignedTo) where.assignedTo = assignedTo === "unassigned" ? null : assignedTo;
    if (q) {
      where[Op.or] = [
        { ticketNumber: { [Op.iLike]: `%${q}%` } },
        { userEmail: { [Op.iLike]: `%${q}%` } },
        { userPhone: { [Op.iLike]: `%${q}%` } },
        { userName: { [Op.iLike]: `%${q}%` } },
        { subject: { [Op.iLike]: `%${q}%` } },
        { message: { [Op.iLike]: `%${q}%` } },
      ];
    }

    // The old route had no limit at all — it loaded the entire table on every
    // dashboard render.
    const { rows, count } = await Ticket.findAndCountAll({
      where,
      order: sort,
      limit,
      offset: (page - 1) * limit,
      // Agents never need these, and dedupeKey is an internal fingerprint.
      attributes: { exclude: ["accessToken", "dedupeKey"] },
    });

    return NextResponse.json({
      tickets: rows,
      total: count,
      page,
      pages: Math.max(1, Math.ceil(count / limit)),
    });
  } catch (err) {
    console.error("Tickets fetch error:", err);
    return NextResponse.json(
      { error: "Could not load tickets. Please try again." },
      { status: 500 }
    );
  }
}