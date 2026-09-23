"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage, type ContactFormState } from "./actions";
import styles from "./page.module.css";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending ? "Envoi..." : "Envoyer le message"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required autoComplete="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="telephone">Téléphone</label>
          <input type="tel" id="telephone" name="telephone" autoComplete="tel" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <SubmitButton />

      {state.status !== "idle" ? (
        <p className={state.status === "success" ? styles.formSuccess : styles.formError} role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
