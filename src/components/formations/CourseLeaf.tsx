import Link from "next/link";
import { CtaBand } from "@/src/components/home/CtaBand";
import type { FormationLeaf } from "@/src/content/formations-catalog";
import styles from "./CourseLeaf.module.css";

export function CourseLeaf({ entry }: { entry: FormationLeaf }) {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <nav className={styles.breadcrumb} aria-label="Fil d'ariane">
            <Link href="/formations/">Formations</Link>
            <span aria-hidden="true">/</span>
            <Link href={entry.categoryHref}>{entry.categoryLabel}</Link>
          </nav>
          <h1>{entry.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.body}`}>
          <p className={styles.description}>{entry.description}</p>

          <ul className={styles.points}>
            {entry.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Link className="btn btn-ghost" href={entry.categoryHref}>
            Voir toutes les formations {entry.categoryLabel.toLowerCase()}
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
