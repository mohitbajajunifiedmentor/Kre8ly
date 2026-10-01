// lib/conversationState.js
//
// The chat needs to remember one thing between turns: "I asked this user for a
// contact number, and I'm waiting for it." Without that, the bot asks for a
// number and then treats the number as a brand-new question.
//
// Same in-memory approach as lib/rateLimit.js, for consistency with the
// existing codebase. Single instance only — on multiple servers or serverless
// with cold starts, move this to Redis (Upstash) with the same interface.
//
// A cold start loses pending state. That is handled gracefully: the route falls
// back to treating the message as a normal question rather than hanging, so the
// worst case is one repeated prompt, never a stuck conversation.

const STATE_TTL_MS = 30 * 60 * 1000; // 30 minutes
const MAX_SESSIONS = 5000; // hard cap so a burst cannot grow this unbounded

const store = new Map(); // sessionId -> { data, expiresAt }

function prune() {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (entry.expiresAt <= now) store.delete(key);
  }
  // Still too big after pruning: drop the oldest insertions.
  if (store.size > MAX_SESSIONS) {
    const excess = store.size - MAX_SESSIONS;
    let i = 0;
    for (const key of store.keys()) {
      if (i++ >= excess) break;
      store.delete(key);
    }
  }
}

function getState(sessionId) {
  if (!sessionId) return null;
  const entry = store.get(sessionId);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    store.delete(sessionId);
    return null;
  }
  return entry.data;
}

function setState(sessionId, data) {
  if (!sessionId) return;
  prune();
  store.set(sessionId, { data, expiresAt: Date.now() + STATE_TTL_MS });
}

function clearState(sessionId) {
  store.delete(sessionId);
}

module.exports = { getState, setState, clearState, STATE_TTL_MS };