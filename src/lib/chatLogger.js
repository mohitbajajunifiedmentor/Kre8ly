// lib/chatLogger.js
//
// Structured logging for the chatbot only.
//
// Before this, the flow was almost impossible to debug from logs: you could
// see "POST /api/chat 200" and nothing about *why* the bot replied the way it
// did — which FAQ matched, how confident it was, what stage the conversation
// was in, or why a ticket was or was not created.
//
// Every line is one line, prefixed and tagged, so it greps cleanly:
//
//   [chat] a1b2c3 INFO  faq.hit         stage=- id=password band=high score=5.12
//   [chat] a1b2c3 WARN  ai.failed       reason=http_400 status=400
//   [chat] a1b2c3 INFO  ticket.created  ticket=TKT-2026-000004
//
// PII NEVER reaches the log. Emails and phone numbers are masked by `redact()`
// before anything is printed, because support logs are widely readable and a
// chat transcript is full of contact details.

const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };

const CONFIGURED =
  process.env.CHAT_LOG_LEVEL ||
  (process.env.NODE_ENV === "production" ? "info" : "debug");

const THRESHOLD = LEVELS[CONFIGURED] ?? LEVELS.info;

/** Mask anything that looks like a contact detail or a token. */
function redact(value) {
  if (value == null) return value;
  let s = String(value);

  // email -> ra****@gmail.com
  s = s.replace(
    /\b([A-Za-z0-9._%+-]{1,2})[A-Za-z0-9._%+-]*@([A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/g,
    "$1****@$2"
  );
  // 10-digit phone -> 98*****210
  s = s.replace(/\b(\d{2})\d{5}(\d{3})\b/g, "$1*****$2");
  // long hex strings are access tokens
  s = s.replace(/\b[a-f0-9]{24,}\b/gi, "<token>");

  return s;
}

function fmt(value) {
  if (value === null || value === undefined) return "-";
  if (typeof value === "object") return redact(JSON.stringify(value));
  return redact(value);
}

/**
 * One logger per request. `sessionId` is truncated: the full value is a UUID
 * that identifies a visitor, and the first six characters are enough to follow
 * a single conversation through the log.
 */
function createChatLogger(sessionId) {
  const tag = sessionId ? String(sessionId).slice(0, 6) : "------";

  const emit = (level, event, fields = {}) => {
    if (LEVELS[level] > THRESHOLD) return;

    const parts = Object.entries(fields)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${k}=${fmt(v)}`);

    const line = `[chat] ${tag} ${level.toUpperCase().padEnd(5)} ${String(event).padEnd(16)} ${parts.join(" ")}`;

    if (level === "error") console.error(line);
    else if (level === "warn") console.warn(line);
    else console.log(line);
  };

  return {
    debug: (event, fields) => emit("debug", event, fields),
    info: (event, fields) => emit("info", event, fields),
    warn: (event, fields) => emit("warn", event, fields),
    error: (event, fields) => emit("error", event, fields),

    /** Times a block and logs how long it took. */
    async time(event, fields, fn) {
      const started = Date.now();
      try {
        const result = await fn();
        emit("debug", event, { ...fields, ms: Date.now() - started });
        return result;
      } catch (err) {
        emit("error", event, {
          ...fields,
          ms: Date.now() - started,
          error: err.message,
        });
        throw err;
      }
    },
  };
}

module.exports = { createChatLogger, redact };