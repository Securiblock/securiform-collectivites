import Link from "next/link";
import { LogoMark } from "@/src/icons/LogoMark";
import { navLinks, headerCta } from "@/src/content/home";
import { MobileNav } from "./MobileNav";
import { TopBar } from "./TopBar";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <TopBar />
      <header className={styles.siteHeader}>
        <div className={`container ${styles.inner}`}>
          <Link className={styles.logo} href="/" aria-label="SECURIFORM Collectivités – accueil">
            <LogoMark className={styles.logoMark} />
            <span className={styles.logoText}>
              SECURIFORM
              <small>Collectivités</small>
            </span>
          </Link>
          <MobileNav navLinks={navLinks} cta={headerCta} />
        </div>
      </header>
    </>
  );
}
