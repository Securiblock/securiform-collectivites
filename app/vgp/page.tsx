import type { Metadata } from "next";
import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import { siteConfig } from "@/src/content/home";
import {
  vgpHero,
  vgpFacts,
  vgpHeroSummary,
  vgpObligation,
  vgpItemsHead,
  vgpItems,
  vgpProcessHead,
  vgpProcessSteps,
} from "@/src/content/vgp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vérifications Générales Périodiques (VGP)",
  description:
    "SECURIFORM Collectivités réalise les Vérifications Générales Périodiques de vos équipements de travail : engins, échafaudages, EPI antichute, extincteurs et installations électriques.",
  alternates: {
    canonical: "/vgp/",
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12.5 10 17.5 19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function VgpPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titre-vgp">
        <div className={styles.heroMedia}>
          <Media src={vgpHero.image.src} alt="" sizes="100vw" priority />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{vgpHero.eyebrow}</p>
          <h1 id="titre-vgp">{vgpHero.title}</h1>
          <p className={styles.heroText}>{vgpHeroSummary}</p>
          <ul className={styles.heroFigures}>
            {vgpFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                {fact.label}
              </li>
            ))}
            <li>
              <strong>1 rapport</strong>
              après chaque contrôle
            </li>
          </ul>
          <div className={styles.heroActions}>
            <Link className="btn btn-white" href="/contact/">
              Demander une vérification
            </Link>
            <a className={`btn ${styles.btnGlass}`} href={siteConfig.phoneHref}>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-obligation">
        <div className={`container ${styles.obligation}`}>
          <div>
            <p className={styles.kicker}>{vgpObligation.eyebrow}</p>
            <h2 id="titre-obligation">{vgpObligation.title}</h2>
            {vgpHero.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.lead}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className={styles.deliverables}>
            <h3>{vgpObligation.deliverablesTitle}</h3>
            <ul>
              {vgpObligation.deliverables.map((item) => (
                <li key={item}>
                  <span className={styles.check}>
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`section ${styles.equipment}`} aria-labelledby="titre-equipements">
        <div className="container">
          <div className="section-head">
            <h2 id="titre-equipements">{vgpItemsHead.title}</h2>
            <p>{vgpItemsHead.description}</p>
          </div>
          <ul className={styles.panels}>
            {vgpItems.map((item, index) => (
              <li key={item.title} className={styles.panel} tabIndex={0}>
                <div className={styles.panelMedia}>
                  <Media src={item.image.src} alt={item.image.alt} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <span className={styles.panelLabel} aria-hidden="true">
                  {item.title}
                </span>
                <div className={styles.panelContent}>
                  <span className={styles.panelNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="titre-process">
        <div className="container">
          <div className="section-head">
            <h2 id="titre-process">{vgpProcessHead.title}</h2>
            <p>{vgpProcessHead.description}</p>
          </div>
          <ol className={styles.steps}>
            {vgpProcessSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
