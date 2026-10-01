import type { Metadata } from "next";
import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { StatsBand } from "@/src/components/home/StatsBand";
import { CtaBand } from "@/src/components/home/CtaBand";
import { ToolsBand } from "@/src/components/outils/ToolsBand";
import { formationsTree, type FormationNode } from "@/src/content/formations-catalog";
import { siteConfig, trainingTiles } from "@/src/content/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Formations sécurité pour les collectivités",
  description:
    "Conduite et CACES®, habilitation électrique, AIPR, travaux en hauteur, secourisme et incendie : toutes nos formations sécurité pour les agents des collectivités du nord de la France.",
  alternates: {
    canonical: "/formations/",
  },
};

type CourseLink = { title: string; href: string };

function collectCourses(node: FormationNode, href: string): CourseLink[] {
  if (node.kind === "course") return [{ title: node.title, href }];
  return node.children.flatMap((child) => collectCourses(child, `${href}${child.slug}/`));
}

const themes = formationsTree.map((node) => {
  const href = `/formations/${node.slug}/`;
  const courses = collectCourses(node, href);
  return {
    id: node.slug,
    title: node.title,
    href,
    description: node.kind === "category" ? node.description : node.content.description,
    image: trainingTiles.find((tile) => tile.href === href)?.image,
    courses: node.kind === "category" ? courses : [],
    count: courses.length,
  };
});

const totalCourses = themes.reduce((sum, theme) => sum + theme.count, 0);

const steps = [
  { title: "Étude de vos besoins", description: "Nous analysons vos services, vos équipements et les risques de vos agents." },
  { title: "Offre sur mesure", description: "Nous vous proposons un programme, un calendrier et des groupes adaptés." },
  { title: "Formation sur site", description: "Nos formateurs interviennent directement dans vos services." },
  { title: "Validation", description: "Attestation, autorisation de conduite ou avis d'habilitation selon la formation." },
];

export default function FormationsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Media src="/images/formations/conduite-caces.webp" alt="" sizes="100vw" priority />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.eyebrow}>Catalogue des formations</p>
          <h1>Toutes nos formations sécurité pour les agents des collectivités</h1>
          <p className={styles.heroText}>
            Des formations conformes à la réglementation, adaptées aux services techniques, espaces verts, voirie,
            propreté urbaine et bâtiments communaux.
          </p>
          <ul className={styles.heroFigures}>
            <li>
              <strong>{totalCourses}</strong> formations
            </li>
            <li>
              <strong>{themes.length}</strong> thématiques
            </li>
            <li>
              <strong>6 à 10</strong> stagiaires par groupe
            </li>
          </ul>
          <div className={styles.heroActions}>
            <a className="btn btn-primary" href="#catalogue">
              Parcourir le catalogue
            </a>
            <Link className={`btn ${styles.btnGlass}`} href="/contact/">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className={`section ${styles.catalog}`} id="catalogue" aria-labelledby="titre-catalogue">
        <div className={`container ${styles.catalogGrid}`}>
          <nav className={styles.themeNav} aria-label="Thématiques">
            <p className={styles.themeNavTitle}>Thématiques</p>
            <ul>
              {themes.map((theme) => (
                <li key={theme.id}>
                  <a href={`#${theme.id}`}>
                    <span>{theme.title}</span>
                    <span className={styles.themeCount}>{theme.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.themes}>
            <h2 id="titre-catalogue" className="sr-only">
              Catalogue des formations
            </h2>
            {themes.map((theme) => (
              <article key={theme.id} id={theme.id} className={styles.theme}>
                <div className={styles.themeHeader}>
                  {theme.image ? (
                    <div className={styles.themeMedia}>
                      <Media src={theme.image.src} alt="" sizes="(max-width: 900px) 100vw, 70vw" />
                    </div>
                  ) : null}
                  <div className={styles.themeHeading}>
                    <span className={styles.themeBadge}>
                      {theme.count} formation{theme.count > 1 ? "s" : ""}
                    </span>
                    <h3>{theme.title}</h3>
                  </div>
                </div>

                <div className={styles.themeBody}>
                  <p>{theme.description}</p>

                  {theme.courses.length ? (
                    <ul className={styles.courseList}>
                      {theme.courses.map((course) => (
                        <li key={course.href}>
                          <Link href={course.href}>
                            <span>{course.title}</span>
                            <span aria-hidden="true" className={styles.arrow}>
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <Link className={styles.themeLink} href={theme.href}>
                    {theme.courses.length ? "Voir la thématique" : "Voir la formation"}{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ToolsBand />

      <section className={`section ${styles.process}`} aria-labelledby="titre-deroulement">
        <div className="container">
          <div className="section-head">
            <h2 id="titre-deroulement">Comment se déroule une formation</h2>
            <p>
              Une démarche simple, pensée pour s&apos;adapter au fonctionnement de vos services. Un conseiller vous
              répond au <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
