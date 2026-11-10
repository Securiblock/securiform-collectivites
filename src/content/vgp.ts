import type { DetailSection } from "@/src/content/formations-details";

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
    description: "Nous recensons avec vous les équipements concernés et convenons d'une date d'intervention."
  },
  {
    title: "Inspection sur site",
    description: "Notre vérificateur contrôle l'équipement dans vos locaux : pièces critiques, sécurités, état d'usure."
  },
  {
    title: "Rapport détaillé",
    description: "Vous recevez un rapport de vérification écrit, mentionnant les observations et éventuelles réserves."
  },
  {
    title: "Suivi",
    description: "Nous vous accompagnons sur la levée des réserves et planifions la prochaine échéance."
  }
];

// Sections reprises à l'identique de la page VGP de securiform.fr.
export const vgpDetails: DetailSection[] = [
  {
    eyebrow: "Une obligation réglementaire",
    title: "Qu'est-ce qu'une VGP ?",
    blocks: [
      {
        type: "p",
        text: "La Vérification Générale Périodique est un contrôle obligatoire des équipements de levage et de manutention, encadré par l'arrêté du 5 mars 1993 modifié par l'arrêté du 4 juin 1993 et par le décret n°2006-1033 du 22 août 2006. Elle vise à s'assurer que vos machines restent conformes aux exigences de sécurité tout au long de leur utilisation, en examinant leurs pièces critiques, leurs dispositifs de sécurité et leur état d'usure. Selon le type d'équipement, elle doit être renouvelée tous les 6 ou 12 mois."
      }
    ]
  },
  {
    eyebrow: "Une question fréquente",
    title: "Les poids de test, à quoi servent-ils ?",
    blocks: [
      {
        type: "p",
        text: "Lors de certaines VGP, le vérificateur utilise des masses d'essai calibrées, appelées poids de test, pour valider en conditions réelles la capacité de charge annoncée par le fabricant de l'équipement."
      },
      {
        type: "p",
        text: "Cette étape permet de s'assurer que les dispositifs de sécurité (limiteurs de charge, systèmes de freinage) réagissent correctement lorsque l'équipement est sollicité à sa charge nominale."
      },
      {
        type: "aside",
        title: "À retenir",
        items: [
          "Masses calibrées, adaptées à la charge nominale de l'équipement",
          "Utilisées pour tester les dispositifs de sécurité en charge",
          "Apportées par nos vérificateurs le jour de l'intervention"
        ]
      }
    ]
  },
  {
    eyebrow: "Notre zone d'intervention",
    title: "Des VGP réalisées dans les Hauts-de-France",
    blocks: [
      {
        type: "p",
        text: "Nos vérificateurs interviennent sur l'ensemble de la région Hauts-de-France : Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Douai, Valenciennes, Lens, Béthune, Arras, Cambrai, Dunkerque, Calais, Saint-Omer, Boulogne-sur-Mer et Amiens, ainsi que les communes environnantes. Pour vos formations, SECURIFORM reste par ailleurs à votre service sur toute la moitié nord de la France."
      }
    ]
  },
  {
    eyebrow: "Questions fréquentes",
    title: "Vous vous posez des questions ?",
    blocks: [
      {
        type: "faq",
        items: [
          {
            q: "La VGP est-elle vraiment obligatoire ?",
            a: [
              "Oui, dès lors que votre entreprise utilise des équipements de levage ou de manutention couverts par la réglementation. C'est une obligation de l'employeur au titre de la sécurité de ses salariés et des tiers."
            ]
          },
          {
            q: "Que se passe-t-il si une non-conformité est détectée ?",
            a: [
              "Le rapport de vérification mentionne une réserve. Selon sa gravité, l'équipement peut continuer à être utilisé le temps de la remise en conformité, ou son usage doit être suspendu jusqu'à correction. SECURIFORM vous accompagne dans cette démarche."
            ]
          },
          {
            q: "Qui peut réaliser une VGP ?",
            a: [
              "La vérification doit être réalisée par une personne compétente, formée à cet effet, disposant des connaissances techniques et réglementaires nécessaires : c'est le rôle de nos vérificateurs."
            ]
          },
          {
            q: "Quelle est la différence entre CACES® et VGP ?",
            a: [
              "Le CACES® atteste de la compétence du conducteur à utiliser un engin en sécurité. La VGP, elle, contrôle l'état et la conformité de l'équipement lui-même. Les deux sont complémentaires et souvent nécessaires pour la même machine."
            ]
          },
          {
            q: "Intervenez-vous en dehors des Hauts-de-France ?",
            a: [
              "Nos VGP sont principalement réalisées dans les Hauts-de-France. Pour vos besoins de formation (CACES®, habilitation électrique, secourisme…), SECURIFORM intervient en revanche sur toute la moitié nord de la France : n'hésitez pas à nous consulter."
            ]
          }
        ]
      }
    ]
  }
];
