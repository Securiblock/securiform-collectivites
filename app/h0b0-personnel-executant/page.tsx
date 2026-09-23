import type { Metadata } from "next";
import { formationLeaves } from "@/src/content/formations-catalog";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

const entry = formationLeaves.find((leaf) => leaf.href === "/h0b0-personnel-executant/")!;

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
  alternates: { canonical: entry.href },
};

export default function H0b0PersonnelExecutantPage() {
  return <CourseLeaf entry={entry} />;
}
