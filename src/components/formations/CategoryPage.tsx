import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import type { TrainingTile } from "@/src/content/home";
import { formationLeaves } from "@/src/content/formations-catalog";
import styles from "./CategoryPage.module.css";

export function CategoryPage({ tile }: { tile: TrainingTile }) {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <nav className={styles.breadcrumb} aria-label="Fil d'ariane">
              <Link href="/formations/">Formations</Link>
            </nav>
            <h1>{tile.title}</h1>
            <p>{tile.description}</p>
          </div>
          <div className={styles.heroMedia}>
            <Media src={tile.image.src} alt={tile.image.alt || tile.title} sizes="(max-width: 900px) 100vw, 45vw" priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Formations disponibles</h2>
            <p>Choisissez la formation adaptée au rôle et au niveau de vos agents.</p>
          </div>

          <ul className={styles.list}>
            {tile.links.map((link) => {
              const leaf = formationLeaves.find((item) => item.href === link.href);
              return (
                <li key={link.href} className={styles.card}>
                  <Link href={link.href} className={styles.cardTitle}>
                    {link.label}
                  </Link>
                  {leaf ? <p>{leaf.description}</p> : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
