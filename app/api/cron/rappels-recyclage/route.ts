import { todayInFrance } from "@/src/lib/dates";
import { sql } from "@/src/lib/db";
import { envoyerRappel } from "@/src/lib/rappel-emails";

// Tâche quotidienne (voir vercel.json) :
// 1. envoie les rappels dont la date est arrivée et les marque comme envoyés ;
// 2. purge les inscriptions dont l'échéance est dépassée.
// Vercel appelle cette route avec l'en-tête « Authorization: Bearer <CRON_SECRET> ».

const LOT_MAX = 200;

type RappelRow = {
  id: string;
  email: string;
  libelle: string;
  echeance: string;
  date_rappel: string;
};

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ error: "Non autorisé" }, { status: 401 });
  }

  const db = sql();
  const today = todayInFrance();

  const aEnvoyer = (await db`
    SELECT id, email, libelle, echeance, date_rappel FROM rappels_recyclage
    WHERE sent_at IS NULL AND date_rappel <= ${today} AND echeance >= ${today}
    ORDER BY date_rappel
    LIMIT ${LOT_MAX}`) as RappelRow[];

  let envoyes = 0;
  let echecs = 0;
  for (const row of aEnvoyer) {
    const ok = await envoyerRappel({
      id: row.id,
      email: row.email,
      libelle: row.libelle,
      echeance: row.echeance,
      dateRappel: row.date_rappel,
    });
    if (ok) {
      await db`UPDATE rappels_recyclage SET sent_at = ${new Date().toISOString()} WHERE id = ${row.id}`;
      envoyes++;
    } else {
      // Laissé tel quel : nouvelle tentative au prochain passage.
      echecs++;
    }
  }

  const purges = await db`DELETE FROM rappels_recyclage WHERE echeance < ${today} RETURNING id`;

  const bilan = { date: today, envoyes, echecs, purges: purges.length };
  console.log("Cron rappels de recyclage :", bilan);
  return Response.json(bilan);
}
