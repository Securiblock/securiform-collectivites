import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerColumns, footerLegalLinks } from "@/src/content/home";
import { ManageCookiesLink } from "@/src/components/consent/ManageCookiesLink";
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
                src="/images/logos/securiform-icon-mark.png"
                alt=""
                width={44}
                height={44}
                className={styles.logoMark}
              />
              <span className={styles.logoText}>
                SECURIFORM
                <small>Collectivités</small>
              </span>
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
            {footerLegalLinks.map((link) => (
              <span key={link.href}>
                <Link href={link.href}>{link.label}</Link>
                {" · "}
              </span>
            ))}
            <ManageCookiesLink />
          </p>
        </div>
      </div>
    </footer>
  );
}
