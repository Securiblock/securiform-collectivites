import Link from "next/link";
import { LogoMark } from "@/src/icons/LogoMark";
import Image from "next/image";
import { siteConfig, footerColumns, footerLegalLinks } from "@/src/content/home";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div>
            <Link className={styles.logo} href="/" aria-label="SECURIFORM Collectivités – accueil">
              <Image
                src="/images/og-securiform-collectivites.jpg"
                alt="SECURIFORM Collectivités"
                width={1200}
                height={630}
                className={styles.logoImage}
                priority
              />
            </Link>
            <p>
              Le département de <a href="https://www.securiform.fr/">SECURIFORM</a> dédié à la formation
              sécurité des collectivités locales et territoriales.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2>{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2>Contact</h2>
            <address>
              SECURIFORM
              <br />
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
              <br />
              <br />
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <br />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </address>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {year} SECURIFORM – Tous droits réservés</p>
          <p>
            {footerLegalLinks.map((link, index) => (
              <span key={link.href}>
                <Link href={link.href}>{link.label}</Link>
                {index < footerLegalLinks.length - 1 ? " · " : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
