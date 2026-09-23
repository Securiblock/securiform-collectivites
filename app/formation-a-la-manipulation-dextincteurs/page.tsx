import type { Metadata } from "next";
import { formationLeaves } from "@/src/content/formations-catalog";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

const entry = formationLeaves.find((leaf) => leaf.href === "/formation-a-la-manipulation-dextincteurs/")!;

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
  alternates: { canonical: entry.href },
};

export default function FormationManipulationExtincteursPage() {
  return <CourseLeaf entry={entry} />;
}
