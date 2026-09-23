import type { Metadata } from "next";
import { legalPagesMeta, mentionsLegalesSections } from "@/src/content/legal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: legalPagesMeta.mentionsLegales.title,
  description: legalPagesMeta.mentionsLegales.description,
  alternates: {
    canonical: "/mentions-legales/",
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>{legalPagesMeta.mentionsLegales.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.inner}`}>
          {mentionsLegalesSections.map((section) => (
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
