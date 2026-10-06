import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { Commitments } from "@/src/components/home/Commitments";
import { CtaBand } from "@/src/components/home/CtaBand";
import { ToolCallout, type ToolLink } from "@/src/components/outils/ToolCallout";
import { siteConfig } from "@/src/content/home";
import type { Crumb } from "@/src/content/formations-catalog";
import { breadcrumbJsonLd, serializeJsonLd } from "@/src/lib/json-ld";
import styles from "./CategoryPage.module.css";

type Picture = { src: string; alt: string };

type CategoryItem = {
  title: string;
  href: string;
  description: string;
  image?: Picture;
  facts: string[];
  isGroup: boolean;
};

type ThemeLink = { title: string; href: string; image: Picture };

type CategoryPageProps = {
  trail: Crumb[];
  title: string;
  description: string;
  image?: Picture;
  courseCount: number;
  items: CategoryItem[];
  otherThemes: ThemeLink[];
  tool?: ToolLink;
};

export function CategoryPage({ trail, title, description, image, courseCount, items, otherThemes, tool }: CategoryPageProps) {
  const ancestors = trail.slice(0, -1);
  const plural = courseCount > 1 ? "s" : "";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(trail)) }} />
      <section className={styles.hero}>
        {image ? (
          <div className={styles.heroMedia}>
            <Media src={image.src} alt="" sizes="100vw" priority />
          </div>
        ) : null}
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Fil d'ariane">
            <Link href="/formations/">Formations</Link>
            {ancestors.map((crumb) => (
              <span key={crumb.href}>
                <span aria-hidden="true">/</span>
                <Link href={crumb.href}>{crumb.title}</Link>
              </span>
            ))}
          </nav>
          <p className={styles.eyebrow}>Thématique</p>
          <h1>{title}</h1>
          <p className={styles.heroText}>{description}</p>

          <ul className={styles.heroFigures}>
            <li>
              <strong>{courseCount}</strong>
              formation{plural} disponible{plural}
            </li>
            <li>
              <strong>Sur site</strong>
              dans vos services
            </li>
            <li>
              <strong>Nord</strong>
              de la France
            </li>
          </ul>

          <div className={styles.heroActions}>
            <a className="btn btn-primary" href="#liste">
              Voir les formations
            </a>
            <Link className={`btn ${styles.btnGlass}`} href="/contact/#formulaire">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <section id="liste" className={`section ${styles.listSection}`} aria-labelledby="titre-liste">
        <div className="container">
          <div className={styles.listHead}>
            <div className="section-head">
              <h2 id="titre-liste">{items.some((item) => item.isGroup) ? "Choisissez votre profil" : "Formations disponibles"}</h2>
              <p>Choisissez la formation adaptée au rôle et au niveau de vos agents.</p>
            </div>
            <a className={styles.phoneLink} href={siteConfig.phoneHref}>
              Un doute ? Appelez-nous au <strong>{siteConfig.phone}</strong>
            </a>
          </div>

          <ul className={`${styles.list} ${items.length <= 2 ? styles.listWide : ""}`}>
            {items.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.card}>
                  <div className={styles.cardMedia}>
                    {item.image ? (
                      <Media src={item.image.src} alt={item.image.alt} sizes="(max-width: 700px) 100vw, 33vw" />
                    ) : null}
                    <span className={styles.cardIndex} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.cardTitle}>{item.title}</span>
                    <p>{item.description}</p>
                    {item.facts.length ? (
                      <ul className={styles.facts}>
                        {item.facts.map((fact) => (
                          <li key={fact}>{fact}</li>
                        ))}
                      </ul>
                    ) : null}
                    <span className={styles.cardMore}>
                      {item.isGroup ? "Voir les formations" : "Voir la formation"} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {tool ? <ToolCallout {...tool} className={styles.listTool} /> : null}
        </div>
      </section>

      <Commitments />

      <section className={`section ${styles.others}`} aria-labelledby="titre-autres">
        <div className="container">
          <div className="section-head">
            <h2 id="titre-autres">Les autres thématiques</h2>
            <p>Complétez votre plan de formation avec nos autres domaines d&apos;intervention.</p>
          </div>
          <ul className={styles.othersList}>
            {otherThemes.map((theme) => (
              <li key={theme.href}>
                <Link href={theme.href} className={styles.other}>
                  <Media src={theme.image.src} alt="" sizes="(max-width: 700px) 80vw, 25vw" />
                  <span className={styles.otherTitle}>
                    {theme.title} <span aria-hidden="true">→</span>
                  </span>
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
