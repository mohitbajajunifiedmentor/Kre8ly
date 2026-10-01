// lib/notifyOps.js
//
// This file was present twice in the codebase with identical contents. One copy
// only. Next.js route handlers are serverless-style, so the Socket.IO instance
// lives in this shared holder; server.js calls setSocketIO(io) at boot.
//
// Every emit is wrapped: a dead socket must never break a ticket write. The
// caller already has the ticket safely in the database by the time it gets here.

const OPS_ROOM = "ops";

let ioInstance = null;

function setSocketIO(io) {
  ioInstance = io;
}

function getSocketIO() {
  return ioInstance;
}

function emit(event, payload) {
  if (!ioInstance) {
    // Dev-only: without server.js wiring, ops sees updates on refresh instead
    // of instantly. Not an error — the data is already persisted.
    console.warn(`Socket.IO not initialised — "${event}" not pushed to ops`);
    return false;
  }
  try {
    ioInstance.to(OPS_ROOM).emit(event, payload);
    return true;
  } catch (err) {
    console.error(`Ops emit failed (non-fatal) for "${event}":`, err.message);
    return false;
  }
}

/** A brand new ticket. The console plays a sound and prepends the row. */
function notifyNewTicket(ticket) {
  return emit("new_ticket", ticket);
}

/** Status / priority / assignment changed. */
function notifyTicketUpdated(ticket) {
  return emit("ticket_updated", ticket);
}

/**
 * A new message on an existing ticket.
 *
 * This event did not exist, which is why a customer replying to their ticket
 * was invisible until an agent happened to reopen it. `author` lets the console
 * highlight customer replies and ignore its own.
 */
function notifyTicketMessage({ ticketNumber, author, authorName, preview, internal = false }) {
  return emit("ticket_message", {
    ticketNumber,
    author,
    authorName,
    preview: String(preview || "").slice(0, 140),
    internal,
    at: new Date().toISOString(),
  });
}

module.exports = {
  setSocketIO,
  getSocketIO,
  notifyNewTicket,
  notifyTicketUpdated,
  notifyTicketMessage,
  OPS_ROOM,
};