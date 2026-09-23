export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export const legalPagesMeta = {
  mentionsLegales: {
    title: "Mentions légales",
    description: "Mentions légales du site SECURIFORM Collectivités : éditeur, hébergeur et propriété intellectuelle.",
  },
  donneesPersonnelles: {
    title: "Données personnelles",
    description: "Informations sur la collecte et le traitement des données personnelles par SECURIFORM Collectivités.",
  },
  politiqueConfidentialite: {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité et de gestion des cookies du site SECURIFORM Collectivités.",
  },
};

export const mentionsLegalesSections: LegalSection[] = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "SECURIFORM© COLLECTIVITES, département de SECURIFORM.",
      "Siège social : 17 rue du Carillon, 59650 Villeneuve d'Ascq.",
      "Téléphone : 03 20 67 34 90 — Email : contact@securiform.fr",
      "SIRET : [à compléter] — RCS : [à compléter]",
      "Directeur de la publication : [à compléter]",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: ["Le site est hébergé par : [nom, adresse et contact de l'hébergeur à compléter]."],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété exclusive de SECURIFORM, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.",
    ],
  },
];

export const donneesPersonnellesSections: LegalSection[] = [
  {
    title: "Responsable du traitement",
    paragraphs: [
      "SECURIFORM© COLLECTIVITES, 17 rue du Carillon, 59650 Villeneuve d'Ascq, est responsable du traitement des données personnelles collectées via ce site.",
    ],
  },
  {
    title: "Données collectées",
    paragraphs: [
      "Les données collectées via le formulaire de contact (nom, coordonnées, message) sont utilisées uniquement pour répondre à vos demandes d'information ou de devis, et ne sont ni cédées ni vendues à des tiers.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données personnelles.",
      "Pour exercer ces droits, contactez-nous à l'adresse contact@securiform.fr ou par courrier à l'adresse du siège social.",
    ],
  },
];

export const politiqueConfidentialiteSections: LegalSection[] = [
  {
    title: "Cookies",
    paragraphs: [
      "Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de mesure d'audience ou publicitaire n'est déposé sans votre consentement préalable.",
    ],
  },
  {
    title: "Sécurité des données",
    paragraphs: [
      "SECURIFORM met en œuvre les mesures techniques et organisationnelles appropriées afin de garantir la sécurité et la confidentialité des données transmises via ce site.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Pour toute question relative à cette politique de confidentialité, contactez-nous à l'adresse contact@securiform.fr.",
    ],
  },
];
