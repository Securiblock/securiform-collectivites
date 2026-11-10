import Link from "next/link";
import { essentials, essentialsSectionHead } from "@/src/content/home";
import styles from "./Essentials.module.css";

// `compactTop` : sans marge haute, quand la section précédente a le même fond blanc.
export function Essentials({ compactTop = false }: { compactTop?: boolean }) {
  return (
    <section
      id="incontournables"
      className={`section ${styles.essentials} ${compactTop ? styles.compactTop : ""}`}
      aria-labelledby="titre-incontournables"
    >
      <div className="container">
        <div className="section-head">
          <p className={styles.eyebrow}>{essentialsSectionHead.eyebrow}</p>
          <h2 id="titre-incontournables">{essentialsSectionHead.title}</h2>
          <p>{essentialsSectionHead.description}</p>
        </div>

        <ul className={styles.grid}>
          {essentials.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.card}>
                <span className={styles.tag}>{item.tag}</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hook}>{item.hook}</span>
                <span className={styles.text}>{item.description}</span>
                <span className={styles.more} aria-hidden="true">
                  Voir la formation&nbsp;→
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
