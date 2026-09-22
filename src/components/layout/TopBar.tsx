import { siteConfig } from "@/src/content/home";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contact}>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <a className={styles.entreprises} href="https://www.securiform.fr/">
          Vous êtes une entreprise ? securiform.fr
        </a>
      </div>
    </div>
  );
}
