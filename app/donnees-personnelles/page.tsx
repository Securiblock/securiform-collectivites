import type { Metadata } from "next";
import { legalPagesMeta, donneesPersonnellesSections, donneesPersonnellesActivities } from "@/src/content/legal";
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
              {section.title === "Traitements de données mis en œuvre" ? (
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <caption className={styles.tableCaption}>Traitements de données personnelles</caption>
                    <thead>
                      <tr>
                        <th scope="col">Finalité</th>
                        <th scope="col">Base légale</th>
                        <th scope="col">Données concernées</th>
                        <th scope="col">Durée de conservation</th>
                        <th scope="col">Destinataires</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donneesPersonnellesActivities.map((activity) => (
                        <tr key={activity.finalite}>
                          <td>{activity.finalite}</td>
                          <td>{activity.baseLegale}</td>
                          <td>{activity.donneesConcernees}</td>
                          <td>{activity.duree}</td>
                          <td>{activity.destinataires}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
