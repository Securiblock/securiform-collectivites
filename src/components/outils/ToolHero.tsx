import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./ToolHero.module.css";

type ToolHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href: string }[];
  children?: ReactNode;
};

export function ToolHero({ eyebrow, title, description, breadcrumb, children }: ToolHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {breadcrumb ? (
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <ol>
              {breadcrumb.map((crumb) => (
                <li key={crumb.href}>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </li>
              ))}
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        ) : null}
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.text}>{description}</p>
        {children}
      </div>
    </section>
  );
}
