import type { Metadata } from "next";
import Image from "next/image";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import { epiHero, epiIntro, epiCategories, epiKits } from "@/src/content/epi";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Équipements de protection individuelle (EPI)",
  description:
    "Conseil sur le choix et le suivi des équipements de protection individuelle adaptés aux risques des agents des collectivités : casques, harnais, gants, chaussures de sécurité.",
  alternates: {
    canonical: "/equipements-epi/",
  },
};

export default function EquipementsEpiPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titre-epi">
        <div className="container">
          <p className={styles.eyebrow}>{epiHero.eyebrow}</p>
          <h1 id="titre-epi">{epiHero.title}</h1>
          <p className={styles.heroText}>{epiHero.description}</p>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText}>
            <h2>{epiIntro.title}</h2>
            {epiIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className={styles.list}>
            {epiCategories.map((category, index) => (
              <li key={category.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`section ${styles.kits}`}>
        <div className="container">
          <div className={styles.kitsInner}>
            <div className={styles.kitsFrame}>
              <Media src={epiKits.image.src} alt={epiKits.image.alt} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <div>
              <p className={styles.eyebrow}>{epiKits.eyebrow}</p>
              <h2>{epiKits.title}</h2>
              {epiKits.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={styles.storeCallout}>
            <Image
              src={epiKits.store.logo.src}
              alt={epiKits.store.logo.alt}
              width={epiKits.store.logo.width}
              height={epiKits.store.logo.height}
              className={styles.storeLogo}
            />
            <p className={styles.storeText}>{epiKits.store.tagline}</p>
            <a href={epiKits.store.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {epiKits.store.label}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
