export type FormationLeaf = {
  href: string;
  title: string;
  categoryLabel: string;
  categoryHref: string;
  description: string;
  points: string[];
  validation: string;
};

const VALIDATION_CONDUITE = "Délivrance d'une autorisation de conduite interne à l'issue de la formation.";
const VALIDATION_ELECTRIQUE =
  "Le titre d'habilitation est délivré par votre employeur, sur la base de l'avis du formateur, conformément à la norme NF C 18-510.";
const VALIDATION_AIPR = "Résultat du QCM officiel, valable 5 ans quel que soit l'employeur.";
const VALIDATION_ATTESTATION = "Attestation de formation remise à chaque participant.";
const VALIDATION_SST = "Certificat de Sauveteur Secouriste du Travail, valable 24 mois (recyclage MAC requis pour le maintien).";

export const formationLeaves: FormationLeaf[] = [
  // Autorisations de conduite et CACES®
  {
    href: "/formations/autorisations-de-conduite-et-caces/engins-de-chantier/",
    title: "Engins de chantier (R482)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des engins de chantier (pelles, chargeuses, tombereaux, engins de compactage) selon la recommandation R482 de la CNAM.",
    points: [
      "Catégories d'engins selon les besoins de vos services",
      "Théorie réglementaire et pratique sur engin",
      "Délivrance d'une autorisation de conduite interne",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel/",
    title: "Nacelles élévatrices (R486-A)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des plates-formes élévatrices mobiles de personnel (PEMP) de catégorie A, selon la recommandation R486.",
    points: [
      "Vérifications avant utilisation",
      "Conduite et manœuvres en sécurité",
      "Consignes en cas d'incident",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489/",
    title: "Chariots élévateurs (R489)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des chariots de manutention automoteurs à conducteur porté, selon la recommandation R489.",
    points: [
      "Catégories de chariots selon vos équipements",
      "Prise de poste et vérifications journalières",
      "Manutention et gerbage en sécurité",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse/",
    title: "Balayeuses",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité d'une balayeuse de voirie, adaptée aux missions de propreté urbaine.",
    points: [
      "Prise en main de la balayeuse et de ses équipements",
      "Circulation en sécurité sur la voie publique",
      "Entretien courant de la machine",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/tondeuse-autoportee/",
    title: "Tondeuses autoportées",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité d'une tondeuse autoportée pour l'entretien des espaces verts.",
    points: [
      "Vérifications avant utilisation",
      "Conduite en sécurité sur terrain plat et en pente",
      "Entretien et bonnes pratiques",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/micro-tracteur/",
    title: "Micro-tracteurs",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité d'un micro-tracteur et de ses équipements, pour l'entretien des espaces verts et espaces publics.",
    points: [
      "Attelage et utilisation des équipements",
      "Conduite en sécurité en espace public",
      "Entretien courant",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490/",
    title: "Grues auxiliaires de chargement (R490)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des grues auxiliaires de chargement de véhicules, selon la recommandation R490.",
    points: [
      "Vérifications et mise en station",
      "Élingage et manutention des charges",
      "Consignes de sécurité autour de la zone de travail",
    ],
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/ponts-roulants-recommandation-r484/",
    title: "Ponts roulants (R484)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des ponts roulants à commande depuis le sol ou en cabine, selon la recommandation R484.",
    points: ["Vérifications avant utilisation", "Élingage et manutention des charges", "Communication avec l'équipe au sol"],
    validation: VALIDATION_CONDUITE,
  },

  // Habilitations électriques
  {
    href: "/formations/formation-2/personnel-non-electricien/",
    title: "Personnel non électricien",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Habilitation électrique du personnel non électricien (B0, H0, H0V), pour les agents intervenant à proximité d'installations électriques sans réaliser d'opérations électriques.",
    points: [
      "Risques électriques et distances de sécurité",
      "Conduite à tenir face à un accident électrique",
      "Conforme à la norme NF C 18-510",
    ],
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/formations/formation-2/personnel-electricien/",
    title: "Personnel électricien",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Habilitation électrique du personnel électricien (B1, B2, BR, BC), pour les agents réalisant des interventions et travaux électriques en basse tension.",
    points: [
      "Consignation et déconsignation d'une installation",
      "Interventions et travaux hors tension",
      "Conforme à la norme NF C 18-510",
    ],
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/h0b0-personnel-executant/",
    title: "H0B0 personnel exécutant",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Habilitation H0B0 pour le personnel exécutant des opérations d'ordre non électrique à proximité de pièces nues sous tension.",
    points: [
      "Périmètres de sécurité électrique",
      "Gestes autorisés et interdits",
      "Conforme à la norme NF C 18-510",
    ],
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/be-manoeuvre/",
    title: "BE Manœuvre",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Habilitation BE Manœuvre pour le personnel réalisant des manœuvres simples sur des installations électriques basse tension.",
    points: ["Manœuvres autorisées sur l'installation", "Procédure en cas d'anomalie", "Conforme à la norme NF C 18-510"],
    validation: VALIDATION_ELECTRIQUE,
  },

  // AIPR
  {
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/concepteurs/",
    title: "Concepteurs",
    categoryLabel: "AIPR – Intervention à proximité des réseaux",
    categoryHref: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR pour les agents qui conçoivent des projets de travaux à proximité des réseaux.",
    points: [
      "Réglementation DT-DICT",
      "Identification des réseaux sensibles",
      "Préparation à l'examen QCM officiel",
    ],
    validation: VALIDATION_AIPR,
  },
  {
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/encadrants/",
    title: "Encadrants",
    categoryLabel: "AIPR – Intervention à proximité des réseaux",
    categoryHref: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR pour les agents qui encadrent des chantiers à proximité des réseaux.",
    points: [
      "Réglementation DT-DICT",
      "Consignes à faire respecter sur le chantier",
      "Préparation à l'examen QCM officiel",
    ],
    validation: VALIDATION_AIPR,
  },
  {
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/operateurs/",
    title: "Opérateurs",
    categoryLabel: "AIPR – Intervention à proximité des réseaux",
    categoryHref: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR pour les agents qui interviennent physiquement sur les chantiers à proximité des réseaux.",
    points: [
      "Reconnaissance des réseaux sur le terrain",
      "Conduite à tenir en cas d'incident",
      "Préparation à l'examen QCM officiel",
    ],
    validation: VALIDATION_AIPR,
  },

  // Travaux en hauteur
  {
    href: "/formations/travaux-en-hauteur/port-du-harnais-anti-chute/",
    title: "Port du harnais anti-chute",
    categoryLabel: "Travaux en hauteur",
    categoryHref: "/formations/travaux-en-hauteur/",
    description: "Utilisation du harnais anti-chute et des systèmes d'arrêt de chute pour les interventions en hauteur.",
    points: [
      "Choix et réglage du harnais",
      "Points d'ancrage et lignes de vie",
      "Conduite à tenir après une chute",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/travaux-en-hauteur/echafaudages/echafaudages-fixes-et-roulants-recommandations-r408-et-r457/",
    title: "Échafaudages fixes et roulants (R408 / R457)",
    categoryLabel: "Travaux en hauteur",
    categoryHref: "/formations/travaux-en-hauteur/",
    description: "Montage, démontage, utilisation et vérification des échafaudages fixes (R408) et roulants (R457).",
    points: [
      "Montage et démontage en sécurité",
      "Vérifications avant utilisation",
      "Recommandations R408 et R457",
    ],
    validation: VALIDATION_ATTESTATION,
  },

  // Secourisme et incendie
  {
    href: "/formations/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/",
    title: "Sauveteur Secouriste du Travail",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Formation initiale et maintien et actualisation des compétences (MAC) Sauveteur Secouriste du Travail.",
    points: [
      "Protéger, examiner, alerter, secourir",
      "Gestes de premiers secours",
      "Formation initiale ou MAC selon votre situation",
    ],
    validation: VALIDATION_SST,
  },
  {
    href: "/formations/secourisme-et-incendie/manipulation-de-defibrillateur/",
    title: "Manipulation de défibrillateurs",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Utilisation d'un défibrillateur automatisé externe (DAE) face à un arrêt cardiaque.",
    points: [
      "Reconnaître un arrêt cardiaque",
      "Utiliser un défibrillateur en sécurité",
      "Articulation avec les gestes de premiers secours",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formation-a-la-manipulation-dextincteurs/",
    title: "Manipulation d'extincteurs",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Utilisation des extincteurs et premiers gestes face à un début d'incendie.",
    points: [
      "Les différents types de feux et d'extincteurs",
      "Manipulation pratique sur feu réel",
      "Consignes d'alerte et d'évacuation",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/secourisme-et-incendie/evacuation/",
    title: "Évacuation : guides et serre-files",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Rôle des guides et serre-files lors de l'évacuation d'un établissement.",
    points: [
      "Rôle et positionnement de chacun",
      "Consignes d'évacuation et points de rassemblement",
      "Exercice pratique d'évacuation",
    ],
    validation: VALIDATION_ATTESTATION,
  },

  // Risques liés au poste de travail
  {
    href: "/formations/risques-lies-au-poste-de-travail/signalisation-temporaire-de-chantier/",
    title: "Signalisation temporaire de chantier",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Mise en place de la signalisation temporaire sur un chantier de voirie.",
    points: [
      "Réglementation de la signalisation temporaire",
      "Mise en place et dépose en sécurité",
      "Positionnement des agents sur le chantier",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/formation-a-lutilisation-dune-tronconneuse/",
    title: "Utilisation d'une tronçonneuse",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Utilisation en sécurité d'une tronçonneuse pour les travaux d'entretien des espaces verts.",
    points: [
      "Équipements de protection individuelle adaptés",
      "Techniques de coupe en sécurité",
      "Entretien courant de la tronçonneuse",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/gestes-et-postures/",
    title: "Gestes et postures",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Prévention des troubles musculosquelettiques par l'adoption des bons gestes et postures.",
    points: [
      "Analyse des postures à risque au poste de travail",
      "Bonnes pratiques de manutention manuelle",
      "Aménagements simples du poste",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/formations-aux-risques-routiers-et-eco-conduite/risques-routiers/",
    title: "Risques routiers et éco-conduite",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Prévention du risque routier et sensibilisation à l'éco-conduite pour les agents qui se déplacent au quotidien.",
    points: [
      "Sensibilisation au risque routier professionnel",
      "Principes de l'éco-conduite",
      "Mise en pratique sur route",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/port-des-e-p-i-equipements-de-protection-individuelle/",
    title: "Port des EPI",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Bonnes pratiques de port et d'entretien des équipements de protection individuelle.",
    points: [
      "Choisir l'EPI adapté au risque",
      "Bonnes pratiques de port et d'entretien",
      "Obligations de l'agent et de l'employeur",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/vigilance-partagee/",
    title: "Vigilance partagée",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Sensibilisation à la vigilance partagée entre agents pour prévenir les accidents lors de la collecte et de la propreté urbaine.",
    points: [
      "Communication entre équipiers sur le terrain",
      "Repérage des situations à risque",
      "Réflexes à adopter en équipe",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/responsabilite-et-devoir-en-cas-daccident/",
    title: "Responsabilités en cas d'accident",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Rappel des responsabilités et des devoirs d'un agent impliqué dans un accident de la route.",
    points: [
      "Obligations réglementaires de l'agent",
      "Conduite à tenir sur les lieux de l'accident",
      "Suites administratives et déclaratives",
    ],
    validation: VALIDATION_ATTESTATION,
  },

  // Formations métiers
  {
    href: "/formations/formations-metiers/equipier-de-collecte/",
    title: "Équipier de collecte",
    categoryLabel: "Formations métiers",
    categoryHref: "/formations/formations-metiers/",
    description: "Gestes et postures, sécurité et bonnes pratiques pour les équipiers de collecte des déchets.",
    points: [
      "Sécurité lors de la collecte et de la manutention des bacs",
      "Gestes et postures adaptés",
      "Vigilance partagée avec le conducteur",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/formations-metiers/agent-daccueil-en-dechetterie/",
    title: "Agent d'accueil en déchetterie",
    categoryLabel: "Formations métiers",
    categoryHref: "/formations/formations-metiers/",
    description: "Accueil du public et sécurité au quotidien pour les agents de déchetterie.",
    points: [
      "Accueil et orientation des usagers",
      "Tri et sécurité sur le site",
      "Gestion des situations difficiles",
    ],
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/formations-metiers/agent-de-nettoyage-urbain/",
    title: "Agent de nettoyage urbain",
    categoryLabel: "Formations métiers",
    categoryHref: "/formations/formations-metiers/",
    description: "Bonnes pratiques de sécurité pour les agents de nettoyage et de propreté urbaine.",
    points: [
      "Sécurité sur la voie publique",
      "Utilisation du matériel de nettoiement",
      "Gestes et postures adaptés",
    ],
    validation: VALIDATION_ATTESTATION,
  },

  // Établissements recevant du public (rattaché à Secourisme et incendie)
  {
    href: "/equipier-de-premiere-intervention-epi/",
    title: "Équipier de Première Intervention",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Formation des équipiers de première intervention (EPI) pour la lutte contre un début d'incendie dans votre établissement.",
    points: [
      "Reconnaissance des moyens de secours du site",
      "Extinction d'un début d'incendie",
      "Articulation avec le plan d'évacuation",
    ],
    validation: VALIDATION_ATTESTATION,
  },
];
