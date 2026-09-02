// models/Ticket.js
const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const Ticket = sequelize.define(
  "Ticket",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    // Human-readable public identifier, e.g. TKT-2026-000123.
    // The numeric `id` is never exposed in URLs or to the user.
    ticketNumber: { type: DataTypes.STRING(24), allowNull: false, unique: true },

    // Unguessable per-ticket key. The chat is anonymous — there is no login to
    // tie a ticket to — so this is what authorises a user to read their own
    // ticket. Without it, /support/tickets/TKT-2026-000123 would be a trivial
    // IDOR: increment the number, read someone else's name, email and phone.
    accessToken: { type: DataTypes.STRING(64), allowNull: false },

    /**
     * DUPLICATE PREVENTION, enforced by the database rather than by a
     * read-then-write check in the route.
     *
     * sha256(sessionId + normalised message). While a ticket is live this
     * column is UNIQUE, so a double-tapped Send button, a retried request or
     * two browser tabs cannot produce two rows for the same complaint — the
     * second INSERT is rejected and the route returns the first ticket.
     *
     * It is nulled when a ticket is closed (Postgres allows many NULLs in a
     * unique index), so the same person can legitimately raise the same issue
     * again months later.
     */
    dedupeKey: { type: DataTypes.STRING(64), allowNull: true, unique: true },

    sessionId: { type: DataTypes.STRING, allowNull: false },

    // Contact details, collected before the ticket is created.
    userName: { type: DataTypes.STRING(120), allowNull: true },
    userEmail: { type: DataTypes.STRING, allowNull: true },
    userPhone: { type: DataTypes.STRING(15), allowNull: true },

    subject: { type: DataTypes.STRING(200), allowNull: true },
    message: { type: DataTypes.TEXT, allowNull: false },

    // What the bot had already answered before escalating — saves the agent
    // from repeating an answer the user has already seen and rejected.
    aiAnswer: { type: DataTypes.TEXT, allowNull: true },
    escalationReason: { type: DataTypes.STRING(120), allowNull: true },

    status: {
      type: DataTypes.ENUM("open", "in_progress", "waiting_for_user", "resolved", "closed"),
      defaultValue: "open",
    },
    priority: {
      type: DataTypes.ENUM("low", "medium", "high", "urgent"),
      defaultValue: "medium",
    },
    resolvedBy: {
      type: DataTypes.ENUM("faq", "ai", "human"),
      allowNull: true, // stays null until someone actually resolves it
    },
    assignedTo: { type: DataTypes.STRING, allowNull: true },

    /* SLA / triage timestamps — these are what the ops dashboard sorts and
       colours by. Without them "which ticket has been ignored longest?" cannot
       be answered, because updatedAt also moves on internal notes. */
    firstResponseAt: { type: DataTypes.DATE, allowNull: true },
    resolvedAt: { type: DataTypes.DATE, allowNull: true },
    // When an agent last opened the ticket — drives the "new" badge in ops.
    agentSeenAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "tickets",
    timestamps: true,
    indexes: [
      { fields: ["status"] },
      { fields: ["priority"] },
      { fields: ["sessionId"] },
      { unique: true, fields: ["ticketNumber"] },
      { unique: true, fields: ["dedupeKey"] },
      { fields: ["userEmail"] },
      { fields: ["assignedTo"] },
      // The ops list is always "newest first, filtered by status".
      { fields: ["status", "createdAt"] },
      { fields: ["createdAt"] },
    ],
  }
);

module.exports = Ticket;