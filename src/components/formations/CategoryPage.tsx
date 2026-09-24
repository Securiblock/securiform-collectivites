import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import type { Crumb } from "@/src/content/formations-catalog";
import styles from "./CategoryPage.module.css";

type CategoryItem = {
  title: string;
  href: string;
  description: string;
  image?: { src: string; alt: string };
};

type CategoryPageProps = {
  trail: Crumb[];
  title: string;
  description: string;
  image?: { src: string; alt: string };
  items: CategoryItem[];
};

export function CategoryPage({ trail, title, description, image, items }: CategoryPageProps) {
  const ancestors = trail.slice(0, -1);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner} ${image ? styles.hasMedia : ""}`}>
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
            <p>{description}</p>
          </div>
          {image ? (
            <div className={styles.heroMedia}>
              <Media src={image.src} alt={image.alt || title} sizes="(max-width: 900px) 100vw, 45vw" priority />
            </div>
          ) : null}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Formations disponibles</h2>
            <p>Choisissez la formation adaptée au rôle et au niveau de vos agents.</p>
          </div>

          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.card}>
                  {item.image ? (
                    <div className={styles.cardMedia}>
                      <Media src={item.image.src} alt={item.image.alt} sizes="(max-width: 700px) 100vw, 33vw" />
                    </div>
                  ) : null}
                  <div className={styles.cardBody}>
                    <span className={styles.cardTitle}>{item.title}</span>
                    <p>{item.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
