import { Resend } from "resend";
import { siteConfig } from "@/src/content/home";
import { formatDateFr } from "@/src/lib/dates";

// Emails du service de rappel de recyclage (confirmation d'inscription et rappel).

export type RappelEmailData = {
  id: string;
  email: string;
  libelle: string;
  echeance: string;
  dateRappel: string;
};

function siteUrl(): string {
  return (process.env.SITE_URL || siteConfig.url).replace(/\/$/, "");
}

export function annulationUrl(id: string): string {
  return `${siteUrl()}/outils/calculateur-recyclage/annuler/?jeton=${encodeURIComponent(id)}`;
}

function sender(): string {
  return `SECURIFORM Collectivités <${process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev"}>`;
}

async function send(to: string, subject: string, lines: string[], id: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : impossible d'envoyer l'email de rappel.");
    return false;
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: sender(),
    to,
    subject,
    text: lines.join("\n"),
    headers: { "List-Unsubscribe": `<${annulationUrl(id)}>` },
  });

  if (error) {
    console.error("Échec d'envoi de l'email de rappel via Resend :", error);
    return false;
  }
  return true;
}

export function envoyerConfirmation(data: RappelEmailData): Promise<boolean> {
  return send(
    data.email,
    `Rappel de recyclage enregistré : ${data.libelle}`,
    [
      "Bonjour,",
      "",
      `Votre rappel de recyclage pour « ${data.libelle} » est bien enregistré.`,
      "",
      `Échéance estimée : ${formatDateFr(data.echeance)}`,
      `Nous vous enverrons un email de rappel le ${formatDateFr(data.dateRappel)}.`,
      "",
      "Vous n'avez rien d'autre à faire. Votre adresse ne sera utilisée que pour ce rappel, puis supprimée.",
      "",
      `Pour annuler ce rappel à tout moment : ${annulationUrl(data.id)}`,
      "",
      "SECURIFORM Collectivités",
      siteUrl(),
    ],
    data.id,
  );
}

export function envoyerRappel(data: RappelEmailData): Promise<boolean> {
  return send(
    data.email,
    `Recyclage à prévoir : ${data.libelle}`,
    [
      "Bonjour,",
      "",
      `Comme demandé, nous vous rappelons que la formation « ${data.libelle} » arrive à échéance le ${formatDateFr(data.echeance)}.`,
      "",
      "Pensez à programmer le recyclage de vos agents dès maintenant pour éviter toute interruption.",
      `Demander un devis : ${siteUrl()}/contact/?formation=${encodeURIComponent(data.libelle)}#formulaire`,
      "",
      "Ce rappel était unique : votre adresse sera supprimée de notre base à la date d'échéance.",
      `Pour la supprimer dès maintenant : ${annulationUrl(data.id)}`,
      "",
      "SECURIFORM Collectivités",
      siteUrl(),
    ],
    data.id,
  );
}
