import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import type { TrainingTile } from "@/src/content/home";
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
          <ul className={styles.list}>
            {tile.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
