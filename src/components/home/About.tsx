import Link from "next/link";
import { about, aboutFacts } from "@/src/content/home";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={`section ${styles.about}`} aria-labelledby="titre-presentation">
      <div className={`container ${styles.inner}`}>
        <div className={styles.aboutText}>
          <h2 id="titre-presentation">{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link className="btn btn-ghost" href={about.ctaHref}>
            {about.ctaLabel}
          </Link>
        </div>

        <dl className={styles.facts}>
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
