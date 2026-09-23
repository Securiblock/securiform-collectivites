import type { Metadata } from "next";
import { TrainingTiles } from "@/src/components/home/TrainingTiles";
import { CtaBand } from "@/src/components/home/CtaBand";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Formations sécurité pour les collectivités",
  description:
    "Conduite et CACES®, habilitation électrique, AIPR, travaux en hauteur, secourisme et incendie, formations métiers : toutes nos formations sécurité pour les agents des collectivités.",
  alternates: {
    canonical: "/formations/",
  },
};

export default function FormationsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>Formations sécurité</p>
          <h1>Toutes nos formations pour les agents des collectivités</h1>
          <p>
            Des formations conformes à la réglementation, adaptées aux services techniques, espaces verts, voirie,
            propreté urbaine et bâtiments communaux.
          </p>
        </div>
      </section>
      <TrainingTiles />
      <CtaBand />
    </>
  );
}
