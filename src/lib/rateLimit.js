// lib/rateLimit.js
// Simple in-memory rate limiter (single-instance ke liye theek hai).
// Production me multiple servers/serverless ho to Redis (e.g. Upstash) use karein.

const requestLog = new Map(); // ip -> [timestamps]

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 15; // per window

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

module.exports = { isRateLimited };
