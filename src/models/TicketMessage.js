// models/TicketMessage.js
const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

/**
 * One entry in a ticket's conversation thread.
 *
 * Previously a ticket held only the single message that triggered it, so once
 * it was created neither side could add anything — the user could not follow
 * up and the support team had nowhere to reply.
 */
const TicketMessage = sequelize.define(
  "TicketMessage",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ticketId: { type: DataTypes.INTEGER, allowNull: false },

    // `system` records lifecycle events (status changes, assignment) so the
    // thread reads as a single chronological history.
    author: {
      type: DataTypes.ENUM("user", "ai", "support", "system"),
      allowNull: false,
    },
    authorName: { type: DataTypes.STRING(120), allowNull: true },
    body: { type: DataTypes.TEXT, allowNull: false },

    // Agent-only notes never leave the admin API.
    internal: { type: DataTypes.BOOLEAN, defaultValue: false },
  },
  {
    tableName: "ticket_messages",
    timestamps: true,
    // The thread is always read as "this ticket, oldest first", so the two
    // single-column indexes are replaced by the composite one that query can
    // actually use.
    indexes: [{ fields: ["ticketId", "createdAt"] }],
  }
);

module.exports = TicketMessage;