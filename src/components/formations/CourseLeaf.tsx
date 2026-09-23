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
        <div className={`container ${styles.grid}`}>
          <div>
            <p className={styles.description}>{entry.description}</p>

            <h2 className={styles.subhead}>Objectifs de la formation</h2>
            <ul className={styles.points}>
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <Link className="btn btn-ghost" href={entry.categoryHref}>
              Voir toutes les formations « {entry.categoryLabel} »
            </Link>
          </div>

          <aside className={styles.sidebar}>
            <div>
              <h3>Modalités</h3>
              <p>Formation organisée directement dans vos services, en groupe de 6 à 10 stagiaires.</p>
            </div>
            <div>
              <h3>Intervention</h3>
              <p>Partout en France.</p>
            </div>
            <div>
              <h3>Validation</h3>
              <p>{entry.validation}</p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
