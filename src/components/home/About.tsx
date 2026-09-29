import Link from "next/link";
import { Media } from "@/src/components/ui/Media";
import { about, aboutFacts } from "@/src/content/home";
import styles from "./About.module.css";

export function About() {
  const since = aboutFacts.find((fact) => fact.label === "Depuis");
  const facts = aboutFacts.filter((fact) => fact !== since);

  return (
    <section className={`section ${styles.about}`} aria-labelledby="titre-presentation">
      <div className={`container ${styles.inner}`}>
        <div className={styles.visual}>
          <div className={styles.photo}>
            <Media
              src="/images/about/agent-equipe.webp"
              alt="Agent en tenue de protection complète lors d'une formation à l'habilitation électrique"
              sizes="(max-width: 900px) 100vw, 40vw"
            />
          </div>
          {since ? (
            <div className={styles.badge}>
              <span className={styles.badgeLabel}>{since.label}</span>
              <span className={styles.badgeValue}>{since.value}</span>
              <span className={styles.badgeText}>au service des collectivités</span>
            </div>
          ) : null}
        </div>

        <div className={styles.aboutText}>
          <p className={styles.kicker}>SECURIFORM© Collectivités</p>
          <h2 id="titre-presentation">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}</dd>
              </div>
            ))}
          </dl>

          <Link className="btn btn-primary" href={about.ctaHref}>
            {about.ctaLabel} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
