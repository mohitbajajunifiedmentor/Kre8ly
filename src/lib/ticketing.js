// lib/ticketing.js
const crypto = require("crypto");
const { Op } = require("sequelize");

/**
 * Human-readable ticket numbers: TKT-2026-000123.
 *
 * The database `id` is deliberately never exposed. Sequential integers in a URL
 * invite enumeration and leak how many tickets the business has.
 */
async function generateTicketNumber(Ticket) {
  const year = new Date().getFullYear();
  const prefix = `TKT-${year}-`;

  // Highest number issued this year. Counting rows would be wrong: deletions
  // would make the counter go backwards and collide.
  const last = await Ticket.findOne({
    where: { ticketNumber: { [Op.like]: `${prefix}%` } },
    order: [["ticketNumber", "DESC"]],
    attributes: ["ticketNumber"],
  });

  const lastSeq = last ? parseInt(last.ticketNumber.slice(prefix.length), 10) : 0;
  return `${prefix}${String((Number.isFinite(lastSeq) ? lastSeq : 0) + 1).padStart(6, "0")}`;
}

/** Unguessable per-ticket read key (see the accessToken column on Ticket). */
function generateAccessToken() {
  return crypto.randomBytes(24).toString("hex");
}

/**
 * Stable fingerprint of "this session asking this thing".
 *
 * The old duplicate guard was a findOne() followed by a create(). Two requests
 * arriving together (double tap on Send, or a retry after a timeout) both saw
 * "no existing ticket" and both created one — the check and the write were not
 * atomic. The fingerprint is now a UNIQUE column, so the database itself
 * refuses the second insert and we hand back the first ticket.
 */
function makeDedupeKey(sessionId, message) {
  const norm = String(message || "").toLowerCase().replace(/\s+/g, " ").trim().slice(0, 300);
  return crypto.createHash("sha256").update(`${sessionId}|${norm}`).digest("hex").slice(0, 48);
}

function isUniqueViolation(err, field) {
  if (err?.name !== "SequelizeUniqueConstraintError") return false;
  if (!field) return true;
  const fields = Object.keys(err.fields || {});
  return fields.includes(field) || String(err.parent?.detail || "").includes(field);
}

/**
 * Create a ticket, surviving both collision types:
 *   - ticketNumber taken (two tickets created in the same millisecond) -> retry
 *     with a freshly computed number
 *   - dedupeKey taken (the same question already has an open ticket) -> return
 *     the existing ticket, marked as a duplicate
 *
 * @returns {{ticket: object, duplicate: boolean}}
 */
async function createTicketRecord(Ticket, data, { attempts = 5 } = {}) {
  let dedupeKey = makeDedupeKey(data.sessionId, data.message);

  for (let i = 0; i < attempts; i++) {
    const ticketNumber = await generateTicketNumber(Ticket);
    try {
      const ticket = await Ticket.create({
        ...data,
        ticketNumber,
        accessToken: generateAccessToken(),
        dedupeKey,
      });
      return { ticket, duplicate: false };
    } catch (err) {
      if (isUniqueViolation(err, "dedupeKey")) {
        const existing = await Ticket.findOne({ where: { dedupeKey } });
        // Only a LIVE ticket is a duplicate. If the earlier one is closed the
        // user is entitled to raise the question again, so the key is salted
        // and the insert retried — otherwise a closed ticket would block that
        // session from ever reporting the same problem twice.
        if (existing && existing.status !== "closed") {
          return { ticket: existing, duplicate: true };
        }
        if (existing) {
          dedupeKey = makeDedupeKey(data.sessionId, `${data.message}#${Date.now()}`);
          continue;
        }
      }
      if (isUniqueViolation(err, "ticketNumber")) {
        continue; // someone else took this number; compute the next one
      }
      throw err;
    }
  }
  throw new Error("Could not allocate a ticket number after several attempts");
}

/**
 * Constant-time compare, so an attacker cannot narrow a token down by measuring
 * how long a wrong guess takes to be rejected.
 */
function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

/* ───────────────────────── support / agent authorisation ─────────────────── */
//
// The admin console used to keep the raw SUPPORT_ADMIN_KEY in sessionStorage
// and attach it to every request. Any script on the page — or anyone with the
// laptop open — could read the master key for the whole support system.
//
// The key is now exchanged once at /api/support/login for a signed, expiring
// session cookie that JavaScript cannot read (httpOnly). The raw header is
// still accepted so scripts, curl and internal tools keep working.

const SESSION_COOKIE = "k8_support";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function signSupportSession(expiresAt) {
  const secret = process.env.SUPPORT_ADMIN_KEY || "";
  return crypto.createHmac("sha256", secret).update(String(expiresAt)).digest("hex");
}

function createSupportSession() {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  return { value: `${expiresAt}.${signSupportSession(expiresAt)}`, maxAge: SESSION_TTL_MS / 1000 };
}

function verifySupportSession(value) {
  if (!value || !process.env.SUPPORT_ADMIN_KEY) return false;
  const [expiresAt, sig] = String(value).split(".");
  if (!expiresAt || !sig) return false;
  if (Number(expiresAt) < Date.now()) return false;
  return safeEqual(sig, signSupportSession(expiresAt));
}

function readCookie(req, name) {
  // NextRequest exposes .cookies; a plain Request only has the raw header.
  const fromApi = req.cookies?.get?.(name)?.value;
  if (fromApi) return fromApi;
  const raw = req.headers?.get?.("cookie") || "";
  const hit = raw.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
  return hit ? decodeURIComponent(hit.slice(name.length + 1)) : null;
}

/**
 * @returns {{ok: boolean, reason: string}}
 *
 * The reason matters: "bad/missing key" was logged for two completely different
 * faults — the server having no key configured, and the browser sending the
 * wrong one — and they need opposite fixes.
 */
function supportAuth(req) {
  const expected = process.env.SUPPORT_ADMIN_KEY;
  if (!expected) return { ok: false, reason: "server_key_not_configured" };

  const cookie = readCookie(req, SESSION_COOKIE);
  if (cookie) {
    if (verifySupportSession(cookie)) return { ok: true, reason: "cookie_session" };
    return { ok: false, reason: "session_expired_or_invalid" };
  }

  const provided = req.headers?.get?.("x-support-key") || "";
  if (!provided) return { ok: false, reason: "no_session_and_no_header" };

  if (!safeEqual(provided, expected)) {
    return {
      // Lengths only — never the key itself, and never enough to brute-force.
      ok: false,
      reason: `key_mismatch (sent ${provided.length} chars, expected ${expected.length})`,
    };
  }
  return { ok: true, reason: "header_key" };
}

/** Boolean wrapper, kept so existing call sites do not change. */
function isSupportRequest(req) {
  return supportAuth(req).ok;
}

/** Never let internal notes, dedupe keys or the access token reach a user. */
function publicTicket(ticket) {
  return {
    ticketNumber: ticket.ticketNumber,
    subject: ticket.subject,
    status: ticket.status,
    priority: ticket.priority,
    createdAt: ticket.createdAt,
    updatedAt: ticket.updatedAt,
    assignedTo: ticket.assignedTo || null,
  };
}

module.exports = {
  generateTicketNumber,
  generateAccessToken,
  createTicketRecord,
  makeDedupeKey,
  safeEqual,
  isSupportRequest,
  supportAuth,
  publicTicket,
  createSupportSession,
  verifySupportSession,
  SESSION_COOKIE,
  SESSION_TTL_MS,
};