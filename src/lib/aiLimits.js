// lib/aiLimits.js
//
// Abuse and cost controls for the AI fallback.
//
// The chat endpoint is public and unauthenticated, so without this a single
// script can spend the whole OpenAI budget in minutes. Every limit is driven by
// env vars and every one can be turned off.
//
// Storage is in-memory, matching lib/rateLimit.js. That is correct for a single
// instance. On multiple instances or serverless, each process keeps its own
// counters, so the effective limit is multiplied by the number of processes —
// move `buckets` to Redis with the same interface if that happens.

const bool = (v, dflt) => (v === undefined ? dflt : String(v).toLowerCase() === "true");
const num = (v, dflt) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : dflt;
};

const CONFIG = {
  enabled: bool(process.env.AI_RATE_LIMIT_ENABLED, true),

  ipPerMinute: num(process.env.AI_IP_MINUTE_REQUEST_LIMIT, 5),
  ipPerDay: num(process.env.AI_IP_DAILY_REQUEST_LIMIT, 50),

  ipTokensPerDay: num(process.env.AI_IP_DAILY_TOKEN_LIMIT, 20000),
  userTokensPerDay: num(process.env.AI_USER_DAILY_TOKEN_LIMIT, 40000),

  maxInputChars: num(process.env.AI_MAX_INPUT_CHARACTERS, 3000),
  maxOutputTokens: num(process.env.AI_MAX_OUTPUT_TOKENS, 500),

  faqRestriction: bool(process.env.AI_FAQ_RESTRICTION_ENABLED, true),
  relevanceThreshold: parseFloat(process.env.AI_RELEVANCE_THRESHOLD) || 0.75,
};

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;
const MAX_KEYS = 20000; // hard cap so a spoofed-IP flood cannot grow this forever

/** key -> { minuteHits: number[], dayHits: number[], tokens: [{t, n}] } */
const buckets = new Map();

function bucket(key) {
  let b = buckets.get(key);
  if (!b) {
    if (buckets.size >= MAX_KEYS) prune(true);
    b = { minuteHits: [], dayHits: [], tokens: [] };
    buckets.set(key, b);
  }
  return b;
}

function prune(force = false) {
  const now = Date.now();
  for (const [key, b] of buckets) {
    b.minuteHits = b.minuteHits.filter((t) => now - t < MINUTE);
    b.dayHits = b.dayHits.filter((t) => now - t < DAY);
    b.tokens = b.tokens.filter((x) => now - x.t < DAY);
    if (!b.minuteHits.length && !b.dayHits.length && !b.tokens.length) {
      buckets.delete(key);
    }
  }
  // Still oversized after pruning: drop oldest insertions.
  if (force && buckets.size >= MAX_KEYS) {
    let drop = buckets.size - Math.floor(MAX_KEYS * 0.8);
    for (const key of buckets.keys()) {
      if (drop-- <= 0) break;
      buckets.delete(key);
    }
  }
}

function tokensUsed(b) {
  const now = Date.now();
  return b.tokens.reduce((sum, x) => (now - x.t < DAY ? sum + x.n : sum), 0);
}

/**
 * Is this question even about Kre8ly?
 *
 * Returns the share of the user's meaningful words that appear anywhere in the
 * FAQ vocabulary. "How do I reset my password?" scores high; "write me a poem
 * about the sea" scores ~0. This is a cheap topical gate, not a quality score —
 * its only job is to stop the endpoint being used as a free general-purpose
 * chatbot.
 *
 * @param {string[]} tokens   meaningful words from the question
 * @param {Set<string>} vocab every keyword indexed across the FAQ
 */
function relevanceScore(tokens, vocab) {
  if (!tokens.length) return 0;
  let hits = 0;
  for (const t of tokens) if (vocab.has(t)) hits++;
  return hits / tokens.length;
}

/**
 * Checked BEFORE the AI request is made.
 *
 * @returns {{ok: boolean, reason?: string, retryAfter?: number, relevance?: number}}
 */
function checkAiAllowed({ ip, userId, text, tokens = [], vocab = null }) {
  if (!CONFIG.enabled) return { ok: true };

  // --- per-request size -----------------------------------------------
  const len = String(text || "").length;
  if (len > CONFIG.maxInputChars) {
    return { ok: false, reason: "input_too_long", limit: CONFIG.maxInputChars, actual: len };
  }

  // --- topical gate ----------------------------------------------------
  // Runs before the counters so an off-topic question does not consume the
  // user's daily quota.
  let relevance;
  if (CONFIG.faqRestriction && vocab && tokens.length) {
    relevance = relevanceScore(tokens, vocab);
    if (relevance < CONFIG.relevanceThreshold) {
      return { ok: false, reason: "off_topic", relevance };
    }
  }

  prune();
  const now = Date.now();
  const ipKey = `ip:${ip || "unknown"}`;
  const b = bucket(ipKey);

  // --- request counts --------------------------------------------------
  const inMinute = b.minuteHits.filter((t) => now - t < MINUTE).length;
  if (CONFIG.ipPerMinute && inMinute >= CONFIG.ipPerMinute) {
    const oldest = Math.min(...b.minuteHits);
    return {
      ok: false,
      reason: "ip_minute_limit",
      retryAfter: Math.ceil((MINUTE - (now - oldest)) / 1000),
    };
  }

  const inDay = b.dayHits.filter((t) => now - t < DAY).length;
  if (CONFIG.ipPerDay && inDay >= CONFIG.ipPerDay) {
    return { ok: false, reason: "ip_daily_limit" };
  }

  // --- token budgets ---------------------------------------------------
  // Checked against what has already been spent. A single request cannot be
  // pre-counted because the real cost is only known once OpenAI replies, so
  // the budget can overshoot by at most one request. That is deliberate:
  // reserving a worst-case amount up front would reject users who still had
  // room.
  if (CONFIG.ipTokensPerDay && tokensUsed(b) >= CONFIG.ipTokensPerDay) {
    return { ok: false, reason: "ip_token_limit" };
  }

  if (userId && CONFIG.userTokensPerDay) {
    const ub = bucket(`user:${userId}`);
    if (tokensUsed(ub) >= CONFIG.userTokensPerDay) {
      return { ok: false, reason: "user_token_limit" };
    }
  }

  // Count the request only once it is actually going to be made.
  b.minuteHits.push(now);
  b.dayHits.push(now);

  return { ok: true, relevance };
}

/** Called AFTER the AI replies, with the usage OpenAI reported. */
function recordAiUsage({ ip, userId, totalTokens }) {
  if (!CONFIG.enabled || !totalTokens) return;
  const now = Date.now();
  bucket(`ip:${ip || "unknown"}`).tokens.push({ t: now, n: totalTokens });
  if (userId) bucket(`user:${userId}`).tokens.push({ t: now, n: totalTokens });
}

/** For the admin/debug view — never shown to an end user. */
function aiUsageSnapshot({ ip, userId }) {
  const now = Date.now();
  const ipB = buckets.get(`ip:${ip || "unknown"}`);
  const userB = userId ? buckets.get(`user:${userId}`) : null;
  return {
    config: CONFIG,
    ip: ipB
      ? {
          requestsThisMinute: ipB.minuteHits.filter((t) => now - t < MINUTE).length,
          requestsToday: ipB.dayHits.filter((t) => now - t < DAY).length,
          tokensToday: tokensUsed(ipB),
        }
      : null,
    user: userB ? { tokensToday: tokensUsed(userB) } : null,
    trackedKeys: buckets.size,
  };
}

/** User-facing copy. Never leaks a raw limit name or a number the user cannot act on. */
function limitMessage(reason, info = {}) {
  switch (reason) {
    case "input_too_long":
      return `That message is a bit long for me to process. Please shorten it to under ${info.limit || CONFIG.maxInputChars} characters, or connect with our support team.`;
    case "off_topic":
      return "I can only help with questions about Kre8ly — courses, fellowships, payments, certificates and your account. Could you rephrase your question, or would you like to talk to our support team?";
    case "ip_minute_limit":
      return `You are asking a little faster than I can keep up with. Please wait ${info.retryAfter || 30} seconds and try again.`;
    case "ip_daily_limit":
    case "ip_token_limit":
    case "user_token_limit":
      return "You have reached today's limit for AI answers. I can still help from our FAQ, or connect you with our support team.";
    default:
      return "I cannot use AI support for that right now. I can connect you with our support team instead.";
  }
}

module.exports = {
  CONFIG,
  checkAiAllowed,
  recordAiUsage,
  aiUsageSnapshot,
  relevanceScore,
  limitMessage,
};