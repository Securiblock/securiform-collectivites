import type { Metadata } from "next";
import { formationLeaves } from "@/src/content/formations-catalog";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

const entry = formationLeaves.find((leaf) => leaf.href === "/equipier-de-premiere-intervention-epi/")!;

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
  alternates: { canonical: entry.href },
};

export default function EquipierDePremiereInterventionEpiPage() {
  return <CourseLeaf entry={entry} />;
}
