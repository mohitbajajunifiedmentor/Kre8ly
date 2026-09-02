// lib/db.js
const { Sequelize } = require("sequelize");

// Next.js dev mode me hot-reload se multiple connections na banein,
// isliye global cache use karte hain.
const globalForDb = global;

const sequelize =
  globalForDb.sequelize ||
  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "localhost",
      storage: process.env.DB_STORAGE,
      dialect: process.env.DB_DIALECT || "postgres",
      logging: false,
    }
  );

if (process.env.NODE_ENV !== "production") {
  globalForDb.sequelize = sequelize;
}

module.exports = sequelize;