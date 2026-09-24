// Contenu typé de la page d'accueil, repris de docs/maquette-accueil.html.
// Centralisé ici pour préparer un futur branchement à un CMS.

export type NavLink = {
  label: string;
  href: string;
};

export type HeroSlide = {
  id: string;
  title: string;
  description: string;
  codesLabel: string;
  codes: string[];
  ctaLabel: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
  };
};

export type Fact = {
  label: string;
  value: string;
  href?: string;
};

export type TileLink = {
  label: string;
  href: string;
};

export type TrainingTile = {
  title: string;
  href: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  links: TileLink[];
  moreLabel: string;
};

export type ServiceIconKey =
  | "espaces-verts"
  | "voirie"
  | "collecte"
  | "batiments"
  | "erp"
  | "vehicules";

export type ServiceRow = {
  title: string;
  icon: ServiceIconKey;
  description: string;
  links: TileLink[];
};

export type CommitmentIconKey = "etude" | "france" | "groupes" | "reglementation";

export type Commitment = {
  icon: CommitmentIconKey;
  title: string;
  description: string;
};

export type CtaAction = {
  label: string;
  href: string;
  variant: "white" | "outline";
};

export type FooterColumn = {
  title: string;
  links: TileLink[];
};

export type Course = {
  position: number;
  name: string;
  description: string;
  url: string;
};

export const siteConfig = {
  name: "SECURIFORM Collectivités",
  legalName: "SECURIFORM© COLLECTIVITES",
  url: "https://www.securiform-collectivites.fr",
  phone: "03 20 67 34 90",
  phoneHref: "tel:+33320673490",
  email: "contact@securiform.fr",
  address: {
    streetAddress: "17 rue du Carillon",
    postalCode: "59650",
    addressLocality: "Villeneuve d'Ascq",
    addressCountry: "FR",
  },
  foundingDate: "2008",
  parentOrganization: {
    name: "SECURIFORM",
    url: "https://www.securiform.fr/",
  },
};

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations/" },
  { label: "VGP", href: "/vgp/" },
  { label: "Équipements EPI", href: "/equipements-epi/" },
  { label: "Liens utiles", href: "/liens-utiles/" },
];

export const headerCta: NavLink = { label: "Nous contacter", href: "/contact/" };

export const heroH1 = "Formations sécurité pour les agents des collectivités territoriales";

export const heroSlides: HeroSlide[] = [
  {
    id: "habilitation-electrique",
    title: "Préparation à l'habilitation électrique",
    description:
      "Nous préparons vos agents électriciens et non électriciens à l'habilitation électrique, en basse et haute tensions, selon la norme NF C 18-510.",
    codesLabel: "Niveaux d'habilitation",
    codes: ["H0B0", "BE Manœuvre-BS", "HE Manœuvre", "B1-B2-BR-BE essai-BC", "B1L-B2L-BRL-BCL", "H1-H2-HE essai-HC"],
    ctaLabel: "Voir les habilitations électriques",
    ctaHref: "/formations/habilitations-electriques/",
    image: {
      src: "/images/slider/habilitation-electrique.webp",
      alt: "Agent territorial en formation à l'habilitation électrique devant une armoire électrique",
    },
  },
  {
    id: "conduite-securite",
    title: "Formations à la conduite en sécurité",
    description:
      "Nous préparons vos agents à l'autorisation de conduite des engins de vos services techniques et espaces verts, y compris balayeuses, micro-tracteurs et tondeuses autoportées. Pour le passage du CACES®, nous consulter.",
    codesLabel: "Recommandations CNAM",
    codes: ["R482", "R484", "R485", "R486-A", "R489", "R490"],
    ctaLabel: "Voir les formations conduite",
    ctaHref: "/formations/autorisations-de-conduite-et-caces/",
    image: {
      src: "/images/slider/conduite-securite.webp",
      alt: "Agent des services techniques en formation à la conduite en sécurité d'un engin",
    },
  },
  {
    id: "secourisme-sst",
    title: "Formation secourisme",
    description:
      "SECURIFORM est habilitée centre de formation Sauveteur Secouriste du Travail (SST). Nous formons aussi vos agents à la manipulation des défibrillateurs installés dans vos bâtiments.",
    codesLabel: "Formations secourisme",
    codes: ["SST initial", "MAC SST", "Défibrillateur"],
    ctaLabel: "Voir la formation SST",
    ctaHref: "/formations/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/",
    image: {
      src: "/images/slider/secourisme-sst.webp",
      alt: "Stagiaires pratiquant les gestes de premiers secours lors d'une formation SST",
    },
  },
  {
    id: "incendie",
    title: "Formations incendie",
    description:
      "Manipulation d'extincteurs et de RIA, Équipiers de Première et Seconde Intervention, évacuation des locaux avec guides et serre-files. Nous développons aussi une formation adaptée aux risques de vos bâtiments et services.",
    codesLabel: "Formations incendie",
    codes: ["Extincteurs et RIA", "EPI", "ESI", "Évacuation"],
    ctaLabel: "Voir les formations incendie",
    ctaHref: "/formations/secourisme-et-incendie/",
    image: {
      src: "/images/slider/incendie.webp",
      alt: "Agent manipulant un extincteur lors d'une formation incendie",
    },
  },
  {
    id: "travaux-en-hauteur",
    title: "Formations travaux en hauteur",
    description:
      "Nous formons vos agents au port du harnais anti-chute ainsi qu'à l'utilisation, au montage et à la vérification des échafaudages fixes et roulants.",
    codesLabel: "Formations travaux en hauteur",
    codes: ["Harnais anti-chute", "R408", "R457"],
    ctaLabel: "Voir les formations travaux en hauteur",
    ctaHref: "/formations/travaux-en-hauteur/",
    image: {
      src: "/images/slider/travaux-en-hauteur.webp",
      alt: "Agent équipé d'un harnais anti-chute sur un échafaudage",
    },
  },
];

export const about = {
  title: "Un département dédié à la sécurité de vos agents",
  paragraphs: [
    "Créée en 2008, SECURIFORM accompagne ses clients en formation sécurité sur toute la France. Forte de son expérience auprès des collectivités locales et territoriales, elle a développé un département exclusif : SECURIFORM© Collectivités.",
    "Notre équipe de formateurs actualise en permanence ses compétences au rythme des évolutions réglementaires, et le retour d'expérience de chaque intervention enrichit nos référentiels pédagogiques. Après une étude approfondie de vos besoins, nous vous proposons une offre adaptée, avec conseil et réactivité.",
  ],
  ctaLabel: "Découvrir toutes nos formations",
  ctaHref: "/formations/",
};

export const aboutFacts: Fact[] = [
  { label: "Depuis", value: "2008" },
  { label: "Intervention", value: "Partout en France" },
  { label: "Groupes", value: "6 à 10 stagiaires" },
  { label: "Un conseiller", value: siteConfig.phone, href: siteConfig.phoneHref },
];

export const trainingsSectionHead = {
  title: "Nos formations sécurité pour les collectivités",
  description:
    "Des formations conformes à la réglementation, adaptées aux services techniques, espaces verts, voirie, propreté urbaine et bâtiments communaux.",
};

export const trainingTiles: TrainingTile[] = [
  {
    title: "Autorisations de conduite et CACES®",
    href: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité selon les recommandations R482 à R490, plus les engins spécifiques aux collectivités.",
    image: { src: "/images/formations/conduite-caces.webp", alt: "Conduite en sécurité d'un engin de chantier" },
    links: [
      { label: "Engins de chantier (R482)", href: "/formations/autorisations-de-conduite-et-caces/engins-de-chantier/" },
      { label: "Nacelles élévatrices (R486-A)", href: "/formations/autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel/" },
      { label: "Chariots élévateurs (R489)", href: "/formations/autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489/" },
      { label: "Balayeuses", href: "/formations/autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse/" },
      { label: "Tondeuses autoportées", href: "/formations/autorisations-de-conduite-et-caces/tondeuse-autoportee/" },
    ],
    moreLabel: "Toutes les formations conduite",
  },
  {
    title: "Habilitations électriques",
    href: "/formations/habilitations-electriques/",
    description: "Préparation à l'habilitation électrique en basse et haute tensions selon la norme NF C 18-510.",
    image: { src: "/images/formations/habilitation-electrique.webp", alt: "Agent en préparation à l'habilitation électrique" },
    links: [
      { label: "Personnel électricien", href: "/formations/habilitations-electriques/personnel-electricien/" },
      { label: "Personnel non électricien", href: "/formations/habilitations-electriques/personnel-non-electricien/" },
    ],
    moreLabel: "Toutes les habilitations",
  },
  {
    title: "Secourisme et incendie",
    href: "/formations/secourisme-et-incendie/",
    description: "Centre habilité SST, défibrillateur, lutte contre l'incendie et évacuation de vos établissements.",
    image: { src: "/images/formations/secourisme-incendie.webp", alt: "Formation secourisme et lutte contre l'incendie" },
    links: [
      { label: "Sauveteur Secouriste du Travail", href: "/formations/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/" },
      { label: "Manipulation de défibrillateurs", href: "/formations/secourisme-et-incendie/manipulation-de-defibrillateur/" },
      { label: "Manipulation d'extincteurs", href: "/formations/secourisme-et-incendie/manipulation-dextincteurs/" },
      { label: "Évacuation : guides et serre-files", href: "/formations/secourisme-et-incendie/evacuation/" },
    ],
    moreLabel: "Toutes les formations secourisme",
  },
  {
    title: "Risques liés au poste de travail",
    href: "/formations/risques-lies-au-poste-de-travail/",
    description: "La prévention des risques du quotidien : voirie, outillage, manutention et déplacements.",
    image: { src: "/images/formations/risques-poste-travail.webp", alt: "Prévention des risques liés au poste de travail" },
    links: [
      { label: "Signalisation temporaire de chantier", href: "/formations/risques-lies-au-poste-de-travail/signalisation-temporaire-de-chantier/" },
      { label: "Utilisation d'une tronçonneuse", href: "/formations/risques-lies-au-poste-de-travail/tronconneuse-thermique-a-chaine/" },
      { label: "Gestes et postures", href: "/formations/risques-lies-au-poste-de-travail/gestes-et-postures/" },
      { label: "Port des EPI", href: "/formations/risques-lies-au-poste-de-travail/port-des-e-p-i-equipements-de-protection-individuelle/" },
    ],
    moreLabel: "Toutes les formations prévention",
  },
  {
    title: "AIPR – Intervention à proximité des réseaux",
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR selon le rôle de chacun sur vos chantiers de voirie et de réseaux.",
    image: { src: "/images/formations/aipr.webp", alt: "Autorisation d'Intervention à Proximité des Réseaux (AIPR)" },
    links: [
      { label: "Concepteurs", href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/concepteurs/" },
      { label: "Encadrants", href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/encadrants/" },
      { label: "Opérateurs", href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/operateurs/" },
    ],
    moreLabel: "En savoir plus sur l'AIPR",
  },
  {
    title: "Travaux en hauteur",
    href: "/formations/travaux-en-hauteur/",
    description: "Port du harnais anti-chute, utilisation, montage et vérification des échafaudages.",
    image: { src: "/images/formations/travaux-en-hauteur.webp", alt: "Agent en formation aux travaux en hauteur avec harnais anti-chute" },
    links: [
      { label: "Port du harnais anti-chute", href: "/formations/travaux-en-hauteur/port-du-harnais-anti-chute/" },
      { label: "Échafaudages fixes et roulants", href: "/formations/travaux-en-hauteur/echafaudage/" },
    ],
    moreLabel: "Toutes les formations en hauteur",
  },
  {
    title: "Membres du CSE",
    href: "/formations/membres-du-cse/",
    description: "Missions des représentants en santé et sécurité, évaluation des risques professionnels, analyse des accidents du travail.",
    image: { src: "/images/formations/sante-securite-cse.webp", alt: "Réunion des membres du Comité Social et Économique" },
    links: [{ label: "Programme et objectifs", href: "/formations/membres-du-cse/" }],
    moreLabel: "En savoir plus",
  },
  {
    title: "Formations aux risques routiers et éco-conduite",
    href: "/formations/formations-aux-risques-routiers-et-eco-conduite/",
    description: "Sensibilisation aux risques routiers professionnels et à l'éco-conduite pour les agents qui se déplacent au quotidien.",
    image: { src: "/images/formations/risques-routiers-eco-conduite.webp", alt: "Sensibilisation aux risques routiers et à l'éco-conduite" },
    links: [{ label: "Programme et objectifs", href: "/formations/formations-aux-risques-routiers-et-eco-conduite/" }],
    moreLabel: "En savoir plus",
  },
];

export const servicesSectionHead = {
  title: "Les formations adaptées à chacun de vos services",
  description: "Retrouvez en un coup d'œil les formations les plus demandées selon les missions de vos agents.",
};

export const serviceRows: ServiceRow[] = [
  {
    title: "Espaces verts",
    icon: "espaces-verts",
    description: "Tonte, entretien des parcs et élagage.",
    links: [
      { label: "Tondeuses autoportées", href: "/formations/autorisations-de-conduite-et-caces/tondeuse-autoportee/" },
      { label: "Micro-tracteurs", href: "/formations/autorisations-de-conduite-et-caces/micro-tracteur/" },
      { label: "Tronçonneuse", href: "/formations/risques-lies-au-poste-de-travail/tronconneuse-thermique-a-chaine/" },
      { label: "Nacelles R486-A", href: "/formations/autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel/" },
    ],
  },
  {
    title: "Voirie et réseaux",
    icon: "voirie",
    description: "Chantiers sur la voie publique, travaux à proximité des réseaux.",
    links: [
      { label: "Signalisation temporaire", href: "/formations/risques-lies-au-poste-de-travail/signalisation-temporaire-de-chantier/" },
      { label: "AIPR", href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/" },
      { label: "Engins de chantier R482", href: "/formations/autorisations-de-conduite-et-caces/engins-de-chantier/" },
      { label: "Grues auxiliaires R490", href: "/formations/autorisations-de-conduite-et-caces/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490/" },
    ],
  },
  {
    title: "Collecte et propreté urbaine",
    icon: "collecte",
    description: "Collecte des déchets, déchetteries et nettoiement des rues.",
    links: [
      { label: "Balayeuses", href: "/formations/autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse/" },
      { label: "Port des EPI", href: "/formations/risques-lies-au-poste-de-travail/port-des-e-p-i-equipements-de-protection-individuelle/" },
      { label: "Gestes et postures", href: "/formations/risques-lies-au-poste-de-travail/gestes-et-postures/" },
    ],
  },
  {
    title: "Bâtiments et ateliers",
    icon: "batiments",
    description: "Maintenance du patrimoine communal, interventions électriques et en hauteur.",
    links: [
      { label: "Habilitation électrique", href: "/formations/habilitations-electriques/" },
      { label: "Échafaudages R408 / R457", href: "/formations/travaux-en-hauteur/echafaudage/utilisation-montage-demontage-et-verification-dechafaudages-fixes-et-roulants/" },
      { label: "Harnais anti-chute", href: "/formations/travaux-en-hauteur/port-du-harnais-anti-chute/" },
      { label: "Ponts roulants R484", href: "/formations/autorisations-de-conduite-et-caces/ponts-roulants-recommandation-r484/" },
    ],
  },
  {
    title: "Établissements recevant du public",
    icon: "erp",
    description: "Mairies, écoles, équipements sportifs et culturels.",
    links: [
      { label: "SST", href: "/formations/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/" },
      { label: "Défibrillateur", href: "/formations/secourisme-et-incendie/manipulation-de-defibrillateur/" },
      { label: "Équipier de Première Intervention", href: "/formations/secourisme-et-incendie/equipier-de-premiere-intervention-epi/" },
      { label: "Guides et serre-files", href: "/formations/secourisme-et-incendie/evacuation/" },
    ],
  },
  {
    title: "Parc de véhicules",
    icon: "vehicules",
    description: "Agents qui se déplacent et conduisent au quotidien.",
    links: [
      { label: "Risques routiers et éco-conduite", href: "/formations/formations-aux-risques-routiers-et-eco-conduite/" },
      { label: "Vérifications générales périodiques", href: "/vgp/" },
    ],
  },
];

export const commitmentsSectionHead = {
  title: "Notre façon de travailler avec les collectivités",
};

export const commitments: Commitment[] = [
  {
    icon: "etude",
    title: "Étude de vos besoins",
    description: "Nous analysons vos services et vos risques avant de proposer une offre sur mesure.",
  },
  {
    icon: "france",
    title: "Partout en France",
    description: "Nos formateurs interviennent auprès des collectivités sur l'ensemble du territoire.",
  },
  {
    icon: "groupes",
    title: "Groupes réduits",
    description: "De 6 à 10 stagiaires selon la formation, pour une vraie place à la pratique.",
  },
  {
    icon: "reglementation",
    title: "Réglementation à jour",
    description: "Des contenus actualisés en permanence selon les évolutions du cadre réglementaire.",
  },
];

export const cta = {
  title: "Un projet de formation pour vos agents ?",
  description: "Décrivez-nous vos besoins : nous vous rappelons pour construire une offre adaptée à votre collectivité.",
  actions: [
    { label: "Demander à être rappelé", href: "/contact/", variant: "white" },
    { label: siteConfig.phone, href: siteConfig.phoneHref, variant: "outline" },
  ] satisfies CtaAction[],
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Formations",
    links: [
      { label: "Conduite et CACES®", href: "/formations/autorisations-de-conduite-et-caces/" },
      { label: "Habilitations électriques", href: "/formations/habilitations-electriques/" },
      { label: "Travaux en hauteur", href: "/formations/travaux-en-hauteur/" },
      { label: "Secourisme et incendie", href: "/formations/secourisme-et-incendie/" },
      { label: "AIPR", href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Vérifications générales périodiques", href: "/vgp/" },
      { label: "Équipements de protection individuelle", href: "/equipements-epi/" },
      { label: "Liens utiles", href: "/liens-utiles/" },
      { label: "Plan du site", href: "/plan-du-site/" },
    ],
  },
];

export const footerLegalLinks: TileLink[] = [
  { label: "Mentions légales", href: "/mentions-legales/" },
  { label: "Données personnelles", href: "/donnees-personnelles/" },
  { label: "Confidentialité", href: "/politique-de-confidentialite/" },
];

// Reprend le @graph JSON-LD de la maquette (ItemList des formations).
export const courses: Course[] = [
  {
    position: 1,
    name: "Autorisations de conduite et CACES®",
    description: "Formations à la conduite en sécurité selon les recommandations R482, R484, R485, R486-A, R489 et R490.",
    url: "https://www.securiform-collectivites.fr/formations/autorisations-de-conduite-et-caces/",
  },
  {
    position: 2,
    name: "Préparation à l'habilitation électrique",
    description: "Préparation à l'habilitation électrique en basse et haute tensions selon la norme NF C 18-510.",
    url: "https://www.securiform-collectivites.fr/formations/habilitations-electriques/",
  },
  {
    position: 3,
    name: "Autorisation d'Intervention à Proximité des Réseaux (AIPR)",
    description: "Préparation à l'AIPR pour concepteurs, encadrants et opérateurs.",
    url: "https://www.securiform-collectivites.fr/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
  },
  {
    position: 4,
    name: "Travaux en hauteur",
    description: "Port du harnais anti-chute et échafaudages fixes (R408) et roulants (R457).",
    url: "https://www.securiform-collectivites.fr/formations/travaux-en-hauteur/",
  },
  {
    position: 5,
    name: "Secourisme et incendie",
    description: "Sauveteur Secouriste du Travail, défibrillateur, extincteurs, équipiers de première et seconde intervention, évacuation.",
    url: "https://www.securiform-collectivites.fr/formations/secourisme-et-incendie/",
  },
  {
    position: 6,
    name: "Risques liés au poste de travail",
    description: "Tronçonneuse, signalisation temporaire de chantier, port des EPI, gestes et postures.",
    url: "https://www.securiform-collectivites.fr/formations/risques-lies-au-poste-de-travail/",
  },
  {
    position: 7,
    name: "Membres du CSE",
    description: "Missions en santé, sécurité et conditions de travail, analyse des risques et des accidents du travail.",
    url: "https://www.securiform-collectivites.fr/formations/membres-du-cse/",
  },
  {
    position: 8,
    name: "Formations aux risques routiers et éco-conduite",
    description: "Sensibilisation aux risques routiers professionnels et à l'éco-conduite.",
    url: "https://www.securiform-collectivites.fr/formations/formations-aux-risques-routiers-et-eco-conduite/",
  },
];
