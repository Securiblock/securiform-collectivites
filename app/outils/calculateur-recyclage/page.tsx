import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { ToolHero } from "@/src/components/outils/ToolHero";
import { recyclageFormations } from "@/src/content/recyclage";
import { todayInFrance } from "@/src/lib/dates";
import { RecyclageCalculator } from "./RecyclageCalculator";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Calculateur de recyclage",
  description:
    "Calculez la date d'échéance d'une formation sécurité (SST, AIPR, habilitation électrique, conduite d'engins) et recevez un rappel avant le recyclage.",
  alternates: {
    canonical: "/outils/calculateur-recyclage/",
  },
};

export default async function CalculateurRecyclagePage(props: PageProps<"/outils/calculateur-recyclage">) {
  // Page rendue à chaque visite : la date du jour sert au calcul et à borner le champ date.
  await connection();
  const today = todayInFrance();
  // Formation présélectionnée depuis une fiche formation (?formation=sst).
  const { formation } = await props.searchParams;
  const initialFormation = recyclageFormations.some((item) => item.key === formation) ? String(formation) : "";

  return (
    <>
      <ToolHero
        eyebrow="Outil gratuit"
        title="Calculateur de recyclage"
        description="Choisissez une formation et la date à laquelle vos agents l'ont suivie : nous calculons l'échéance et vous aidons à ne pas la laisser passer."
        breadcrumb={[{ label: "Outils", href: "/outils/" }]}
      />

      <section className="section" aria-labelledby="titre-calcul">
        <div className="container">
          <h2 id="titre-calcul" className="sr-only">
            Calculer une échéance
          </h2>
          <RecyclageCalculator formations={recyclageFormations} today={today} initialFormation={initialFormation} />

          <div className={styles.disclaimer}>
            <h3>Comment sont calculées ces dates ?</h3>
            <p>
              L&apos;échéance correspond à la date de formation augmentée de la durée de validité. Les durées marquées
              « référence réglementaire » sont indicatives : la date qui fait foi est celle figurant sur le titre,
              l&apos;attestation ou l&apos;autorisation délivrée à l&apos;agent. Le rappel est programmé 3 mois avant
              l&apos;échéance.
            </p>
            <p>
              Les données saisies pour le calcul restent dans votre navigateur. Seule l&apos;inscription au rappel par
              email est enregistrée, jusqu&apos;à l&apos;échéance au plus tard (
              <Link href="/politique-de-confidentialite/">politique de confidentialité</Link>).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
