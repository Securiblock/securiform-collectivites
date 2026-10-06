import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { CtaBand } from "@/src/components/home/CtaBand";
import { ToolCallout, type ToolLink } from "@/src/components/outils/ToolCallout";
import { siteConfig } from "@/src/content/home";
import type { Crumb, CourseContent } from "@/src/content/formations-catalog";
import { breadcrumbJsonLd, courseJsonLd, serializeJsonLd } from "@/src/lib/json-ld";
import styles from "./CourseLeaf.module.css";

type CourseLeafProps = {
  trail: Crumb[];
  title: string;
  content: CourseContent;
  tool?: ToolLink;
};

const INTERVENTION = "Directement dans vos services, dans le nord de la France.";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12.5 10 17.5 19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CourseLeaf({ trail, title, content, tool }: CourseLeafProps) {
  const ancestors = trail.slice(0, -1);
  const parent = ancestors[ancestors.length - 1];
  const contactHref = `/contact/?formation=${encodeURIComponent(title)}#formulaire`;

  const facts = [
    { label: "Durée", value: content.duration },
    { label: "Effectif", value: content.groupSize },
    { label: "Intervention", value: INTERVENTION },
    { label: "Validation", value: content.validation },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  const jsonLd = [breadcrumbJsonLd(trail), courseJsonLd(title, content.description, trail[trail.length - 1].href)];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <section className={styles.hero}>
        {content.image ? (
          <div className={styles.heroMedia}>
            <Media src={content.image.src} alt="" sizes="100vw" priority />
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
          <h1>{title}</h1>
          <p className={styles.heroText}>{content.description}</p>

          <ul className={styles.chips}>
            {content.duration && content.duration.length <= 40 ? <li>{content.duration}</li> : null}
            {content.groupSize ? <li>{content.groupSize}</li> : null}
            <li>Nord de la France</li>
          </ul>

          <div className={styles.heroActions}>
            <Link className="btn btn-primary" href={contactHref}>
              Demander un devis
            </Link>
            <a className={`btn ${styles.btnGlass}`} href={siteConfig.phoneHref}>
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <p className={styles.eyebrow}>Au programme</p>
            <h2 className={styles.subhead}>Objectifs de la formation</h2>
            <ol className={styles.points}>
              {content.points.map((point) => (
                <li key={point}>
                  <span className={styles.check}>
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ol>

            {parent ? (
              <Link className={styles.back} href={parent.href}>
                ← Toutes les formations « {parent.title} »
              </Link>
            ) : null}
          </div>

          <aside className={styles.sidebar} aria-labelledby="en-bref">
            <h2 id="en-bref" className={styles.sidebarTitle}>
              En bref
            </h2>
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <Link className={`btn btn-primary ${styles.sidebarCta}`} href={contactHref}>
              Organiser cette formation
            </Link>
            {tool ? <ToolCallout {...tool} className={styles.sidebarTool} /> : null}
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
