export type CourseContent = {
  description: string;
  points: string[];
  image?: { src: string; alt: string };
  duration?: string;
  groupSize?: string;
  validation: string;
};

export type FormationCategory = {
  kind: "category";
  slug: string;
  title: string;
  description: string;
  image?: { src: string; alt: string };
  children: FormationNode[];
};

export type FormationCourse = {
  kind: "course";
  slug: string;
  title: string;
  content: CourseContent;
};

export type FormationNode = FormationCategory | FormationCourse;

export type Crumb = { title: string; href: string };

const VALIDATION_CONDUITE = "Délivrance d'une autorisation de conduite interne à l'issue de la formation.";
const VALIDATION_ELECTRIQUE =
  "Le titre d'habilitation est délivré par votre employeur, sur la base de l'avis du formateur, conformément à la norme NF C 18-510.";
const VALIDATION_AIPR = "Résultat du QCM officiel, valable 5 ans quel que soit l'employeur.";
const VALIDATION_ATTESTATION = "Attestation de formation remise à chaque participant.";
const VALIDATION_SST = "Certificat de Sauveteur Secouriste du Travail, valable 24 mois (recyclage MAC requis pour le maintien).";

const IMG = "/images/formations/courses";

function course(slug: string, title: string, content: CourseContent): FormationCourse {
  return { kind: "course", slug, title, content };
}

function category(
  slug: string,
  title: string,
  description: string,
  children: FormationNode[],
  image?: { src: string; alt: string },
): FormationCategory {
  return { kind: "category", slug, title, description, image, children };
}

export const formationsTree: FormationNode[] = [
  category(
    "autorisations-de-conduite-et-caces",
    "Autorisations de conduite et CACES®",
    "Conduite en sécurité selon les recommandations de la CNAM, pour l'ensemble des engins utilisés par vos services techniques et espaces verts.",
    [
      course("engins-de-chantier", "Engins de chantier (R482)", {
        description: "Conduite en sécurité des engins de chantier de catégories A à F selon la recommandation R482 de la CNAM.",
        points: [
          "Catégories d'engins selon les besoins de vos services",
          "Théorie réglementaire et pratique sur engin",
          "Délivrance d'une autorisation de conduite interne",
        ],
        image: { src: `${IMG}/engins-de-chantier.webp`, alt: "Engin de chantier sur un terrassement" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("plates-formes-elevatrices-mobiles-de-personnel", "Plates-formes élévatrices mobiles de personnel (R486-A)", {
        description:
          "Conduite en toute sécurité des plates-formes élévatrices mobiles de personnel (PEMP) de catégories A et B, selon la recommandation R486-A.",
        points: [
          "Vérifications avant utilisation",
          "Conduite et manœuvres en sécurité",
          "Consignes en cas d'incident",
        ],
        image: { src: `${IMG}/pemp-r486a.webp`, alt: "Plate-forme élévatrice mobile de personnel (nacelle)" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("moteurs-et-ponts", "Moteurs et Ponts", {
        description:
          "Prévenir tout risque d'accident lié au levage et à l'accroche, afin de permettre à l'employeur de délivrer l'autorisation de conduite correspondante.",
        points: [
          "Techniques d'élingage et d'accroche des charges",
          "Prévention des risques liés aux opérations de levage",
          "Délivrance d'une autorisation de conduite interne",
        ],
        image: { src: `${IMG}/moteurs-et-ponts.webp`, alt: "Palan électrique à chaîne utilisé pour le levage" },
        duration: "21 heures sur 3 jours",
        groupSize: "6 à 8 personnes",
        validation: VALIDATION_CONDUITE,
      }),
      course("chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489", "Chariots de manutention automoteurs à conducteur porté (R489)", {
        description:
          "Conduite en sécurité des chariots automoteurs de manutention à conducteur porté de catégories 1 à 7, selon la recommandation R489.",
        points: [
          "Catégories de chariots selon vos équipements",
          "Prise de poste et vérifications journalières",
          "Manutention et gerbage en sécurité",
        ],
        image: { src: `${IMG}/chariots-r489.webp`, alt: "Chariot élévateur à conducteur porté" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("chariots-de-manutention-automoteurs-a-conducteur-accompagnant", "Chariots de manutention automoteurs à conducteur accompagnant (R485)", {
        description:
          "Conduite en sécurité des chariots de manutention automoteurs à conducteur accompagnant, selon la recommandation R485.",
        points: [
          "Prise en main du chariot et de ses commandes",
          "Circulation et manutention en sécurité",
          "Délivrance d'une autorisation de conduite interne",
        ],
        image: { src: `${IMG}/chariots-r485.webp`, alt: "Chariot de manutention à conducteur accompagnant" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("micro-tracteur", "Conduite en sécurité de micro-tracteurs", {
        description: "Conduite en sécurité d'un micro-tracteur pour l'entretien des espaces verts et espaces publics.",
        points: [
          "Attelage et utilisation des équipements",
          "Conduite en sécurité en espace public",
          "Entretien courant",
        ],
        image: { src: `${IMG}/micro-tracteur.webp`, alt: "Micro-tracteur agricole" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("tondeuse-autoportee", "Conduite en sécurité de tondeuses auto-portées", {
        description: "Conduite en sécurité d'une tondeuse autoportée pour l'entretien des espaces verts.",
        points: [
          "Vérifications avant utilisation",
          "Conduite en sécurité sur terrain plat et en pente",
          "Entretien et bonnes pratiques",
        ],
        image: { src: `${IMG}/tondeuse-autoportee.webp`, alt: "Tondeuse autoportée" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("ponts-roulants-recommandation-r484", "Ponts roulants (R484)", {
        description: "Conduite en sécurité des ponts roulants à commande au sol, selon la recommandation R484.",
        points: [
          "Vérifications avant utilisation",
          "Élingage et manutention des charges",
          "Communication avec l'équipe au sol",
        ],
        image: { src: `${IMG}/ponts-roulants-r484.webp`, alt: "Pont roulant en manutention de charge" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490", "Grues auxiliaires de chargement de véhicules (R490)", {
        description:
          "Conduite en sécurité des grues auxiliaires de chargement de véhicules, à poste fixe et à télécommande, selon la recommandation R490.",
        points: [
          "Vérifications et mise en station",
          "Élingage et manutention des charges",
          "Consignes de sécurité autour de la zone de travail",
        ],
        image: { src: `${IMG}/grues-auxiliaires-r490.webp`, alt: "Grue auxiliaire de chargement sur camion" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
      course("formations-a-la-conduite-en-securite-dune-balayeuse", "Conduite en sécurité de balayeuses", {
        description: "Conduite en sécurité d'une balayeuse de voirie, adaptée aux missions de propreté urbaine.",
        points: [
          "Prise en main de la balayeuse et de ses équipements",
          "Circulation en sécurité sur la voie publique",
          "Entretien courant de la machine",
        ],
        image: { src: `${IMG}/balayeuse.webp`, alt: "Balayeuse de voirie" },
        duration: "À définir selon le nombre de stagiaires et leur niveau de pratique",
        groupSize: "6 personnes maximum",
        validation: VALIDATION_CONDUITE,
      }),
    ],
  ),

  category("habilitations-electriques", "Habilitations électriques", "Préparation à l'habilitation électrique en basse et haute tensions selon la norme NF C 18-510.", [
    category(
      "personnel-electricien",
      "Personnel électricien",
      "Habilitation du personnel réalisant des interventions et travaux électriques.",
      [
        course("preparation-a-lhabilitation-electrique-bt-et-ou-ht", "Préparation à l'habilitation électrique BT et/ou HT", {
          description:
            "Réaliser en toute sécurité des travaux d'ordre électrique en basse et/ou haute tensions, et/ou être chargé de consignation (indices B1, B1V, B2, B2V, BR, BC, H1V, H2, H2V, HC).",
          points: [
            "Consignation et déconsignation d'une installation",
            "Interventions et travaux d'ordre électrique en basse et/ou haute tensions",
            "Conforme à la norme NF C 18-510/A1",
          ],
          image: { src: `${IMG}/habilitation-electrique-b1v-b2v-br-bc.webp`, alt: "Kit de protection individuelle pour personnel électricien (habilitation B1V-B2V-BR-BC)" },
          duration: "À définir selon le niveau d'habilitation visé",
          groupSize: "10 personnes maximum",
          validation: VALIDATION_ELECTRIQUE,
        }),
      ],
      { src: `${IMG}/habilitation-electrique-b1v-b2v-br-bc.webp`, alt: "Kit de protection individuelle pour personnel électricien" },
    ),
    category(
      "personnel-non-electricien",
      "Personnel non électricien",
      "Habilitation du personnel intervenant à proximité d'installations électriques sans réaliser d'opérations électriques.",
      [
        course("preparation-a-lhabilitation-electrique-bs", "Préparation à l'habilitation électrique BS", {
          description:
            "Réaliser en toute sécurité le remplacement à l'identique de fusibles, d'accessoires d'éclairage, de prises de courant, d'interrupteurs, le raccordement d'éléments de matériel sur un circuit en attente et le réarmement de dispositifs de protection.",
          points: ["Réaliser en sécurité ces opérations d'ordre électrique élémentaires", "Conforme à la norme NF C 18-510/A1"],
          image: { src: `${IMG}/habilitation-electrique-bs.webp`, alt: "Kit de protection individuelle pour personnel non électricien (habilitation BS)" },
          duration: "2 jours",
          groupSize: "10 personnes maximum",
          validation: VALIDATION_ELECTRIQUE,
        }),
        course("preparation-a-lhabilitation-electrique-be-manoeuvre", "Préparation à l'habilitation électrique BE Manœuvre", {
          description: "Effectuer en toute sécurité des manœuvres d'exploitation d'ordre électrique en basse tension.",
          points: ["Manœuvres d'exploitation autorisées sur l'installation", "Conforme à la norme NF C 18-510/A1"],
          image: { src: `${IMG}/habilitation-electrique-be-manoeuvre.webp`, alt: "Kit de protection individuelle pour personnel non électricien (habilitation BE Manœuvre)" },
          duration: "2 jours",
          groupSize: "10 personnes maximum",
          validation: VALIDATION_ELECTRIQUE,
        }),
        course(
          "preparation-a-lhabilitation-electrique-h0-h0v-b0-charge-de-chantier",
          "Préparation à l'habilitation électrique H0-H0V-B0 pour Chargé de chantier",
          {
            description:
              "Organiser et réaliser des travaux d'ordre non électrique en toute sécurité dans un environnement présentant des risques électriques.",
            points: [
              "Organiser des travaux d'ordre non électrique en sécurité",
              "Encadrer une équipe dans un environnement à risques électriques",
              "Conforme à la norme NF C 18-510/A1",
            ],
            image: { src: `${IMG}/charge-de-chantier.webp`, alt: "Chargé de chantier près d'une armoire électrique" },
            duration: "Recyclage : 1 jour / Formation initiale : 2 jours",
            groupSize: "10 personnes maximum",
            validation: VALIDATION_ELECTRIQUE,
          },
        ),
        course(
          "preparation-a-lhabilitation-electrique-h0-h0v-b0-personnel-executant",
          "Préparation à l'habilitation électrique H0-H0V-B0 pour Personnel exécutant",
          {
            description:
              "Réaliser des travaux d'ordre non électrique en toute sécurité dans un environnement présentant des risques électriques.",
            points: ["Périmètres et distances de sécurité électrique", "Conforme à la norme NF C 18-510/A1"],
            image: { src: `${IMG}/personnel-executant.webp`, alt: "Personnel exécutant sur un poste haute tension" },
            duration: "1 jour",
            groupSize: "10 personnes maximum",
            validation: VALIDATION_ELECTRIQUE,
          },
        ),
      ],
      { src: `${IMG}/habilitation-electrique-be-manoeuvre.webp`, alt: "Kit de protection individuelle pour personnel non électricien" },
    ),
  ]),

  category(
    "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r",
    "Autorisation d'Intervention à Proximité des Réseaux (AIPR)",
    "Préparation à l'examen AIPR selon le rôle de chacun sur vos chantiers de voirie et de réseaux.",
    [
      course("concepteurs", "Concepteurs", {
        description: "Préparation à l'examen AIPR pour les agents qui conçoivent des projets de travaux à proximité des réseaux.",
        points: [
          "Connaître la réglementation DT-DICT et le guide technique",
          "Comprendre les enjeux du contrôle des compétences (examen AIPR) au regard des obligations réglementaires",
        ],
        image: { src: `${IMG}/aipr-concepteurs.webp`, alt: "Logo officiel de l'Autorisation d'Intervention à Proximité des Réseaux (AIPR)" },
        duration: "1 à 2 jours, dont 1 heure d'examen",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_AIPR,
      }),
      course("operateurs", "Opérateurs", {
        description: "Préparation à l'examen AIPR pour les agents qui interviennent physiquement sur les chantiers à proximité des réseaux.",
        points: [
          "Appliquer la règle du 1 mètre devant les affleurants",
          "Rechercher en sécurité les réseaux et branchements en fonction des informations disponibles",
          "Arrêter les travaux si la position du branchement ou du réseau n'est pas celle attendue",
          "Connaître la règle des 4A",
        ],
        image: { src: `${IMG}/aipr-operateurs.webp`, alt: "Agents intervenant sur un chantier de voirie à proximité de réseaux" },
        duration: "1 jour, dont 1 heure d'examen",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_AIPR,
      }),
      course("encadrants", "Encadrants", {
        description: "Préparation à l'examen AIPR pour les agents qui encadrent des chantiers à proximité des réseaux.",
        points: [
          "Connaître la réglementation DT-DICT et le guide technique",
          "Comprendre les enjeux du contrôle des compétences (examen AIPR) au regard des obligations réglementaires",
        ],
        image: { src: `${IMG}/aipr-encadrants.webp`, alt: "Encadrants supervisant un chantier de travaux publics" },
        duration: "1 à 2 jours, dont 1 heure d'examen",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_AIPR,
      }),
    ],
  ),

  category("travaux-en-hauteur", "Travaux en hauteur", "Port du harnais anti-chute, utilisation, montage et vérification des échafaudages.", [
    course("port-du-harnais-anti-chute", "Port du harnais anti-chute", {
      description: "Principes de sécurité relatifs aux accès, aux travaux et aux déplacements en hauteur.",
      points: [
        "Connaître la réglementation sur les travaux en hauteur",
        "Découvrir les EPI et systèmes de protection contre les chutes de hauteur disponibles sur le marché",
        "Savoir choisir les EPI adaptés",
      ],
      image: { src: `${IMG}/harnais-anti-chute.webp`, alt: "Agent portant un harnais anti-chute en hauteur sur une toiture" },
      duration: "1 jour",
      groupSize: "8 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    category("echafaudage", "Échafaudage", "Montage, démontage, utilisation et vérification des échafaudages fixes et roulants.", [
      course("utilisation-montage-demontage-et-verification-dechafaudages-roulants", "Échafaudages roulants (R457)", {
        description:
          "Monter, démonter, utiliser et vérifier des échafaudages roulants, conformément à la recommandation CNAMTS R457 et au décret 2004-924.",
        points: [
          "Monter et démonter des échafaudages roulants dans le respect des règles de sécurité",
          "Appliquer une notice de montage",
          "Maîtriser la vérification et la maintenance des échafaudages roulants",
          "Superviser une équipe de monteurs",
        ],
        image: { src: `${IMG}/echafaudage-roulant.webp`, alt: "Échafaudage roulant monté en intérieur" },
        duration: "1 jour",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_ATTESTATION,
      }),
      course("utilisation-montage-demontage-et-verification-dechafaudages-fixes", "Échafaudages fixes (R408)", {
        description:
          "Monter, démonter, utiliser et vérifier des échafaudages fixes, conformément à la recommandation CNAMTS R408 et au décret 2004-924.",
        points: [
          "Monter et démonter des échafaudages fixes dans le respect des règles de sécurité",
          "Appliquer une notice de montage",
          "Maîtriser la vérification et la maintenance des échafaudages fixes",
          "Superviser une équipe de monteurs",
        ],
        image: { src: `${IMG}/echafaudage-fixe.webp`, alt: "Échafaudage fixe avec panneaux de signalisation de sécurité" },
        duration: "2 à 3 jours",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_ATTESTATION,
      }),
      course("utilisation-montage-demontage-et-verification-dechafaudages-fixes-et-roulants", "Échafaudages fixes et roulants (R408 / R457)", {
        description:
          "Monter, démonter, utiliser et vérifier des échafaudages fixes et roulants, conformément aux recommandations CNAMTS R408 et R457 et au décret 2004-924.",
        points: [
          "Monter et démonter des échafaudages fixes et roulants dans le respect des règles de sécurité",
          "Appliquer une notice de montage",
          "Maîtriser la vérification et la maintenance des échafaudages",
          "Superviser une équipe de monteurs",
        ],
        image: { src: `${IMG}/echafaudage-fixe.webp`, alt: "Échafaudage fixe avec panneaux de signalisation de sécurité" },
        duration: "1 à 4 jours",
        groupSize: "8 personnes maximum",
        validation: VALIDATION_ATTESTATION,
      }),
    ], { src: `${IMG}/echafaudage-roulant.webp`, alt: "Échafaudage roulant monté en intérieur" }),
  ]),

  category("secourisme-et-incendie", "Secourisme et incendie", "Centre habilité SST, défibrillateur, lutte contre l'incendie et évacuation de vos établissements.", [
    course("sauveteur-secouriste-du-travail-s-s-t", "Sauveteur Secouriste du Travail (SST)", {
      description:
        "Intervenir efficacement face à une situation d'accident et mettre en application des compétences de prévention en santé et sécurité au travail.",
      points: [
        "Protéger, examiner, alerter et secourir",
        "Formation initiale ou maintien et actualisation des compétences (MAC) selon votre situation",
      ],
      image: { src: `${IMG}/sst.webp`, alt: "Badge Sauveteur Secouriste du Travail (SST)" },
      duration: "MAC : 1 jour / Formation initiale : 2 jours",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_SST,
    }),
    course("manipulation-dextincteurs", "Manipulation d'extincteurs", {
      description: "Identifier la naissance et la propagation d'un incendie, et utiliser efficacement les moyens d'extinction.",
      points: [
        "Identifier les notions élémentaires et avancées de naissance et de propagation d'un incendie",
        "Mettre en œuvre et utiliser efficacement les différents moyens d'extinction",
      ],
      image: { src: `${IMG}/extincteurs.webp`, alt: "Extincteur mural" },
      duration: "2 à 4 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("equipier-de-premiere-intervention-epi", "Équipier de Première Intervention (EPI)", {
      description: "Formation des équipiers de première intervention pour la lutte contre un début d'incendie dans votre établissement.",
      points: [
        "Identifier les notions de naissance et de propagation d'un incendie",
        "Mettre en œuvre et utiliser efficacement les moyens d'extinction",
        "Analyser la situation et adopter un comportement préventif face aux risques d'incendie",
        "Appliquer les étapes d'intervention : reconnaissance, alerte, mise en sécurité, accueil et guidage des secours",
      ],
      image: { src: `${IMG}/epi-incendie.webp`, alt: "Extincteur fixé sur un mur avec sa signalétique" },
      duration: "4 à 7 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("equipier-de-seconde-intervention-esi", "Équipier de Seconde Intervention (ESI)", {
      description: "Acquérir un comportement et une gestuelle efficaces en mettant en œuvre les moyens de protection existants dans l'établissement.",
      points: [
        "Sensibiliser à la prévention des incendies",
        "Connaître les modalités du message d'alerte, les modes de propagation et les moyens d'extinction",
        "Maîtriser l'utilisation des moyens d'extinction",
        "Maîtriser le port de l'appareil respiratoire isolant (ARI) — en option",
      ],
      image: { src: `${IMG}/esi-incendie.webp`, alt: "Couloir d'un bâtiment équipé d'un extincteur" },
      duration: "4 à 14 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("evacuation", "Évacuation : guides et serre-files", {
      description: "Rôle des guides et serre-files lors de la mise en sécurité et de l'évacuation d'un établissement.",
      points: [
        "Identifier les notions de naissance et de propagation d'un incendie",
        "Mettre en œuvre les moyens de mise en sécurité des occupants",
        "Appliquer les étapes d'intervention : reconnaissance, alerte, mise en sécurité, accueil et guidage des secours",
      ],
      image: { src: `${IMG}/evacuation.webp`, alt: "Pictogramme d'évacuation d'urgence" },
      duration: "2 à 4 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("manipulation-de-defibrillateur", "Manipulation de défibrillateurs", {
      description: "Identifier un arrêt cardio-respiratoire et mettre en œuvre une procédure de réanimation d'urgence.",
      points: [
        "Identifier un arrêt cardio-respiratoire",
        "Mettre en œuvre une réanimation d'urgence et une défibrillation précoce à l'aide d'un défibrillateur",
      ],
      image: { src: `${IMG}/defibrillateur.webp`, alt: "Pictogramme défibrillateur automatisé externe (DAE)" },
      duration: "2 à 4 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
  ]),

  category("risques-lies-au-poste-de-travail", "Risques liés au poste de travail", "La prévention des risques du quotidien : voirie, outillage, manutention et déplacements.", [
    course("signalisation-temporaire-de-chantier", "Signalisation temporaire de chantiers", {
      description: "Définir les risques liés aux chantiers sur voirie et implanter une signalisation adaptée.",
      points: [
        "Savoir définir les risques liés aux chantiers sur voirie",
        "Implanter une signalisation correcte et efficace en fonction du chantier",
      ],
      image: { src: `${IMG}/signalisation-chantier.webp`, alt: "Barrières de signalisation temporaire de chantier" },
      duration: "1 jour",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("port-des-e-p-i-equipements-de-protection-individuelle", "Port des E.P.I. (Équipements de Protection Individuelle)", {
      description:
        "Le port des équipements de protection individuelle est l'une des mesures de prévention les plus simples et les plus efficaces au quotidien.",
      points: [
        "Sensibiliser les agents à l'importance du port des EPI",
        "Rappeler les bonnes pratiques de port et d'entretien",
      ],
      image: { src: `${IMG}/kits-epi.webp`, alt: "Kits d'équipements de protection individuelle" },
      duration: "4 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("gestes-et-postures", "Gestes et postures", {
      description: "Prévenir les accidents liés à la mauvaise manipulation des charges ou de mauvaises positions de travail.",
      points: [
        "Prévenir les accidents liés à la manutention manuelle et aux postures de travail",
        "Apporter des solutions pratiques pour améliorer les manutentions manuelles",
      ],
      image: { src: `${IMG}/gestes-et-postures.webp`, alt: "Agent souffrant du dos à son poste de travail" },
      duration: "7 heures",
      groupSize: "10 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
    course("tronconneuse-thermique-a-chaine", "Tronçonneuse thermique à chaîne", {
      description: "Utilisation en sécurité d'une tronçonneuse thermique à chaîne pour les travaux d'entretien des espaces verts.",
      points: [
        "Utiliser en sécurité une tronçonneuse thermique à chaîne",
        "Assurer la maintenance de premier niveau de sa tronçonneuse",
        "Choisir les EPI adaptés",
      ],
      image: { src: `${IMG}/tronconneuse.webp`, alt: "Tronçonneuse thermique à chaîne et équipements de protection" },
      duration: "7 heures",
      groupSize: "8 personnes maximum",
      validation: VALIDATION_ATTESTATION,
    }),
  ]),

  course("membres-du-cse", "Membres du CSE", {
    description:
      "Maîtriser la réglementation en santé, sécurité et conditions de travail, les missions du CSE et de la CSSCT, et savoir analyser les risques professionnels et les accidents du travail.",
    points: [
      "Maîtriser la réglementation en santé, sécurité et conditions de travail",
      "Maîtriser les missions et le fonctionnement du CSE et de la CSSCT",
      "S'approprier les outils mis à disposition pour mener sa mission",
      "Analyser les situations de travail et évaluer les risques professionnels",
      "Analyser les accidents et incidents du travail",
    ],
    image: { src: `${IMG}/membres-du-cse.webp`, alt: "Réunion des membres du Comité Social et Économique" },
    duration: "Collectivités de moins de 300 agents : 3 jours / de plus de 300 agents : 5 jours",
    groupSize: "10 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  }),

  course("formations-aux-risques-routiers-et-eco-conduite", "Formations aux risques routiers et éco-conduite", {
    description: "Sensibilisation aux risques routiers professionnels et à l'éco-conduite pour les agents qui se déplacent au quotidien.",
    points: [
      "Sensibiliser les conducteurs aux risques routiers",
      "Sensibiliser à la pertinence d'une conduite éco-responsable",
      "Utiliser les instruments de bord du véhicule pour réduire sa consommation",
    ],
    image: { src: `${IMG}/eco-conduite.webp`, alt: "Pictogramme éco-conduite" },
    duration: "4 à 7 heures",
    groupSize: "6 personnes maximum",
    validation: VALIDATION_ATTESTATION,
  }),
];

export function findFormationNode(slug: string[]): { node: FormationNode; trail: Crumb[] } | null {
  let nodes: FormationNode[] = formationsTree;
  const trail: Crumb[] = [];
  const pathAcc: string[] = [];

  for (let i = 0; i < slug.length; i++) {
    const found = nodes.find((n) => n.slug === slug[i]);
    if (!found) return null;

    pathAcc.push(found.slug);
    trail.push({ title: found.title, href: `/formations/${pathAcc.join("/")}/` });

    if (i === slug.length - 1) return { node: found, trail };
    if (found.kind !== "category") return null;
    nodes = found.children;
  }

  return null;
}

export function getAllFormationPaths(): string[][] {
  const paths: string[][] = [];

  function walk(nodes: FormationNode[], acc: string[]) {
    for (const node of nodes) {
      const next = [...acc, node.slug];
      paths.push(next);
      if (node.kind === "category") walk(node.children, next);
    }
  }

  walk(formationsTree, []);
  return paths;
}
