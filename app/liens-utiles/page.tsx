import type { Metadata } from "next";
import Image from "next/image";
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

export default function LiensUtilesPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <p className={styles.eyebrow}>{usefulLinksHero.eyebrow}</p>
          <h1>{usefulLinksHero.title}</h1>
          <p className={styles.heroText}>{usefulLinksHero.description}</p>
        </div>
      </section>

      {linkGroups.map((group) => (
        <section key={group.title} className={styles.group}>
          <div className={`container ${styles.groupInner}`}>
            <h2 className={styles.groupTitle}>{group.title}</h2>
            <ul className={styles.list}>
              {group.links.map((link) => (
                <li key={link.href} className={styles.item}>
                  {link.logo ? (
                    <Image
                      className={styles.logo}
                      src={link.logo.src}
                      alt={link.logo.alt}
                      width={120}
                      height={44}
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <span className={styles.logoPlaceholder} aria-hidden="true">
                      {link.title.slice(0, 1)}
                    </span>
                  )}
                  <div>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.itemTitle}>
                      {link.title}
                    </a>
                    <p>{link.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
