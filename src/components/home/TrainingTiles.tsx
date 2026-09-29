import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { trainingsSectionHead, trainingTiles } from "@/src/content/home";
import { TrainingExplorer, type ExplorerItem } from "./TrainingExplorer";
import styles from "./TrainingTiles.module.css";

export function TrainingTiles() {
  const items: ExplorerItem[] = trainingTiles.map((tile, index) => ({
    id: String(index),
    label: tile.title,
    meta: tile.links.length > 1 ? `${tile.links.length} formations phares` : "Formation dédiée",
    thumb: <Media src={tile.image.src} alt="" sizes="56px" />,
    panel: (
      <>
        <div className={styles.panelMedia}>
          <Media src={tile.image.src} alt={tile.image.alt} sizes="(max-width: 900px) 100vw, 60vw" />
          <div className={styles.panelHeading}>
            <span className={styles.panelIndex}>{String(index + 1).padStart(2, "0")}</span>
            <h3>
              <Link href={tile.href}>{tile.title}</Link>
            </h3>
          </div>
        </div>
        <div className={styles.panelBody}>
          <p>{tile.description}</p>
          <ul className={styles.panelLinks}>
            {tile.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span>{link.label}</span>
                  <span aria-hidden="true" className={styles.linkArrow}>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-primary" href={tile.href}>
            {tile.moreLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </>
    ),
  }));

  return (
    <section className={`section ${styles.trainings}`} id="formations" aria-labelledby="titre-formations">
      <div className="container">
        <div className={styles.head}>
          <div className="section-head">
            <h2 id="titre-formations">{trainingsSectionHead.title}</h2>
            <p>{trainingsSectionHead.description}</p>
          </div>
          <Link className={styles.allLink} href="/formations/">
            Tout le catalogue <span aria-hidden="true">→</span>
          </Link>
        </div>

        <TrainingExplorer items={items} />
      </div>
    </section>
  );
}
