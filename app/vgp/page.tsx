import type { Metadata } from "next";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import { vgpHero, vgpFacts, vgpItems, vgpProcessHead, vgpProcessSteps } from "@/src/content/vgp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vérifications Générales Périodiques (VGP)",
  description:
    "SECURIFORM Collectivités réalise les Vérifications Générales Périodiques de vos équipements de travail : engins, échafaudages, EPI antichute, extincteurs et installations électriques.",
  alternates: {
    canonical: "/vgp/",
  },
};

export default function VgpPage() {
  return (
    <>
      <section className={`section ${styles.hero}`} aria-labelledby="titre-vgp">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{vgpHero.eyebrow}</p>
            <h1 id="titre-vgp">{vgpHero.title}</h1>
            {vgpHero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <dl className={styles.facts}>
              {vgpFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={styles.heroMedia}>
            <Media src={vgpHero.image.src} alt={vgpHero.image.alt} sizes="(max-width: 900px) 100vw, 45vw" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className={styles.rows}>
            {vgpItems.map((item, index) => (
              <li key={item.title} className={styles.row}>
                <div className={styles.rowMedia}>
                  <Media
                    src={item.image.src}
                    alt={item.image.alt}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.rowText}>
                  <span className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`section ${styles.process}`}>
        <div className="container">
          <div className="section-head">
            <h2>{vgpProcessHead.title}</h2>
            <p>{vgpProcessHead.description}</p>
          </div>
          <ol className={styles.timeline}>
            {vgpProcessSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.timelineDot}>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
