import type { Metadata } from "next";
import { formationLeaves } from "@/src/content/formations-catalog";
import { CourseLeaf } from "@/src/components/formations/CourseLeaf";

const entry = formationLeaves.find((leaf) => leaf.href === "/be-manoeuvre/")!;

export const metadata: Metadata = {
  title: entry.title,
  description: entry.description,
  alternates: { canonical: entry.href },
};

export default function BeManoeuvrePage() {
  return <CourseLeaf entry={entry} />;
}
