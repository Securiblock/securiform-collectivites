// Applique db/schema.sql sur la base DATABASE_URL (idempotent : relançable sans risque).
// Usage : npm run db:migrate
import { readFile } from "node:fs/promises";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL manquante : ajoutez-la dans .env.local.");
  process.exit(1);
}

const sql = neon(url);
const schema = await readFile(new URL("../db/schema.sql", import.meta.url), "utf8");

const statements = schema
  .split("\n")
  .filter((line) => !line.trim().startsWith("--"))
  .join("\n")
  .split(";")
  .map((statement) => statement.trim())
  .filter(Boolean);

for (const statement of statements) {
  await sql.query(statement);
  console.log(`✓ ${statement.split("\n")[0]}`);
}

const [{ count }] = await sql.query("SELECT count(*)::int AS count FROM rappels_recyclage");
console.log(`Table rappels_recyclage prête (${count} ligne(s)).`);
