export type VgpItem = {
  title: string;
  description: string;
  image: { src: string; alt: string };
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Fact = {
  label: string;
  value: string;
  href?: string;
};

export const vgpHero = {
  eyebrow: "Vérifications réglementaires",
  title: "Vérifications Générales Périodiques (VGP)",
  paragraphs: [
    "Le Code du travail impose à l'employeur de faire vérifier périodiquement certains équipements de travail et moyens de protection, afin de détecter à temps toute détérioration susceptible de créer une situation dangereuse.",
    "Nos vérificateurs interviennent directement dans vos services et vous remettent, à l'issue de chaque contrôle, un rapport détaillé avec les préconisations nécessaires en cas de non-conformité.",
  ],
  image: { src: "/images/vgp/engins-de-chantier.webp", alt: "Engin de chantier sur un site de travaux" },
};

export const vgpFacts: Fact[] = [
  { label: "Équipements couverts", value: "5 familles" },
  { label: "Intervention", value: "Nord de la France" },
];

export const vgpHeroSummary =
  "Nos vérificateurs contrôlent vos engins, échafaudages, EPI antichute, extincteurs et installations électriques, directement dans vos services.";

export const vgpObligation = {
  eyebrow: "Obligation réglementaire",
  title: "Des équipements vérifiés, des agents protégés",
  deliverablesTitle: "Ce que vous recevez",
  deliverables: [
    "Une intervention directement dans vos services",
    "Un rapport détaillé remis à l'issue de chaque contrôle",
    "Les préconisations nécessaires en cas de non-conformité",
    "Une alerte avant chaque échéance pour planifier la vérification suivante",
  ],
};

export const vgpItemsHead = {
  title: "Les équipements que nous vérifions",
  description: "Cinq familles d'équipements contrôlées par nos vérificateurs, directement dans vos services.",
};

export const vgpItems: VgpItem[] = [
  {
    title: "Engins de chantier et de manutention",
    description: "Chariots élévateurs, nacelles, engins de chantier, grues auxiliaires de chargement.",
    image: { src: "/images/vgp/engins-de-chantier.webp", alt: "Engin de chantier sur un site de travaux" },
  },
  {
    title: "Échafaudages fixes et roulants",
    description: "Contrôle de montage et vérifications périodiques selon les recommandations R408 et R457.",
    image: { src: "/images/vgp/echafaudages.webp", alt: "Échafaudage fixe monté sur une façade" },
  },
  {
    title: "Équipements de protection contre les chutes",
    description: "Harnais, longes, points d'ancrage et lignes de vie.",
    image: { src: "/images/vgp/travaux-hauteur.webp", alt: "Agent équipé d'un harnais lors d'une intervention en hauteur" },
  },
  {
    title: "Extincteurs et moyens de secours",
    description: "Vérification annuelle du bon fonctionnement des extincteurs et des robinets d'incendie armés (RIA).",
    image: { src: "/images/vgp/extincteurs.webp", alt: "Extincteur mural avant vérification" },
  },
  {
    title: "Installations électriques",
    description: "Contrôle de conformité des installations et équipements électriques de vos bâtiments.",
    image: { src: "/images/vgp/installations-electriques.webp", alt: "Électriciens contrôlant un tableau électrique" },
  },
];

export const vgpProcessHead = {
  title: "Comment se déroule une vérification",
  description: "Une démarche simple, de la prise de contact au suivi de vos équipements dans le temps.",
};

export const vgpProcessSteps: ProcessStep[] = [
  {
    title: "Prise de contact",
    description: "Vous nous transmettez la liste et la localisation des équipements à vérifier.",
  },
  {
    title: "Intervention sur site",
    description: "Un vérificateur se déplace dans vos services pour contrôler chaque équipement.",
  },
  {
    title: "Rapport détaillé",
    description: "Vous recevez un rapport avec les observations et les éventuelles non-conformités à traiter.",
  },
  {
    title: "Suivi dans le temps",
    description: "Nous vous alertons avant chaque échéance pour planifier la vérification suivante.",
  },
];
