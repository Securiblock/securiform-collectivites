import type { Metadata } from "next";
import { ToolHero } from "@/src/components/outils/ToolHero";
import { getFormationDomains } from "@/src/content/formations-catalog";
import { calculateurHref } from "@/src/content/outils";
import { recyclageFormations } from "@/src/content/recyclage";
import { serviceRows } from "@/src/content/home";
import type { QuestionnaireDomaine } from "@/src/lib/questionnaire";
import { Questionnaire } from "./Questionnaire";

export const metadata: Metadata = {
  title: "Quelle formation me faut-il ?",
  description:
    "Répondez à quelques questions et trouvez la formation sécurité adaptée aux agents de votre collectivité : conduite d'engins, habilitation électrique, AIPR, secourisme…",
  alternates: {
    canonical: "/outils/quelle-formation/",
  },
};

// Données du catalogue réduites au strict nécessaire pour le composant client.
function buildDomaines(): QuestionnaireDomaine[] {
  const themes: QuestionnaireDomaine[] = getFormationDomains().map((domaine) => ({
    id: domaine.slug,
    title: domaine.title,
    kind: "theme",
    formations: domaine.courses.map((course) => {
      const recyclage = recyclageFormations.find((r) => course.href.startsWith(r.href));
      return {
        title: course.title,
        href: course.href,
        group: course.group,
        description: course.content.description,
        duration: course.content.duration,
        groupSize: course.content.groupSize,
        validation: course.content.validation,
        recyclage: recyclage ? { months: recyclage.months, href: calculateurHref(recyclage.key) } : undefined,
      };
    }),
  }));

  // Entrée par service municipal : les formations listées pour chaque service sur l'accueil
  // (un lien vers une thématique reprend toutes ses formations).
  const formations = themes.flatMap((theme) => theme.formations);
  const services: QuestionnaireDomaine[] = serviceRows.map((row) => ({
    id: `service-${row.icon}`,
    title: row.title,
    kind: "service",
    formations: row.links
      .flatMap((link) => formations.filter((formation) => formation.href.startsWith(link.href)))
      .filter((formation, index, all) => all.indexOf(formation) === index),
  }));

  return [...services.filter((service) => service.formations.length > 0), ...themes];
}

export default async function QuelleFormationPage(props: PageProps<"/outils/quelle-formation">) {
  // Thématique présélectionnée depuis une page formation (?domaine=habilitations-electriques).
  const { domaine } = await props.searchParams;
  const domaines = buildDomaines();
  const initialDomaine = domaines.some((d) => d.id === domaine) ? String(domaine) : undefined;

  return (
    <>
      <ToolHero
        eyebrow="Outil gratuit"
        title={"Quelle formation me faut-il ?"}
        description="Quatre questions pour trouver la formation adaptée à vos agents et savoir comment l'organiser. Aucune donnée n'est envoyée tant que vous ne demandez pas de devis."
        breadcrumb={[{ label: "Outils", href: "/outils/" }]}
      />

      <section className="section" aria-label="Questionnaire">
        <div className="container">
          <Questionnaire domaines={domaines} initialDomaine={initialDomaine} />
        </div>
      </section>
    </>
  );
}
