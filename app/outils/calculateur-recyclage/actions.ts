"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { findRecyclageFormation } from "@/src/content/recyclage";
import { HONEYPOT_FIELD } from "@/src/lib/anti-spam";
import { isIsoDate, todayInFrance } from "@/src/lib/dates";
import { sql } from "@/src/lib/db";
import { isRateLimited } from "@/src/lib/rate-limit";
import { calculerRecyclage } from "@/src/lib/recyclage";
import { envoyerConfirmation } from "@/src/lib/rappel-emails";

export type RappelFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const MAX_RAPPELS_PAR_EMAIL = 10;
const RATE_LIMITS = [
  { limit: 5, durationMs: 60 * 60_000 },
  { limit: 20, durationMs: 24 * 60 * 60_000 },
];

async function clientIp(): Promise<string> {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "inconnue"
  );
}

function error(message: string): RappelFormState {
  return { status: "error", message };
}

export async function inscrireRappel(_prev: RappelFormState, formData: FormData): Promise<RappelFormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const formationKey = String(formData.get("formation") ?? "");
  const dateFormation = String(formData.get("dateFormation") ?? "");
  const consentement = formData.get("consentement") === "oui";

  const success: RappelFormState = {
    status: "success",
    message: "C'est noté ! Un email de confirmation vient de vous être envoyé.",
  };

  // Robot détecté : fausse confirmation, rien n'est enregistré.
  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") {
    console.warn("Inscription au rappel ignorée (spam probable : champ piège rempli).");
    return success;
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return error("L'adresse email indiquée n'est pas valide.");
  }
  if (!consentement) {
    return error("Merci de cocher la case pour accepter de recevoir ce rappel par email.");
  }

  const formation = findRecyclageFormation(formationKey);
  const today = todayInFrance();
  if (!formation || !isIsoDate(dateFormation) || dateFormation > today) {
    return error("Merci de choisir une formation et une date de formation valides.");
  }

  // Calcul refait côté serveur : on ne se fie pas à celui du navigateur.
  const { echeance, dateRappel, statut } = calculerRecyclage(formation, dateFormation, today);
  if (statut === "expire") {
    return error("Cette formation est déjà arrivée à échéance : contactez-nous pour organiser le recyclage.");
  }

  if (isRateLimited(await clientIp(), RATE_LIMITS)) {
    return error("Trop de demandes en peu de temps. Merci de réessayer plus tard.");
  }

  try {
    const db = sql();

    const doublon = await db`
      SELECT id FROM rappels_recyclage
      WHERE email = ${email} AND formation = ${formation.key} AND date_formation = ${dateFormation} AND sent_at IS NULL
      LIMIT 1`;
    if (doublon.length > 0) {
      return { status: "success", message: "Ce rappel est déjà enregistré pour cette adresse : vous n'avez rien à refaire." };
    }

    const [{ total }] = await db`
      SELECT count(*)::int AS total FROM rappels_recyclage WHERE email = ${email} AND sent_at IS NULL`;
    if (total >= MAX_RAPPELS_PAR_EMAIL) {
      return error(`Cette adresse a déjà ${MAX_RAPPELS_PAR_EMAIL} rappels en attente. Annulez-en un avant d'en ajouter un nouveau.`);
    }

    const id = crypto.randomUUID();
    await db`
      INSERT INTO rappels_recyclage (id, email, formation, libelle, date_formation, echeance, date_rappel, created_at)
      VALUES (${id}, ${email}, ${formation.key}, ${formation.label}, ${dateFormation}, ${echeance}, ${dateRappel}, ${new Date().toISOString()})`;

    // Jamais d'adresse conservée sans confirmation reçue : si l'email ne part pas, on annule l'inscription.
    const envoye = await envoyerConfirmation({ id, email, libelle: formation.label, echeance, dateRappel });
    if (!envoye) {
      await db`DELETE FROM rappels_recyclage WHERE id = ${id}`;
      return error("L'email de confirmation n'a pas pu être envoyé : votre inscription n'a pas été enregistrée. Merci de réessayer.");
    }
  } catch (cause) {
    console.error("Erreur lors de l'inscription au rappel de recyclage :", cause);
    return error("Le service de rappel est momentanément indisponible. Merci de réessayer plus tard.");
  }

  return success;
}

export async function annulerRappel(formData: FormData): Promise<void> {
  const jeton = String(formData.get("jeton") ?? "");
  if (UUID_PATTERN.test(jeton)) {
    await sql()`DELETE FROM rappels_recyclage WHERE id = ${jeton}`;
  }
  redirect("/outils/calculateur-recyclage/annuler/?statut=annule");
}
