import Link from "next/link";
import { siteConfig } from "@/src/content/home";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.eyebrow}>Page introuvable</p>
      <h1 className={styles.title}>Cette page n&apos;existe pas encore</h1>
      <p className={styles.text}>
        Le contenu que vous cherchez est en cours de préparation, ou l&apos;adresse a changé. Revenez à
        l&apos;accueil ou contactez-nous directement, nous vous répondrons rapidement.
      </p>
      <div className={styles.actions}>
        <Link href="/" className="btn btn-primary">
          Retour à l&apos;accueil
        </Link>
        <a href={siteConfig.phoneHref} className="btn btn-ghost">
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
