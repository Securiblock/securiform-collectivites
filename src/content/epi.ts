export type EpiCategory = {
  title: string;
  description: string;
};

export const epiHero = {
  eyebrow: "Équipements de protection",
  title: "Équipements de protection individuelle (EPI)",
  description:
    "Nous accompagnons vos services dans le choix et le suivi des équipements de protection individuelle adaptés aux risques de vos agents.",
};

export const epiIntro = {
  title: "Des équipements adaptés à chaque poste",
  paragraphs: [
    "Le choix des équipements de protection individuelle dépend des risques identifiés pour chaque poste de travail : voirie, espaces verts, collecte des déchets, ateliers ou bâtiments communaux.",
    "Nous conseillons vos services sur le choix des EPI conformes aux normes en vigueur et sur les bonnes pratiques de port et d'entretien, en complément de nos formations sécurité.",
  ],
};

export const epiCategories: EpiCategory[] = [
  {
    title: "Protection de la tête",
    description: "Casques et casquettes anti-heurt adaptés aux travaux de voirie et d'espaces verts.",
  },
  {
    title: "Protection anti-chute",
    description: "Harnais, longes et systèmes d'arrêt de chute pour les travaux en hauteur.",
  },
  {
    title: "Protection des mains",
    description: "Gants adaptés aux risques mécaniques, thermiques et chimiques.",
  },
  {
    title: "Protection des pieds",
    description: "Chaussures et bottes de sécurité conformes aux normes en vigueur.",
  },
  {
    title: "Protection respiratoire et auditive",
    description: "Masques, casques anti-bruit et bouchons d'oreilles adaptés aux travaux bruyants ou poussiéreux.",
  },
  {
    title: "Vêtements de haute visibilité",
    description: "Vêtements normés pour les interventions sur voirie et en conditions de faible visibilité.",
  },
];

export const epiKits = {
  eyebrow: "Habilitation électrique",
  title: "Des kits prêts à l'emploi",
  paragraphs: [
    "En complément de nos formations à l'habilitation électrique, nous proposons des kits de protection individuelle prêts à l'emploi, adaptés à chaque niveau d'habilitation : personnel non électricien (BE Manœuvre, BS) et personnel électricien (B1V-B2V-BR-BC).",
    "Chaque kit regroupe les équipements nécessaires : écran facial, gants isolants, outillage isolé, cadenas de consignation et housse de transport.",
  ],
  image: {
    src: "/images/epi/kits-epi.webp",
    alt: "Kits de protection individuelle pour l'habilitation électrique : écran facial, gants isolants et outillage",
  },
  store: {
    tagline: "Ces kits et l'ensemble de nos équipements de protection individuelle sont disponibles sur notre boutique en ligne.",
    label: "Découvrir nos kits sur Securistore",
    href: "https://securistore.fr/",
    logo: {
      src: "/images/logos/securistore-transparent.png",
      alt: "Securistore – Équipements de Protection Individuelle",
      width: 1243,
      height: 235,
    },
  },
};
