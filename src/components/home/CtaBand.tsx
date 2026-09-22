import Link from "next/link";
import { cta } from "@/src/content/home";
import styles from "./CtaBand.module.css";

export function CtaBand() {
  return (
    <section className={styles.cta} aria-labelledby="titre-cta">
      <div className="container">
        <div>
          <h2 id="titre-cta">{cta.title}</h2>
          <p>{cta.description}</p>
        </div>
        <div className={styles.ctaActions}>
          {cta.actions.map((action) => (
            <Link
              key={action.href}
              className={`btn ${action.variant === "white" ? "btn-white" : "btn-outline"}`}
              href={action.href}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
