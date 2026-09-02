// models/ChatLog.js
const { DataTypes } = require("sequelize");
const sequelize = require("../lib/db");

const ChatLog = sequelize.define(
  "ChatLog",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sessionId: { type: DataTypes.STRING, allowNull: false },
    sender: { type: DataTypes.ENUM("user", "bot"), allowNull: false },
    message: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    tableName: "chat_logs",
    timestamps: true,
    // Every chat turn runs
    //   SELECT ... WHERE sessionId = ? ORDER BY createdAt DESC LIMIT 11
    // to build the AI's history. With no index that was a full table scan on a
    // table that grows by two rows per message, forever — the slowest thing in
    // the whole request once the table passed a few thousand rows.
    indexes: [{ fields: ["sessionId", "createdAt"] }],
  }
);

module.exports = ChatLog;