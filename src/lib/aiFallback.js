const { createChatLogger } = require("./chatLogger");
const { getKnowledgeContext } = require("./faqSearch");

const log = createChatLogger("ai");

const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6";
const TIMEOUT_MS = 15000;
const MAX_HISTORY = 8;
const MAX_ATTEMPTS = 3;

const BASE_PROMPT = `You are the customer support assistant for Kre8ly, an online education platform offering courses, fellowships and internships.

Rules:
- Answer using ONLY the knowledge block below plus what the user has told you.
- Always reply in clear, natural, professional English, even if the question is asked in Hindi or Hinglish.
- Keep answers short: 2-3 sentences, or a few short steps.
- Site paths (for example /courses, /contact-us) may be included as-is; they render as links.
- Never invent policies, prices, dates, timelines, account details or ticket information. If a price or date is not in the knowledge block, say it is listed on the relevant page and link that page.
- If the question is account-specific (payment failed, money deducted, certificate not received, account locked, personal data) or the knowledge block genuinely does not cover it, reply with exactly ESCALATE_TO_HUMAN followed by a short reason, and nothing else.`;

/** Bot prompts and button texts that carry no information for the model. */
const NOISE = [
  /^did this answer your question\?$/i,
  /^(use ai support|yes,? that helps|no,? i still need help|ask something else)$/i,
  /^(yes,? connect me|no,? thanks|skip|try again|create support ticket|edit contact information)$/i,
];

function isNoise(content) {
  const s = content.trim();
  return NOISE.some((re) => re.test(s));
}

function buildSystemPrompt(userMessage) {
  const knowledge = getKnowledgeContext(userMessage);
  return `${BASE_PROMPT}

<knowledge>
${knowledge}
</knowledge>`;
}

/**
 * The API requires the first message to be from the user and roles to
 * alternate strictly.
 */
function buildMessages(history, userMessage) {
  const question = String(userMessage || "").trim();

  const turns = history
    .slice(-MAX_HISTORY)
    .map((h) => ({
      role: h.sender === "user" ? "user" : "assistant",
      content: String(h.message || "").trim(),
    }))
    .filter((m) => m.content && !isNoise(m.content))
    // Strip the trailing "Did this answer your question?" the bot appends.
    .map((m) => ({
      ...m,
      content: m.content.replace(/\n+Did this answer your question\?\s*$/i, "").trim(),
    }))
    .filter((m) => m.content);

  turns.push({ role: "user", content: question });

  // Drop any assistant turns before the first user turn.
  const firstUser = turns.findIndex((m) => m.role === "user");
  const trimmed = firstUser === -1 ? [] : turns.slice(firstUser);

  // Merge runs of the same role.
  const merged = [];
  for (const turn of trimmed) {
    const last = merged[merged.length - 1];
    if (last && last.role === turn.role) {
      if (last.content !== turn.content) last.content += `\n${turn.content}`;
    } else {
      merged.push({ ...turn });
    }
  }

  if (merged.length && merged[merged.length - 1].role !== "user") {
    merged.push({ role: "user", content: question });
  }

  return merged;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callOnce(system, messages) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 400, system, messages }),
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @returns {{resolved: boolean, reply: string|null, reason?: string}}
 * `reason` is for logs only and is never shown to the user.
 */
async function getAIAnswer(userMessage, history = []) {
  if (!process.env.ANTHROPIC_API_KEY) {
    log.error("ai.config", { missing: "ANTHROPIC_API_KEY" });
    return { resolved: false, reply: null, reason: "missing_api_key" };
  }

  const messages = buildMessages(history, userMessage);
  if (!messages.length) {
    return { resolved: false, reply: null, reason: "empty_message" };
  }

  const system = buildSystemPrompt(userMessage);

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await callOnce(system, messages);

      if (!res.ok) {
        const body = await res.text().catch(() => "");
        const transient = res.status === 429 || res.status >= 500;

        log[transient ? "warn" : "error"]("ai.http", {
          status: res.status,
          attempt,
          // A malformed request, a bad key, an unknown model and an exhausted
          // credit balance all arrive here and need opposite fixes.
          body: body.slice(0, 300),
        });

        if (transient && attempt < MAX_ATTEMPTS) {
          await sleep(400 * attempt * attempt); // 400ms, 1600ms
          continue;
        }
        return { resolved: false, reply: null, reason: `http_${res.status}` };
      }

      const data = await res.json();
      const text = data?.content?.find((c) => c.type === "text")?.text?.trim();

      if (!text) {
        log.warn("ai.empty", { note: "response contained no text block" });
        return { resolved: false, reply: null, reason: "empty_response" };
      }

      if (text.startsWith("ESCALATE_TO_HUMAN")) {
        return {
          resolved: false,
          reply: null,
          reason: "model_escalated",
          escalationNote: text.replace("ESCALATE_TO_HUMAN", "").trim().slice(0, 200),
        };
      }

      return { resolved: true, reply: text };
    } catch (err) {
      const aborted = err.name === "AbortError";
      log.error(aborted ? "ai.timeout" : "ai.network", {
        attempt,
        ms: aborted ? TIMEOUT_MS : undefined,
        error: err.message,
      });
      if (attempt < MAX_ATTEMPTS) {
        await sleep(400 * attempt);
        continue;
      }
      return { resolved: false, reply: null, reason: aborted ? "timeout" : "network_error" };
    }
  }

  return { resolved: false, reply: null, reason: "exhausted" };
}

module.exports = { getAIAnswer, buildMessages, buildSystemPrompt };