export type FormationLeaf = {
  href: string;
  title: string;
  categoryLabel: string;
  categoryHref: string;
  description: string;
  points: string[];
  duration?: string;
  groupSize?: string;
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
      "Conduite en sécurité des engins de chantier de catégories A à F selon la recommandation R482 de la CNAM.",
    points: [
      "Conduire en sécurité des engins de chantier de catégories A à F",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel/",
    title: "Nacelles élévatrices (R486-A)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en toute sécurité des plates-formes élévatrices mobiles de personnel (PEMP) de catégories A et B, selon la recommandation R486-A.",
    points: [
      "Conduire en sécurité une PEMP de catégorie A ou B",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489/",
    title: "Chariots élévateurs (R489)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des chariots automoteurs de manutention à conducteur porté de catégories 1 à 7, selon la recommandation R489.",
    points: [
      "Conduire en sécurité des chariots de manutention à conducteur porté, catégories 1 à 7",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse/",
    title: "Balayeuses",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité d'une balayeuse de voirie, adaptée aux missions de propreté urbaine.",
    points: [
      "Conduire en sécurité une balayeuse",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/tondeuse-autoportee/",
    title: "Tondeuses autoportées",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité d'une tondeuse autoportée pour l'entretien des espaces verts.",
    points: ["Conduire en sécurité une tondeuse autoportée", "Obtenir une attestation de capacité"],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/micro-tracteur/",
    title: "Micro-tracteurs",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité d'un micro-tracteur pour l'entretien des espaces verts et espaces publics.",
    points: [
      "Conduire en sécurité un micro-tracteur",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490/",
    title: "Grues auxiliaires de chargement (R490)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description:
      "Conduite en sécurité des grues auxiliaires de chargement de véhicules, à poste fixe et à télécommande, selon la recommandation R490.",
    points: [
      "Conduire en sécurité une grue auxiliaire de chargement, à poste fixe ou à télécommande",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },
  {
    href: "/formations/autorisations-de-conduite-et-caces/ponts-roulants-recommandation-r484/",
    title: "Ponts roulants (R484)",
    categoryLabel: "Autorisations de conduite et CACES®",
    categoryHref: "/formations/autorisations-de-conduite-et-caces/",
    description: "Conduite en sécurité des ponts roulants à commande au sol, selon la recommandation R484.",
    points: [
      "Conduire en sécurité un pont roulant à commande au sol",
      "Obtenir une attestation de capacité ou CACES® (certificat d'aptitude à la conduite en sécurité)",
    ],
    duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_CONDUITE,
  },

  // Habilitations électriques
  {
    href: "/formations/formation-2/personnel-non-electricien/",
    title: "Personnel non électricien",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Habilitation BS : remplacement à l'identique de fusibles, d'accessoires d'éclairage, de prises de courant, d'interrupteurs, raccordement d'éléments de matériel sur un circuit en attente et réarmement de dispositifs de protection.",
    points: [
      "Réaliser en toute sécurité ces opérations d'ordre électrique élémentaires (habilitation BS)",
      "Conforme à la norme NF C 18-510/A1",
    ],
    duration: "2 jours",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/formations/formation-2/personnel-electricien/",
    title: "Personnel électricien",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Réaliser en toute sécurité des travaux d'ordre électrique en basse et/ou haute tensions, et/ou être chargé de consignation (indices B1, B1V, B2, B2V, BR, BC, H1V, H2, H2V, HC).",
    points: [
      "Consignation et déconsignation d'une installation",
      "Interventions et travaux d'ordre électrique en basse et/ou haute tensions",
      "Conforme à la norme NF C 18-510/A1",
    ],
    duration: "À définir selon le niveau d'habilitation visé",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/h0b0-personnel-executant/",
    title: "H0B0 personnel exécutant",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description:
      "Réaliser des travaux d'ordre non électrique en toute sécurité dans un environnement présentant des risques électriques.",
    points: ["Périmètres et distances de sécurité électrique", "Conforme à la norme NF C 18-510/A1"],
    duration: "1 jour",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ELECTRIQUE,
  },
  {
    href: "/be-manoeuvre/",
    title: "BE Manœuvre",
    categoryLabel: "Habilitations électriques",
    categoryHref: "/formations/formation-2/",
    description: "Effectuer en toute sécurité des manœuvres d'exploitation d'ordre électrique en basse tension.",
    points: ["Manœuvres d'exploitation autorisées sur l'installation", "Conforme à la norme NF C 18-510/A1"],
    duration: "2 jours",
    groupSize: "10 personnes maximum",
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
      "Connaître la réglementation DT-DICT et le guide technique",
      "Comprendre les enjeux du contrôle des compétences (examen AIPR) au regard des obligations réglementaires",
    ],
    duration: "1 à 2 jours, dont 1 heure d'examen",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_AIPR,
  },
  {
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/encadrants/",
    title: "Encadrants",
    categoryLabel: "AIPR – Intervention à proximité des réseaux",
    categoryHref: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR pour les agents qui encadrent des chantiers à proximité des réseaux.",
    points: [
      "Connaître la réglementation DT-DICT et le guide technique",
      "Comprendre les enjeux du contrôle des compétences (examen AIPR) au regard des obligations réglementaires",
    ],
    duration: "1 à 2 jours, dont 1 heure d'examen",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_AIPR,
  },
  {
    href: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/operateurs/",
    title: "Opérateurs",
    categoryLabel: "AIPR – Intervention à proximité des réseaux",
    categoryHref: "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/",
    description: "Préparation à l'examen AIPR pour les agents qui interviennent physiquement sur les chantiers à proximité des réseaux.",
    points: [
      "Appliquer la règle du 1 mètre devant les affleurants",
      "Rechercher en sécurité les réseaux et branchements en fonction des informations disponibles",
      "Arrêter les travaux si la position du branchement ou du réseau n'est pas celle attendue",
      "Connaître la règle des 4A",
    ],
    duration: "1 jour, dont 1 heure d'examen",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_AIPR,
  },

  // Travaux en hauteur
  {
    href: "/formations/travaux-en-hauteur/port-du-harnais-anti-chute/",
    title: "Port du harnais anti-chute",
    categoryLabel: "Travaux en hauteur",
    categoryHref: "/formations/travaux-en-hauteur/",
    description: "Principes de sécurité relatifs aux accès, aux travaux et aux déplacements en hauteur.",
    points: [
      "Connaître la réglementation sur les travaux en hauteur",
      "Découvrir les EPI et systèmes de protection contre les chutes de hauteur disponibles sur le marché",
      "Savoir choisir les EPI adaptés",
    ],
    duration: "1 jour",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/travaux-en-hauteur/echafaudages/echafaudages-fixes-et-roulants-recommandations-r408-et-r457/",
    title: "Échafaudages fixes et roulants (R408 / R457)",
    categoryLabel: "Travaux en hauteur",
    categoryHref: "/formations/travaux-en-hauteur/",
    description:
      "Montage, démontage, utilisation et vérification d'échafaudages fixes et roulants, conformément aux recommandations CNAMTS R408 et R457 et au décret 2004-924.",
    points: [
      "Monter et démonter des échafaudages fixes et roulants dans le respect des règles de sécurité",
      "Appliquer une notice de montage",
      "Maîtriser la vérification et la maintenance des échafaudages",
      "Superviser une équipe de monteurs",
    ],
    duration: "1 à 4 jours",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },

  // Secourisme et incendie
  {
    href: "/formations/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/",
    title: "Sauveteur Secouriste du Travail",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description:
      "Intervenir efficacement face à une situation d'accident et mettre en application des compétences de prévention en santé et sécurité au travail.",
    points: [
      "Protéger, examiner, alerter et secourir",
      "Formation initiale ou maintien et actualisation des compétences (MAC) selon votre situation",
    ],
    duration: "MAC : 1 jour / Formation initiale : 2 jours",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_SST,
  },
  {
    href: "/formations/secourisme-et-incendie/manipulation-de-defibrillateur/",
    title: "Manipulation de défibrillateurs",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Identifier un arrêt cardio-respiratoire et mettre en œuvre une procédure de réanimation d'urgence.",
    points: [
      "Identifier un arrêt cardio-respiratoire",
      "Mettre en œuvre une réanimation d'urgence et une défibrillation précoce à l'aide d'un défibrillateur",
    ],
    duration: "2 à 4 heures",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formation-a-la-manipulation-dextincteurs/",
    title: "Manipulation d'extincteurs",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Identifier la naissance et la propagation d'un incendie, et utiliser efficacement les moyens d'extinction.",
    points: [
      "Identifier les notions élémentaires et avancées de naissance et de propagation d'un incendie",
      "Mettre en œuvre et utiliser efficacement les différents moyens d'extinction",
    ],
    duration: "2 à 4 heures",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/secourisme-et-incendie/evacuation/",
    title: "Évacuation : guides et serre-files",
    categoryLabel: "Secourisme et incendie",
    categoryHref: "/formations/secourisme-et-incendie/",
    description: "Rôle des guides et serre-files lors de la mise en sécurité et de l'évacuation d'un établissement.",
    points: [
      "Identifier les notions de naissance et de propagation d'un incendie",
      "Mettre en œuvre les moyens de mise en sécurité des occupants",
      "Appliquer les étapes d'intervention : reconnaissance, alerte, mise en sécurité, accueil et guidage des secours",
    ],
    duration: "2 à 4 heures",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },

  // Risques liés au poste de travail
  {
    href: "/formations/risques-lies-au-poste-de-travail/signalisation-temporaire-de-chantier/",
    title: "Signalisation temporaire de chantier",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Définir les risques liés aux chantiers sur voirie et implanter une signalisation adaptée.",
    points: [
      "Savoir définir les risques liés aux chantiers sur voirie",
      "Implanter une signalisation correcte et efficace en fonction du chantier",
    ],
    duration: "1 jour",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/formation-a-lutilisation-dune-tronconneuse/",
    title: "Utilisation d'une tronçonneuse",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Utilisation en sécurité d'une tronçonneuse thermique à chaîne pour les travaux d'entretien des espaces verts.",
    points: [
      "Utiliser en sécurité une tronçonneuse thermique à chaîne",
      "Assurer la maintenance de premier niveau de sa tronçonneuse",
      "Choisir les EPI adaptés",
    ],
    duration: "7 heures",
    groupSize: "8 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/gestes-et-postures/",
    title: "Gestes et postures",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Prévenir les accidents liés à la mauvaise manipulation des charges ou de mauvaises positions de travail.",
    points: [
      "Prévenir les accidents liés à la manutention manuelle et aux postures de travail",
      "Apporter des solutions pratiques pour améliorer les manutentions manuelles",
    ],
    duration: "7 heures",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/formations-aux-risques-routiers-et-eco-conduite/risques-routiers/",
    title: "Risques routiers et éco-conduite",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Sensibilisation aux risques routiers professionnels et à l'éco-conduite pour les agents qui se déplacent au quotidien.",
    points: [
      "Sensibiliser les conducteurs aux risques routiers",
      "Sensibiliser à la pertinence d'une conduite éco-responsable",
      "Utiliser les instruments de bord du véhicule pour réduire sa consommation",
    ],
    duration: "4 à 7 heures",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
  {
    href: "/formations/risques-lies-au-poste-de-travail/port-des-e-p-i-equipements-de-protection-individuelle/",
    title: "Port des EPI",
    categoryLabel: "Risques liés au poste de travail",
    categoryHref: "/formations/risques-lies-au-poste-de-travail/",
    description: "Sensibiliser les agents à l'importance du port des équipements de protection individuelle.",
    points: ["Sensibiliser à une meilleure prise en compte de l'importance du port des EPI"],
    duration: "4 heures",
    groupSize: "10 personnes maximum",
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
      "Identifier les notions de naissance et de propagation d'un incendie",
      "Mettre en œuvre et utiliser efficacement les moyens d'extinction",
      "Analyser la situation et adopter un comportement préventif face aux risques d'incendie",
      "Appliquer les étapes d'intervention : reconnaissance, alerte, mise en sécurité, accueil et guidage des secours",
    ],
    duration: "4 à 7 heures",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  },
];
