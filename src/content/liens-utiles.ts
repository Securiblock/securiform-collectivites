export type UsefulLink = {
  title: string;
  description: string;
  href: string;
  // width / height : dimensions réelles du fichier, pour calculer la taille d'affichage du logo.
  logo?: { src: string; alt: string; width: number; height: number };
};

export type LinkGroup = {
  title: string;
  links: UsefulLink[];
};

export const usefulLinksHero = {
  eyebrow: "Ressources",
  title: "Liens utiles",
  description:
    "Une sélection d'organismes et de sites institutionnels utiles à la prévention des risques professionnels dans les collectivités.",
};

export const linkGroups: LinkGroup[] = [
  {
    title: "Prévention et réglementation",
    links: [
      {
        title: "INRS",
        description: "Institut National de Recherche et de Sécurité pour la prévention des accidents du travail et des maladies professionnelles.",
        href: "https://www.inrs.fr/",
        logo: { src: "/images/liens-utiles/inrs.png", alt: "Logo de l'INRS", width: 187, height: 65 },
      },
      {
        title: "Ministère du Travail",
        description: "Informations officielles sur la réglementation du travail et la santé-sécurité au travail.",
        href: "https://travail-emploi.gouv.fr/",
        logo: { src: "/images/liens-utiles/ministere-travail.png", alt: "Logo du Ministère du Travail, de l'Emploi et de l'Insertion", width: 116, height: 103 },
      },
      {
        title: "Assurance Maladie – Risques professionnels",
        description: "Recommandations CNAM/CARSAT, notamment pour la conduite en sécurité (R482 à R490).",
        href: "https://www.ameli.fr/",
        logo: { src: "/images/liens-utiles/ameli.svg", alt: "Logo de l'Assurance Maladie", width: 855, height: 177 },
      },
      {
        title: "Légifrance",
        description: "Textes de loi et articles du Code du travail applicables à la sécurité au travail.",
        href: "https://www.legifrance.gouv.fr/",
        logo: { src: "/images/liens-utiles/legifrance.png", alt: "Logo de Légifrance", width: 182, height: 57 },
      },
    ],
  },
  {
    title: "Fonction publique territoriale",
    links: [
      {
        title: "CNFPT",
        description: "Centre National de la Fonction Publique Territoriale, formation des agents territoriaux.",
        href: "https://www.cnfpt.fr/",
        logo: { src: "/images/liens-utiles/cnfpt.svg", alt: "Logo du CNFPT", width: 1080, height: 863 },
      },
      {
        title: "Service Public",
        description: "Portail officiel de l'administration française pour les démarches des collectivités.",
        href: "https://www.service-public.gouv.fr/",
        logo: { src: "/images/liens-utiles/service-public.svg", alt: "Logo de Service Public", width: 630, height: 126 },
      },
    ],
  },
];
