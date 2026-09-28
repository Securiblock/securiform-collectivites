import type { Metadata } from "next";
import { legalPagesMeta } from "@/src/content/legal";
import { cookieRows, cookiesPageIntro, cookiesPageOutro } from "@/src/content/cookies";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: legalPagesMeta.politiqueCookies.title,
  description: legalPagesMeta.politiqueCookies.description,
  alternates: {
    canonical: "/politique-cookies/",
  },
};

export default function PolitiqueCookiesPage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>{legalPagesMeta.politiqueCookies.title}</h1>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.inner}`}>
          <article>
            <h2>Qu&apos;est-ce qu&apos;un cookie&nbsp;?</h2>
            {cookiesPageIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article>
            <h2>Cookies et traceurs utilisés sur ce site</h2>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <caption className={styles.tableCaption}>Liste des cookies et traceurs déposés sur ce site</caption>
                <thead>
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Émetteur</th>
                    <th scope="col">Finalité</th>
                    <th scope="col">Durée</th>
                    <th scope="col">Catégorie</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row) => (
                    <tr key={row.nom}>
                      <td>{row.nom}</td>
                      <td>{row.emetteur}</td>
                      <td>{row.finalite}</td>
                      <td>{row.duree}</td>
                      <td>{row.categorie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article>
            <h2>{cookiesPageOutro.gestion.title}</h2>
            {cookiesPageOutro.gestion.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article>
            <h2>{cookiesPageOutro.duree.title}</h2>
            {cookiesPageOutro.duree.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
