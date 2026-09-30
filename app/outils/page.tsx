import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/src/components/home/CtaBand";
import { ToolHero } from "@/src/components/outils/ToolHero";
import { outils, outilsHero } from "@/src/content/outils";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Outils gratuits",
  description:
    "Questionnaire d'orientation et calculateur de recyclage : des outils gratuits pour organiser les formations sécurité des agents de votre collectivité.",
  alternates: {
    canonical: "/outils/",
  },
};

export default function OutilsPage() {
  return (
    <>
      <ToolHero eyebrow={outilsHero.eyebrow} title={outilsHero.title} description={outilsHero.description} />

      <section className="section" aria-labelledby="titre-outils">
        <div className="container">
          <div className="section-head">
            <h2 id="titre-outils">Choisissez un outil</h2>
          </div>
          <ol className={styles.grid}>
            {outils.map((outil, index) => (
              <li key={outil.href}>
                <Link className={styles.card} href={outil.href}>
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{outil.title}</h3>
                  <p>{outil.description}</p>
                  <span className={styles.more}>
                    {outil.cta} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
