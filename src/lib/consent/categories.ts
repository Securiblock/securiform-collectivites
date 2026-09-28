export type ConsentCategoryId = "necessaire" | "audience";

export type ConsentCategoryMeta = {
  id: ConsentCategoryId;
  label: string;
  description: string;
  required: boolean;
};

export const CONSENT_CATEGORIES: ConsentCategoryMeta[] = [
  {
    id: "necessaire",
    label: "Cookies essentiels",
    description:
      "Nécessaires au fonctionnement du site, notamment pour mémoriser vos préférences de cookies. Toujours actifs.",
    required: true,
  },
  {
    id: "audience",
    label: "Mesure d'audience",
    description:
      "Permettraient de mesurer la fréquentation du site. Aucun outil de ce type n'est utilisé sur ce site à ce jour.",
    required: false,
  },
];
