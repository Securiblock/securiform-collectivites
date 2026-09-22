import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { trainingsSectionHead, trainingTiles } from "@/src/content/home";
import styles from "./TrainingTiles.module.css";

const TILE_IMAGE_SIZES = "(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 25vw";

export function TrainingTiles() {
  return (
    <section className={`section ${styles.trainings}`} id="formations" aria-labelledby="titre-formations">
      <div className="container">
        <div className="section-head">
          <h2 id="titre-formations">{trainingsSectionHead.title}</h2>
          <p>{trainingsSectionHead.description}</p>
        </div>

        <ul className={styles.tiles}>
          {trainingTiles.map((tile) => (
            <li key={tile.href}>
              <article className={styles.tile}>
                <Link href={tile.href} tabIndex={-1} aria-hidden="true" className={styles.tileMedia}>
                  <Media src={tile.image.src} alt={tile.image.alt} sizes={TILE_IMAGE_SIZES} />
                </Link>
                <div className={styles.tileBody}>
                  <h3>
                    <Link href={tile.href}>{tile.title}</Link>
                  </h3>
                  <p>{tile.description}</p>
                  <ul>
                    {tile.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link className={styles.tileMore} href={tile.href}>
                    {tile.moreLabel}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
