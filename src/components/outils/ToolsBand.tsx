import Link from "next/link";
import { outils, outilsBand } from "@/src/content/outils";
import { ToolIcon } from "./ToolIcon";
import styles from "./ToolsBand.module.css";

// Bandeau « Outils gratuits » réutilisé sur l'accueil et le catalogue des formations.
export function ToolsBand() {
  return (
    <section className={`section ${styles.band}`} aria-labelledby="titre-outils-gratuits">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{outilsBand.eyebrow}</p>
          <h2 id="titre-outils-gratuits">{outilsBand.title}</h2>
          <p>{outilsBand.description}</p>
          <Link className={styles.all} href="/outils/">
            Tous nos outils <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className={styles.cards}>
          {outils.map((outil) => (
            <li key={outil.href}>
              <Link className={styles.card} href={outil.href}>
                <span className={styles.icon}>
                  <ToolIcon name={outil.icon} />
                </span>
                <span className={styles.cardTitle}>{outil.title}</span>
                <span className={styles.cardText}>{outil.description}</span>
                <span className={styles.cardCta}>
                  {outil.cta} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
