export type OutilIcon = "questionnaire" | "calendrier";

export type OutilCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: OutilIcon;
};

export const outilsHero = {
  eyebrow: "Outils gratuits",
  title: "Nos outils pour piloter la sécurité de vos agents",
  description:
    "Trouvez la bonne formation en quelques clics et ne laissez plus passer une date de recyclage. Gratuits, sans inscription.",
};

export const outils: OutilCard[] = [
  {
    title: "Quelle formation me faut-il ?",
    description:
      "Répondez à 4 questions sur votre besoin : nous vous orientons vers la formation adaptée et vous conseillons sur son organisation.",
    href: "/outils/quelle-formation/",
    cta: "Lancer le questionnaire",
    icon: "questionnaire",
  },
  {
    title: "Calculateur de recyclage",
    description:
      "Indiquez la date de la dernière formation : obtenez la date d'échéance, ajoutez-la à votre agenda ou recevez un rappel par email.",
    href: "/outils/calculateur-recyclage/",
    cta: "Calculer une échéance",
    icon: "calendrier",
  },
];

// Bandeau de mise en avant des outils (accueil, catalogue des formations).
export const outilsBand = {
  eyebrow: "Outils gratuits",
  title: "Organisez vos formations en quelques clics",
  description: "Sans inscription et sans engagement : trouvez la bonne formation et suivez les dates de recyclage de vos agents.",
};

// Liens courts vers chaque outil.
export function questionnaireHref(domaine?: string): string {
  return domaine ? `/outils/quelle-formation/?domaine=${encodeURIComponent(domaine)}` : "/outils/quelle-formation/";
}

export function calculateurHref(formation?: string): string {
  return formation
    ? `/outils/calculateur-recyclage/?formation=${encodeURIComponent(formation)}`
    : "/outils/calculateur-recyclage/";
}
