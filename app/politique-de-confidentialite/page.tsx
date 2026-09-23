import type { Metadata } from "next";
import { legalPagesMeta, politiqueConfidentialiteSections } from "@/src/content/legal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: legalPagesMeta.politiqueConfidentialite.title,
  description: legalPagesMeta.politiqueConfidentialite.description,
  alternates: {
    canonical: "/politique-de-confidentialite/",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>{legalPagesMeta.politiqueConfidentialite.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.inner}`}>
          {politiqueConfidentialiteSections.map((section) => (
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
