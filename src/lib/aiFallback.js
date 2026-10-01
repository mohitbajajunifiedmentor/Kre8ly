// lib/aiFallback.js
//
// AI fallback, used when the FAQ cannot answer a question — so a ticket is only
// raised when a human is genuinely needed.
//
// Provider: OpenAI (switched from Anthropic).
//
// Differences that actually matter when porting:
//   - auth is `Authorization: Bearer <key>`, not `x-api-key`
//   - there is no top-level `system` field; the system prompt is the first
//     message with role "system"
//   - the reply is at `choices[0].message.content`, not `content[].text`
//   - OpenAI does not require roles to alternate, but the merging below is kept
//     anyway: it stops a run of button clicks ("Use AI Support", "Try again")
//     from eating turns out of the history window

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
// Output cap. Lives in env because it is a cost control, not a design choice —
// see AI_MAX_OUTPUT_TOKENS in lib/aiLimits.js.
const MAX_OUTPUT_TOKENS = parseInt(process.env.AI_MAX_OUTPUT_TOKENS, 10) || 500;
const TIMEOUT_MS = 12000;
const MAX_HISTORY = 8;

const SYSTEM_PROMPT = `You are the customer support assistant for Kre8ly, an online education platform offering courses, fellowships and internships.

Rules:
- Answer only support and product questions about Kre8ly.
- Always reply in clear, natural, professional English, even if the question is asked in Hindi or Hinglish.
- Keep answers short: 2-3 sentences, or a few short steps.
- Never invent policies, prices, dates, account details or ticket information.
- If you are not confident, or the question is account-specific or sensitive
  (payment failures, personal data, bug reports), reply with exactly
  ESCALATE_TO_HUMAN followed by a short reason, and nothing else.`;

/**
 * Builds the message array. The system prompt is prepended here because OpenAI
 * carries it as a normal message rather than a separate field.
 */
function buildMessages(history, userMessage) {
  const turns = history
    .slice(-MAX_HISTORY)
    .map((h) => ({
      role: h.sender === "user" ? "user" : "assistant",
      content: String(h.message || "").trim(),
    }))
    .filter((m) => m.content);

  turns.push({ role: "user", content: String(userMessage || "").trim() });

  // Drop any assistant turns before the first user turn — they are the bot's
  // own greeting and carry no information the model needs.
  const firstUser = turns.findIndex((m) => m.role === "user");
  const trimmed = firstUser === -1 ? [] : turns.slice(firstUser);

  // Merge runs of the same role so a burst of button clicks does not consume
  // the history window.
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
    merged.push({ role: "user", content: String(userMessage || "").trim() });
  }

  return [{ role: "system", content: SYSTEM_PROMPT }, ...merged];
}

/**
 * @returns {{resolved: boolean, reply: string|null, reason?: string, permanent?: boolean}}
 *
 * `permanent` tells the caller whether retrying could ever succeed. A missing
 * key, a rejected key or an exhausted quota will fail identically on every
 * retry, so offering the user a "Try again" button for those is a loop they
 * cannot escape.
 */
async function getAIAnswer(userMessage, history = []) {
  if (!process.env.OPENAI_API_KEY) {
    console.error("[chat] ai    ERROR ai.config       missing=OPENAI_API_KEY");
    return { resolved: false, reply: null, reason: "missing_api_key", permanent: true };
  }

  const messages = buildMessages(history, userMessage);
  if (messages.length <= 1) {
    return { resolved: false, reply: null, reason: "empty_message", permanent: false };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        // Reasoning models (o3, o4-mini, gpt-5) reject `max_tokens` and want
        // `max_completion_tokens`, and ignore `temperature`. Those are the two
        // lines to change if you move to one.
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0.3, // support answers should be steady, not creative
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");

      // OpenAI returns 429 for two unrelated things: a temporary rate limit,
      // and a permanently exhausted quota. Only the body distinguishes them,
      // and treating the second as retryable is what produces a user stuck in
      // a "Try again" loop.
      const quotaExhausted =
        res.status === 429 && /insufficient_quota|exceeded your current quota/i.test(body);

      const permanent =
        quotaExhausted || [400, 401, 403, 404].includes(res.status);

      console.error(
        `[chat] ai    ERROR ai.http         status=${res.status} permanent=${permanent} body=${body.slice(0, 300)}`
      );

      return {
        resolved: false,
        reply: null,
        reason: quotaExhausted ? "quota_exhausted" : `http_${res.status}`,
        permanent,
      };
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      // A truncated reply is not an error status, so it has to be caught here.
      const finish = data?.choices?.[0]?.finish_reason;
      console.error(`[chat] ai    WARN  ai.empty        finish_reason=${finish || "-"}`);
      return { resolved: false, reply: null, reason: "empty_response", permanent: false };
    }

    // Token usage is reported back so lib/aiLimits.js can charge it against the
    // caller's daily budget. It is only known after the reply, which is why the
    // budget check before the call is a "have you already spent it?" test.
    const usage = {
      inputTokens: data?.usage?.prompt_tokens ?? 0,
      outputTokens: data?.usage?.completion_tokens ?? 0,
      totalTokens: data?.usage?.total_tokens ?? 0,
    };

    if (text.startsWith("ESCALATE_TO_HUMAN")) {
      // Still billed: the request was made and the tokens were spent.
      return { resolved: false, reply: null, reason: "model_escalated", permanent: false, usage };
    }

    return { resolved: true, reply: text, usage };
  } catch (err) {
    if (err.name === "AbortError") {
      console.error(`[chat] ai    ERROR ai.timeout      ms=${TIMEOUT_MS}`);
      return { resolved: false, reply: null, reason: "timeout", permanent: false };
    }
    console.error(`[chat] ai    ERROR ai.network      error=${err.message}`);
    return { resolved: false, reply: null, reason: "network_error", permanent: false };
  } finally {
    clearTimeout(timer);
  }
}

module.exports = { getAIAnswer, buildMessages };