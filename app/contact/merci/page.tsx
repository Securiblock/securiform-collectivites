import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/content/home";
import { contactAvailability } from "@/src/content/contact";
import { epiCategories } from "@/src/content/epi";
import contactStyles from "../page.module.css";
import styles from "./page.module.css";

// Page de confirmation, atteinte après l'envoi du formulaire de contact.
export const metadata: Metadata = {
  title: "Message envoyé",
  description: "Confirmation de l'envoi de votre message à SECURIFORM Collectivités.",
  robots: { index: false, follow: true },
};

const STORE_URL = "https://securistore.fr/";

const nextSteps = [
  "Notre équipe étudie votre demande.",
  "Nous vous recontactons pour préciser votre besoin : nombre d'agents, lieu, période.",
  "Vous recevez une proposition adaptée à votre collectivité.",
];

export default function MerciPage() {
  return (
    <>
      <section className={contactStyles.hero}>
        <div className={`container ${contactStyles.heroInner}`}>
          <div className={contactStyles.heroText}>
            <p className={contactStyles.eyebrow}>Message envoyé</p>
            <h1>Merci, votre demande est bien arrivée</h1>
            <p>
              Notre équipe revient vers vous rapidement. Pour toute urgence, appelez-nous au{" "}
              <a href={siteConfig.phoneHref} className={styles.phone}>
                {siteConfig.phone}
              </a>
              .
            </p>
            <div className={styles.actions}>
              <Link href="/" className="btn btn-white">
                Retour à l&apos;accueil
              </Link>
              <Link href="/formations/" className="btn btn-outline">
                Voir nos formations
              </Link>
            </div>
          </div>

          <div className={styles.steps}>
            <h2>Et maintenant&nbsp;?</h2>
            <ol>
              {nextSteps.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <p className={styles.hours}>
              {contactAvailability.title} : {contactAvailability.description}
            </p>
          </div>
        </div>
      </section>

      <section className={`section ${styles.store}`} aria-labelledby="titre-boutique">
        <div className="container">
          <div className={styles.storeCard}>
            <div className={styles.storeText}>
              <Image
                src="/images/logos/securistore-transparent.png"
                alt="Securistore – Équipements de Protection Individuelle"
                width={1243}
                height={235}
                className={styles.storeLogo}
              />
              <p className={styles.storeEyebrow}>Notre boutique en ligne</p>
              <h2 id="titre-boutique">En attendant notre réponse, équipez vos agents</h2>
              <p>
                SECURIFORM dispose de sa propre boutique : Securistore. Retrouvez-y nos équipements de protection
                individuelle, nos kits prêts à l&apos;emploi et nos produits pour la sécurité des collectivités.
              </p>
              <ul className={styles.categories}>
                {epiCategories.map((category) => (
                  <li key={category.title}>{category.title}</li>
                ))}
              </ul>
            </div>

            <div className={styles.storeActions}>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Découvrir la boutique <span aria-hidden="true">↗</span>
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
              <Link href="/equipements-epi/" className="btn btn-ghost">
                Nos équipements EPI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
