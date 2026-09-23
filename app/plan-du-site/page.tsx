import type { Metadata } from "next";
import Link from "next/link";
import { navLinks, trainingTiles, footerColumns, footerLegalLinks, headerCta } from "@/src/content/home";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Plan du site",
  description: "Toutes les pages du site SECURIFORM Collectivités : formations, services et informations légales.",
  alternates: {
    canonical: "/plan-du-site/",
  },
};

export default function PlanDuSitePage() {
  return (
    <>
      <section className={styles.band}>
        <div className="container">
          <h1>Plan du site</h1>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.label}>Navigation</h2>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link href={headerCta.href}>{headerCta.label}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.wide}>
            <h2 className={styles.label}>Formations</h2>
            <ul className={styles.list}>
              {trainingTiles.map((tile) => (
                <li key={tile.href}>
                  <Link href={tile.href}>{tile.title}</Link>
                  <ul className={styles.sublist}>
                    {tile.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className={styles.label}>{column.title}</h2>
              <ul className={styles.list}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className={styles.label}>Informations légales</h2>
            <ul className={styles.list}>
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
