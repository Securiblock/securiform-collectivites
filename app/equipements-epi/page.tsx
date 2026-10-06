import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import { epiHero, epiIntro, epiCategories, epiKits, type EpiIconKey } from "@/src/content/epi";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Équipements de protection individuelle (EPI)",
  description:
    "Conseil sur le choix et le suivi des équipements de protection individuelle adaptés aux risques des agents des collectivités : casques, harnais, gants, chaussures de sécurité.",
  alternates: {
    canonical: "/equipements-epi/",
  },
};

const ICON_PATHS: Record<EpiIconKey, string> = {
  tete: "M4 16a8 8 0 0 1 16 0M2.5 16h19v2.5h-19zM12 8V4.5M9 8.8 8 5.5M15 8.8l1-3.3",
  chute: "M9 3.5h6a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-11a3 3 0 0 1 3-3ZM6 9h6",
  mains:
    "M8 13V6.5a1.5 1.5 0 0 1 3 0V11m0 0V4.5a1.5 1.5 0 0 1 3 0V11m0 0V6.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-.5a5 5 0 0 1-4-2l-2.8-3.8a1.5 1.5 0 0 1 2.3-1.9L8 14",
  pieds: "M6 3h6v8l6.2 3a2 2 0 0 1 1.3 1.9V20H6V3ZM6 16.5h13.5",
  respi: "M4.5 15v-3a7.5 7.5 0 0 1 15 0v3M3 14h4v6.5H3zM17 14h4v6.5h-4z",
  visibilite: "M8.5 3 5 5.2V21h5.5V11M15.5 3 19 5.2V21h-5.5V11M8.5 3 12 7.5 15.5 3M5 15.5h14",
};

function EpiIcon({ icon }: { icon: EpiIconKey }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={ICON_PATHS[icon]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function EquipementsEpiPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titre-epi">
        <div className={styles.heroMedia}>
          <Media src={epiHero.image.src} alt={epiHero.image.alt} sizes="100vw" priority />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{epiHero.eyebrow}</p>
          <h1 id="titre-epi">{epiHero.title}</h1>
          <p className={styles.heroText}>{epiHero.description}</p>
          <ul className={styles.heroFigures}>
            <li>
              <strong>{epiCategories.length}</strong>
              familles d&apos;équipements
            </li>
            <li>
              <strong>{epiKits.levels.length} kits</strong>
              habilitation électrique
            </li>
            <li>
              <strong>En ligne</strong>
              sur Securistore
            </li>
          </ul>
          <div className={styles.heroActions}>
            <Link className="btn btn-primary" href="/contact/">
              Demander conseil
            </Link>
            <a
              className={`btn ${styles.btnGlass}`}
              href={epiKits.store.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Boutique Securistore <span aria-hidden="true">↗</span>
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-familles">
        <div className={`container ${styles.intro}`}>
          <div className={styles.introText}>
            <p className={styles.kicker}>Conseil et choix</p>
            <h2 id="titre-familles">{epiIntro.title}</h2>
            {epiIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className={styles.categories}>
            {epiCategories.map((category, index) => (
              <li key={category.title}>
                <div className={styles.categoryTop}>
                  <span className={styles.icon}>
                    <EpiIcon icon={category.icon} />
                  </span>
                  <span className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.kits}`} aria-labelledby="titre-kits">
        <div className={`container ${styles.kitsInner}`}>
          <div className={styles.kitsFrame}>
            <Media src={epiKits.image.src} alt={epiKits.image.alt} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className={styles.kitsText}>
            <p className={styles.kicker}>{epiKits.eyebrow}</p>
            <h2 id="titre-kits">{epiKits.title}</h2>
            <p>{epiKits.paragraphs[0]}</p>

            <ul className={styles.levels}>
              {epiKits.levels.map((level) => (
                <li key={level.code}>
                  <strong>{level.code}</strong>
                  <span>{level.audience}</span>
                </li>
              ))}
            </ul>

            <p className={styles.contentsTitle}>Chaque kit comprend</p>
            <ul className={styles.contents}>
              {epiKits.contents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`section ${styles.store}`} aria-label="Boutique Securistore">
        <div className="container">
          <div className={styles.storeCallout}>
            <div className={styles.storeText}>
              <Image
                src={epiKits.store.logo.src}
                alt={epiKits.store.logo.alt}
                width={epiKits.store.logo.width}
                height={epiKits.store.logo.height}
                className={styles.storeLogo}
              />
              <p>{epiKits.store.tagline}</p>
            </div>
            <a href={epiKits.store.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {epiKits.store.label} <span aria-hidden="true">↗</span>
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
