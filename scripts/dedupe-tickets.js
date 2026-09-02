const fs = require("fs");
const path = require("path");

function loadEnv() {
  const root = path.resolve(__dirname, "..");
  for (const name of [".env.local", ".env.development.local", ".env"]) {
    const file = path.join(root, name);
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!m) continue;                       // blank line or comment
      if (process.env[m[1]] !== undefined) continue; // real env always wins
      let value = m[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[m[1]] = value;
    }
  }
}

function requireFirst(candidates) {
  for (const rel of candidates) {
    try {
      return require(rel);
    } catch (err) {
      if (err.code !== "MODULE_NOT_FOUND" || !err.message.includes(rel)) throw err;
    }
  }
  throw new Error(
    `Could not find ${candidates[0]}. Run this from the project root, or fix the ` +
      `path if your models live somewhere other than ./models or ./src/models.`
  );
}

loadEnv();

const { Ticket, TicketMessage, sequelize, ensureSynced } = requireFirst([
  "../models",
  "../src/models",
]);
const { makeDedupeKey } = requireFirst(["../lib/ticketing", "../src/lib/ticketing"]);

const APPLY = process.argv.includes("--apply");

async function main() {
  if (!process.env.DATABASE_URL && !process.env.DB_NAME && !process.env.PGDATABASE) {
    console.warn(
      "No database env vars were found in .env.local / .env — if the connection " +
        "fails, check that this script is being run from the project root."
    );
  }
  console.log(APPLY ? "Mode: APPLY (changes will be written)" : "Mode: dry run (no changes)");

  await ensureSynced();

  const tickets = await Ticket.findAll({ order: [["createdAt", "ASC"]] });
  const groups = new Map();

  for (const t of tickets) {
    const key = makeDedupeKey(t.sessionId, t.message);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(t);
  }

  let merged = 0;
  let backfilled = 0;

  for (const [key, group] of groups) {
    const [keep, ...dupes] = group;
    const live = !["closed"].includes(keep.status);

    if (dupes.length) {
      console.log(
        `${dupes.length} duplicate(s) of ${keep.ticketNumber}: ${dupes.map((d) => d.ticketNumber).join(", ")}`
      );
    }

    if (!APPLY) {
      merged += dupes.length;
      continue;
    }

    await sequelize.transaction(async (tx) => {
      for (const dupe of dupes) {
        await TicketMessage.update(
          { ticketId: keep.id },
          { where: { ticketId: dupe.id }, transaction: tx }
        );
        await TicketMessage.create(
          {
            ticketId: keep.id,
            author: "system",
            authorName: "System",
            body: `Merged duplicate ticket ${dupe.ticketNumber}`,
            internal: true,
          },
          { transaction: tx }
        );
        dupe.status = "closed";
        dupe.dedupeKey = null;
        await dupe.save({ transaction: tx });
        merged++;
      }

      keep.dedupeKey = live ? key : null;
      await keep.save({ transaction: tx });
      backfilled++;
    });
  }

  console.log(
    APPLY
      ? `Done. ${merged} duplicate ticket(s) merged, ${backfilled} fingerprint(s) written.`
      : `Dry run. ${merged} duplicate ticket(s) would be merged. Re-run with --apply.`
  );
  await sequelize.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});