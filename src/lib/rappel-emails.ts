import { Resend } from "resend";
import { siteConfig } from "@/src/content/home";
import { daysBetween, formatDateFr, todayInFrance } from "@/src/lib/dates";
import { renderEmail, type EmailContent } from "@/src/lib/email-template";

// Emails du service de rappel de recyclage (confirmation d'inscription et rappel).
// Chaque email part en HTML (mise en page) et en texte brut (messageries sans HTML).

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

function devisUrl(libelle: string): string {
  return `${siteUrl()}/contact/?formation=${encodeURIComponent(libelle)}#formulaire`;
}

function sender(): string {
  return `SECURIFORM Collectivités <${process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev"}>`;
}

const contact = (): EmailContent["contact"] => ({
  phone: siteConfig.phone,
  email: siteConfig.email,
  address: `${siteConfig.address.streetAddress}, ${siteConfig.address.postalCode} ${siteConfig.address.addressLocality}`,
  siteUrl: siteUrl(),
});

function joursRestants(echeance: string): string {
  const jours = daysBetween(todayInFrance(), echeance);
  if (jours <= 0) return "Échéance aujourd'hui";
  if (jours === 1) return "Plus que 1 jour";
  return `Plus que ${jours} jours`;
}

async function send(to: string, subject: string, html: string, text: string[], id: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : impossible d'envoyer l'email de rappel.");
    return false;
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: sender(),
    to,
    subject,
    html,
    text: text.join("\n"),
    headers: { "List-Unsubscribe": `<${annulationUrl(id)}>` },
  });

  if (error) {
    console.error("Échec d'envoi de l'email de rappel via Resend :", error);
    return false;
  }
  return true;
}

export function confirmationEmail(data: RappelEmailData): { subject: string; html: string; text: string[] } {
  const echeance = formatDateFr(data.echeance);
  const rappel = formatDateFr(data.dateRappel);
  return {
    subject: `Rappel enregistré : ${data.libelle}`,
    html: renderEmail({
      preheader: `Nous vous préviendrons le ${rappel}, avant l'échéance du ${echeance}.`,
      eyebrow: "Rappel de recyclage",
      title: "Votre rappel est enregistré",
      intro: `Merci ! Nous vous enverrons un email avant que la formation « ${data.libelle} » n'arrive à échéance. Vous n'avez rien d'autre à faire.`,
      highlight: { label: "Échéance estimée", value: echeance },
      details: [
        { label: "Formation", value: data.libelle },
        { label: "Date du rappel", value: rappel },
      ],
      paragraphs: [
        "Votre adresse email ne sera utilisée que pour ce rappel, puis supprimée automatiquement à la date d'échéance.",
      ],
      footerNote: "Vous recevez cet email car vous avez demandé un rappel sur notre calculateur de recyclage.",
      unsubscribe: { label: "Annuler ce rappel", href: annulationUrl(data.id) },
      contact: contact(),
    }),
    text: [
      "Bonjour,",
      "",
      `Votre rappel de recyclage pour « ${data.libelle} » est bien enregistré.`,
      "",
      `Échéance estimée : ${echeance}`,
      `Nous vous enverrons un email de rappel le ${rappel}.`,
      "",
      "Vous n'avez rien d'autre à faire. Votre adresse ne sera utilisée que pour ce rappel, puis supprimée.",
      "",
      `Pour annuler ce rappel à tout moment : ${annulationUrl(data.id)}`,
      "",
      "SECURIFORM Collectivités",
      `${siteConfig.phone} · ${siteConfig.email}`,
      siteUrl(),
    ],
  };
}

export function rappelEmail(data: RappelEmailData): { subject: string; html: string; text: string[] } {
  const echeance = formatDateFr(data.echeance);
  return {
    subject: `Recyclage à prévoir : ${data.libelle}`,
    html: renderEmail({
      preheader: `La formation « ${data.libelle} » arrive à échéance le ${echeance}.`,
      eyebrow: "Rappel de recyclage",
      title: "Le recyclage de vos agents approche",
      intro: `Comme vous nous l'aviez demandé, nous vous rappelons que la formation « ${data.libelle} » arrive bientôt à échéance.`,
      highlight: { label: "Échéance de la formation", value: echeance, caption: joursRestants(data.echeance) },
      details: [{ label: "Formation", value: data.libelle }],
      cta: { label: "Demander un devis", href: devisUrl(data.libelle) },
      paragraphs: [
        "Programmez le recyclage dès maintenant : nos formateurs interviennent directement dans vos services, et un créneau se réserve plus facilement quelques semaines à l'avance.",
      ],
      footerNote: "Ce rappel était unique : votre adresse sera supprimée de notre base à la date d'échéance.",
      unsubscribe: { label: "Supprimer mon adresse dès maintenant", href: annulationUrl(data.id) },
      contact: contact(),
    }),
    text: [
      "Bonjour,",
      "",
      `Comme demandé, nous vous rappelons que la formation « ${data.libelle} » arrive à échéance le ${echeance}.`,
      "",
      "Pensez à programmer le recyclage de vos agents dès maintenant pour éviter toute interruption.",
      `Demander un devis : ${devisUrl(data.libelle)}`,
      "",
      "Ce rappel était unique : votre adresse sera supprimée de notre base à la date d'échéance.",
      `Pour la supprimer dès maintenant : ${annulationUrl(data.id)}`,
      "",
      "SECURIFORM Collectivités",
      `${siteConfig.phone} · ${siteConfig.email}`,
      siteUrl(),
    ],
  };
}

export function envoyerConfirmation(data: RappelEmailData): Promise<boolean> {
  const email = confirmationEmail(data);
  return send(data.email, email.subject, email.html, email.text, data.id);
}

export function envoyerRappel(data: RappelEmailData): Promise<boolean> {
  const email = rappelEmail(data);
  return send(data.email, email.subject, email.html, email.text, data.id);
}
