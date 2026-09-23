import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trainingTiles } from "@/src/content/home";
import { formationLeaves } from "@/src/content/formations-catalog";
import { CategoryPage } from "@/src/components/formations/CategoryPage";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

function findEntry(slug: string[]) {
  const href = `/formations/${slug.join("/")}/`;
  const tile = trainingTiles.find((item) => item.href === href);
  if (tile) return { kind: "category" as const, tile };

  const leaf = formationLeaves.find((item) => item.href === href);
  if (leaf) return { kind: "leaf" as const, leaf };

  return null;
}

export function generateStaticParams() {
  const categoryParams = trainingTiles
    .filter((tile) => tile.href.startsWith("/formations/"))
    .map((tile) => ({ slug: tile.href.replace(/^\/formations\//, "").replace(/\/$/, "").split("/") }));

  const leafParams = formationLeaves
    .filter((leaf) => leaf.href.startsWith("/formations/"))
    .map((leaf) => ({ slug: leaf.href.replace(/^\/formations\//, "").replace(/\/$/, "").split("/") }));

  return [...categoryParams, ...leafParams];
}

export async function generateMetadata(props: PageProps<"/formations/[...slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const entry = findEntry(slug);
  if (!entry) return {};

  const href = entry.kind === "category" ? entry.tile.href : entry.leaf.href;
  const title = entry.kind === "category" ? entry.tile.title : entry.leaf.title;
  const description = entry.kind === "category" ? entry.tile.description : entry.leaf.description;

  return {
    title,
    description,
    alternates: { canonical: href },
  };
}

export default async function FormationDetailPage(props: PageProps<"/formations/[...slug]">) {
  const { slug } = await props.params;
  const entry = findEntry(slug);

  if (!entry) notFound();

  if (entry.kind === "category") {
    return <CategoryPage tile={entry.tile} />;
  }

  return <CourseLeaf entry={entry.leaf} />;
}
