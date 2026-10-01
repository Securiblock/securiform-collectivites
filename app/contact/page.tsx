import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/src/content/home";
import { contactHero, contactAvailability, contactArea, contactChecklist } from "@/src/content/contact";
import { getCourseGroups, isKnownCourseTitle } from "@/src/content/formations-catalog";
import { formRenderTime } from "@/src/lib/anti-spam";
import { ToolCallout } from "@/src/components/outils/ToolCallout";
import { questionnaireHref } from "@/src/content/outils";
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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.5 6h17v12h-17zM3.5 6l8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 21s-6.5-5.8-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 15.2 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default async function ContactPage(props: PageProps<"/contact">) {
  const { formation, message } = await props.searchParams;
  const requested = typeof formation === "string" ? formation : "";
  const defaultFormation = isKnownCourseTitle(requested) ? requested : "";
  // Message pré-rempli par le questionnaire « Quelle formation me faut-il ? » (modifiable par le visiteur).
  const defaultMessage = typeof message === "string" ? message.slice(0, 1000) : "";
  // Heure d'affichage du formulaire, contrôlée à l'envoi (anti-spam).
  const renderedAt = formRenderTime();

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>{contactHero.eyebrow}</p>
            <h1>{contactHero.title}</h1>
            <p>{contactHero.description}</p>
          </div>

          <ul className={styles.channels}>
            <li>
              <a href={siteConfig.phoneHref} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <PhoneIcon />
                </span>
                <span>
                  <span className={styles.channelLabel}>Téléphone</span>
                  <span className={styles.channelValue}>{siteConfig.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <MailIcon />
                </span>
                <span>
                  <span className={styles.channelLabel}>Email</span>
                  <span className={styles.channelValue}>{siteConfig.email}</span>
                </span>
              </a>
            </li>
            <li>
              <div className={styles.channel}>
                <span className={styles.channelIcon}>
                  <PinIcon />
                </span>
                <span>
                  <span className={styles.channelLabel}>Adresse</span>
                  <span className={styles.channelValue}>
                    {siteConfig.address.streetAddress}, {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.addressLocality}
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="formulaire" className={`section ${styles.formSection}`} aria-labelledby="titre-formulaire">
        <div className={`container ${styles.formGrid}`}>
          <div className={styles.formCard}>
            <h2 id="titre-formulaire">Envoyez-nous un message</h2>
            <p className={styles.formIntro}>
              {defaultFormation
                ? `Vous êtes intéressé par la formation « ${defaultFormation} ». Précisez votre besoin, nous vous répondons rapidement.`
                : "Décrivez-nous votre projet, nous vous répondons rapidement."}
            </p>
            <ContactForm
              courseGroups={getCourseGroups()}
              defaultFormation={defaultFormation}
              defaultMessage={defaultMessage}
              renderedAt={renderedAt}
            />
          </div>

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h2>{contactChecklist.title}</h2>
              <p className={styles.asideIntro}>{contactChecklist.description}</p>
              <ol className={styles.checklist}>
                {contactChecklist.items.map((item, index) => (
                  <li key={item}>
                    <span>{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            <dl className={styles.infoCard}>
              <div>
                <dt>{contactAvailability.title}</dt>
                <dd>{contactAvailability.description}</dd>
              </div>
              <div>
                <dt>{contactArea.title}</dt>
                <dd>{contactArea.description}</dd>
              </div>
            </dl>

            <ToolCallout
              icon="questionnaire"
              title={"Vous ne savez pas encore quelle formation choisir ?"}
              text="Notre questionnaire vous oriente en 4 questions, puis pré-remplit ce formulaire pour vous."
              href={questionnaireHref()}
              cta="Faire le questionnaire"
            />
          </aside>
        </div>
      </section>

      <section className={`section ${styles.store}`}>
        <div className="container">
          <div className={styles.storeInner}>
            <div className={styles.storeText}>
              <Image
                src="/images/logos/securistore-transparent.png"
                alt="Securistore – Équipements de Protection Individuelle"
                width={1243}
                height={235}
                className={styles.storeLogo}
              />
              <h2>Notre magasin</h2>
              <p>Découvrez notre gamme d&apos;équipements et de produits pour la sécurité des collectivités.</p>
            </div>
            <a href="https://securistore.fr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visiter le magasin <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
