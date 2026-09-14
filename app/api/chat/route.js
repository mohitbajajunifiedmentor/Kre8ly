// app/api/chat/route.js
import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { Ticket, ChatLog, TicketMessage, ensureSynced } from "@/models";
import { wantsHuman, detectPriority, SUPPORT_EMAIL } from "@/lib/faq";
import { searchFAQ, getEntryById } from "@/lib/faqSearch";
import { getAIAnswer } from "@/lib/aiFallback";
import { isRateLimited } from "@/lib/rateLimit";
import { notifyNewTicket } from "@/lib/notifyOps";
import { extractContact, extractName, maskContact } from "@/lib/contact";
import { createTicketRecord } from "@/lib/ticketing";
import { getState, setState, clearState } from "@/lib/conversationState";
import { detectIntent, isLikelyNewQuestion } from "@/lib/chatIntent";
import { createChatLogger } from "@/lib/chatLogger";
import { checkAiAllowed, recordAiUsage, limitMessage } from "@/lib/aiLimits";

// --- Flow -------------------------------------------------------------------
//  1. rate limit / validation
//  2. pending stage? -> handle the reply to the last prompt
//  3. explicit human request -> confirm, then name, then contact, then ticket
//  4. FAQ (one engine: lib/faqSearch.js)
//       high/medium -> answer
//       ambiguous   -> "did you mean…?" buttons
//       low         -> suggestions
//       none        -> AI runs automatically
//  5. AI fallback (grounded in the FAQ)
//  6. still unresolved -> name + contact -> ticket
//
// Changes from the previous version:
//   * matchFAQ (the weaker duplicate engine in lib/faq.js) is gone; searchFAQ
//     is used, so aliases, typo repair, ambiguity and the confidence bands
//     actually take effect.
//   * `shouldEscalate` is honoured. Previously "money deducted but no course"
//     got the payment FAQ and nothing else, because the flag was hard-coded
//     false in the matcher.
//   * When the FAQ misses, AI runs immediately instead of asking permission
//     first. The extra click was where most sessions were dropping out.
//   * The user's NAME is collected. ASK_NAME existed as a constant but no stage
//     ever used it, so every ticket said "Unknown" in the console.
//   * Ticket creation goes through createTicketRecord(), which is safe against
//     the double-submit race that the old findOne-then-create could not catch.
// ---------------------------------------------------------------------------

const MAX_MESSAGE_LEN = 2000;
const MAX_CONTACT_ATTEMPTS = 2;

// Every user-facing string is English (see lib/faq.js for the same rule).
const ASK_NAME = "I'll connect you with our support team.\n\nFirst, what is your full name?";
const ASK_NAME_RETRY = "Sorry, I did not catch that. Please send just your name, for example: Rahul Sharma.";
const ASK_CONTACT = "Thanks, {name}. Now please share your email address or mobile number so the team can reach you.";
const ASK_CONTACT_RETRY =
  "That does not look like a valid contact. Please send a 10-digit mobile number " +
  "(for example 9876543210) or an email address (for example name@gmail.com).\n\n" +
  "If you would rather not share it, type 'skip'.";

/** Never let a logging failure break the conversation. */
async function safeLog(sessionId, sender, message) {
  try {
    await ChatLog.create({ sessionId, sender, message });
  } catch (err) {
    console.error("ChatLog write failed (non-fatal):", err.message);
  }
}

async function safeHistory(sessionId) {
  try {
    const recent = await ChatLog.findAll({
      where: { sessionId },
      // Ordered by id, not createdAt: two rows written in the same second are
      // not reliably ordered by timestamp, and the slice below assumes the
      // newest row is the message that was just saved.
      order: [["id", "DESC"]],
      limit: 11,
    });
    // Newest-first from the DB, minus the message just saved, oldest-first for
    // the model. The old code used ASC+limit, which pinned the AI's context to
    // the first ten messages of the session forever.
    return recent.slice(1).reverse();
  } catch (err) {
    console.error("History read failed (non-fatal):", err.message);
    return [];
  }
}

/**
 * Creates the ticket, seeds its conversation thread, notifies ops.
 * Returns a user-facing reply plus the credentials the widget needs.
 */
async function createTicket({ sessionId, message, contact, priority, aiAnswer, reason }) {
  let ticket;
  let duplicate = false;

  try {
    const result = await createTicketRecord(Ticket, {
      sessionId,
      userName: contact?.name || null,
      userEmail: contact?.email || null,
      userPhone: contact?.phone || null,
      subject: message.slice(0, 120),
      message,
      aiAnswer: aiAnswer || null,
      escalationReason: reason || "unresolved_question",
      status: "open",
      priority,
      resolvedBy: null, // only set when an agent actually resolves it
    });
    ticket = result.ticket;
    duplicate = result.duplicate;

    if (duplicate) {
      return {
        ok: true,
        duplicate: true,
        ticketNumber: ticket.ticketNumber,
        reply:
          `You already have a ticket open for this: **${ticket.ticketNumber}**. ` +
          `Our team has it and will get in touch with you.`,
      };
    }

    // Seed the thread so the ticket page has a conversation from the start.
    await TicketMessage.create({
      ticketId: ticket.id,
      author: "user",
      authorName: contact?.name || null,
      body: message,
    });
    if (aiAnswer) {
      await TicketMessage.create({ ticketId: ticket.id, author: "ai", body: aiAnswer });
    }
  } catch (err) {
    console.error("Ticket create failed:", err.message);
    // DB is down, but the user still needs a route to a human.
    return {
      ok: false,
      reply:
        "Our ticket system is temporarily unavailable. Please email " +
        SUPPORT_EMAIL +
        " directly and the team will pick it up. Sorry for the inconvenience.",
    };
  }

  // Fire-and-forget: ops sees it on refresh if the socket is down.
  notifyNewTicket({
    ticketNumber: ticket.ticketNumber,
    sessionId,
    subject: ticket.subject,
    message: ticket.message,
    userName: ticket.userName,
    userEmail: ticket.userEmail,
    userPhone: ticket.userPhone,
    status: ticket.status,
    priority: ticket.priority,
    escalationReason: ticket.escalationReason,
    createdAt: ticket.createdAt,
    updatedAt: ticket.updatedAt,
  });

  const reach =
    contact?.email || contact?.phone
      ? `The team will contact you at ${maskContact(
          contact.email
            ? { type: "email", value: contact.email }
            : { type: "phone", value: contact.phone }
        )}.`
      // The bot cannot deliver a reply back into this chat, so it must not
      // promise one. In practice a contact is always collected first.
      : `Please email ${SUPPORT_EMAIL} with your ticket number so the team can reach you.`;

  const eta =
    priority === "high" || priority === "urgent"
      ? "This has been marked high priority, so you should hear back shortly."
      : "You will usually get a reply within 24 working hours.";

  return {
    ok: true,
    ticketNumber: ticket.ticketNumber,
    reply:
      `Your support ticket has been created successfully. \u2705\n\n` +
      `Ticket number: **${ticket.ticketNumber}**\n\n${reach}\n${eta}\n\n` +
      `Please keep the ticket number handy — quote it when our team contacts you.`,
  };
}

/* ===========================================================================
   CONVERSATION STATE MACHINE

   Stages, and what the bot is waiting for in each:

     (none)          a question
     faq_clarify     which of two/three FAQ topics they meant
     faq_feedback    did the FAQ answer help?
     ai_offer        should I try AI support (again)?
     ai_feedback     did the AI answer help?
     support_confirm shall I connect you to the team?
     name            their full name
     contact         an email or phone number
     ticket_confirm  final go-ahead to create the ticket

   Every reply carries `actions` — buttons whose `text` is sent back as an
   ordinary message, so typing "no thanks" and clicking [No, thanks] are the
   same input path and no state can be reached only by button.
   =========================================================================== */

const A = {
  askElse: { id: "ask_else", label: "Ask something else", text: "Ask something else" },
  useAi: { id: "use_ai", label: "Use AI support", text: "Use AI Support" },
  support: { id: "support", label: "Connect with support", text: "Connect with Support Team" },
  yesHelps: { id: "yes", label: "Yes, that helps", text: "Yes, that helps" },
  needHelp: { id: "need_help", label: "No, I still need help", text: "No, I still need help" },
  yesConnect: { id: "support", label: "Yes, connect me", text: "Yes, Connect Me" },
  noThanks: { id: "no", label: "No, thanks", text: "No, thanks" },
  skip: { id: "skip", label: "Skip", text: "Skip" },
  createTicket: { id: "create_ticket", label: "Create support ticket", text: "Create Support Ticket" },
  editContact: { id: "edit_contact", label: "Edit contact information", text: "Edit Contact Information" },
  retry: { id: "retry", label: "Try again", text: "Try again" },
  none: { id: "none", label: "None of these", text: "None of these" },
};

const NUDGE = [A.askElse, A.useAi];

/* ─────────────────────── what the ticket is actually about ────────────────
   Every button sends its label as an ordinary message, so "Create Support
   Ticket", "Yes, Connect Me" and "Skip" all land in the transcript as user
   turns. `state.question` normally holds the real question — but if the dev
   server restarted, or the flow was entered straight from a button, it can be
   empty, and the ticket was then created with the BUTTON TEXT as its subject.
   That is why tickets titled "Create Support Ticket" appear with no context.

   The last genuine question is recovered from the chat log instead: button
   texts, flow replies (yes/no/skip) and the name / phone / email answers are
   all skipped. */

const BUTTON_TEXTS = new Set(
  Object.values(A).map((a) => String(a.text || "").trim().toLowerCase()).filter(Boolean)
);

function isFlowNoise(value) {
  const t = String(value || "").trim();
  if (t.length < 4) return true;
  if (BUTTON_TEXTS.has(t.toLowerCase())) return true;
  if (extractContact(t)) return true;              // "9876543210", "a@b.com"
  const intent = detectIntent(t);
  return Boolean(intent) && !isLikelyNewQuestion(t, intent);
}

async function resolveQuestion(sessionId, state, fallback) {
  if (state.question && !isFlowNoise(state.question)) return state.question;

  try {
    const rows = await ChatLog.findAll({
      where: { sessionId, sender: "user" },
      order: [["id", "DESC"]],
      limit: 20,
    });
    const real = rows.find((r) => !isFlowNoise(r.message));
    if (real) return real.message;
  } catch (err) {
    console.error("Question lookup failed (non-fatal):", err.message);
  }

  if (!isFlowNoise(fallback)) return fallback;
  return "Support request raised from chat (no question captured)";
}

async function reply(sessionId, payload, log) {
  log?.debug("bot.reply", {
    type: payload.type,
    awaiting: payload.awaiting,
    actions: (payload.actions || []).map((a) => a.id).join(",") || "-",
  });
  await safeLog(sessionId, "bot", payload.reply);
  return NextResponse.json({ sessionId, ...payload });
}

/** Ends any pending flow and hands control back to the user. */
function backToChat(sessionId, text, extra = []) {
  clearState(sessionId);
  return { type: "info", reply: text, actions: [...NUDGE, ...extra] };
}

/** Formats a matched FAQ entry, honouring its escalation flag. */
function faqPayload(sessionId, faq, question, priority) {
  setState(sessionId, {
    stage: "faq_feedback",
    question,
    priority,
    matchedId: faq.id,
    reason: faq.shouldEscalate ? "faq_answer_needs_human" : "faq_did_not_resolve",
  });

  // The entry answers the general question, but the wording says this is about
  // the user's own account — offer the handoff in the same breath.
  const suffix = faq.shouldEscalate
    ? "\n\nIf this is about your own account or payment, I can connect you with our support team right away."
    : "\n\nDid this answer your question?";

  return {
    type: "faq",
    reply: `${faq.answer}${suffix}`,
    matchedId: faq.id,
    related: faq.related,
    actions: faq.shouldEscalate
      ? [A.support, A.yesHelps, A.askElse]
      : [A.yesHelps, A.needHelp, A.askElse],
  };
}

/** Runs the AI fallback and formats the outcome. Never throws. */
async function runAi(sessionId, question, state, log) {
  const started = Date.now();
  const history = await safeHistory(sessionId);
  let ai = { resolved: false, reply: null };
  try {
    ai = await getAIAnswer(question, history);
  } catch (err) {
    console.error("AI fallback threw (non-fatal):", err.message);
  }

  log?.[ai.resolved ? "info" : "warn"]("ai.result", {
    resolved: ai.resolved,
    reason: ai.reason || "-",
    ms: Date.now() - started,
    historyTurns: history.length,
  });

  if (!ai.resolved) {
    // Distinguish "temporarily failed" from "not available at all". Offering
    // [Try again] when the key is missing, unauthorised or out of credit sends
    // the user round a loop that can never succeed.
    const permanent = ai.permanent === true;
    const escalated = ai.reason === "model_escalated";

    setState(sessionId, {
      ...state,
      question,
      stage: escalated ? "support_confirm" : "ai_offer",
      aiFailed: !escalated,
      reason: escalated ? "ai_escalated" : state.reason || "ai_unavailable",
    });

    if (escalated) {
      // The model decided this needs a person — do not make the user ask twice.
      return {
        type: "support_confirm",
        reply:
          "This one needs a person from our team — it looks account-specific. " +
          "Shall I connect you with support?",
        actions: [A.yesConnect, A.noThanks, A.askElse],
      };
    }

    if (permanent) {
      log?.error("ai.unavailable", {
        reason: ai.reason,
        hint: "check ANTHROPIC_API_KEY, model name and account credit",
      });
      return {
        type: "ai_error",
        reply:
          "AI support is not available at the moment. I can still connect you with our support team, or you can ask me something else.",
        actions: [A.support, A.askElse],
      };
    }

    return {
      type: "ai_error",
      reply:
        "I could not get an AI answer for that right now. Would you like to try again, or connect with our support team?",
      actions: [A.retry, A.support, A.askElse],
    };
  }

  setState(sessionId, { ...state, question, stage: "ai_feedback", aiAnswer: ai.reply });
  return {
    type: "ai",
    reply: `${ai.reply}\n\nDid this answer your question?`,
    actions: [A.yesHelps, A.needHelp, A.support, A.askElse],
  };
}

/** Buttons for a "did you mean…?" prompt. */
function candidateActions(candidates) {
  return candidates
    .slice(0, 3)
    .map((c) => ({ id: `pick_${c.id}`, label: c.label, text: c.label }))
    .concat([A.none]);
}

export async function POST(req) {
  let sessionId = null;

  try {
    // The tables must exist before the first query. The old module-level
    // fire-and-forget sync could still be running when a request arrived.
    await ensureSynced().catch(() => {});

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          type: "error",
          reply: "You are sending messages a little too quickly. Please wait a moment and try again.",
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { type: "error", reply: "I could not read that message. Please try sending it again." },
        { status: 400 }
      );
    }

    const { message, sessionId: incomingSessionId } = body || {};
    sessionId = incomingSessionId || randomUUID();

    if (!message || !String(message).trim()) {
      return NextResponse.json(
        { type: "error", reply: "Please type your question.", sessionId },
        { status: 400 }
      );
    }

    const log = createChatLogger(sessionId);
    const respond = (payload) => reply(sessionId, payload, log);

    const text = String(message).trim().slice(0, MAX_MESSAGE_LEN);
    await safeLog(sessionId, "user", text);

    const state = getState(sessionId) || {};
    const stage = state.stage || null;
    const intent = detectIntent(text);
    const newQuestion = isLikelyNewQuestion(text, intent);

    log.info("msg.in", { stage: stage || "-", intent: intent || "-", newQuestion, len: text.length });

    /* -- universal exits -------------------------------------------------- */
    if (intent === "cancel") {
      return respond(
        backToChat(sessionId, "No problem, I have cancelled that. What else can I help you with?")
      );
    }
    if (intent === "ask_else") {
      clearState(sessionId);
      return respond({ type: "info", reply: "Sure — what would you like to know?", actions: [] });
    }

    /* ================= STAGE: clarifying which topic ===================== */
    if (stage === "faq_clarify") {
      const picked = (state.candidates || []).find(
        (c) => c.label.toLowerCase() === text.trim().toLowerCase()
      );
      if (picked) {
        const entry = getEntryById(picked.id);
        if (entry) {
          log.info("faq.clarified", { id: entry.id });
          return respond(faqPayload(sessionId, entry, state.question || text, state.priority || "medium"));
        }
      }
      if (intent === "no" || /^none of these$/i.test(text.trim())) {
        return respond(await runAi(sessionId, state.question || text, state, log));
      }
      // Anything else is treated as a fresh question below.
    }

    /* ================= STAGE: waiting on FAQ feedback ==================== */
    if (stage === "faq_feedback") {
      if (intent === "yes") {
        return respond(backToChat(sessionId, "Great, I am glad that helped."));
      }
      if (intent === "need_help" || intent === "no") {
        // Do not ask permission — the FAQ already failed once. Go straight to AI.
        return respond(await runAi(sessionId, state.question || text, state, log));
      }
      if (intent === "support") {
        setState(sessionId, { ...state, stage: "support_confirm" });
        return respond({
          type: "support_confirm",
          reply: "Sure. I can connect you with our support team. Would you like to continue?",
          actions: [A.yesConnect, A.noThanks],
        });
      }
    }

    /* ================= STAGE: offered AI support ========================= */
    if (stage === "ai_offer") {
      if (intent === "use_ai" || intent === "retry" || intent === "yes") {
        return respond(await runAi(sessionId, state.question || text, state, log));
      }
      if (intent === "support") {
        setState(sessionId, { ...state, stage: "support_confirm" });
        return respond({
          type: "support_confirm",
          reply: "Sure. I can connect you with our support team. Would you like to continue?",
          actions: [A.yesConnect, A.noThanks],
        });
      }
      if (intent === "no") {
        return respond(backToChat(sessionId, "No problem. What else can I help you with?"));
      }
    }

    /* ================= STAGE: waiting on AI feedback ===================== */
    if (stage === "ai_feedback") {
      if (intent === "yes") {
        return respond(backToChat(sessionId, "Great, I am glad that helped."));
      }
      if (intent === "need_help" || intent === "no" || intent === "support") {
        setState(sessionId, { ...state, stage: "support_confirm" });
        return respond({
          type: "support_confirm",
          reply: "I understand. Would you like to connect with our support team?",
          actions: [A.yesConnect, A.noThanks, A.askElse],
        });
      }
    }

    /* ================= STAGE: confirming the handoff ===================== */
    if (stage === "support_confirm") {
      if (intent === "support" || intent === "yes") {
        setState(sessionId, { ...state, stage: "name", attempts: 0 });
        return respond({
          type: "ask_name",
          reply: ASK_NAME,
          awaiting: "name",
          actions: [A.skip],
        });
      }
      if (intent === "no" || intent === "skip") {
        return respond(
          backToChat(
            sessionId,
            "No problem. You can keep chatting with me or ask another question any time."
          )
        );
      }
    }

    /* ================= STAGE: collecting a name ========================== */
    if (stage === "name") {
      if (intent === "skip") {
        setState(sessionId, { ...state, stage: "contact", name: null, attempts: 0 });
        return respond({
          type: "ask_contact",
          reply: ASK_CONTACT.replace("{name}, ", ""),
          awaiting: "contact",
          actions: [A.skip],
        });
      }

      const name = extractName(text);
      if (name) {
        setState(sessionId, { ...state, stage: "contact", name, attempts: 0 });
        return respond({
          type: "ask_contact",
          reply: ASK_CONTACT.replace("{name}", name),
          awaiting: "contact",
          actions: [A.skip],
        });
      }

      const nameAttempts = (state.attempts || 0) + 1;
      if (nameAttempts > MAX_CONTACT_ATTEMPTS) {
        setState(sessionId, { ...state, stage: "contact", name: null, attempts: 0 });
        return respond({
          type: "ask_contact",
          reply: ASK_CONTACT.replace("{name}, ", ""),
          awaiting: "contact",
          actions: [A.skip],
        });
      }
      setState(sessionId, { ...state, attempts: nameAttempts });
      return respond({
        type: "ask_name",
        reply: ASK_NAME_RETRY,
        awaiting: "name",
        actions: [A.skip],
      });
    }

    /* ================= STAGE: collecting a contact ======================= */
    if (stage === "contact") {
      // Skip must NOT create a ticket — not a partial one, not an empty one.
      if (intent === "skip" || intent === "no") {
        return respond(
          backToChat(
            sessionId,
            "No problem. Without contact information I will not create a support ticket. " +
              "You can keep chatting here or try AI support.",
            [A.support]
          )
        );
      }

      const found = extractContact(text);
      if (found) {
        const contact = {
          name: state.name || extractName(text) || null,
          email: found.type === "email" ? found.value : null,
          phone: found.type === "phone" ? found.value : null,
        };
        setState(sessionId, { ...state, stage: "ticket_confirm", contact, attempts: 0 });
        return respond({
          type: "ticket_confirm",
          reply:
            `Thanks. I have your contact as ${maskContact(found)}.\n\n` +
            "Would you like me to create a support ticket for our team?",
          actions: [A.createTicket, A.noThanks, A.editContact],
        });
      }

      const attempts = (state.attempts || 0) + 1;
      // Two tries, then stop asking rather than trapping the user in a loop.
      if (attempts > MAX_CONTACT_ATTEMPTS) {
        return respond(
          backToChat(
            sessionId,
            "No problem, let us leave that for now. You can keep chatting here or try AI support.",
            [A.support]
          )
        );
      }
      setState(sessionId, { ...state, attempts });
      return respond({
        type: "ask_contact",
        reply: ASK_CONTACT_RETRY,
        awaiting: "contact",
        actions: [A.skip],
      });
    }

    /* ================= STAGE: final ticket confirmation ================== */
    if (stage === "ticket_confirm") {
      if (intent === "edit_contact") {
        setState(sessionId, { ...state, stage: "contact", contact: null, attempts: 0 });
        return respond({
          type: "ask_contact",
          reply: "Sure — please share the phone number or email address you would like us to use.",
          awaiting: "contact",
          actions: [A.skip],
        });
      }

      if (intent === "no" || intent === "skip") {
        return respond(
          backToChat(sessionId, "No problem, I have not created a ticket. What else can I help you with?")
        );
      }

      if (intent === "create_ticket" || intent === "yes" || intent === "retry") {
        // A second confirmation while the first write is still in flight is
        // ignored; the unique dedupeKey in the database is the real backstop.
        if (state.creating) {
          log.warn("ticket.duplicate", { blocked: "create already in flight" });
          return respond({ type: "info", reply: "I am still creating your ticket — one moment.", actions: [] });
        }
        setState(sessionId, { ...state, creating: true });

        const result = await createTicket({
          sessionId,
          message: await resolveQuestion(sessionId, state, text),
          contact: state.contact,
          priority: state.priority || "medium",
          aiAnswer: state.aiAnswer || null,
          reason: state.reason || "user_requested_support",
        });

        log.info("ticket.result", {
          ok: result.ok,
          ticket: result.ticketNumber || "-",
          duplicate: result.duplicate || false,
        });

        if (!result.ok) {
          // Keep the stage so [Try again] resumes from here, and clear the
          // in-flight flag so the retry is actually allowed to run.
          setState(sessionId, { ...state, creating: false });
          return respond({
            type: "error",
            reply:
              "I could not create the support ticket right now. Please try again, or continue with AI support.",
            actions: [A.retry, A.useAi, A.askElse],
          });
        }

        clearState(sessionId);
        return respond({
          type: "ticket",
          reply: result.reply,
          ticketNumber: result.ticketNumber,
          duplicate: result.duplicate || false,
          // No "View ticket" link and no access token: there is no customer
          // ticket page in this setup. The team reaches the customer on the
          // phone number or email that was collected above.
          actions: [{ id: "continue", label: "Ask something else", text: "Ask something else" }],
        });
      }
    }

    /* ================= NO PENDING STAGE: a new question ================== */
    const priority = detectPriority(text);

    if (!newQuestion && intent === "support") {
      setState(sessionId, {
        stage: "support_confirm",
        question: state.question || text,
        priority,
        reason: "user_requested_support",
      });
      return respond({
        type: "support_confirm",
        reply: "Sure. I can connect you with our support team. Would you like to continue?",
        actions: [A.yesConnect, A.noThanks],
      });
    }

    // An explicit request for a person, phrased as a sentence.
    if (wantsHuman(text)) {
      setState(sessionId, {
        stage: "support_confirm",
        question: text,
        priority,
        reason: "user_requested_support",
      });
      return respond({
        type: "support_confirm",
        reply: "Sure. I can help you connect with our support team. Would you like to continue?",
        actions: [A.yesConnect, A.noThanks],
      });
    }

    if (intent === "use_ai") {
      return respond(await runAi(sessionId, state.question || text, state, log));
    }

    /* -- FAQ first -------------------------------------------------------- */
    const match = searchFAQ(text);
    log.info("faq.search", {
      status: match.status,
      top: match.candidates[0]?.id || "-",
      score: match.candidates[0]?.score ?? "-",
    });

    if (match.status === "high" || match.status === "medium") {
      return respond(faqPayload(sessionId, match.best, text, priority));
    }

    if (match.status === "ambiguous" || match.status === "low") {
      setState(sessionId, {
        stage: "faq_clarify",
        question: text,
        priority,
        candidates: match.candidates,
        reason: "faq_ambiguous",
      });
      return respond({
        type: "clarify",
        reply:
          match.status === "ambiguous"
            ? "I can help with that — which one do you mean?"
            : "I am not fully sure I understood. Did you mean one of these?",
        actions: candidateActions(match.candidates),
      });
    }

    /* -- No FAQ match: run AI straight away ------------------------------- */
    // The old flow asked "would you like me to try AI support?" and most people
    // never clicked. The AI is grounded in the FAQ now, so running it is both
    // cheap and safe.
    log.warn("faq.miss", { question: text.slice(0, 120) });
    return respond(
      await runAi(sessionId, text, { question: text, priority, reason: "no_faq_match" }, log)
    );
  } catch (err) {
    createChatLogger(sessionId).error("route.crash", {
      error: err.message,
      where: err.stack?.split("\n")[1]?.trim(),
    });
    return NextResponse.json(
      {
        type: "error",
        reply: "Something went wrong at our end. Please try again, or email " + SUPPORT_EMAIL + ".",
        sessionId,
      },
      { status: 500 }
    );
  }
}