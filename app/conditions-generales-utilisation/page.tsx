import type { Metadata } from "next";
import { legalPagesMeta, cguSections } from "@/src/content/legal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: legalPagesMeta.conditionsGeneralesUtilisation.title,
  description: legalPagesMeta.conditionsGeneralesUtilisation.description,
  alternates: {
    canonical: "/conditions-generales-utilisation/",
  },
};

export default function ConditionsGeneralesUtilisationPage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>{legalPagesMeta.conditionsGeneralesUtilisation.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.inner}`}>
          {cguSections.map((section) => (
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
