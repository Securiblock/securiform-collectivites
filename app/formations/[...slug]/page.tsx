import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trainingTiles } from "@/src/content/home";
import { findFormationNode, getAllFormationPaths, type FormationNode, type Crumb } from "@/src/content/formations-catalog";
import { CategoryPage } from "@/src/components/formations/CategoryPage";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";
import type { ToolLink } from "@/src/components/outils/ToolCallout";
import { calculateurHref, questionnaireHref } from "@/src/content/outils";
import { recyclageFormations } from "@/src/content/recyclage";

function describeChild(node: FormationNode): string {
  return node.kind === "category" ? node.description : node.content.description;
}

function imageOfChild(node: FormationNode): { src: string; alt: string } | undefined {
  return node.kind === "category" ? node.image : node.content.image;
}

export function generateStaticParams() {
  return getAllFormationPaths().map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/formations/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const result = findFormationNode(slug);
  if (!result) return {};

  const { node, trail } = result;
  const href = trail[trail.length - 1].href;
  const description = describeChild(node);

  // Image de partage dédiée à la formation (voir app/og/formations/[...slug]/route.tsx).
  const image = { url: `/og/formations/${slug.join("/")}/`, width: 1200, height: 630, alt: node.title };

  return {
    title: node.title,
    description,
    alternates: { canonical: href },
    openGraph: { type: "website", locale: "fr_FR", siteName: "SECURIFORM Collectivités", url: href, title: node.title, description, images: [image] },
    twitter: { card: "summary_large_image", title: node.title, description, images: [image.url] },
  };
}

export default async function FormationDetailPage(props: PageProps<"/formations/[...slug]">) {
  const { slug } = await props.params;
  const result = findFormationNode(slug);

  if (!result) notFound();

  const { node, trail } = result;
  const href = trail[trail.length - 1].href;

  if (node.kind === "course") {
    return <CourseLeaf trail={trail} title={node.title} content={node.content} tool={courseTool(href, slug[0])} />;
  }

  const items = node.children.map((child) => {
    const facts =
      child.kind === "course"
        ? [child.content.duration && child.content.duration.length <= 40 ? child.content.duration : null, child.content.groupSize].filter(
            (fact): fact is string => Boolean(fact),
          )
        : [`${countCourses(child)} formation${countCourses(child) > 1 ? "s" : ""}`];

    return {
      title: child.title,
      href: trail[trail.length - 1].href + child.slug + "/",
      description: describeChild(child),
      image: imageOfChild(child),
      facts,
      isGroup: child.kind === "category",
    };
  });

  const themeHref = `/formations/${slug[0]}/`;
  const themeTile = trainingTiles.find((t) => t.href === themeHref);
  const otherThemes = trainingTiles
    .filter((t) => t.href !== themeHref)
    .map((t) => ({ title: t.title, href: t.href, image: t.image }));

  return (
    <CategoryPage
      trail={trail as Crumb[]}
      title={node.title}
      description={node.description}
      image={node.image ?? themeTile?.image}
      courseCount={countCourses(node)}
      items={items}
      otherThemes={otherThemes}
      tool={{
        icon: "questionnaire",
        title: "Vous hésitez entre ces formations ?",
        text: "Répondez à quelques questions : nous vous indiquons la formation adaptée à vos agents et comment l'organiser.",
        href: questionnaireHref(slug[0]),
        cta: "Trouver ma formation",
      }}
    />
  );
}

// Encart outil d'une fiche formation : le calculateur si la formation a une durée de validité,
// sinon le questionnaire d'orientation (ouvert directement sur la thématique).
function courseTool(href: string, domaine: string): ToolLink {
  const recyclage = recyclageFormations.find((formation) => href.startsWith(formation.href));
  if (recyclage) {
    const duree = recyclage.months % 12 === 0 ? `${recyclage.months / 12} ans` : `${recyclage.months} mois`;
    return {
      icon: "calendrier",
      title: "Vos agents sont déjà formés ?",
      text: `Validité de référence : ${duree}. Calculez la date de recyclage et recevez un rappel avant l'échéance.`,
      href: calculateurHref(recyclage.key),
      cta: "Calculer l'échéance",
    };
  }
  return {
    icon: "questionnaire",
    title: "Pas sûr que ce soit la bonne formation ?",
    text: "Répondez à 4 questions : nous vous orientons vers la formation adaptée à vos agents.",
    href: questionnaireHref(domaine),
    cta: "Faire le questionnaire",
  };
}

function countCourses(node: FormationNode): number {
  return node.kind === "course" ? 1 : node.children.reduce((sum, child) => sum + countCourses(child), 0);
}
