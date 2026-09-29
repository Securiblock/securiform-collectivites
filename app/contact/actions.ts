"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { isKnownCourseTitle } from "@/src/content/formations-catalog";
import { isRateLimited } from "@/src/lib/rate-limit";
import { HONEYPOT_FIELD, RENDERED_AT_FIELD } from "./anti-spam";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SUCCESS: ContactFormState = {
  status: "success",
  message: "Votre message a bien été envoyé. Nous vous répondons rapidement.",
};

// Anti-spam
const MIN_FILL_MS = 3_000;
const MAX_LINKS = 3;
const MAX_MESSAGE_LENGTH = 5_000;
const RATE_LIMITS = [
  { limit: 3, durationMs: 10 * 60_000 },
  { limit: 10, durationMs: 24 * 60 * 60_000 },
];

// Renvoie la raison si l'envoi ressemble à un robot, sinon null.
function spamReason(formData: FormData, message: string): string | null {
  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") {
    return "champ piège rempli";
  }

  const renderedAt = Number(formData.get(RENDERED_AT_FIELD));
  if (!Number.isFinite(renderedAt) || renderedAt <= 0) {
    return "horodatage absent";
  }
  if (Date.now() - renderedAt < MIN_FILL_MS) {
    return "formulaire rempli trop vite";
  }

  if ((message.match(/https?:\/\/|www\./gi) ?? []).length > MAX_LINKS) {
    return "trop de liens";
  }

  return null;
}

async function clientIp(): Promise<string> {
  const requestHeaders = await headers();
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "inconnue"
  );
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const formationInput = String(formData.get("formation") ?? "").trim();
  const formation = isKnownCourseTitle(formationInput) ? formationInput : "";

  if (!nom || !email || !message) {
    return { status: "error", message: "Merci de renseigner votre nom, votre email et votre message." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "L'adresse email indiquée n'est pas valide." };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      status: "error",
      message: `Votre message est trop long (${MAX_MESSAGE_LENGTH} caractères maximum).`,
    };
  }

  // Un robot détecté reçoit une fausse confirmation, pour ne pas lui indiquer qu'il est bloqué.
  const reason = spamReason(formData, message);
  if (reason) {
    console.warn(`Message de contact ignoré (spam probable : ${reason}).`);
    return SUCCESS;
  }

  if (isRateLimited(await clientIp(), RATE_LIMITS)) {
    return {
      status: "error",
      message: "Vous avez envoyé plusieurs messages en peu de temps. Merci de réessayer plus tard ou de nous appeler directement.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : impossible d'envoyer le message de contact.");
    return { status: "error", message: "Le service d'envoi n'est pas encore configuré. Merci de nous appeler directement." };
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Site SECURIFORM Collectivités <${process.env.CONTACT_EMAIL_FROM ?? "onboarding@resend.dev"}>`,
    to: process.env.CONTACT_EMAIL_TO ?? "contact@securiform.fr",
    replyTo: email,
    subject: formation
      ? `Demande pour « ${formation} » de ${nom}`
      : `Nouvelle demande de contact de ${nom}`,
    text: [
      `Nom : ${nom}`,
      `Email : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
      formation ? `Formation souhaitée : ${formation}` : null,
      "",
      "Message :",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    console.error("Échec d'envoi via Resend :", error);
    return { status: "error", message: "L'envoi a échoué. Merci de réessayer ou de nous appeler directement." };
  }

  return SUCCESS;
}
