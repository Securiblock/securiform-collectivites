import type { Metadata } from "next";
import { siteConfig } from "@/src/content/home";
import { contactHero, contactAvailability, contactArea, contactChecklist } from "@/src/content/contact";
import { ContactForm } from "./ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez SECURIFORM Collectivités pour construire une offre de formation sécurité adaptée aux agents de votre collectivité.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.split}>
        <div className={styles.splitPanel}>
          <p className={styles.eyebrow}>{contactHero.eyebrow}</p>
          <h1>{contactHero.title}</h1>
          <p className={styles.heroText}>{contactHero.description}</p>
          <a className={styles.phone} href={siteConfig.phoneHref}>
            {siteConfig.phone}
          </a>
          <a className={styles.email} href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>

        <div className={styles.infoPanel}>
          <dl className={styles.infoList}>
            <div>
              <dt>Disponibilité</dt>
              <dd>{contactAvailability.description}</dd>
            </div>
            <div>
              <dt>{contactArea.title}</dt>
              <dd>{contactArea.description}</dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>
                SECURIFORM
                <br />
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={`section ${styles.formSection}`}>
        <div className={`container ${styles.formGrid}`}>
          <div>
            <h2>Envoyez-nous un message</h2>
            <p className={styles.formIntro}>Décrivez-nous votre projet, nous vous répondons rapidement.</p>
            <ContactForm />
          </div>

          <div>
            <h2>{contactChecklist.title}</h2>
            <p className={styles.formIntro}>{contactChecklist.description}</p>
            <ol className={styles.checklist}>
              {contactChecklist.items.map((item, index) => (
                <li key={item}>
                  <span>{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
