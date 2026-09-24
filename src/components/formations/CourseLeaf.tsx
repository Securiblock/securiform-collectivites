import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import type { Crumb, CourseContent } from "@/src/content/formations-catalog";
import styles from "./CourseLeaf.module.css";

type CourseLeafProps = {
  trail: Crumb[];
  title: string;
  content: CourseContent;
};

export function CourseLeaf({ trail, title, content }: CourseLeafProps) {
  const ancestors = trail.slice(0, -1);
  const parent = ancestors[ancestors.length - 1];

  return (
    <>
      <section className={styles.band}>
        <div className={`container ${styles.bandInner} ${content.image ? styles.hasMedia : ""}`}>
          <div>
            <nav className={styles.breadcrumb} aria-label="Fil d'ariane">
              <Link href="/formations/">Formations</Link>
              {ancestors.map((crumb) => (
                <span key={crumb.href}>
                  {" "}
                  / <Link href={crumb.href}>{crumb.title}</Link>
                </span>
              ))}
            </nav>
            <h1>{title}</h1>
          </div>
          {content.image ? (
            <div className={styles.bandMedia}>
              <Media src={content.image.src} alt={content.image.alt} sizes="(max-width: 900px) 100vw, 45vw" priority />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <p className={styles.description}>{content.description}</p>

            <h2 className={styles.subhead}>Objectifs de la formation</h2>
            <ul className={styles.points}>
              {content.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {parent ? (
              <Link className="btn btn-ghost" href={parent.href}>
                Voir toutes les formations « {parent.title} »
              </Link>
            ) : null}
          </div>

          <aside className={styles.sidebar}>
            {content.duration ? (
              <div>
                <h3>Durée</h3>
                <p>{content.duration}</p>
              </div>
            ) : null}
            {content.groupSize ? (
              <div>
                <h3>Effectif</h3>
                <p>{content.groupSize}</p>
              </div>
            ) : null}
            <div>
              <h3>Intervention</h3>
              <p>Directement dans vos services, partout en France.</p>
            </div>
            <div>
              <h3>Validation</h3>
              <p>{content.validation}</p>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
