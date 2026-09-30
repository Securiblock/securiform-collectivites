import type { Metadata } from "next";
import Link from "next/link";
import { ToolHero } from "@/src/components/outils/ToolHero";
import { formatDateFr } from "@/src/lib/dates";
import { sql } from "@/src/lib/db";
import { annulerRappel } from "../actions";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Annuler un rappel de recyclage",
  robots: { index: false, follow: false },
};

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

type Rappel = { libelle: string; echeance: string };

async function trouverRappel(jeton: string): Promise<Rappel | null> {
  if (!UUID_PATTERN.test(jeton)) return null;
  try {
    const rows = (await sql()`SELECT libelle, echeance FROM rappels_recyclage WHERE id = ${jeton}`) as Rappel[];
    return rows[0] ?? null;
  } catch (cause) {
    console.error("Lecture du rappel impossible :", cause);
    return null;
  }
}

// Le lien de l'email mène à un bouton de confirmation (pas de suppression directe au clic) :
// les antivirus de messagerie qui visitent les liens ne peuvent donc pas annuler par erreur.
export default async function AnnulerRappelPage(props: PageProps<"/outils/calculateur-recyclage/annuler">) {
  const { jeton, statut } = await props.searchParams;
  const annule = statut === "annule";
  const rappel = !annule && typeof jeton === "string" ? await trouverRappel(jeton) : null;

  return (
    <>
      <ToolHero
        eyebrow="Rappel de recyclage"
        title="Annuler un rappel"
        description="Vous pouvez annuler à tout moment le rappel par email enregistré avec le calculateur de recyclage."
        breadcrumb={[
          { label: "Outils", href: "/outils/" },
          { label: "Calculateur de recyclage", href: "/outils/calculateur-recyclage/" },
        ]}
      />

      <section className="section">
        <div className={`container ${styles.wrap}`}>
          {annule ? (
            <div className={styles.card} role="status">
              <h2>Rappel annulé</h2>
              <p>Votre rappel a été annulé et votre adresse email a été supprimée de notre base.</p>
              <Link className="btn btn-primary" href="/outils/calculateur-recyclage/">
                Retour au calculateur
              </Link>
            </div>
          ) : rappel ? (
            <form className={styles.card} action={annulerRappel}>
              <h2>Confirmer l&apos;annulation</h2>
              <p>
                Rappel pour <strong>{rappel.libelle}</strong>, échéance le {formatDateFr(rappel.echeance)}.
              </p>
              <p>En confirmant, votre adresse email est immédiatement supprimée de notre base.</p>
              <input type="hidden" name="jeton" value={String(jeton)} />
              <button type="submit" className="btn btn-primary">
                Annuler ce rappel
              </button>
            </form>
          ) : (
            <div className={styles.card}>
              <h2>Lien invalide ou déjà utilisé</h2>
              <p>
                Ce rappel n&apos;existe pas ou a déjà été annulé. Si vous pensez qu&apos;il s&apos;agit d&apos;une erreur,{" "}
                <Link href="/contact/">contactez-nous</Link>.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
