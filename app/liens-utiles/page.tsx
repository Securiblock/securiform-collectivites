import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/src/components/home/CtaBand";
import { usefulLinksHero, linkGroups } from "@/src/content/liens-utiles";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Liens utiles",
  description:
    "Une sélection d'organismes et de sites institutionnels utiles à la prévention des risques professionnels dans les collectivités.",
  alternates: {
    canonical: "/liens-utiles/",
  },
};

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function initials(title: string) {
  const words = title.split(/[\s-]+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// Taille d'affichage d'un logo : tous occupent la même surface à l'écran,
// qu'ils soient presque carrés (CNFPT) ou très allongés (Service Public, Assurance Maladie).
const LOGO_SIZE = 80;

function logoSize(logo: { width: number; height: number }) {
  const ratio = Math.sqrt(logo.width / logo.height);
  return { width: Math.round(LOGO_SIZE * ratio), height: Math.round(LOGO_SIZE / ratio) };
}

function domain(href: string) {
  return new URL(href).hostname.replace(/^www\./, "");
}

const totalLinks = linkGroups.reduce((sum, group) => sum + group.links.length, 0);

export default function LiensUtilesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>{usefulLinksHero.eyebrow}</p>
          <h1>{usefulLinksHero.title}</h1>
          <p className={styles.heroText}>{usefulLinksHero.description}</p>
          <ul className={styles.heroFigures}>
            <li>
              <strong>{totalLinks}</strong>
              ressources
            </li>
            <li>
              <strong>{linkGroups.length}</strong>
              thématiques
            </li>
            <li>
              <strong>100 %</strong>
              sites officiels
            </li>
          </ul>
          <nav className={styles.jump} aria-label="Thématiques">
            {linkGroups.map((group) => (
              <a key={group.title} href={`#${slugify(group.title)}`}>
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {linkGroups.map((group, groupIndex) => (
        <section
          key={group.title}
          id={slugify(group.title)}
          className={`section ${groupIndex % 2 === 1 ? styles.alt : ""}`}
          aria-labelledby={`titre-${slugify(group.title)}`}
        >
          <div className="container">
            <div className="section-head">
              <h2 id={`titre-${slugify(group.title)}`}>{group.title}</h2>
            </div>
            <ul className={styles.grid}>
              {group.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.card}>
                    <span className={styles.logoBox}>
                      {link.logo ? (
                        <Image
                          className={styles.logo}
                          src={link.logo.src}
                          alt={link.logo.alt}
                          {...logoSize(link.logo)}
                        />
                      ) : (
                        <span className={styles.monogram} aria-hidden="true">
                          {initials(link.title)}
                        </span>
                      )}
                    </span>
                    <span className={styles.cardBody}>
                      <span className={styles.cardTitle}>{link.title}</span>
                      <span className={styles.cardText}>{link.description}</span>
                      <span className={styles.cardFooter}>
                        <span className={styles.domain}>{domain(link.href)}</span>
                        <span className={styles.visit}>
                          Visiter <span aria-hidden="true">↗</span>
                          <span className="sr-only"> (nouvel onglet)</span>
                        </span>
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
