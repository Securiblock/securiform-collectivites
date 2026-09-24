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
            {entry.duration ? (
              <div>
                <h3>Durée</h3>
                <p>{entry.duration}</p>
              </div>
            ) : null}
            {entry.groupSize ? (
              <div>
                <h3>Effectif</h3>
                <p>{entry.groupSize}</p>
              </div>
            ) : null}
            <div>
              <h3>Intervention</h3>
              <p>Directement dans vos services, partout en France.</p>
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
