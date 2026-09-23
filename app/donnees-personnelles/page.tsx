import type { Metadata } from "next";
import { legalPagesMeta, donneesPersonnellesSections } from "@/src/content/legal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: legalPagesMeta.donneesPersonnelles.title,
  description: legalPagesMeta.donneesPersonnelles.description,
  alternates: {
    canonical: "/donnees-personnelles/",
  },
};

export default function DonneesPersonnellesPage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>{legalPagesMeta.donneesPersonnelles.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.inner}`}>
          {donneesPersonnellesSections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
