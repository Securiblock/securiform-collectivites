"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
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
      <p className={styles.formNote}>Les champs marqués d&apos;un astérisque (*) sont obligatoires.</p>

      <div className={styles.formRow}>
        <div className={styles.field}>
          <label htmlFor="nom">
            Nom <span aria-hidden="true">*</span>
          </label>
          <input type="text" id="nom" name="nom" required aria-required="true" autoComplete="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="telephone">Téléphone</label>
          <input type="tel" id="telephone" name="telephone" autoComplete="tel" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input type="email" id="email" name="email" required aria-required="true" autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea id="message" name="message" rows={5} required aria-required="true" />
      </div>

      <SubmitButton />

      <p className={styles.formNotice}>
        Les informations recueillies via ce formulaire sont utilisées uniquement pour traiter votre demande. En
        savoir plus dans notre{" "}
        <Link href="/politique-de-confidentialite/">politique de confidentialité</Link>.
      </p>

      {state.status !== "idle" ? (
        <p className={state.status === "success" ? styles.formSuccess : styles.formError} role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
