"use client";

import { useActionState, useId, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { HONEYPOT_FIELD } from "@/src/lib/anti-spam";
import { formatDateFr, isIsoDate } from "@/src/lib/dates";
import { buildIcs, downloadIcs } from "@/src/lib/ics";
import { calculerRecyclage, type RecyclageFormation, type RecyclageStatut } from "@/src/lib/recyclage";
import { inscrireRappel, type RappelFormState } from "./actions";
import styles from "./page.module.css";

const STATUTS: Record<RecyclageStatut, { label: string; text: string }> = {
  valide: { label: "Valide", text: "Rien à faire pour l'instant." },
  bientot: { label: "À programmer", text: "L'échéance approche : c'est le moment d'organiser le recyclage." },
  expire: { label: "Expirée", text: "La validité est dépassée : un recyclage est à organiser sans attendre." },
};

function dureeLabel(months: number): string {
  return months % 12 === 0 ? `${months / 12} ans` : `${months} mois`;
}

function groupBy(formations: RecyclageFormation[]): [string, RecyclageFormation[]][] {
  const groups = new Map<string, RecyclageFormation[]>();
  for (const formation of formations) {
    groups.set(formation.group, [...(groups.get(formation.group) ?? []), formation]);
  }
  return [...groups];
}

type CalculatorProps = {
  formations: RecyclageFormation[];
  today: string;
  initialFormation?: string;
};

export function RecyclageCalculator({ formations, today, initialFormation = "" }: CalculatorProps) {
  const [formationKey, setFormationKey] = useState(initialFormation);
  const [dateFormation, setDateFormation] = useState("");

  const formation = formations.find((item) => item.key === formationKey);
  const dateValide = isIsoDate(dateFormation) && dateFormation <= today;
  const calcul = formation && dateValide ? calculerRecyclage(formation, dateFormation, today) : null;

  function ajouterAgenda() {
    if (!formation || !calcul) return;
    const ics = buildIcs({
      date: calcul.statut === "valide" ? calcul.dateRappel : today,
      title: `Programmer le recyclage : ${formation.label}`,
      description: `Échéance de la formation « ${formation.label} » le ${formatDateFr(calcul.echeance)}. Demander un devis : https://www.securiform-collectivites.fr/contact/`,
      url: "https://www.securiform-collectivites.fr/contact/",
    });
    downloadIcs(`recyclage-${formation.key}.ics`, ics);
  }

  return (
    <div className={styles.calculator}>
      <form className={styles.inputs} onSubmit={(event) => event.preventDefault()}>
        <p className={styles.step}>
          <span aria-hidden="true">1</span> Votre formation
        </p>
        <div className={styles.field}>
          <label htmlFor="calc-formation">Formation suivie</label>
          <select id="calc-formation" value={formationKey} onChange={(event) => setFormationKey(event.target.value)}>
            <option value="">Choisissez une formation</option>
            {groupBy(formations).map(([group, items]) => (
              <optgroup key={group} label={group}>
                {items.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="calc-date">Date de la dernière formation</label>
          <input
            id="calc-date"
            type="date"
            max={today}
            min="1990-01-01"
            value={dateFormation}
            onChange={(event) => setDateFormation(event.target.value)}
            aria-describedby="calc-date-aide"
          />
          <p id="calc-date-aide" className={styles.help}>
            Indiquée sur l&apos;attestation, le certificat ou le titre de l&apos;agent.
          </p>
        </div>
        {formation ? (
          <p className={styles.source}>
            <strong>Validité : {dureeLabel(formation.months)}.</strong> {formation.note}{" "}
            <span className={styles.sourceTag}>
              {formation.source === "site" ? "Durée annoncée sur notre fiche" : "Référence réglementaire, indicative"}
            </span>
          </p>
        ) : null}
      </form>

      <div className={styles.result} aria-live="polite">
        {calcul && formation ? (
          <>
            <p className={styles.step}>
              <span aria-hidden="true">2</span> Résultat
            </p>
            <p className={`${styles.badge} ${styles[calcul.statut]}`}>{STATUTS[calcul.statut].label}</p>
            <p className={styles.echeanceLabel}>{calcul.statut === "expire" ? "Échue depuis le" : "Échéance le"}</p>
            <p className={styles.echeance}>{formatDateFr(calcul.echeance)}</p>
            <p className={styles.statutText}>{STATUTS[calcul.statut].text}</p>

            <div className={styles.actions}>
              <button type="button" className="btn btn-ghost" onClick={ajouterAgenda}>
                Ajouter à mon agenda (.ics)
              </button>
              <Link className="btn btn-primary" href={formation.href}>
                Voir la formation
              </Link>
            </div>

            {calcul.statut === "expire" ? (
              <p className={styles.expiredCta}>
                <Link href="/contact/#formulaire">Demandez un devis pour organiser le recyclage →</Link>
              </p>
            ) : (
              <RappelForm
                key={`${formation.key}-${dateFormation}`}
                formation={formation}
                dateFormation={dateFormation}
                dateRappel={calcul.dateRappel}
              />
            )}
          </>
        ) : (
          <div className={styles.placeholder}>
            <p className={styles.step}>
              <span aria-hidden="true">2</span> Résultat
            </p>
            <p>Choisissez une formation et une date pour afficher l&apos;échéance.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-primary" type="submit" disabled={pending}>
      {pending ? "Enregistrement..." : "Recevoir le rappel"}
    </button>
  );
}

const initialState: RappelFormState = { status: "idle", message: "" };

type RappelFormProps = {
  formation: RecyclageFormation;
  dateFormation: string;
  dateRappel: string;
};

function RappelForm({ formation, dateFormation, dateRappel }: RappelFormProps) {
  const [state, formAction] = useActionState(inscrireRappel, initialState);
  const id = useId();

  if (state.status === "success") {
    return (
      <p className={styles.formSuccess} role="status">
        {state.message}
      </p>
    );
  }

  return (
    <form className={styles.rappel} action={formAction}>
      <h3>Recevoir un rappel par email</h3>
      <p className={styles.help}>Un seul email, le {formatDateFr(dateRappel)}. Aucune autre utilisation de votre adresse.</p>

      <input type="hidden" name="formation" value={formation.key} />
      <input type="hidden" name="dateFormation" value={dateFormation} />
      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={`${id}-trap`}>Ne pas remplir ce champ</label>
        <input type="text" id={`${id}-trap`} name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.field}>
        <label htmlFor={`${id}-email`}>
          Adresse email <span aria-hidden="true">*</span>
        </label>
        <input id={`${id}-email`} type="email" name="email" required aria-required="true" autoComplete="email" />
      </div>

      <div className={styles.consent}>
        <input id={`${id}-consent`} type="checkbox" name="consentement" value="oui" required aria-required="true" />
        <label htmlFor={`${id}-consent`}>
          J&apos;accepte que SECURIFORM Collectivités utilise mon adresse email uniquement pour m&apos;envoyer ce rappel.
          Elle sera supprimée au plus tard à la date d&apos;échéance, et je peux annuler à tout moment. En savoir plus :{" "}
          <Link href="/politique-de-confidentialite/">politique de confidentialité</Link>.
        </label>
      </div>

      <SubmitButton />

      {state.status === "error" ? (
        <p className={styles.formError} role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
