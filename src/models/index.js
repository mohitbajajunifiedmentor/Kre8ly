// models/index.js
const sequelize = require("../lib/db");
const Ticket = require("./Ticket");
const ChatLog = require("./ChatLog");
const TicketMessage = require("./TicketMessage");

// Chat logs are linked to a ticket by sessionId, but this association MUST NOT
// create a real foreign key.
//
// `sync({ alter: true })` was emitting:
//   ALTER TABLE "chat_logs" ADD FOREIGN KEY ("sessionId")
//     REFERENCES "tickets" ("sessionId")
//   ERROR: there is no unique constraint matching given keys for referenced
//          table "tickets"   (SQLSTATE 42830)
//
// Postgres requires the referenced column to be UNIQUE, and tickets.sessionId
// cannot be: one visitor session may raise more than one ticket over time.
// Worse, a real FK would also be wrong in the other direction — most chat_logs
// rows belong to sessions that never produced a ticket at all, and the
// constraint would reject every one of them.
//
// `constraints: false` keeps the convenient `include` while leaving the
// database schema alone.
Ticket.hasMany(ChatLog, {
  foreignKey: "sessionId",
  sourceKey: "sessionId",
  as: "conversation",
  constraints: false,
});
ChatLog.belongsTo(Ticket, {
  foreignKey: "sessionId",
  targetKey: "sessionId",
  constraints: false,
});

Ticket.hasMany(TicketMessage, { foreignKey: "ticketId", as: "messages", onDelete: "CASCADE" });
TicketMessage.belongsTo(Ticket, { foreignKey: "ticketId" });

// `alter: true` adds the new columns (dedupeKey, firstResponseAt, resolvedAt,
// agentSeenAt) and the new indexes to an existing database without dropping
// data. For production, generate a real migration instead — alter-on-boot
// races when several instances start together, and the new UNIQUE index on
// dedupeKey will fail if duplicate rows already exist. Run
// scripts/dedupe-tickets.js FIRST on any database that has been live.
let syncPromise = null;

function ensureSynced() {
  if (!syncPromise) {
    syncPromise = sequelize
      .sync({ alter: process.env.NODE_ENV !== "production" })
      .then(() => console.log("DB synced: tickets, ticket_messages, chat_logs ready"))
      .catch((err) => {
        console.error("DB sync error:", err);
        syncPromise = null; // allow a retry on the next request
        throw err;
      });
  }
  return syncPromise;
}

// Kick it off at import so the common case is warm, but every route also
// awaits ensureSynced() before touching a table — the old fire-and-forget call
// meant the very first request could arrive before the tables existed.
ensureSynced().catch(() => {});

module.exports = { sequelize, Ticket, ChatLog, TicketMessage, ensureSynced };