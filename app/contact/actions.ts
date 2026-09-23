"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telephone = String(formData.get("telephone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!nom || !email || !message) {
    return { status: "error", message: "Merci de renseigner votre nom, votre email et votre message." };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "L'adresse email indiquée n'est pas valide." };
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
    subject: `Nouvelle demande de contact de ${nom}`,
    text: [
      `Nom : ${nom}`,
      `Email : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
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

  return { status: "success", message: "Votre message a bien été envoyé. Nous vous répondons rapidement." };
}
