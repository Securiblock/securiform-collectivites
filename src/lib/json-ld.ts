import { siteConfig } from "@/src/content/home";
import type { Crumb } from "@/src/content/formations-catalog";

// Données structurées schema.org (résultats enrichis Google) pour les pages formation.

const absolute = (href: string) => `${siteConfig.url}${href}`;

const provider = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
};

export function breadcrumbJsonLd(trail: Crumb[]) {
  const items = [{ title: "Formations", href: "/formations/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.title,
      item: absolute(crumb.href),
    })),
  };
}

export function courseJsonLd(title: string, description: string, href: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: title,
    description,
    url: absolute(href),
    inLanguage: "fr",
    provider,
  };
}

// Sérialisation sûre dans une balise <script> (empêche une fermeture prématurée de la balise).
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
