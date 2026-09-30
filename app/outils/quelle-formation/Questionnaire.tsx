"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  EFFECTIFS,
  TYPES,
  conseilLieu,
  etapeCourante,
  formationChoisie,
  messageDevis,
  type Choix,
  type Etape,
  type QuestionnaireDomaine,
  type Reponses,
} from "@/src/lib/questionnaire";
import styles from "./page.module.css";

const QUESTIONS: Record<Exclude<Etape, "resultat">, string> = {
  domaine: "Dans quel domaine cherchez-vous une formation ?",
  formation: "Pour quelle activité précisément ?",
  type: "S'agit-il d'une première formation ou d'un recyclage ?",
  effectif: "Combien d'agents sont concernés ?",
};

function dureeLabel(months: number): string {
  return months % 12 === 0 ? `${months / 12} ans` : `${months} mois`;
}

export function Questionnaire({ domaines }: { domaines: QuestionnaireDomaine[] }) {
  // Historique des réponses : chaque étape ajoute une entrée, « Retour » retire la dernière.
  const [historique, setHistorique] = useState<Reponses[]>([{}]);
  const reponses = historique[historique.length - 1];
  const etape = etapeCourante(reponses, domaines);
  const domaine = domaines.find((d) => d.id === reponses.domaine);

  // À chaque changement d'étape, le focus clavier va sur le nouveau titre (annoncé par les lecteurs d'écran).
  const titreRef = useRef<HTMLHeadingElement>(null);
  const premierRendu = useRef(true);
  useEffect(() => {
    if (premierRendu.current) {
      premierRendu.current = false;
      return;
    }
    titreRef.current?.focus();
  }, [historique.length]);

  function repondre(champ: keyof Reponses, valeur: string) {
    setHistorique((prev) => [...prev, { ...prev[prev.length - 1], [champ]: valeur }]);
  }

  function retour() {
    setHistorique((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }

  function recommencer() {
    setHistorique([{}]);
  }

  const totalEtapes = domaine && domaine.formations.length === 1 ? 3 : 4;
  const numeroEtape = Math.min(historique.length, totalEtapes);

  let choix: Choix[] = [];
  let champ: keyof Reponses = "domaine";
  if (etape === "domaine") {
    choix = domaines.map((d) => ({
      id: d.id,
      label: d.title,
      hint: d.formations.length > 1 ? `${d.formations.length} formations` : "1 formation",
    }));
  } else if (etape === "formation" && domaine) {
    champ = "formation";
    choix = domaine.formations.map((f) => ({ id: f.href, label: f.title, hint: f.group }));
  } else if (etape === "type") {
    champ = "type";
    choix = TYPES;
  } else if (etape === "effectif") {
    champ = "effectif";
    choix = EFFECTIFS;
  }

  const formation = etape === "resultat" ? formationChoisie(reponses, domaines) : undefined;

  return (
    <div className={styles.box}>
      {etape !== "resultat" ? (
        <>
          <div className={styles.progress}>
            <p className={styles.progressLabel}>
              Étape {numeroEtape} sur {totalEtapes}
            </p>
            <div
              className={styles.progressBar}
              role="progressbar"
              aria-label="Progression du questionnaire"
              aria-valuemin={1}
              aria-valuemax={totalEtapes}
              aria-valuenow={numeroEtape}
            >
              <span style={{ width: `${(numeroEtape / totalEtapes) * 100}%` }} />
            </div>
          </div>

          <h2 ref={titreRef} tabIndex={-1} className={styles.question}>
            {QUESTIONS[etape]}
          </h2>

          <ul className={`${styles.choices} ${etape === "domaine" || etape === "formation" ? styles.choicesWide : ""}`}>
            {choix.map((item) => (
              <li key={item.id}>
                <button type="button" className={styles.choice} onClick={() => repondre(champ, item.id)}>
                  <span className={styles.choiceLabel}>{item.label}</span>
                  {item.hint ? <span className={styles.choiceHint}>{item.hint}</span> : null}
                  <span className={styles.choiceArrow} aria-hidden="true">
                    →
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {historique.length > 1 ? (
            <button type="button" className={styles.back} onClick={retour}>
              <span aria-hidden="true">←</span> Retour à la question précédente
            </button>
          ) : null}
        </>
      ) : formation ? (
        <div className={styles.result}>
          <p className={styles.resultEyebrow}>Notre recommandation</p>
          <h2 ref={titreRef} tabIndex={-1} className={styles.question}>
            {formation.title}
          </h2>
          <p className={styles.resultText}>{formation.description}</p>

          <dl className={styles.facts}>
            {formation.duration ? (
              <div>
                <dt>Durée</dt>
                <dd>{formation.duration}</dd>
              </div>
            ) : null}
            {formation.groupSize ? (
              <div>
                <dt>Groupe</dt>
                <dd>{formation.groupSize}</dd>
              </div>
            ) : null}
            <div>
              <dt>Validation</dt>
              <dd>{formation.validation}</dd>
            </div>
          </dl>

          <div className={styles.advice}>
            <h3>Notre conseil d&apos;organisation</h3>
            <p>{conseilLieu(reponses.effectif ?? "", formation.groupSize)}</p>
            {reponses.type === "recyclage" && formation.recyclage ? (
              <p>
                Validité de référence : {dureeLabel(formation.recyclage.months)}.{" "}
                <Link href={formation.recyclage.href}>Calculez la prochaine échéance et recevez un rappel →</Link>
              </p>
            ) : null}
          </div>

          <div className={styles.actions}>
            <Link
              className="btn btn-primary"
              href={`/contact/?formation=${encodeURIComponent(formation.title)}&message=${encodeURIComponent(messageDevis(formation, reponses))}#formulaire`}
            >
              Demander un devis pré-rempli
            </Link>
            <Link className="btn btn-ghost" href={formation.href}>
              Voir la fiche formation
            </Link>
          </div>

          <div className={styles.resultNav}>
            <button type="button" className={styles.back} onClick={retour}>
              <span aria-hidden="true">←</span> Modifier ma dernière réponse
            </button>
            <button type="button" className={styles.back} onClick={recommencer}>
              Recommencer le questionnaire
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
