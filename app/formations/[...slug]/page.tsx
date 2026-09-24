import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { trainingTiles } from "@/src/content/home";
import { findFormationNode, getAllFormationPaths, type FormationNode, type Crumb } from "@/src/content/formations-catalog";
import { CategoryPage } from "@/src/components/formations/CategoryPage";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

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

  return {
    title: node.title,
    description,
    alternates: { canonical: href },
  };
}

export default async function FormationDetailPage(props: PageProps<"/formations/[...slug]">) {
  const { slug } = await props.params;
  const result = findFormationNode(slug);

  if (!result) notFound();

  const { node, trail } = result;

  if (node.kind === "course") {
    return <CourseLeaf trail={trail} title={node.title} content={node.content} />;
  }

  const items = node.children.map((child) => ({
    title: child.title,
    href: trail[trail.length - 1].href + child.slug + "/",
    description: describeChild(child),
    image: imageOfChild(child),
  }));

  if (slug.length === 1) {
    const tile = trainingTiles.find((t) => t.href === `/formations/${slug[0]}/`);
    if (tile) {
      return <CategoryPage trail={trail} title={node.title} description={node.description} image={tile.image} items={items} />;
    }
  }

  return <CategoryPage trail={trail as Crumb[]} title={node.title} description={node.description} items={items} />;
}
