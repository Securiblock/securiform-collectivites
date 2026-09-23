import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/images/logos/logo-securiform-collectivite-transparent.png"
              alt="SECURIFORM Collectivités"
              width={1147}
              height={224}
              className={styles.logoImage}
              priority
            />
          </Link>
          <MobileNav navLinks={navLinks} cta={headerCta} />
        </div>
      </header>
    </>
  );
}
