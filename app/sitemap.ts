import type { MetadataRoute } from "next";
import { trainingTiles } from "@/src/content/home";
import { formationLeaves } from "@/src/content/formations-catalog";

const baseUrl = "https://www.securiform-collectivites.fr";

const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/formations/", priority: 0.9 },
  { path: "/vgp/", priority: 0.7 },
  { path: "/equipements-epi/", priority: 0.7 },
  { path: "/liens-utiles/", priority: 0.5 },
  { path: "/contact/", priority: 0.8 },
  { path: "/plan-du-site/", priority: 0.3 },
  { path: "/mentions-legales/", priority: 0.1 },
  { path: "/donnees-personnelles/", priority: 0.1 },
  { path: "/politique-de-confidentialite/", priority: 0.1 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const categoryRoutes = trainingTiles.map((tile) => ({ path: tile.href, priority: 0.6 }));
  const leafRoutes = formationLeaves.map((leaf) => ({ path: leaf.href, priority: 0.4 }));

  return [...staticRoutes, ...categoryRoutes, ...leafRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
