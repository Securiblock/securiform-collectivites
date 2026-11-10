// Contenu détaillé des pages formations, repris à l'identique des pages de securiform.fr
// (dépôt Securiblock/securiform). Clé : chemin de la page sous /formations/.
// `source` indique la page securiform d'origine, pour les mises à jour.

export type DetailCard = { title: string; text?: string[]; items?: string[] };

export type DetailBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; head: string[]; rows: (string | string[])[][] }
  | { type: "cards"; items: DetailCard[] }
  | { type: "steps"; items: DetailCard[] }
  | { type: "aside"; title?: string; items: string[]; text?: string[] }
  | { type: "faq"; items: { q: string; a: string[] }[] };

export type DetailSection = { eyebrow?: string; title: string; blocks: DetailBlock[] };

export type FormationDetail = { source: string; lead: string; sections: DetailSection[] };

export const formationDetails: Record<string, FormationDetail> = {
  "autorisations-de-conduite-et-caces": {
    source: "/caces",
    lead: "Formez vos équipes avec des professionnels de la formation et obtenez votre CACES® : chariots élévateurs, engins de chantier, nacelles élévatrices, ponts roulants, grues auxiliaires et gerbeurs à conducteur accompagnant.",
    sections: [
      {
        title: "6 recommandations CACES®",
        eyebrow: "Nos formations",
        blocks: [
          {
            type: "p",
            text: "Chaque recommandation correspond à une famille d'engins précise. SECURIFORM vous aide à identifier la formation adaptée à votre matériel, puis prépare vos équipes à l'obtention du certificat. Les tests sont réalisés par un organisme testeur certifié CACES®, référencé sur la liste de l'INRS, en sous-traitance."
          }
        ]
      },
      {
        title: "Quelle recommandation pour quel engin ?",
        eyebrow: "Bien choisir",
        blocks: [
          {
            type: "p",
            text: "Engins concernés, durée de formation et validité des 6 CACES® en un coup d'œil. SECURIFORM affine ensuite ce choix avec vous selon vos équipements exacts."
          }
        ]
      },
      {
        title: "Votre parcours de formation",
        eyebrow: "Déroulé",
        blocks: [
          {
            type: "p",
            text: "Un parcours structuré, alternant théorie et pratique, jusqu'à la certification."
          },
          {
            type: "steps",
            items: [
              {
                title: "Théorie",
                text: [
                  "Réglementation, technologie de l'engin et prévention des risques, en salle de formation."
                ]
              },
              {
                title: "Pratique",
                text: [
                  "Prise en main, manœuvres progressives et mises en situation réelles sur aire d'évolution."
                ]
              },
              {
                title: "Tests",
                text: [
                  "Évaluation théorique et pratique réalisée par un organisme testeur certifié CACES®, référencé INRS."
                ]
              },
              {
                title: "Certificat",
                text: [
                  "Délivrance du CACES® en cas de réussite, valable 5 ou 10 ans selon la recommandation obtenue."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Comment savoir quelle formation CACES® choisir ?",
                a: [
                  "Tout dépend du type d'engin utilisé dans votre entreprise. Le tableau ci-dessus donne un premier repère ; SECURIFORM affine ensuite le choix avec vous selon le modèle exact de vos équipements et vos besoins (formation initiale ou recyclage)."
                ]
              },
              {
                q: "Qui réalise les tests CACES® ?",
                a: [
                  "Les tests sont réalisés par un organisme testeur certifié CACES®, référencé sur la liste officielle de l'INRS, en sous-traitance."
                ]
              },
              {
                q: "Quelle est la durée de validité de mon CACES® ?",
                a: [
                  "Elle varie selon la recommandation : 5 ans pour les chariots élévateurs relevant de la recommandation R489A, les gerbeurs à conducteur accompagnant (R485A), les plateformes élévatrices (R486B), les ponts roulants et portiques (R484A) et les grues auxiliaires de chargement (R490A) ; 10 ans pour tous les engins de chantier relevant de la R482B."
                ]
              },
              {
                q: "CACES® et autorisation de conduite : quelle différence ?",
                a: [
                  "Le CACES® atteste d'une aptitude à conduire en sécurité, mais il ne suffit pas à lui seul : l'employeur doit également délivrer une autorisation de conduite, propre à son entreprise, tenant compte de l'absence de contre-indication médicale du salarié et de sa connaissance des lieux de travail."
                ]
              },
              {
                q: "Combien de temps dure une formation CACES® ?",
                a: [
                  "Cela dépend de la recommandation, du nombre de catégories et de l'expérience des stagiaires : une formation initiale dure de 1 à 5 jours, un recyclage de 0.5 à 2 jours. Le détail pour chaque CACES® figure dans notre comparateur et sur la page de chaque recommandation."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/engins-de-chantier": {
    source: "/caces-R482B",
    lead: "Formez-vous à la conduite en sécurité des engins de chantier, quelle que soit la catégorie : pelles hydrauliques, chargeuses, bouteurs, tracteurs agricoles, compacteurs, tombereaux…",
    sections: [
      {
        title: "11 catégories, un seul objectif : conduire en sécurité",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R482B couvre l'ensemble des engins de chantier utilisés en travaux publics, terrassement, construction et carrières. SECURIFORM adapte la formation à la catégorie réellement utilisée par vos équipes."
          }
        ]
      },
      {
        title: "Les catégories de la recommandation R482B",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Chaque catégorie correspond à une famille d'engins et à un mode de déplacement précis."
          },
          {
            type: "table",
            head: [
              "Catégorie",
              "Type d'engins",
              ""
            ],
            rows: [
              [
                "A",
                "Engins compacts",
                [
                  "Pelles hydroliques, à chenilles ou sur pneumatiques, de masse ≤ 6 tonnes",
                  "Chargeuses, à chenilles ou sur pneumatiques, de masse ≤ 6 tonnes",
                  "Chargeuses-pelleteuses de masse ≤ 6 tonnes",
                  "Moto-basculeurs de masse ≤ 6 tonnes",
                  "Compacteurs de masse ≤ 6 tonnes",
                  "Tracteurs agricoles de puissance ≤ 100 cv (73.6 kW)"
                ]
              ],
              [
                "B1",
                "Engins d'extraction à déplacement séquentiel",
                [
                  "Pelles hydroliques, à chenilles ou sur pneumatiques, de masse > 6 tonnes",
                  "Pelles multifonctions"
                ]
              ],
              [
                "B2",
                "Engins de sondage et de forage à déplacement séquentiel",
                [
                  "Machines automotrices de sondage ou de forage"
                ]
              ],
              [
                "B3",
                "Engins rail-route à déplacement séquentiel",
                [
                  "Pelles hydrauliques rail-route"
                ]
              ],
              [
                "C1",
                "Engins de chargement à déplacement alternatif",
                [
                  "Chargeuses sur pneumatiques de masse ≥ 6 tonnes",
                  "Chargeuses-pelleteuses de masse ≥ 6 tonnes"
                ]
              ],
              [
                "C2",
                "Engins de réglage à déplacement alternatif",
                [
                  "Bouteurs",
                  "Chargeuses à chenilles de masse > 6 tonnes"
                ]
              ],
              [
                "C3",
                "Engins de nivellement à déplacement alternatif",
                [
                  "Niveleuses automotrices"
                ]
              ],
              [
                "D",
                "Engins de compactage",
                [
                  "Compacteurs à cylindres, à pneumatiques ou mixtes, de masse > 6 tonnes",
                  "Compacteurs à pieds dameurs de masse > 6 tonnes"
                ]
              ],
              [
                "E",
                "Engins de transport",
                [
                  "Tombereaux rigides ou articulés",
                  "Moto-basculeurs de masse > 6 tonnes",
                  "Tracteurs agricoles de puissance > 100 cv (73.6 kW)"
                ]
              ],
              [
                "F",
                "Chariots de manutention tout-terrain",
                [
                  "Chariots de manutention tout-terrain à conducteur porté, à mât",
                  "Chariots de manutention tout-terrain à conducteur porté, à flèche téléscopique"
                ]
              ],
              [
                "G",
                "Conduite hors production (option)",
                [
                  "Transfert, chargement sur porte-engin, maintenance"
                ]
              ]
            ]
          },
          {
            type: "p",
            text: "Vous ne savez pas quelle catégorie correspond à votre matériel ? Contactez-nous, nous vous aidons à identifier la bonne formation."
          }
        ]
      },
      {
        title: "Un programme théorique et pratique complet",
        eyebrow: "Ce que couvre la formation",
        blocks: [
          {
            type: "p",
            text: "La partie théorique aborde la réglementation applicable, la technologie des engins (moteur, hydraulique, transmission, dispositifs de sécurité ROPS/FOPS), les catégories CACES, les règles de circulation, les risques du métier et les vérifications d'usage."
          },
          {
            type: "p",
            text: "La partie pratique se déroule directement sur les engins : prise de poste, conduite et manœuvres spécifiques à chaque catégorie (fouille pour les pelles, levage pour les chargeuses, nivellement pour les bouteurs, tassement pour les compacteurs…), puis fin de poste et maintenance quotidienne."
          },
          {
            type: "aside",
            items: [
              "30 à 50 % de théorie en salle",
              "50 à 70 % de pratique sur engins",
              "Évaluations progressives tout au long du stage",
              "Test théorique et pratique"
            ],
            title: "Déroulement type"
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de la catégorie visée et du niveau pratique des stagiaires."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Débutant : catégories simples",
                "2 à 3 jours"
              ],
              [
                "Débutant : catégories complexes",
                "3 à 5 jours"
              ],
              [
                "Débutant : catégories très spécialisées",
                "4 à 5 jours"
              ],
              [
                "Expérimenté",
                "2 jours environ"
              ],
              [
                "Recyclage",
                "1 à 2 jours"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R482B est valable 10 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "3 façons d'organiser la formation",
        eyebrow: "Où se former",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "En centre SECURIFORM",
                text: [
                  "Un parc d'engins varié, des terrains adaptés, et des groupes de 6 à 8 stagiaires maximum pour une pédagogie de qualité."
                ]
              },
              {
                title: "Sur votre site",
                text: [
                  "À partir de 4 à 6 personnes sur une même catégorie, vos équipes sont formées directement sur vos propres engins."
                ]
              },
              {
                title: "Formation individuelle",
                text: [
                  "Pour un besoin urgent ou une catégorie peu demandée, une session sur-mesure peut être organisée pour un seul candidat."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques des engins de chantier",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "p",
            text: "Chacun de ces risques fait l'objet d'une sensibilisation dédiée pendant la formation, théorique puis pratique."
          },
          {
            type: "cards",
            items: [
              {
                title: "Retournement",
                text: [
                  "Lié à un terrain instable, une vitesse excessive en virage ou une charge mal équilibrée. Prévenu par la connaissance de la stabilité de l'engin."
                ]
              },
              {
                title: "Électrocution",
                text: [
                  "Par proximité d'une ligne électrique aérienne. Prévenu par le repérage systématique des lignes et le respect des distances de sécurité."
                ]
              },
              {
                title: "Écrasement de piéton",
                text: [
                  "Favorisé par les angles morts des engins. Prévenu par l'inspection à 360° avant démarrage et l'usage systématique de l'avertisseur sonore."
                ]
              },
              {
                title: "Effondrement de tranchée",
                text: [
                  "Lié à un terrain instable ou des parois trop hautes sans blindage. Prévenu par l'analyse du sol et le respect des distances de sécurité au bord."
                ]
              },
              {
                title: "Chute de charge",
                text: [
                  "Causée par un élingage mal réalisé ou une surcharge. Prévenu par la vérification systématique des accessoires de levage avant utilisation."
                ]
              },
              {
                title: "Fatigue de l'opérateur",
                text: [
                  "La concentration baisse après plusieurs heures de conduite continue. Prévenu par des pauses régulières et l'auto-évaluation de sa propre vigilance."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "À quelle catégorie appartient mon engin de chantier ?",
                a: [
                  "Cela dépend du type d'engin, de sa masse et de son usage. Une pelle hydraulique de moins de 6 tonnes relève de la catégorie A, une pelle plus lourde de la catégorie B1, par exemple."
                ]
              },
              {
                q: "Puis-je former mes équipes sur plusieurs catégories en une seule session ?",
                a: [
                  "Oui, la durée de la formation pratique sera adaptée au nombre de catégories d'engins et à leur complexité."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R482B ?",
                a: [
                  "La formation ou le CACES® est valable 10 ans."
                ]
              },
              {
                q: "Comment se déroule le test final de certification ?",
                a: [
                  "Il comprend un test théorique de type QCM (environ 30 à 45 minutes) et un test pratique sur engin (20 à 60 minutes selon la catégorie), réalisés par un organisme testeur certifié, référencé INRS."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices), R489A (chariots) et R490A (grues de chargement) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel": {
    source: "/caces-R486B",
    lead: "Formez-vous à la conduite en sécurité des plateformes élévatrices mobiles de personnel (PEMP) : nacelles élévatrices ciseaux, plateformes sur mât, nacelles élévatrices à bras articulé ou télescopique.",
    sections: [
      {
        title: "Qu'est-ce que la recommandation R486B ?",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R486B encadre la conduite des plateformes élévatrices mobiles de personnel (PEMP), plus couramment appelées nacelles élévatrices. Elle distingue deux grands groupes selon le mode d'élévation : le groupe A comprend les PEMP à élévation verticale (nacelles élévatrices ciseaux, plateformes sur mât vertical), où la plateforme se déplace uniquement vers le haut ou le bas, sans mouvement horizontal complexe une fois en hauteur ; le groupe B comprend les PEMP à élévation multidirectionnelle (nacelles élévatrices à bras articulé ou télescopique), qui permettent des déplacements combinés une fois la plateforme élevée."
          }
        ]
      },
      {
        title: "Les différentes catégories de PEMP",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Chaque catégorie combine un groupe et un type : la lettre indique le mode d'élévation, le chiffre le mode de déplacement."
          },
          {
            type: "table",
            head: [
              "Groupe A Élévation verticale",
              "Groupe B Élévation multidirectionnelle",
              "Type 1 Déplacement en position de transport, avec stabilisateurs",
              "Type 3 Déplacement plateforme élevée, sans stabilisateurs"
            ],
            rows: [
              [
                ""
              ],
              [
                "1AÉlévation verticale avec stabilisateursEx. : plateforme sur mât vertical",
                "1BÉlévation multidirectionnelle avec stabilisateursEx. : nacelle élévatrice sur porteur"
              ],
              [
                "3AÉlévation verticale sans stabilisateursEx. : nacelle élévatrice ciseaux automotrice",
                "3BÉlévation multidirectionnelle sans stabilisateursEx. : nacelle élévatrice à bras articulé ou télescopique automotrice"
              ]
            ]
          },
          {
            type: "p",
            text: "SECURIFORM forme aux différents types de nacelles élévatrices."
          }
        ]
      },
      {
        title: "Un programme théorique et pratique complet",
        eyebrow: "Ce que couvre la formation",
        blocks: [
          {
            type: "p",
            text: "La partie théorique aborde la réglementation applicable (recommandation R486B de la CNAM), la technologie de la nacelle élévatrice (vérins, stabilisateurs, dispositifs anti-écrasement), les zones à risque et les vérifications d'usage avant chaque utilisation."
          },
          {
            type: "p",
            text: "La partie pratique se déroule sur une nacelle élévatrice réelle : mise en station, élévation et utilisation en hauteur, gestion des situations d'urgence (procédure de secours en cas de blocage), puis redescente et rangement en sécurité, fin de poste et maintenance."
          },
          {
            type: "aside",
            items: [
              "30 à 50 % de théorie en salle",
              "50 à 70 % de pratique sur engins",
              "Évaluations progressives tout au long du stage",
              "Test théorique et pratique"
            ],
            title: "Déroulement type"
          }
        ]
      },
      {
        title: "Utiliser une nacelle élévatrice en 4 temps",
        eyebrow: "La bonne méthode",
        blocks: [
          {
            type: "p",
            text: "Un enchaînement systématique, quelle que soit la durée de l'intervention."
          },
          {
            type: "steps",
            items: [
              {
                title: "Vérifier",
                text: [
                  "Contrôler l'état de la nacelle élévatrice, des commandes et du sol avant toute mise en service."
                ]
              },
              {
                title: "Mettre en station",
                text: [
                  "Positionner et stabiliser la nacelle élévatrice, harnais et longe attachés dès la montée sur la plateforme."
                ]
              },
              {
                title: "Travailler en hauteur",
                text: [
                  "Élever la plateforme progressivement, en respectant les zones dégagées et les distances de sécurité."
                ]
              },
              {
                title: "Redescendre",
                text: [
                  "Ramener la plateforme au sol, couper l'alimentation et ranger la nacelle élévatrice en sécurité."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques de la nacelle élévatrice",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Basculement",
                text: [
                  "Lié à un sol instable ou une surcharge de la plateforme. Prévenu par la vérification du terrain et le respect de la charge maximale autorisée."
                ]
              },
              {
                title: "Chute de hauteur",
                text: [
                  "En cas d'éjection de la plateforme. Prévenu par le port systématique du harnais et de la longe, attachés à un point d'ancrage dédié."
                ]
              },
              {
                title: "Écrasement",
                text: [
                  "Entre la plateforme et une structure fixe (poutre, plafond). Prévenu par une vigilance constante lors des déplacements en hauteur."
                ]
              },
              {
                title: "Électrocution",
                text: [
                  "Par proximité d'une ligne électrique aérienne. Prévenu par le repérage systématique avant toute élévation."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de votre expérience et du type de nacelle élévatrice utilisé."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Formation initiale débutant : une catégorie",
                "2 à 3 jours"
              ],
              [
                "Formation initiale débutant : plusieurs catégories",
                "3 à 5 jours"
              ],
              [
                "Expérimenté",
                "1 à 2 jours"
              ],
              [
                "Recyclage",
                "1 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R486B est valable 5 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre le groupe A et le groupe B ?",
                a: [
                  "Le groupe A concerne les nacelles élévatrices à élévation verticale (ciseaux, mât), où le déplacement en hauteur est limité. Le groupe B couvre les nacelles élévatrices à bras articulé ou télescopique, permettant des mouvements combinés une fois la plateforme élevée."
                ]
              },
              {
                q: "Le port du harnais est-il obligatoire sur une nacelle élévatrice ?",
                a: [
                  "Oui, le port du harnais avec longe, attaché à un point d'ancrage dédié de la plateforme, fait partie des règles de sécurité de base enseignées dès le début de la formation."
                ]
              },
              {
                q: "Que faire en cas de blocage de la nacelle élévatrice en hauteur ?",
                a: [
                  "La formation intègre une sensibilisation aux procédures de secours : commandes de secours au sol, contact avec les personnes formées à leur utilisation, et consignes à respecter en attendant le dépannage."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R486B ?",
                a: [
                  "La formation ou le CACES® est valable 5 ans."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R489A (chariots) et R490A (grues de chargement) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489": {
    source: "/caces-R489A",
    lead: "Formez-vous à la conduite en sécurité des chariots de manutention à conducteur porté : transpalettes, gerbeurs, chariots élévateurs en porte-à-faux et à mât rétractable.",
    sections: [
      {
        title: "7 catégories, un seul objectif : conduire en sécurité",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R489A encadre la conduite des chariots de manutention à conducteur porté, c'est-à-dire ceux sur lesquels le cariste prend place à bord. Elle se décline en 7 catégories, selon le type de chariot et sa capacité de charge. SECURIFORM adapte la formation à la catégorie réellement utilisée par vos équipes."
          }
        ]
      },
      {
        title: "Les catégories de la recommandation R489A",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Catégorie",
              "Type de chariot",
              ""
            ],
            rows: [
              [
                "1A",
                "Transpalettes à conducteur porté",
                "hauteur de levée ≤ 1.20m"
              ],
              [
                "1B",
                "Gerbeurs à conducteur porté",
                "hauteur de levée > 1.20m"
              ],
              [
                "2A",
                "Chariots à plateau porteur",
                "capacité de charge ≤ 2 tonnes"
              ],
              [
                "2B",
                "Chariots tracteurs industriels",
                "capacité de traction ≤ 25 tonnes"
              ],
              [
                "3",
                "Chariots élévateurs frontaux en porte-à-faux",
                "capacité nominale ≤ 6 tonnes"
              ],
              [
                "4",
                "Chariots élévateurs frontaux en porte-à-faux",
                "capacité nominale > 6 tonnes"
              ],
              [
                "5",
                "Chariots élévateurs à mât rétractable",
                ""
              ],
              [
                "6",
                "Chariots élévateurs à poste de conduite élevable",
                "hauteur de plancher > 1.20m"
              ],
              [
                "7",
                "Conduite hors-production des chariots de toutes les catégories",
                ""
              ]
            ]
          },
          {
            type: "p",
            text: "Vous ne savez pas quelle catégorie correspond à votre matériel ? Contactez-nous, nous vous aidons à l'identifier."
          }
        ]
      },
      {
        title: "Un programme théorique et pratique complet",
        eyebrow: "Ce que couvre la formation",
        blocks: [
          {
            type: "p",
            text: "La partie théorique aborde la réglementation applicable (recommandation R489A de la CNAM), la technologie du chariot (mât, fourches, batterie ou moteur thermique), les règles de circulation en entrepôt, les risques liés à la manutention et les vérifications d'usage avant chaque utilisation."
          },
          {
            type: "p",
            text: "La partie pratique se déroule sur un chariot réel : prise et dépose de charges, circulation en allées, gerbage à différentes hauteurs selon la catégorie, puis fin de poste et mise en charge de la batterie."
          },
          {
            type: "aside",
            items: [
              "30 à 50 % de théorie en salle",
              "50 à 70 % de pratique sur engins",
              "Évaluations progressives tout au long du stage",
              "Test théorique et pratique"
            ],
            title: "Déroulement type"
          }
        ]
      },
      {
        title: "Utiliser un chariot élévateur en 4 temps",
        eyebrow: "La bonne méthode",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Vérifier",
                text: [
                  "Contrôler l'état des fourches, du mât, des pneumatiques et le niveau de charge avant démarrage."
                ]
              },
              {
                title: "Prendre la charge",
                text: [
                  "Engager les fourches bien centrées, en respectant la capacité indiquée sur la plaque de charge."
                ]
              },
              {
                title: "Circuler",
                text: [
                  "Adapter sa vitesse aux allées, aux piétons et à la visibilité, charge abaissée pendant les déplacements."
                ]
              },
              {
                title: "Gerber",
                text: [
                  "Positionner la charge en hauteur avec une visibilité dégagée et un mât parfaitement vertical."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques du chariot de manutention",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Basculement",
                text: [
                  "Lié à une charge trop élevée par rapport à la capacité du chariot ou à un virage trop rapide. Prévenu par le respect strict du diagramme de charge."
                ]
              },
              {
                title: "Écrasement de piéton",
                text: [
                  "Favorisé par les angles morts du chariot chargé. Prévenu par une vitesse adaptée et l'usage systématique de l'avertisseur sonore."
                ]
              },
              {
                title: "Chute de charge",
                text: [
                  "Causée par une charge mal palettisée ou un mât mal réglé. Prévenu par une prise de charge centrée et un mât vertical avant déplacement."
                ]
              },
              {
                title: "Collision",
                text: [
                  "Avec un rayonnage, un autre engin ou une structure fixe. Prévenu par une circulation à vitesse réduite et une signalisation aux intersections."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de votre expérience et de la ou des catégories visées."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Formation initiale débutant : une catégorie",
                "2 à 3 jours"
              ],
              [
                "Formation initiale débutant : plusieurs catégories",
                "3 à 5 jours"
              ],
              [
                "Expérimenté",
                "1 à 2 jours"
              ],
              [
                "Recyclage",
                "1 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R489A est valable 5 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "À quelle catégorie appartient mon chariot élévateur ?",
                a: [
                  "Cela dépend du type de chariot et de sa capacité de charge. Un transpalette ou un gerbeur léger relève de la catégorie 1, un chariot élévateur standard de la catégorie 3, par exemple."
                ]
              },
              {
                q: "Puis-je former mes équipes sur plusieurs catégories en une seule session ?",
                a: [
                  "Oui, la durée de la formation pratique sera adaptée au nombre de catégories d'engins et à leur complexité."
                ]
              },
              {
                q: "Qu'est-ce que la catégorie 7 ?",
                a: [
                  "Elle concerne la conduite hors production : déplacement d'un chariot, chargement sur porteur, transfert entre sites, essais ou démonstrations, sans activité de manutention proprement dite."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R489A ?",
                a: [
                  "La formation ou le CACES® est valable 5 ans."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices) et R490A (grues de chargement) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-accompagnant": {
    source: "/caces-R485A",
    lead: "Formez-vous à la conduite en sécurité des gerbeurs à conducteur accompagnant, utilisés en entrepôt et en environnements de stockage à rayonnages étroits.",
    sections: [
      {
        title: "Qu'est-ce qu'un gerbeur à conducteur accompagnant ?",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Contrairement aux chariots élévateurs du CACES R489A, sur lesquels le cariste prend place à bord, le gerbeur à conducteur accompagnant se pilote en marchant à côté ou derrière l'engin, à l'aide d'un timon. Cette différence de conduite implique des risques spécifiques : c'est pourquoi la recommandation R485A lui consacre une certification à part entière."
          }
        ]
      },
      {
        title: "Les catégories de la recommandation R485A",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Catégorie",
              "Type d'engin",
              "Hauteur de levée"
            ],
            rows: [
              [
                "Catégorie 1",
                "Gerbeur à conducteur accompagnant",
                "1.20 m < hauteur de levée ≤ 2.50 m"
              ],
              [
                "Catégorie 2",
                "Gerbeur à conducteur accompagnant",
                "hauteur de levée > 2.50 m"
              ]
            ]
          },
          {
            type: "p",
            text: "Vous ne savez pas quelle catégorie correspond à votre matériel ? Contactez-nous, nous vous aidons à l'identifier."
          }
        ]
      },
      {
        title: "Un programme théorique et pratique complet",
        eyebrow: "Ce que couvre la formation",
        blocks: [
          {
            type: "p",
            text: "La partie théorique aborde la réglementation applicable (recommandation R485A de la CNAM), la technologie du gerbeur (timon, fourches, mât de levage, batterie), les risques propres à la conduite accompagnée et les vérifications d'usage avant chaque utilisation."
          },
          {
            type: "p",
            text: "La partie pratique se déroule sur un gerbeur réel : prise et dépose de charges, circulation en allées étroites, gerbage et dégerbage à différentes hauteurs, puis fin de poste et mise en charge de la batterie."
          },
          {
            type: "aside",
            items: [
              "30 à 50 % de théorie en salle",
              "50 à 70 % de pratique sur engins",
              "Évaluations progressives tout au long du stage",
              "Test théorique et pratique"
            ],
            title: "Déroulement type"
          }
        ]
      },
      {
        title: "Utiliser un gerbeur en 4 temps",
        eyebrow: "La bonne méthode",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Vérifier",
                text: [
                  "Contrôler l'état des fourches, du mât et le niveau de charge de la batterie avant utilisation."
                ]
              },
              {
                title: "Prendre la charge",
                text: [
                  "Engager les fourches avec précision, en gardant les pieds à l'écart de la zone de manœuvre."
                ]
              },
              {
                title: "Se déplacer",
                text: [
                  "Circuler à vitesse adaptée, en particulier dans les allées étroites entre les rayonnages."
                ]
              },
              {
                title: "Gerber ou dégerber",
                text: [
                  "Positionner ou retirer la charge du rayonnage avec une visibilité dégagée sur la zone de dépose."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques du gerbeur à conducteur accompagnant",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Écrasement des pieds",
                text: [
                  "Le conducteur marchant à côté de l'engin, ce risque est spécifique à ce mode de conduite. Prévenu par le port de chaussures de sécurité et une distance de sécurité constante."
                ]
              },
              {
                title: "Basculement de charge",
                text: [
                  "Lié à une charge mal centrée ou trop élevée par rapport à la capacité du gerbeur. Prévenu par le respect strict de la charge maximale admissible."
                ]
              },
              {
                title: "Collision",
                text: [
                  "Avec un piéton ou un autre engin, notamment dans les allées étroites. Prévenu par une vitesse adaptée et une signalisation aux intersections."
                ]
              },
              {
                title: "Chute de charge en hauteur",
                text: [
                  "Prévenu par un positionnement stable avant toute élévation."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de votre expérience et de la catégorie visée."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Formation initiale débutant",
                "1 à 2 jours"
              ],
              [
                "Expérimenté",
                "1 jour"
              ],
              [
                "Recyclage",
                "0.5 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R485A est valable 5 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre le CACES R485A et le CACES R489A ?",
                a: [
                  "Le R485A concerne les gerbeurs à conducteur accompagnant, pilotés en marchant à côté de l'engin. Le R489A couvre les chariots élévateurs où le cariste prend place à bord. Les risques et la conduite étant différents, les certifications le sont aussi."
                ]
              },
              {
                q: "À quelle catégorie appartient mon gerbeur ?",
                a: [
                  "Cela dépend de la hauteur de levée de votre gerbeur : la catégorie 1 correspond à une hauteur de levée comprise entre 1.20 m et 2.50 m, la catégorie 2 à une hauteur de levée supérieure à 2.50 m."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R485A ?",
                a: [
                  "La formation ou le CACES® est valable 5 ans."
                ]
              },
              {
                q: "Puis-je me former aux catégories 1 et 2 en même temps ?",
                a: [
                  "Oui. La catégorie 2 englobe la catégorie 1 : un conducteur formé en catégorie 2 peut également conduire les gerbeurs de catégorie 1. Une formation unique en catégorie 2 permet donc de couvrir l'ensemble de votre parc."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R486B (nacelles élévatrices), R489A (chariots) et R490A (grues de chargement) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/tondeuse-autoportee": {
    source: "/tondeuses-autoportees",
    lead: "Pour les agents espaces verts et les collectivités : les bons réflexes pour conduire une tondeuse autoportée en toute sécurité.",
    sections: [
      {
        title: "Un engin courant, des risques à ne pas sous-estimer",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La tondeuse autoportée ne fait pas partie du champ des CACES®, mais son utilisation présente des risques réels : retournement sur pente, projection de débris, coupure par les lames... Une formation dédiée qui permet à vos équipes d'entretien d'espaces verts d'acquérir les bons réflexes."
          }
        ]
      },
      {
        title: "Les principaux risques",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Retournement",
                text: [
                  "Le risque principal sur les terrains en pente ou irréguliers, en particulier lors d'un virage mal maîtrisé."
                ]
              },
              {
                title: "Projection de débris",
                text: [
                  "Pierres, branches ou objets projetés par les lames à grande vitesse, dangereux pour l'opérateur et les tiers."
                ]
              },
              {
                title: "Coupure",
                text: [
                  "Lié aux lames rotatives, notamment lors d'une intervention de déblocage ou d'entretien sans précaution."
                ]
              },
              {
                title: "Écrasement en marche arrière",
                text: [
                  "Angles morts fréquents à l'arrière de la machine, en particulier à proximité de piétons."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les vérifications de routine",
        eyebrow: "Avant de démarrer",
        blocks: [
          {
            type: "p",
            text: "Avant chaque utilisation, un rapide contrôle permet d'éviter la plupart des incidents : niveau d'huile et de carburant, état et fixation des lames, fonctionnement des freins, pression des pneus, et présence des carters de protection."
          },
          {
            type: "p",
            text: "Ces vérifications, simples et rapides, font partie des automatismes que la formation cherche à installer durablement chez chaque conducteur."
          },
          {
            type: "aside",
            items: [
              "Niveaux d'huile et de carburant",
              "État et fixation des lames",
              "Fonctionnement des freins",
              "Carters et protections en place"
            ],
            title: "À vérifier avant utilisation"
          }
        ]
      },
      {
        title: "Bien conduire sur un terrain en pente",
        eyebrow: "Le point le plus sensible",
        blocks: [
          {
            type: "p",
            text: "La règle de base : tondre toujours dans le sens de la pente, en montant ou en descendant, jamais transversalement. Un déplacement en travers d'une pente augmente fortement le risque de basculement latéral. La vitesse doit être réduite dès que le terrain devient irrégulier ou incliné."
          }
        ]
      },
      {
        title: "Les équipements de protection",
        eyebrow: "S'équiper correctement",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Chaussures fermées antidérapantes",
                text: [
                  "Protègent le pied et évitent les glissades lors de la montée ou descente de l'engin."
                ]
              },
              {
                title: "Protection auditive",
                text: [
                  "Recommandée lors d'une utilisation prolongée, en raison du bruit continu du moteur."
                ]
              },
              {
                title: "Lunettes de protection",
                text: [
                  "Protègent des projections de débris, particulièrement sur terrain caillouteux."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Un CACES® est-il nécessaire pour conduire une tondeuse autoportée ?",
                a: [
                  "Non, la tondeuse autoportée ne relève d'aucune recommandation CACES®. Une formation à la conduite en sécurité reste néanmoins fortement recommandée, notamment sur des terrains en pente."
                ]
              },
              {
                q: "Peut-on tondre en travers d'une pente pour aller plus vite ?",
                a: [
                  "Non, c'est justement la configuration la plus à risque de retournement. Il faut toujours tondre dans le sens de la pente, en montant ou en descendant."
                ]
              },
              {
                q: "Que faire en cas de blocage des lames ?",
                a: [
                  "Toujours couper le moteur et attendre l'arrêt complet des lames avant toute intervention manuelle, même rapide."
                ]
              },
              {
                q: "Cette formation peut-elle se dérouler directement sur nos sites ?",
                a: [
                  "Oui, une formation sur site permet de s'entraîner directement sur le matériel et les terrains réellement utilisés par vos équipes."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/ponts-roulants-recommandation-r484": {
    source: "/caces-R484A",
    lead: "Formez-vous à la conduite en sécurité des ponts roulants et portiques à commande au sol, et aux techniques d'élingage indispensables au levage.",
    sections: [
      {
        title: "Pont roulant à commande au sol et portique, un seul objectif : conduire en sécurité",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R484A couvre les ponts roulants et portiques utilisés dans les ateliers industriels pour le levage de charges. Elle se décline en 2 catégories selon que l'opérateur commande l'équipement depuis le sol ou depuis une cabine : SECURIFORM forme à la catégorie 1, commande au sol. Certains équipements en sont exclus : ponts à bras articulé non conformes à la norme EN 15011, chariots suspendus, palans seuls, et grues d'atelier qui relèvent d'une autre recommandation."
          }
        ]
      },
      {
        title: "Les catégories de la recommandation R484A",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Catégorie",
              "Mode de commande",
              "Usage typique"
            ],
            rows: [
              [
                "Cat. 1",
                "Portiques et ponts roulants à commande au sol (boîtier filaire ou radiocommande)",
                "Ateliers de fabrication, magasins industriels, charges moyennes"
              ],
              [
                "Cat. 2",
                "Ponts roulants à commande en cabine (suspendue ou fixe), avec option commande au sol",
                "Sidérurgie, fonderie, construction navale, charges très lourdes"
              ]
            ]
          },
          {
            type: "p",
            text: "SECURIFORM forme uniquement à la catégorie 1 : la conduite des ponts roulants en cabine (catégorie 2) n'est pas proposée."
          }
        ]
      },
      {
        title: "La CMU et l'angle d'élingage",
        eyebrow: "Une notion clé",
        blocks: [
          {
            type: "p",
            text: "La Charge Maximale d'Utilisation (CMU) est la charge maximale que l'équipement peut lever en toute sécurité ; elle inclut le poids de la charge et celui des accessoires d'élingage. L'angle entre les brins de l'élingue modifie fortement la CMU réellement disponible."
          },
          {
            type: "table",
            head: [
              "Angle entre brins",
              "Effet sur la CMU"
            ],
            rows: [
              [
                "0° à 45°",
                "CMU renforcée"
              ],
              [
                "60° (angle optimal recommandé)",
                "CMU nominale de l'élingue"
              ],
              [
                "90°",
                "CMU réduite d'environ 30 %"
              ],
              [
                "120°",
                "CMU réduite de moitié"
              ],
              [
                "Plus de 120°",
                "Interdit : risque de rupture"
              ]
            ]
          }
        ]
      },
      {
        title: "Les techniques d'élingage enseignées",
        eyebrow: "La compétence critique",
        blocks: [
          {
            type: "p",
            text: "L'élingage est l'opération qui relie la charge à l'appareil de levage : un mauvais élingage transforme un simple levage en accident grave."
          },
          {
            type: "cards",
            items: [
              {
                title: "Élingues chaînes",
                text: [
                  "Très résistantes et durables, idéales pour les charges lourdes ou les environnements agressifs, mais plus lourdes à manipuler."
                ]
              },
              {
                title: "Élingues câbles métalliques",
                text: [
                  "Souples et polyvalentes, adaptées à un usage général, mais leur usure interne est plus difficile à contrôler visuellement."
                ]
              },
              {
                title: "Élingues textiles",
                text: [
                  "Légères et protectrices pour les charges fragiles ou finies, mais sensibles aux coupures, à la chaleur et aux UV."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Utiliser un pont roulant en 4 temps",
        eyebrow: "La bonne méthode",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Vérifier",
                text: [
                  "Contrôler l'état du pont, des câbles, du crochet et des dispositifs de sécurité avant toute utilisation."
                ]
              },
              {
                title: "Élinguer",
                text: [
                  "Choisir l'accessoire adapté et respecter l'angle optimal entre les brins pour préserver la CMU."
                ]
              },
              {
                title: "Lever et déplacer",
                text: [
                  "Soulever progressivement, stabiliser la charge, puis la déplacer à vitesse maîtrisée en évitant tout obstacle."
                ]
              },
              {
                title: "Reposer",
                text: [
                  "Déposer la charge en douceur, décrocher les accessoires, puis ranger le pont en position de repos."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques du pont roulant",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Chute de charge",
                text: [
                  "Le risque le plus fréquent, lié à un élingage défaillant ou une surcharge. Prévenu par un élingage rigoureux et un essai de levage progressif."
                ]
              },
              {
                title: "Écrasement",
                text: [
                  "Lorsqu'une personne se trouve entre la charge et un obstacle fixe. Prévenu par le balisage des zones et l'interdiction de passage sous charge."
                ]
              },
              {
                title: "Collision avec la structure",
                text: [
                  "Liée à des limiteurs de fin de course défaillants ou une vitesse excessive. Prévenu par leur vérification quotidienne et une conduite adaptée."
                ]
              },
              {
                title: "Surcharge",
                text: [
                  "Liée à une mauvaise estimation du poids ou à l'oubli du poids des accessoires. Prévenu par un pesage systématique et le respect strict de la CMU."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de votre expérience."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Formation initiale débutant",
                "2 à 3 jours"
              ],
              [
                "Expérimenté",
                "1 à 2 jours"
              ],
              [
                "Recyclage",
                "1 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R484A est valable 5 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "À quelle catégorie appartient mon pont roulant ?",
                a: [
                  "Cela dépend du mode de commande : si vos opérateurs pilotent depuis le sol (boîtier ou radiocommande), c'est la catégorie 1. S'ils sont installés en cabine, suspendue ou fixe, c'est la catégorie 2, éventuellement complétée par l'option commande au sol. SECURIFORM forme uniquement à la catégorie 1."
                ]
              },
              {
                q: "Pourquoi l'angle d'élingage est-il si important ?",
                a: [
                  "Parce qu'il modifie directement la charge maximale que l'élingue peut supporter en toute sécurité. Au-delà de 120° entre les brins, le risque de rupture devient inacceptable : c'est pourquoi la formation insiste particulièrement sur ce point."
                ]
              },
              {
                q: "Mon pont roulant a un bras articulé, est-il couvert par le R484A ?",
                a: [
                  "Non, les ponts à bras articulé non conformes à la norme EN 15011, les chariots suspendus, les palans seuls et les grues d'atelier ne relèvent pas du CACES R484A. Contactez-nous pour identifier la formation adaptée à votre équipement."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R484A ?",
                a: [
                  "La formation ou le CACES® est valable 5 ans."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices), R489A (chariots) et R490A (grues de chargement) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490": {
    source: "/caces-R490A",
    lead: "Formez-vous à la conduite en sécurité des grues de chargement montées sur véhicules porteurs, pour le transport routier et l'approvisionnement de chantier.",
    sections: [
      {
        title: "Une seule catégorie, une option possible",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R490A encadre la conduite des grues auxiliaires de chargement, ces bras de levage montés à l'arrière ou sur le flanc d'un véhicule porteur, utilisés pour charger et décharger des matériaux sur les chantiers et lors du transport routier."
          }
        ]
      },
      {
        title: "Montages et modes de conduite",
        eyebrow: "Selon votre matériel",
        blocks: [
          {
            type: "p",
            text: "L'emplacement de la grue sur le porteur et la façon de la piloter changent les gestes de l'opérateur : la formation s'adapte à votre équipement."
          },
          {
            type: "h3",
            text: "Les 3 types de montage"
          },
          {
            type: "cards",
            items: [
              {
                title: "Derrière la cabine",
                text: [
                  "Le montage le plus courant : la grue est installée entre la cabine et le plateau. Elle dessert toute la longueur du plateau et le poids de la grue est reporté vers l'avant du véhicule."
                ]
              },
              {
                title: "En porte-à-faux arrière",
                text: [
                  "La grue est fixée à l'extrémité arrière du châssis, souvent repliable. Le plateau reste entièrement libre pour le chargement, mais la stabilité du porteur et la charge sur l'essieu arrière demandent une attention particulière."
                ]
              },
              {
                title: "En position centrale",
                text: [
                  "La grue est montée au milieu du plateau, entre deux zones de chargement. Elle dessert l'avant comme l'arrière du véhicule, une configuration fréquente sur les porteurs de grande longueur."
                ]
              }
            ]
          },
          {
            type: "h3",
            text: "Les 2 modes de conduite"
          },
          {
            type: "cards",
            items: [
              {
                title: "Conduite par commande embarquée",
                text: [
                  "L'opérateur pilote depuis les commandes installées sur la grue elle-même (leviers au pied de la colonne ou poste surélevé). Il doit se placer de façon à garder la charge et la zone d'évolution en vue."
                ]
              },
              {
                title: "Conduite par télécommande",
                text: [
                  "L'opérateur pilote à distance avec une radiocommande ou une commande filaire. Il choisit librement sa position pour voir la charge, rester hors de la zone d'évolution et guider les manœuvres au plus près."
                ]
              }
            ]
          },
          {
            type: "p",
            text: "Vous ne savez pas quel montage ou quel mode de conduite correspond à votre grue ? Contactez-nous, nous identifions cela avec vous."
          }
        ]
      },
      {
        title: "Un programme théorique et pratique complet",
        eyebrow: "Ce que couvre la formation",
        blocks: [
          {
            type: "p",
            text: "La partie théorique aborde la réglementation applicable (recommandation R490A de la CNAM), la technologie de la grue (vérins, stabilisateurs, limiteur de charge), les règles de stabilité du véhicule porteur, les zones dangereuses et les vérifications d'usage avant chaque utilisation."
          },
          {
            type: "p",
            text: "La partie pratique se déroule sur une grue réelle : déploiement des stabilisateurs, prise et pose de charges à différentes hauteurs et portées, utilisation de la télécommande si votre matériel en est équipé, puis repliement et rangement en sécurité."
          },
          {
            type: "aside",
            items: [
              "30 à 50 % de théorie en salle",
              "50 à 70 % de pratique sur engins",
              "Évaluations progressives tout au long du stage",
              "Test théorique et pratique"
            ],
            title: "Déroulement type"
          }
        ]
      },
      {
        title: "Utiliser une grue de chargement en 4 temps",
        eyebrow: "La bonne méthode",
        blocks: [
          {
            type: "p",
            text: "Cet enchaînement fait partie des automatismes que la formation cherche à installer durablement."
          },
          {
            type: "steps",
            items: [
              {
                title: "Vérifier",
                text: [
                  "Contrôler l'état de la grue, du limiteur de charge et du véhicule porteur avant toute utilisation."
                ]
              },
              {
                title: "Stabiliser",
                text: [
                  "Déployer entièrement les stabilisateurs sur un sol adapté, condition indispensable à toute manœuvre."
                ]
              },
              {
                title: "Manutentionner",
                text: [
                  "Prendre et poser la charge en respectant les limites de charge selon la portée utilisée."
                ]
              },
              {
                title: "Replier",
                text: [
                  "Ranger la grue et les stabilisateurs en position de transport avant de reprendre la route."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux risques de la grue de chargement",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Basculement du véhicule",
                text: [
                  "Lié à une stabilisation insuffisante ou un sol instable. Prévenu par le déploiement complet des stabilisateurs avant toute manœuvre."
                ]
              },
              {
                title: "Chute de charge",
                text: [
                  "Causée par un élingage mal réalisé ou un dépassement du diagramme de charge. Prévenu par le respect strict des limites indiquées par la grue."
                ]
              },
              {
                title: "Écrasement",
                text: [
                  "Risque pour les personnes présentes dans la zone de manœuvre. Prévenu par un périmètre de sécurité clairement délimité."
                ]
              },
              {
                title: "Électrocution",
                text: [
                  "Par proximité d'une ligne électrique aérienne lors du déploiement du bras. Prévenu par le repérage systématique avant utilisation."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Une durée sur-mesure",
        eyebrow: "Combien de temps",
        blocks: [
          {
            type: "p",
            text: "À titre indicatif, la durée exacte dépend de votre expérience et de l'option nécessaire."
          },
          {
            type: "table",
            head: [
              "Profil",
              "Durée indicative"
            ],
            rows: [
              [
                "Formation initiale débutant",
                "2 à 3 jours"
              ],
              [
                "Formation initiale avec option télécommande",
                "3 jours"
              ],
              [
                "Expérimenté",
                "1 à 2 jours"
              ],
              [
                "Recyclage",
                "1 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "La formation ou le CACES® R490A est valable 5 ans à compter de sa validation."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Le CACES R490A comporte-t-il plusieurs catégories, comme le R482B ?",
                a: [
                  "Non. Contrairement au R482B et ses onze catégories, le R490A constitue une seule certification pour l'ensemble des grues auxiliaires de chargement, avec une option possible : télécommande."
                ]
              },
              {
                q: "Ai-je besoin de l'option télécommande si ma grue n'est pas encore équipée ?",
                a: [
                  "Non, l'option n'est utile que si vous utilisez réellement ce mode de pilotage. Il est cependant possible de l'ajouter plus tard si votre équipement évolue."
                ]
              },
              {
                q: "Le CACES R490A suffit-il pour conduire mon véhicule porteur ?",
                a: [
                  "Non, le CACES R490A certifie uniquement l'usage de la grue. La conduite du véhicule porteur reste soumise à son propre permis de conduire, selon son poids total autorisé en charge."
                ]
              },
              {
                q: "Quelle est la durée de validité de la formation ou du CACES R490A ?",
                a: [
                  "La formation ou le CACES® est valable 5 ans."
                ]
              },
              {
                q: "Et si je suis concerné par une autre catégorie d'engins pour la formation à la conduite en sécurité et CACES® ?",
                a: [
                  "SECURIFORM prépare également à la formation à la conduite en sécurité et aux CACES R482B (engins de chantier), R484A (ponts roulants), R485A (gerbeurs à conducteur accompagnant), R486B (nacelles élévatrices) et R489A (chariots) : retrouvez le détail sur notre page Conduite en sécurité et CACES®."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse": {
    source: "/balayeuses-routieres",
    lead: "Pour les collectivités et entreprises de nettoyage urbain : conduire une balayeuse en sécurité au milieu de la circulation et des piétons.",
    sections: [
      {
        title: "Un engin qui travaille au cœur de la circulation",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Contrairement à la plupart des engins de chantier, la balayeuse routière évolue en permanence à proximité de véhicules, cyclistes et piétons, souvent à faible vitesse sur voie ouverte à la circulation. Cette cohabitation constante avec les autres usagers est la spécificité centrale de cette formation."
          }
        ]
      },
      {
        title: "Les principaux risques",
        eyebrow: "Ce que la formation prévient",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Collision avec un usager",
                text: [
                  "Piéton, cycliste ou véhicule léger, notamment aux intersections et lors des manœuvres de dépassement."
                ]
              },
              {
                title: "Angles morts",
                text: [
                  "Un engin volumineux offre une visibilité réduite, en particulier à l'arrière et sur les côtés."
                ]
              },
              {
                title: "Projection de débris",
                text: [
                  "Gravats, cailloux ou verre projetés par les brosses rotatives lors du balayage."
                ]
              },
              {
                title: "Entortillement",
                text: [
                  "Risque lié aux brosses en rotation lors d'une intervention de nettoyage ou de déblocage."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Se signaler pour être vu de tous",
        eyebrow: "La compétence différenciante",
        blocks: [
          {
            type: "p",
            text: "Parce qu'elle circule au ralenti sur des voies ouvertes, la balayeuse doit se signaler clairement aux autres usagers : gyrophare orange actif en permanence, panneaux de signalisation \"véhicule lent\" si nécessaire, et utilisation systématique des feux de détresse lors d'un arrêt ponctuel sur chaussée."
          },
          {
            type: "p",
            text: "La formation insiste aussi sur l'anticipation : rester prévisible pour les autres usagers, éviter les arrêts brusques, et utiliser caméras de recul et rétroviseurs à chaque manœuvre."
          },
          {
            type: "aside",
            items: [
              "Gyrophare actif dès le début de l'intervention",
              "Vitesse adaptée à la présence de piétons et cyclistes",
              "Vérification systématique des angles morts avant manœuvre"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Les vérifications de routine",
        eyebrow: "Avant de démarrer",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Brosses",
                text: [
                  "Vérifier leur état d'usure et leur bon positionnement avant chaque prise de poste."
                ]
              },
              {
                title: "Freins et pneumatiques",
                text: [
                  "Contrôle systématique, essentiel pour un engin évoluant en circulation."
                ]
              },
              {
                title: "Éclairage et gyrophare",
                text: [
                  "S'assurer du bon fonctionnement de tous les feux et de la signalisation lumineuse."
                ]
              },
              {
                title: "Système d'aspersion",
                text: [
                  "Vérifier le niveau d'eau utilisé pour limiter la projection de poussières pendant le balayage."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Est-ce que cette formation est obligatoire ?",
                a: [
                  "Oui. La balayeuse routière est un équipement de travail mobile automoteur : selon l'article R. 4323-55 du Code du travail, sa conduite est réservée aux travailleurs ayant reçu une formation adéquate. Elle ne relève d'aucune catégorie CACES®, mais l'employeur doit tout de même former ses conducteurs."
                ]
              },
              {
                q: "Pourquoi le gyrophare doit-il rester actif en permanence ?",
                a: [
                  "Parce que la balayeuse circule à faible vitesse, souvent en dessous du rythme normal de la circulation : le gyrophare alerte les autres usagers de cette différence de vitesse et les incite à la prudence."
                ]
              },
              {
                q: "Que faire en cas de blocage des brosses par un déchet volumineux ?",
                a: [
                  "Toujours arrêter le moteur et attendre l'arrêt complet des brosses avant toute intervention manuelle."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "habilitations-electriques": {
    source: "/habilitation-electrique",
    lead: "Formez-vous avec des professionnels de la préparation à l'habilitation électrique, que vous soyez personnel électricien ou non-électricien, en basse ou haute tension.",
    sections: [
      {
        title: "2 parcours, adaptés à votre niveau d'exposition aux risques électriques",
        eyebrow: "Nos formations",
        blocks: [
          {
            type: "p",
            text: "L'habilitation électrique est une autorisation délivrée par votre employeur sur la base d'une formation et de la reconnaissance de votre aptitude médicale."
          },
          {
            type: "p",
            text: "SECURIFORM prépare les deux publics concernés (personnel non-électricien et personnel électricien) en basse et en haute tension."
          }
        ]
      },
      {
        title: "Que signifie chaque symbole d'habilitation ?",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Chaque lettre et chiffre correspond à un rôle et à un niveau de tension précis. Voici un premier repère ; SECURIFORM vous aide ensuite à identifier l'habilitation exacte dont vos équipes ont besoin."
          },
          {
            type: "table",
            head: [
              "Symbole",
              "Public",
              "Domaine",
              "Rôle"
            ],
            rows: [
              [
                "H0 / B0",
                "Non-électricien",
                "BT et HT",
                "Exécutant d'opérations d'ordre non électrique à proximité d'installations électriques"
              ],
              [
                "BE / HE Manœuvre",
                "Non-électricien",
                "BT et HT",
                "Chargé d'opérations spécifiques (manœuvres d'exploitation : changement de la configuration d'un réseau, d'une installation ou de l'alimentation électrique d'un équipement)"
              ],
              [
                "BS",
                "Non-électricien",
                "BT",
                "Chargé d'interventions élémentaires (remplacement hors tension de fusibles à l'identique et de petits appareillages électriques…)"
              ],
              [
                "B1",
                "Électricien",
                "BT",
                "Exécutant d'opérations d'ordre électrique (travaille seul et opère dans la zone de travail indiquée, selon les instructions reçues par le B2)"
              ],
              [
                "B2",
                "Électricien",
                "BT",
                "Chargé de travaux (assure la direction effective des travaux et prend les mesures nécessaires pour assurer sa propre sécurité et celle du personnel placé sous ses ordres)"
              ],
              [
                "BR",
                "Électricien",
                "BT",
                "Chargé d'intervention générale (réalise des interventions de dépannage, de raccordement, de mesurage ou d'essai, peut consigner pour son propre compte et assure sa propre sécurité)"
              ],
              [
                "BC",
                "Électricien",
                "BT",
                "Chargé de consignation (réalise des opérations de consignation ou réalise la mise hors tension)"
              ],
              [
                "H1",
                "Électricien",
                "HT",
                "Exécutant d'opérations d'ordre électrique (travaille seul et opère dans la zone de travail indiquée, selon les instructions reçues par le H2)"
              ],
              [
                "H2",
                "Électricien",
                "HT",
                "Chargé de travaux (assure la direction effective des travaux et prend les mesures nécessaires pour assurer sa propre sécurité et celle du personnel placé sous ses ordres)"
              ],
              [
                "HC",
                "Électricien",
                "HT",
                "Chargé de consignation (réalise des opérations de consignation ou réalise la mise hors tension)"
              ],
              [
                "B1L / B2L / BRL / BCL",
                "Électricien",
                "Véhicules électriques/hybrides",
                "Équivalents BT appliqués aux véhicules, selon la norme NF C18-550"
              ]
            ]
          }
        ]
      },
      {
        title: "Votre parcours de formation",
        eyebrow: "Déroulé",
        blocks: [
          {
            type: "p",
            text: "De la formation à l'habilitation délivrée par votre employeur, un parcours en quatre temps."
          },
          {
            type: "steps",
            items: [
              {
                title: "Théorie",
                text: [
                  "Grandeurs électriques, effets du courant, zones d'environnement et symboles d'habilitation, adaptés à votre niveau…"
                ]
              },
              {
                title: "Pratique",
                text: [
                  "Reconnaissance des matériels, utilisation des équipements de protection, mises en situation réelles."
                ]
              },
              {
                title: "Évaluation",
                text: [
                  "Contrôle des connaissances théoriques et pratiques acquises pendant la formation."
                ]
              },
              {
                title: "Habilitation",
                text: [
                  "Sur la base de l'attestation de formation et de la reconnaissance de votre aptitude médicale, votre employeur délivre l'habilitation, propre à votre poste."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre une formation et une habilitation électrique ?",
                a: [
                  "La formation prépare le personnel et débouche sur une attestation de compétences. L'habilitation, elle, est délivrée par l'employeur : elle tient compte de la formation suivie, mais aussi de l'aptitude médicale du salarié."
                ]
              },
              {
                q: "Je ne suis pas électricien, ai-je vraiment besoin d'une habilitation ?",
                a: [
                  "Oui, dès lors que votre activité vous amène à travailler ou circuler à proximité d'installations électriques, même sans y toucher directement. L'habilitation H0B0 couvre ces situations."
                ]
              },
              {
                q: "Qu'est-ce que la norme NF C18-550 pour les véhicules électriques et hybrides ?",
                a: [
                  "C'est le référentiel qui encadre les habilitations spécifiques aux véhicules électriques et hybrides (B0L, B1L, B2L, BRL, BCL). Il reprend la logique des habilitations classiques, adaptée aux circuits de traction et aux procédures de consignation propres à ces véhicules."
                ]
              },
              {
                q: "Quelle est la durée de validité d'une habilitation électrique ?",
                a: [
                  "La norme NF C 18-510 recommande un recyclage tous les 3 ans."
                ]
              },
              {
                q: "À partir de quelle tension parle-t-on de haute tension ?",
                a: [
                  "On parle de haute tension au-delà de 1 000 V en courant alternatif et de 1 500 V en courant continu. Elle se divise en HTA (jusqu'à 50 000 V en alternatif et 75 000 V en continu) et HTB au-delà."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "habilitations-electriques/personnel-electricien": {
    source: "/habilitation-electricien",
    lead: "De l'exécutant au chargé de consignation, en basse comme en haute tension : une progression complète pour vos électriciens.",
    sections: [
      {
        title: "Une progression, du terrain à la consignation",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Le personnel électricien évolue selon un parcours structuré : exécutant sous supervision (B1), puis chargé de travaux (B2), intervention autonome (BR) ou consignation (BC) en basse tension. La haute tension (H1, H2, HC) suit la même logique, mais nécessite toujours une expérience préalable en basse tension. Un parcours spécifique existe aussi pour les véhicules électriques et hybrides (B1L, B2L, BRL, BCL), selon la norme NF C18-550."
          }
        ]
      },
      {
        title: "Les symboles B1 à BC",
        eyebrow: "Basse tension",
        blocks: [
          {
            type: "table",
            head: [
              "Symbole",
              "Rôle",
              "Durée initiale"
            ],
            rows: [
              [
                "B1 / B1V",
                "Exécutant, travaille sous la direction d'un chargé de travaux B2",
                "3 jours"
              ],
              [
                "B2 / B2V",
                "Chargé de travaux, dirige et encadre une équipe B1",
                "3 jours"
              ],
              [
                "BR",
                "Intervention générale en autonomie complète (dépannage, maintenance)",
                "3 jours"
              ],
              [
                "BC",
                "Chargé de consignation, responsable de la mise hors tension",
                "3 jours"
              ],
              [
                "BE essai",
                "Réalisation d'essais, vérifications et mesurages spécialisés",
                "1 à 1,5 jour en complément"
              ]
            ]
          },
          {
            type: "p",
            text: "La lettre V (B1V, B2V) autorise le travail au voisinage de pièces nues sous tension."
          }
        ]
      },
      {
        title: "Les symboles H1 à HC",
        eyebrow: "Haute tension",
        blocks: [
          {
            type: "p",
            text: "Un prérequis s'applique systématiquement : une expérience en basse tension (B1 pour H1, B2 pour H2) est nécessaire avant d'accéder à la haute tension."
          },
          {
            type: "table",
            head: [
              "Symbole",
              "Rôle",
              "Durée"
            ],
            rows: [
              [
                "H1 / H1V",
                "Exécutant en haute tension, sous la direction d'un H2",
                "4 jours"
              ],
              [
                "H2 / H2V",
                "Chargé de travaux en haute tension",
                "4 jours"
              ],
              [
                "HC",
                "Chargé de consignation en haute tension",
                "4 jours"
              ]
            ]
          },
          {
            type: "p",
            text: "SECURIFORM prépare également aux symboles B1L, B2L, BRL et BCL pour les véhicules électriques et hybrides, selon la norme NF C18-550."
          }
        ]
      },
      {
        title: "La consignation en 5 étapes",
        eyebrow: "La compétence critique",
        blocks: [
          {
            type: "p",
            text: "C'est le cœur de la formation du chargé de consignation (BC ou HC) : chaque étape doit être respectée dans cet ordre, sans exception."
          },
          {
            type: "steps",
            items: [
              {
                title: "1. Séparer",
                text: [
                  "Ouvrir les dispositifs de coupure pour isoler la source de tension, sur tous les circuits concernés."
                ]
              },
              {
                title: "2. Condamner",
                text: [
                  "Verrouiller physiquement les dispositifs de séparation avec un cadenas, pour empêcher toute remise sous tension."
                ]
              },
              {
                title: "3. Identifier",
                text: [
                  "Vérifier que l'installation consignée correspond bien à celle sur laquelle l'intervention doit avoir lieu."
                ]
              },
              {
                title: "4. Vérifier l'absence de tension",
                text: [
                  "Tester chaque conducteur avec un détecteur normalisé, en trois temps : sur une source connue sous tension, sur l'installation consignée, puis à nouveau sur une source sous tension pour confirmer le bon fonctionnement du détecteur."
                ]
              },
              {
                title: "5. Mettre à la terre",
                text: [
                  "Relier les conducteurs à la terre et les mettre en court-circuit, pour éliminer tout risque de réalimentation accidentelle."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "De l'évaluation à l'habilitation",
        eyebrow: "Après la formation",
        blocks: [
          {
            type: "p",
            text: "La formation se termine par une évaluation théorique (questionnaire) et pratique (mise en situation). À l'issue, SECURIFORM transmet un avis après formation à l'employeur."
          },
          {
            type: "p",
            text: "C'est l'employeur, et lui seul, qui délivre le titre d'habilitation à son salarié, sur la base de cet avis. L'attestation de formation est valable 3 ans."
          },
          {
            type: "aside",
            items: [
              "Évaluation théorique et pratique en fin de stage",
              "Avis après formation transmis à l'employeur",
              "Habilitation délivrée par l'employeur",
              "Validité de 3 ans"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre B1, B2, BR et BC ?",
                a: [
                  "B1 exécute des travaux sous la direction d'un B2. B2 dirige une équipe et porte la responsabilité du chantier. BR intervient seul, en autonomie complète, pour du dépannage ou de la maintenance. BC est chargé de la consignation."
                ]
              },
              {
                q: "Peut-on accéder directement à la haute tension sans passer par la basse tension ?",
                a: [
                  "Non. La formation H1 nécessite une expérience préalable en B1, et la formation H2 une expérience en B2. C'est une progression obligatoire, pas une option."
                ]
              },
              {
                q: "Pourquoi la vérification d'absence de tension se fait-elle en trois temps ?",
                a: [
                  "Pour s'assurer que le détecteur fonctionne réellement : on le teste d'abord sur une source sous tension connue, puis sur l'installation consignée (qui doit indiquer zéro), puis à nouveau sur une source sous tension pour confirmer qu'il n'est pas tombé en panne entre-temps."
                ]
              },
              {
                q: "À partir de quelle tension parle-t-on de haute tension ?",
                a: [
                  "On parle de haute tension au-delà de 1 000 V en courant alternatif et de 1 500 V en courant continu. Elle se divise en HTA (jusqu'à 50 000 V en alternatif et 75 000 V en continu) et HTB au-delà."
                ]
              },
              {
                q: "Et pour le personnel non-électricien ?",
                a: [
                  "SECURIFORM propose une formation dédiée au personnel non-électricien (H0B0, BS, BE/HE Manœuvre, B0L) : retrouvez le détail sur notre page Formation personnel non-électricien."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "habilitations-electriques/personnel-non-electricien": {
    source: "/habilitation-non-electricien",
    lead: "Formez tout collaborateur amené à travailler ou circuler à proximité d'installations électriques, sans jamais y intervenir : H0B0, BS, BE/HE Manœuvre, B0L.",
    sections: [
      {
        title: "6 niveaux d'habilitation",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Le personnel non-électricien travaille ou circule à proximité de pièces nues sous tension, ou réalise des opérations très encadrées (remplacement de fusible, réarmement). Chaque situation correspond à un symbole d'habilitation précis, avec ses propres opérations autorisées et interdites."
          }
        ]
      },
      {
        title: "Les symboles et leur objectif",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Symbole",
              "Objectif",
              "Durée initiale"
            ],
            rows: [
              [
                "H0B0 (exécutant)",
                "Réaliser des travaux d'ordre non électrique en sécurité",
                "1 jour"
              ],
              [
                "H0B0 (chargé de chantier)",
                "Organiser et réaliser ces travaux, en supervisant une équipe",
                "2 jours"
              ],
              [
                "BS",
                "Remplacer à l'identique fusibles, prises, interrupteurs ; réarmer une protection",
                "2 jours"
              ],
              [
                "BE Manœuvre",
                "Effectuer des manœuvres d'exploitation en basse tension",
                "2 jours"
              ],
              [
                "HE Manœuvre",
                "Effectuer des manœuvres d'exploitation en haute tension",
                "2 jours"
              ],
              [
                "B0L",
                "Réaliser des opérations non électriques sur véhicules électriques ou hybrides",
                "1 jour"
              ]
            ]
          },
          {
            type: "p",
            text: "Vous ne savez pas quel symbole correspond à votre activité ? Contactez-nous, nous vous aidons à l'identifier."
          }
        ]
      },
      {
        title: "Les zones d'environnement électrique",
        eyebrow: "Un repère essentiel",
        blocks: [
          {
            type: "p",
            text: "Savoir reconnaître ces zones sur le terrain est la première compétence enseignée : elle conditionne tout le reste."
          },
          {
            type: "table",
            head: [
              "Zone",
              "Définition",
              "Qui est autorisé ?"
            ],
            rows: [
              [
                "Zone 0",
                "Zone d'investigation",
                "Tout le personnel, sans habilitation électrique."
              ],
              [
                "Zone 1",
                "Zone de voisinage simple",
                "Personnel habilité B0 ou H0 (exécutant ou chargé de chantier) et personnel électricien habilité."
              ],
              [
                "Zone 2",
                "Zone de voisinage renforcé, uniquement en haute tension",
                "Personnel habilité au voisinage renforcé (H0V, H1V, H2V et HC)."
              ],
              [
                "Zone 3",
                "Zone des travaux sous tension, uniquement en haute tension",
                "Personnel électricien habilité aux travaux sous tension."
              ],
              [
                "Zone 4",
                "Zone de voisinage renforcé, uniquement en basse tension",
                "Personnel habilité pour opérations électriques (B1V, B2V, BR, BC, BE)."
              ]
            ]
          }
        ]
      },
      {
        title: "Les effets du courant sur le corps",
        eyebrow: "Comprendre le danger",
        blocks: [
          {
            type: "p",
            text: "Ce n'est pas la tension qui définit le danger réel, mais l'intensité du courant qui traverse le corps."
          },
          {
            type: "table",
            head: [
              "Intensité",
              "Effet sur le corps"
            ],
            rows: [
              [
                "Environ 0,5 mA",
                "Seuil de perception (picotements)"
              ],
              [
                "Environ 10 mA",
                "Tétanisation musculaire, impossible de se dégager seul"
              ],
              [
                "Environ 30 mA",
                "Paralysie respiratoire"
              ],
              [
                "75 mA et plus",
                "Fibrillation cardiaque, risque vital"
              ]
            ]
          }
        ]
      },
      {
        title: "Les équipements de protection individuelle",
        eyebrow: "S'équiper correctement",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Chaussures isolantes",
                text: [
                  "Première protection contre l'électrisation, en coupant le passage du courant vers le sol."
                ]
              },
              {
                title: "Gants isolants",
                text: [
                  "Adaptés au niveau de risque, inspectés avant chaque usage pour détecter toute perforation."
                ]
              },
              {
                title: "Écran facial",
                text: [
                  "Protège contre les projections et l'éblouissement en cas d'arc électrique."
                ]
              },
              {
                title: "Vêtements adaptés",
                text: [
                  "Manches longues, matières non synthétiques, sans élément métallique apparent."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les bons réflexes face à une électrisation",
        eyebrow: "En cas d'accident",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Ne jamais toucher",
                text: [
                  "Ne jamais toucher directement une personne encore en contact avec une source électrique."
                ]
              },
              {
                title: "Couper l'alimentation",
                text: [
                  "Si possible et sans danger, couper le courant avant toute approche."
                ]
              },
              {
                title: "Écarter si besoin",
                text: [
                  "Si la coupure est impossible, écarter la victime uniquement avec un objet isolant (bois sec, plastique)."
                ]
              },
              {
                title: "Alerter les secours",
                text: [
                  "Contacter le 15 ou le 18 et suivre leurs consignes en attendant leur arrivée."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "De l'évaluation à l'habilitation",
        eyebrow: "Après la formation",
        blocks: [
          {
            type: "p",
            text: "La formation se termine par une évaluation théorique (questionnaire) et pratique (mise en situation). À l'issue, SECURIFORM transmet un avis après formation à l'employeur."
          },
          {
            type: "p",
            text: "C'est l'employeur, et lui seul, qui délivre le titre d'habilitation à son salarié, sur la base de cet avis. L'attestation de formation est valable 3 ans."
          },
          {
            type: "aside",
            items: [
              "Évaluation théorique et pratique en fin de stage",
              "Avis après formation transmis à l'employeur",
              "Habilitation délivrée par l'employeur",
              "Validité de 3 ans"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre H0B0 exécutant et chargé de chantier ?",
                a: [
                  "L'exécutant réalise les travaux confiés. Le chargé de chantier, en plus de réaliser ces travaux, supervise une équipe, organise la zone de travail et veille au respect des consignes de sécurité par ses collègues."
                ]
              },
              {
                q: "Le BS permet-il de faire n'importe quelle réparation électrique ?",
                a: [
                  "Non, le BS se limite à des opérations très encadrées : remplacement à l'identique de fusibles, prises ou interrupteurs, raccordement simple sur circuit en attente, et réarmement de protections. Toute autre intervention nécessite une habilitation électricien."
                ]
              },
              {
                q: "Qu'est-ce que le B0L et qui est concerné ?",
                a: [
                  "Le B0L habilite à réaliser des opérations non électriques (carrosserie, nettoyage) sur des véhicules électriques ou hybrides, en tenant compte des circuits haute tension embarqués propres à ces véhicules, selon la norme NF C18-550."
                ]
              },
              {
                q: "Qui délivre l'habilitation à la fin de la formation ?",
                a: [
                  "SECURIFORM évalue le stagiaire et transmet un avis après formation. C'est ensuite l'employeur qui délivre l'habilitation proprement dite, en tenant compte de cet avis et de la reconnaissance de l'aptitude médicale du salarié."
                ]
              },
              {
                q: "Et pour le personnel électricien ?",
                a: [
                  "SECURIFORM propose une formation dédiée au personnel électricien (B1, B2, BR, BC, BE essai, H1, H2, HC, HE essai) : retrouvez le détail sur notre page Préparation à l'habilitation électrique."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r": {
    source: "/aipr",
    lead: "Formez-vous avec des professionnels à l'Autorisation d'Intervention à Proximité des Réseaux, obligatoire depuis 2018 pour tout chantier à proximité de réseaux aériens, enterrés ou subaquatiques.",
    sections: [
      {
        title: "3 niveaux pour 3 rôles sur le chantier",
        blocks: [
          {
            type: "p",
            text: "Depuis le 1ᵉʳ janvier 2018, l'AIPR est obligatoire pour tout intervenant sur un chantier à proximité de réseaux aériens, enterrés ou subaquatiques, sensibles (gaz, électricité) ou non (eau, assainissement, télécommunications). Chaque profil de poste correspond à un niveau précis : Opérateur, Encadrant ou Concepteur."
          }
        ]
      },
      {
        title: "Quel niveau pour quel poste ?",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Un repère pour identifier rapidement le niveau AIPR correspondant à chaque fonction sur un chantier."
          },
          {
            type: "table",
            head: [
              "Niveau",
              "Postes concernés",
              "Rôle principal"
            ],
            rows: [
              [
                "Opérateur",
                "Conducteurs d'engins, canalisateurs, ouvriers de terrassement",
                "Intervenir directement à proximité des réseaux"
              ],
              [
                "Encadrant",
                "Chefs de chantier, conducteurs de travaux, chefs d'équipe",
                "Préparer et superviser les interventions"
              ],
              [
                "Concepteur",
                "Bureaux d'études, maîtres d'ouvrage, maîtres d'œuvre",
                "Piloter le projet de la conception à la réception"
              ]
            ]
          }
        ]
      },
      {
        title: "La règle des 4A face à une anomalie",
        eyebrow: "Le réflexe à connaître",
        blocks: [
          {
            type: "p",
            text: "En cas de découverte d'un réseau non signalé ou d'un dommage accidentel, cette procédure normalisée s'applique dans cet ordre."
          },
          {
            type: "steps",
            items: [
              {
                title: "Arrêter",
                text: [
                  "Stopper immédiatement les travaux dès la découverte d'une anomalie ou d'un endommagement."
                ]
              },
              {
                title: "Alerter",
                text: [
                  "Prévenir l'exploitant du réseau concerné ainsi que sa hiérarchie sur le chantier."
                ]
              },
              {
                title: "Aménager",
                text: [
                  "Sécuriser la zone pour éviter tout suraccident, sans tenter de réparer soi-même le réseau."
                ]
              },
              {
                title: "Afficher",
                text: [
                  "Baliser visiblement la zone concernée en attendant l'intervention de l'exploitant."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "L'AIPR est-elle vraiment obligatoire pour mon entreprise ?",
                a: [
                  "Oui, dès lors que vos équipes interviennent sur un chantier à proximité de réseaux enterrés, aériens ou subaquatiques, qu'ils soient sensibles (gaz, électricité) ou non (eau, télécommunications). L'obligation s'applique aux opérateurs depuis 2019 et aux encadrants/concepteurs depuis 2018."
                ]
              },
              {
                q: "Quelle est la durée de validité de l'attestation AIPR ?",
                a: [
                  "Elle est valable 5 ans, quel que soit le niveau (Opérateur, Encadrant, Concepteur). Elle peut être portée à 10 ans pour les titulaires d'un CACES R482B intégrant l'option IPR."
                ]
              },
              {
                q: "Comment se déroule l'examen AIPR ?",
                a: [
                  "Il s'agit d'un questionnaire à choix multiples : 30 questions pour les Opérateurs, 40 questions pour les Encadrants et Concepteurs, tirées d'une base nationale de 255 questions. Le seuil de réussite est fixé à 60 % de bonnes réponses."
                ]
              },
              {
                q: "Quel est le lien entre l'attestation et l'AIPR délivrée par l'employeur ?",
                a: [
                  "L'attestation de compétences obtenue en formation ne suffit pas seule : c'est l'employeur qui délivre ensuite l'autorisation d'intervention proprement dite, sur la base de cette attestation."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/concepteurs": {
    source: "/aipr-concepteurs",
    lead: "Pour les bureaux d'études, maîtres d'ouvrage et maîtres d'œuvre : piloter un projet de travaux en conformité, du Guichet Unique jusqu'à la réception.",
    sections: [
      {
        title: "Le Guichet Unique, point de départ de tout projet",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Avant tout projet susceptible d'affecter des réseaux, le concepteur dépose sa Déclaration de Travaux (DT) sur la plateforme du Guichet Unique. Cette démarche notifie automatiquement tous les exploitants concernés, qui disposent ensuite d'un délai légal pour répondre : généralement 9 jours ouvrés pour les réseaux sensibles, 15 jours pour les autres. Chaque réponse précise la position des réseaux, leur classe de précision et les recommandations à respecter."
          }
        ]
      },
      {
        title: "Quand commander des investigations complémentaires (IC) ?",
        eyebrow: "Un point technique clé",
        blocks: [
          {
            type: "p",
            text: "Les investigations complémentaires précisent la position réelle d'un réseau quand l'incertitude est trop grande. L'article R.554-23 du Code de l'environnement en définit les conditions."
          },
          {
            type: "table",
            head: [
              "Situation",
              "IC obligatoires ?"
            ],
            rows: [
              [
                "Réseau sensible en classe B ou C, avec terrassement mécanisé",
                "Oui"
              ],
              [
                "Réseau déjà en classe A",
                "Non, dispensé"
              ],
              [
                "Travaux sans tranchée (forage dirigé)",
                "Non, dispensé"
              ],
              [
                "Hors zone urbaine, réseau non sensible",
                "Non, dispensé"
              ],
              [
                "Surface terrassée inférieure à 100 m²",
                "Non, dispensé (seuil de minimis)"
              ]
            ]
          }
        ]
      },
      {
        title: "Les clauses essentielles du DCE",
        eyebrow: "Transmettre l'information",
        blocks: [
          {
            type: "p",
            text: "Le concepteur ne se contente pas de recueillir les informations sur les réseaux : il doit aussi les transmettre correctement à l'entreprise exécutante via le Dossier de Consultation des Entreprises."
          },
          {
            type: "cards",
            items: [
              {
                title: "Plans à jour",
                text: [
                  "Intégrer les plans de réseaux avec leur classe de précision, remplacés par les plans classe A si des IC ont été réalisées."
                ]
              },
              {
                title: "AIPR du personnel",
                text: [
                  "Exiger explicitement que tout intervenant (opérateur, encadrant) soit titulaire d'une AIPR en cours de validité."
                ]
              },
              {
                title: "Marquage et piquetage",
                text: [
                  "Préciser qui commande le marquage et comment il doit être protégé pendant toute la durée du chantier."
                ]
              },
              {
                title: "Procédure d'anomalie",
                text: [
                  "Rappeler la règle des 4A et les délais de notification au maître d'ouvrage en cas d'incident."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vérifier les compétences, puis clore le projet",
        eyebrow: "Avant et après le chantier",
        blocks: [
          {
            type: "p",
            text: "Avant le démarrage, le concepteur doit s'assurer que chaque opérateur et encadrant intervenant possède une AIPR valide, et conserver ces justificatifs dans le dossier de projet. Un accident impliquant du personnel non habilité peut engager la responsabilité du maître d'ouvrage s'il n'a pas effectué cette vérification."
          },
          {
            type: "p",
            text: "À l'issue des travaux, si le projet a créé de nouveaux réseaux, le concepteur fait réaliser leur géo-référencement en classe A et transmet les plans à la collectivité et au futur exploitant : c'est le récolement, dernière étape de la conformité AIPR."
          },
          {
            type: "aside",
            items: [
              "Vérifier les AIPR de tout le personnel avant le démarrage",
              "Conserver les justificatifs dans le dossier de projet",
              "Faire géo-référencer les nouveaux réseaux en fin de chantier"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Que faire si un exploitant ne répond pas à ma DT ?",
                a: [
                  "Il faut le relancer : le délai légal de réponse déclenché par le récépissé de DT s'impose à l'exploitant, et son silence ne dispense pas de la vigilance nécessaire avant travaux."
                ]
              },
              {
                q: "Puis-je me passer d'investigations complémentaires pour aller plus vite ?",
                a: [
                  "Non, si les conditions les rendent obligatoires (réseau sensible en classe B ou C avec terrassement mécanisé). S'en dispenser expose à une responsabilité civile et pénale en cas d'accident."
                ]
              },
              {
                q: "Comment obtenir l'AIPR profil Concepteur ?",
                a: [
                  "Par la réussite du QCM (40 questions, 60 minutes, seuil de 60 %), ou dans certains cas par un diplôme de moins de 5 ans intégrant les compétences AIPR. L'attestation est valable 5 ans."
                ]
              },
              {
                q: "Suis-je responsable si l'entreprise exécutante emploie du personnel sans AIPR ?",
                a: [
                  "Vous engagez votre responsabilité si vous n'avez pas vérifié les AIPR avant le démarrage des travaux. C'est pourquoi cette vérification doit être documentée et conservée dans le dossier de projet."
                ]
              },
              {
                q: "Et pour le pilotage opérationnel du chantier ?",
                a: [
                  "C'est le rôle de l'Encadrant AIPR, qui applique sur le terrain les prescriptions que vous avez intégrées au DCE : retrouvez le détail sur notre page Formations AIPR."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/operateurs": {
    source: "/aipr-operateurs",
    lead: "Pour les conducteurs d'engins, canalisateurs et ouvriers de terrassement : identifier les réseaux, respecter les distances de sécurité et réagir correctement en cas d'anomalie.",
    sections: [
      {
        title: "Une chaîne de responsabilités précise",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "L'article L.554-4 du Code de l'environnement encadre strictement les interventions à proximité des réseaux. Une entreprise qui déploie du personnel non formé s'expose à des sanctions administratives pouvant atteindre 75 000 € pour une personne morale, en plus de la responsabilité civile et pénale engagée en cas d'accident. Trois niveaux de responsabilité se répartissent la vigilance : le concepteur (maîtrise d'ouvrage), l'encadrant (chef de chantier) et l'opérateur, chacun avec ses propres obligations."
          }
        ]
      },
      {
        title: "Les classes de précision DT-DICT",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Chaque réseau localisé est classé selon la fiabilité de sa position : cette classe détermine directement la prudence à observer sur le terrain."
          },
          {
            type: "table",
            head: [
              "Classe",
              "Incertitude de localisation"
            ],
            rows: [
              [
                "Classe A",
                "≤ 40 cm pour un réseau rigide, ≤ 50 cm pour un réseau flexible"
              ],
              [
                "Classe B",
                "Supérieure à la classe A, jusqu'à 1,50 m"
              ],
              [
                "Classe C",
                "Supérieure à 1,50 m, ou position non disponible"
              ]
            ]
          },
          {
            type: "p",
            text: "Plus la classe est incertaine (B ou C), plus la prudence et les méthodes de recherche manuelle doivent être renforcées."
          }
        ]
      },
      {
        title: "La règle du mètre, et ses variantes",
        eyebrow: "La règle de base",
        blocks: [
          {
            type: "p",
            text: "Autour de tout point où un réseau émerge du sol, une distance minimale d'un mètre s'impose, à la fois horizontalement et verticalement. Certains réseaux exigent davantage."
          },
          {
            type: "table",
            head: [
              "Type de réseau",
              "Vigilance particulière"
            ],
            rows: [
              [
                "Électrique haute tension",
                "Distances renforcées, souvent 3 à 5 mètres selon la tension"
              ],
              [
                "Électrique basse tension",
                "Distance de base, vigilance constante"
              ],
              [
                "Gaz",
                "Prudence maximale : tout endommagement peut provoquer une explosion"
              ],
              [
                "Eau et assainissement",
                "Distance modérée, mais rupture aux conséquences significatives"
              ],
              [
                "Fibre optique et télécoms",
                "Danger humain limité, mais coût de réparation élevé"
              ]
            ]
          }
        ]
      },
      {
        title: "Les bonnes méthodes, et ce qu'il ne faut jamais faire",
        eyebrow: "Sur le terrain",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Recherche manuelle",
                text: [
                  "Creuser à distance du réseau localisé, puis progresser prudemment à mesure qu'on s'en rapproche."
                ]
              },
              {
                title: "Détection géophysique",
                text: [
                  "Utiliser un détecteur ou un radar de sol pour confirmer la position exacte avant de creuser."
                ]
              },
              {
                title: "Arrêt préventif",
                text: [
                  "Interrompre les travaux dès que la position réelle diffère de celle annoncée : mieux vaut un arrêt de chantier qu'un réseau endommagé."
                ]
              }
            ]
          },
          {
            type: "p",
            text: "Ce qu'il ne faut jamais faire : creuser à la pioche ou à la bêche directement au contact d'un réseau, utiliser un outil pneumatique sans avoir vérifié sa position, ou ignorer un marquage au sol."
          }
        ]
      },
      {
        title: "En cas de découverte anormale",
        eyebrow: "Le réflexe à avoir",
        blocks: [
          {
            type: "p",
            text: "Réseau découvert à un endroit inattendu, fuite détectée, contact accidentel : la formation opérateur reprend et approfondit la règle des 4A (Arrêter, Alerter, Aménager, Afficher) avec un accent particulier sur la documentation de l'incident : photos, heure, lieu exact, témoins."
          },
          {
            type: "p",
            text: "Cette traçabilité protège à la fois les personnes et l'entreprise en cas de contentieux ultérieur avec l'exploitant du réseau ou les assurances."
          },
          {
            type: "aside",
            items: [
              "L'opérateur applique la règle des 4A et rapporte l'incident",
              "L'encadrant coordonne la réponse et documente",
              "Le concepteur s'assure de la conformité globale du chantier"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Que risque mon entreprise si mes opérateurs ne sont pas formés ?",
                a: [
                  "Des sanctions administratives (jusqu'à 75 000 € pour une personne morale), en plus de la responsabilité civile et pénale en cas d'accident, et un risque d'arrêt de chantier ordonné par la DREAL."
                ]
              },
              {
                q: "Que signifie une classe de précision C ?",
                a: [
                  "Que la position du réseau est incertaine au-delà de 1,50 mètre, ou tout simplement non disponible. Dans ce cas, la prudence et la recherche manuelle progressive deviennent indispensables."
                ]
              },
              {
                q: "La règle du mètre s'applique-t-elle à tous les réseaux de la même façon ?",
                a: [
                  "C'est la règle de base, mais certains réseaux, notamment les lignes électriques haute tension, exigent des distances bien supérieures, parfois 3 à 5 mètres."
                ]
              },
              {
                q: "Puis-je continuer à creuser si le marquage au sol semble incohérent ?",
                a: [
                  "Non, il faut arrêter immédiatement et vérifier. Un marquage incohérent avec la réalité du terrain est justement le signal qui doit déclencher la prudence, pas son contraire."
                ]
              },
              {
                q: "Cette formation suffit-elle pour encadrer un chantier ?",
                a: [
                  "Non, l'opérateur intervient sur le terrain : l'encadrement d'un chantier relève du niveau Encadrant AIPR, avec des responsabilités plus larges : retrouvez le détail sur notre page Formations AIPR."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/encadrants": {
    source: "/aipr-encadrants",
    lead: "Pour les chefs de chantier et conducteurs de travaux : maîtriser la réglementation DT-DICT et organiser un chantier sécurisé à proximité des réseaux.",
    sections: [
      {
        title: "L'encadrant, pivot de la sécurité sur site",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "Entre le concepteur qui prépare le projet et l'opérateur qui l'exécute, l'encadrant occupe une position centrale : vérifier les réponses aux DT-DICT, veiller au respect des prescriptions, superviser les opérateurs, appliquer la règle des 4A en cas d'anomalie, et documenter tout incident. C'est cette double compétence, réglementaire et opérationnelle, que la formation vise à installer."
          }
        ]
      },
      {
        title: "Les trois procédures DT-DICT",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Procédure",
              "Quand l'utiliser"
            ],
            rows: [
              [
                "DT puis DICT",
                "Cas standard : la déclaration de projet précède la déclaration de travaux, à des moments différents"
              ],
              [
                "DT-DICT conjointe",
                "Régime simultané, lorsque le même acteur dépose les deux déclarations en même temps"
              ],
              [
                "ATU : travaux urgents",
                "Interventions d'urgence sans délai pour la procédure complète : mesures de sécurité renforcées"
              ]
            ]
          }
        ]
      },
      {
        title: "Ce qu'il faut vérifier avant de démarrer",
        eyebrow: "Avant le premier coup de pelle",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Réponses DICT",
                text: [
                  "Position présumée des réseaux, classe de précision, recommandations spécifiques des exploitants."
                ]
              },
              {
                title: "Guide technique",
                text: [
                  "Le document de référence applicable au type de travaux envisagé, à consulter systématiquement."
                ]
              },
              {
                title: "Marquage et piquetage",
                text: [
                  "Vérifier leur conformité, leur visibilité, et documenter leur état par des photos avant travaux."
                ]
              },
              {
                title: "Plans de localisation",
                text: [
                  "Savoir lire les symboles et convertir les positions théoriques en repères réels sur le terrain."
                ]
              }
            ]
          },
          {
            type: "p",
            text: "Aucun chantier ne doit démarrer tant que ces éléments ne sont pas rassemblés et vérifiés."
          }
        ]
      },
      {
        title: "Quand et comment arrêter un chantier",
        eyebrow: "Savoir dire stop",
        blocks: [
          {
            type: "p",
            text: "Un encadrant doit savoir interrompre les travaux dès qu'un réseau n'est pas où il est annoncé, qu'une anomalie apparaît, ou que les conditions de sécurité ne peuvent plus être garanties. Cette décision doit ensuite être documentée et notifiée aux parties concernées."
          },
          {
            type: "p",
            text: "Pour les travaux urgents, où la procédure DT-DICT complète n'a pas pu être menée, la vigilance redouble : distances de sécurité augmentées, appel systématique aux exploitants, recours à la détection géophysique, supervision renforcée."
          },
          {
            type: "aside",
            items: [
              "Mieux vaut un arrêt de chantier qu'un réseau endommagé",
              "Toute décision d'arrêt se documente et se notifie",
              "Les travaux urgents exigent une vigilance renforcée"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "L'examen encadrant, en bref",
        eyebrow: "La validation des compétences",
        blocks: [
          {
            type: "p",
            text: "Un QCM de 40 questions en 60 minutes, avec un seuil de réussite de 48 sur 80 points (60 %). L'attestation obtenue est valable 5 ans ; c'est ensuite votre entreprise qui délivre formellement l'AIPR sur cette base."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Quelle est la différence entre concepteur et encadrant ?",
                a: [
                  "Le concepteur (maître d'ouvrage ou d'œuvre) prépare administrativement le projet et dépose les déclarations DT-DICT. L'encadrant, salarié de l'entreprise exécutant les travaux, vérifie ces déclarations sur le terrain et organise la sécurité du chantier au quotidien."
                ]
              },
              {
                q: "Que faire si le marquage au sol semble avoir été endommagé ?",
                a: [
                  "Il faut le faire rétablir avant de poursuivre, et documenter la situation par des photos. Un marquage illisible ou absent ne doit jamais être ignoré."
                ]
              },
              {
                q: "Puis-je démarrer un chantier avec des réponses DICT incomplètes ?",
                a: [
                  "Non, sauf procédure de travaux urgents (ATU), qui impose alors des mesures de sécurité renforcées en compensation de l'absence de procédure complète."
                ]
              },
              {
                q: "Suis-je responsable si un opérateur commet une erreur ?",
                a: [
                  "En tant qu'encadrant, votre responsabilité porte sur la supervision : vérification des documents, respect des prescriptions et réaction appropriée en cas d'anomalie. Chaque acteur (concepteur, encadrant, opérateur) reste responsable de son propre périmètre."
                ]
              },
              {
                q: "Et pour le pilotage global d'un projet ?",
                a: [
                  "C'est le rôle du Concepteur AIPR, destiné aux bureaux d'études et maîtres d'ouvrage : retrouvez le détail sur notre page Formations AIPR."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "travaux-en-hauteur": {
    source: "/travaux-hauteur-echafaudages",
    lead: "Port du harnais anti-chute, montage d'échafaudages fixes et roulants : formez vos équipes aux techniques qui préviennent la première cause d'accidents mortels après la route.",
    sections: [
      {
        title: "La chute de hauteur, 2ᵉ cause d'accidents du travail mortels en France",
        eyebrow: "Un risque à ne pas sous-estimer",
        blocks: [
          {
            type: "p",
            text: "Le Code du travail encadre strictement le travail en hauteur et l'usage des échafaudages (articles R4323-58 à R4323-106). Port du harnais, montage d'échafaudages fixes ou roulants : chaque situation demande une formation adaptée et des vérifications régulières du matériel."
          }
        ]
      },
      {
        title: "Échafaudage fixe ou roulant ?",
        eyebrow: "Bien choisir",
        blocks: [
          {
            type: "p",
            text: "Le choix dépend surtout de la durée des travaux et du besoin de déplacement. SECURIFORM vous aide à identifier la formation adaptée à votre matériel."
          },
          {
            type: "table",
            head: [
              "Critère",
              "Échafaudage fixe (R408)",
              "Échafaudage roulant (R457)"
            ],
            rows: [
              [
                "Mobilité",
                "Fixe, ancré à la façade",
                "Mobile, monté sur roues"
              ],
              [
                "Usage",
                "Travaux de longue durée",
                "Interventions ponctuelles et déplacements fréquents"
              ],
              [
                "Charges admissibles",
                "Élevées",
                "Plus limitées"
              ],
              [
                "Montage / démontage",
                "Plus long, structure complète",
                "Rapide et simple"
              ]
            ]
          }
        ]
      },
      {
        title: "Les différents types de harnais",
        eyebrow: "Bien s'équiper",
        blocks: [
          {
            type: "table",
            head: [
              "Type de harnais",
              "À quoi il sert"
            ],
            rows: [
              [
                "Harnais antichute (NF EN 361)",
                "Arrêter la chute de l'utilisateur, relié à un point d'ancrage par une longe avec absorbeur d'énergie ou un antichute à rappel automatique"
              ],
              [
                "Harnais de maintien au travail (NF EN 358)",
                "Maintenir l'utilisateur en position de travail, mains libres, sans chute libre possible (poteaux, pylônes) : il ne remplace pas un harnais antichute"
              ],
              [
                "Harnais cuissard (NF EN 813)",
                "Travailler en suspension, assis dans le harnais : travaux sur cordes, accès difficiles, élagage"
              ]
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Dois-je porter un harnais sur un échafaudage fixe ?",
                a: [
                  "Pas nécessairement : cela dépend du type de montage. Lorsque l'échafaudage est monté en sécurité, avec des protections collectives installées à chaque niveau, le port du harnais n'est pas nécessaire."
                ]
              },
              {
                q: "Quel type de casque utiliser pour les travaux en hauteur ?",
                a: [
                  "Un casque équipé d'une jugulaire, afin qu'il reste en place en cas de chute ou de mouvement brusque."
                ]
              },
              {
                q: "Qu'est-ce qu'un facteur de chute ?",
                a: [
                  "C'est le rapport entre la hauteur de la chute et la longueur de la longe qui retient l'utilisateur à son point d'ancrage. Il varie de 0 à 2 : plus il est élevé, plus l'effort transmis au corps, à la longe et au point d'ancrage est important. C'est pourquoi il faut privilégier un point d'ancrage situé au-dessus de l'utilisateur."
                ]
              },
              {
                q: "Qu'est-ce qu'un tirant d'air ?",
                a: [
                  "C'est la hauteur libre nécessaire sous l'utilisateur pour que, en cas de chute, le système antichute l'arrête avant qu'il ne heurte le sol ou un obstacle. Il tient compte de la longueur de la longe, de l'allongement de l'absorbeur d'énergie, de la taille de l'utilisateur et d'une marge de sécurité."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "travaux-en-hauteur/port-du-harnais-anti-chute": {
    source: "/travaux-en-hauteur",
    lead: "Hiérarchie des protections, port du harnais, points d'ancrage et systèmes antichute : les bons réflexes pour travailler en hauteur en sécurité.",
    sections: [
      {
        title: "Toujours privilégier la protection collective",
        eyebrow: "Le principe fondamental",
        blocks: [
          {
            type: "p",
            text: "Les articles R4323-59 et R4323-60 du Code du travail fixent une règle non négociable : les protections collectives (garde-corps, filets, planchers) doivent toujours être envisagées en premier. Le port du harnais est à privilégier en dernier recours, lorsque la protection collective est techniquement impossible."
          }
        ]
      },
      {
        title: "Protection collective ou individuelle ?",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Niveau",
              "Moyens",
              "Quand l'utiliser"
            ],
            rows: [
              [
                "1 : Priorité absolue",
                "Protection collective : garde-corps, filets de sécurité, planchers pleins",
                "Systématiquement, dès que techniquement possible"
              ],
              [
                "2 : Dernier recours",
                "Protection individuelle : harnais antichute, longes, antichutes à rappel automatique",
                "Uniquement si la protection collective est impossible"
              ]
            ]
          },
          {
            type: "p",
            text: "Un garde-corps protège tout le monde en permanence ; un harnais ne protège qu'une personne, et seulement s'il est correctement utilisé."
          }
        ]
      },
      {
        title: "Un garde-corps conforme, ça se compose de quoi ?",
        eyebrow: "Protection collective",
        blocks: [
          {
            type: "p",
            text: "Selon la norme NF EN 13374, un garde-corps doit réunir simultanément ces éléments : une lisse haute (1 à 1,10 m), une lisse intermédiaire (à mi-hauteur), une plinthe basse (10 à 15 cm) et des potelets espacés de 2,5 à 3 m maximum. Une simple barre horizontale isolée n'est pas conforme."
          }
        ]
      },
      {
        title: "Contrôler et entretenir son harnais",
        eyebrow: "Une compétence indispensable",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Vérification quotidienne",
                text: [
                  "Avant chaque utilisation, l'utilisateur contrôle lui-même son harnais : marquage lisible, sangles sans coupure ni décoloration, coutures intactes, anneaux sans corrosion ni déformation, boucles fonctionnelles. Le moindre défaut impose une mise au rebut immédiate."
                ]
              },
              {
                title: "Vérification générale périodique",
                text: [
                  "Une inspection approfondie, réalisée au moins une fois par an par une personne compétente ou un organisme habilité, avec tests fonctionnels et rapport écrit. Un harnais ayant arrêté une chute doit toujours être mis au rebut, même s'il semble intact."
                ]
              }
            ]
          },
          {
            type: "p",
            text: "La durée de vie d'un harnais antichute est généralement de 10 ans à compter de sa date de fabrication, mais elle est fixée par la notice du fabricant et peut être réduite selon l'usage, l'entretien et les conditions d'exposition. Il n'existe pas de durée légale unique en France."
          }
        ]
      },
      {
        title: "Point dorsal, sternal ou latéral ?",
        eyebrow: "Bien choisir son point",
        blocks: [
          {
            type: "table",
            head: [
              "Point d'ancrage",
              "Usage"
            ],
            rows: [
              [
                "Dorsal (entre les omoplates)",
                "Point par défaut pour la majorité des situations : toitures, échafaudages, déplacements"
              ],
              [
                "Sternal (sur la poitrine)",
                "Espaces confinés, échelles verticales, manœuvres fréquentes du système antichute"
              ],
              [
                "Latéral (sur les hanches)",
                "Maintien en position de travail uniquement : jamais pour arrêter une chute"
              ]
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Peut-on utiliser un harnais à la place d'un garde-corps par simplicité ?",
                a: [
                  "Non. La réglementation impose de toujours privilégier la protection collective. Le harnais ne peut être utilisé qu'en cas d'impossibilité technique démontrée d'installer un garde-corps ou un filet."
                ]
              },
              {
                q: "Que faire si mon harnais a déjà arrêté une chute ?",
                a: [
                  "Il doit être mis au rebut immédiatement, sans exception, même s'il paraît en parfait état. L'énergie absorbée lors de la chute peut avoir endommagé les fibres internes de façon invisible."
                ]
              },
              {
                q: "Quel point d'ancrage utiliser par défaut ?",
                a: [
                  "Le point dorsal, entre les omoplates, reste la référence pour la grande majorité des situations. Le point sternal est réservé aux cas particuliers : espaces confinés, échelles, manœuvres fréquentes."
                ]
              },
              {
                q: "Cette formation couvre-t-elle aussi les échafaudages ?",
                a: [
                  "Non, les échafaudages font l'objet de formations dédiées (R408 pour les échafaudages fixes, R457 pour les roulants) : retrouvez le détail sur notre page Travaux en hauteur et échafaudages."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "travaux-en-hauteur/echafaudage/utilisation-montage-demontage-et-verification-dechafaudages-roulants": {
    source: "/echafaudages-roulants",
    lead: "Stabilisation, blocage des roues et déplacement sécurisé : la formation dédiée aux échafaudages mobiles, adaptés aux interventions ponctuelles.",
    sections: [
      {
        title: "Une formation dédiée à la mobilité",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "La recommandation R457 de l'INRS encadre les échafaudages préfabriqués reposant sur roues, conformes à la norme NF EN 1004. Elle ne couvre pas les tours roulantes assemblées à partir d'éléments d'échafaudages fixes, qui restent sous la recommandation R408."
          }
        ]
      },
      {
        title: "R408 ou R457 ?",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Critère",
              "R408 : Échafaudage fixe",
              "R457 : Échafaudage roulant"
            ],
            rows: [
              [
                "Stabilisation",
                "Ancrages permanents à la façade",
                "Freins sur les roues + stabilisateurs"
              ],
              [
                "Hauteur maximale",
                "Plusieurs dizaines de mètres selon ancrages",
                "8 m en intérieur, 12 m en extérieur"
              ],
              [
                "Durée typique d'usage",
                "Travaux de longue durée",
                "Interventions courtes à moyennes"
              ]
            ]
          }
        ]
      },
      {
        title: "Trois conditions pour rester stable",
        eyebrow: "Le principe fondamental",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Freins bloqués",
                text: [
                  "Toutes les roues doivent être freinées avant toute montée sur l'échafaudage, sans exception."
                ]
              },
              {
                title: "Stabilisateurs déployés",
                text: [
                  "Obligatoires dès 2,5 mètres de hauteur de plancher, étendus au maximum et à égale longueur des quatre côtés."
                ]
              },
              {
                title: "Ratio hauteur/largeur",
                text: [
                  "La hauteur ne doit pas dépasser 3 à 4 fois la largeur de la base, stabilisateurs déployés compris."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Déplacer un échafaudage roulant en sécurité",
        eyebrow: "Le moment le plus sensible",
        blocks: [
          {
            type: "p",
            text: "Aucune exception : personne ne reste sur l'échafaudage pendant qu'il se déplace."
          },
          {
            type: "steps",
            items: [
              {
                title: "Évacuer et décharger",
                text: [
                  "Toutes les personnes descendent, tous les outils et matériaux sont retirés de la plateforme."
                ]
              },
              {
                title: "Rétracter et débloquer",
                text: [
                  "Les stabilisateurs sont repliés, puis les freins sont débloqués : jamais avant l'évacuation complète."
                ]
              },
              {
                title: "Pousser et guider",
                text: [
                  "Déplacement à vitesse lente, uniquement par poussée manuelle, jamais par traction d'un véhicule."
                ]
              },
              {
                title: "Restabiliser",
                text: [
                  "Une fois repositionné, l'échafaudage est à nouveau freiné, stabilisé et vérifié avant toute remontée."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Un déplacement qui se prépare",
        eyebrow: "Une manœuvre coordonnée",
        blocks: [
          {
            type: "p",
            text: "Un déplacement d'échafaudage roulant ne s'improvise pas : il implique une reconnaissance préalable du parcours (nature du sol, obstacles, lignes électriques) et une coordination claire entre plusieurs personnes."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Peut-on tracter un échafaudage roulant avec un véhicule ?",
                a: [
                  "Non, c'est formellement interdit. Le déplacement doit toujours se faire par poussée manuelle, à vitesse lente et contrôlée."
                ]
              },
              {
                q: "Peut-on utiliser un échafaudage roulant par vent fort ?",
                a: [
                  "Non, l'utilisation doit être interrompue en cas de vent fort, l'échafaudage devant rester stable sans déplacement ni basculement inopiné, quelles que soient les conditions rencontrées."
                ]
              },
              {
                q: "Que risque-t-on à déplacer l'échafaudage avec quelqu'un dessus ?",
                a: [
                  "C'est une infraction au Code du travail engageant la responsabilité du superviseur et de l'employeur, en plus du risque d'accident grave. Cette règle ne souffre aucune exception."
                ]
              },
              {
                q: "Puis-je bâcher un échafaudage roulant ou l'utiliser pour du levage ?",
                a: [
                  "Non, sauf si la notice du fabricant l'autorise expressément. Une bâche augmente fortement la prise au vent et donc le risque de renversement, et le levage de charges soumet la structure à des efforts pour lesquels elle n'est pas forcément conçue."
                ]
              },
              {
                q: "Dois-je porter un harnais sur un échafaudage roulant ?",
                a: [
                  "Non. Un échafaudage roulant conforme est équipé de garde-corps sur son plancher de travail : cette protection collective rend le port du harnais inutile, à condition de respecter la notice du fabricant."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "travaux-en-hauteur/echafaudage/utilisation-montage-demontage-et-verification-dechafaudages-fixes": {
    source: "/echafaudages-fixes",
    lead: "Montage, vérification, maintenance et supervision d'équipe : une formation complète pour tous les intervenants sur échafaudages fixes.",
    sections: [
      {
        title: "Quatre objectifs, un seul mot d'ordre : la conformité",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "L'article R4323-69 du Code du travail impose que le montage, le démontage ou toute modification substantielle d'un échafaudage soit réalisé sous la direction d'une personne compétente, par des travailleurs formés. La formation R408 proposée par SECURIFORM a pour objectif de développer 3 compétences : utiliser, monter et démonter, réceptionner et vérifier un échafaudage fixe."
          }
        ]
      },
      {
        title: "Trois règles de stabilité, non négociables",
        eyebrow: "Le principe fondamental",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Stabilité verticale",
                text: [
                  "Base de niveau, sol capable de supporter la charge totale, plaques de répartition sur sols meubles."
                ]
              },
              {
                title: "Stabilité latérale",
                text: [
                  "Ancrages à la façade tous les 4 à 8 mètres selon la hauteur, pour résister au vent et aux efforts de renversement."
                ]
              },
              {
                title: "Résistance des éléments",
                text: [
                  "Montants, traverses, planchers et garde-corps adaptés à la classe de charge réellement utilisée."
                ]
              }
            ]
          },
          {
            type: "p",
            text: "Repère pratique : la hauteur d'un échafaudage ne doit généralement pas dépasser 3 à 4 fois la largeur de sa base."
          }
        ]
      },
      {
        title: "Les classes de charge (NF EN 12811)",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "p",
            text: "Chaque échafaudage est conçu pour une classe de charge précise : la dépasser expose à un risque d'effondrement."
          },
          {
            type: "table",
            head: [
              "Classe",
              "Usage typique"
            ],
            rows: [
              [
                "Classe 1",
                "Accès uniquement, sans travaux"
              ],
              [
                "Classe 2",
                "Travaux légers (peinture, finitions)"
              ],
              [
                "Classe 3",
                "Travaux moyens"
              ],
              [
                "Classe 4",
                "Travaux lourds (maçonnerie légère, briques)"
              ],
              [
                "Classe 5",
                "Travaux très lourds"
              ],
              [
                "Classe 6",
                "Maçonnerie complète"
              ]
            ]
          }
        ]
      },
      {
        title: "Les vérifications imposées par l'arrêté du 21 décembre 2004",
        eyebrow: "Une obligation en 3 temps",
        blocks: [
          {
            type: "table",
            head: [
              "Vérification",
              "Qui",
              "Fréquence"
            ],
            rows: [
              [
                "Avant mise en service (réception)",
                "Personne compétente",
                "À chaque montage ou modification importante"
              ],
              [
                "Journalière",
                "Tout utilisateur formé",
                "Chaque jour, avant utilisation"
              ],
              [
                "Trimestrielle",
                "Personne compétente ou organisme agréé",
                "Tous les 3 mois"
              ]
            ]
          },
          {
            type: "p",
            text: "Une revérification complète est aussi obligatoire après un accident, une interruption d'utilisation d'un mois ou plus, ou des conditions météorologiques exceptionnelles."
          }
        ]
      },
      {
        title: "Superviser une équipe de monteurs",
        eyebrow: "Pour les chefs d'équipe",
        blocks: [
          {
            type: "p",
            text: "Au-delà du geste technique, la formation prépare aussi à la coordination d'une équipe : analyser les risques du chantier avant de commencer, choisir la configuration d'échafaudage adaptée, organiser le planning de montage, et vérifier au quotidien que les règles de sécurité sont bien respectées sur le terrain."
          },
          {
            type: "p",
            text: "Le superviseur documente aussi son intervention : fiches de réception, registre journalier, et gestion immédiate de toute anomalie constatée : avec arrêt des travaux si nécessaire."
          },
          {
            type: "aside",
            items: [
              "Évaluer les risques avant le montage",
              "Choisir la configuration adaptée aux travaux",
              "Vérifier le respect des règles sur le terrain",
              "Documenter et réagir face aux anomalies"
            ],
            title: "Ses responsabilités clés"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Qui peut réaliser la vérification avant mise en service ?",
                a: [
                  "Une personne compétente, formée spécifiquement à la réception d'échafaudages : un monteur expérimenté habilité, un chef d'équipe formé, ou un bureau de contrôle externe."
                ]
              },
              {
                q: "La vérification journalière demande-t-elle une qualification particulière ?",
                a: [
                  "Non, elle peut être réalisée par tout utilisateur formé : c'est un contrôle visuel rapide (5 à 15 minutes) portant sur les éléments les plus évidents : garde-corps, planchers, ancrages visibles, état du sol."
                ]
              },
              {
                q: "Que se passe-t-il si je dépasse la classe de charge de mon échafaudage ?",
                a: [
                  "Le risque d'effondrement devient immédiat. C'est pourquoi la classe de charge doit être clairement identifiée et affichée sur site, et respectée par tous les intervenants."
                ]
              },
              {
                q: "Faut-il refaire une vérification complète après une tempête ?",
                a: [
                  "Oui, toute condition météorologique exceptionnelle ayant pu soumettre la structure à des efforts anormaux impose une revérification complète avant de reprendre l'utilisation."
                ]
              },
              {
                q: "Et pour les échafaudages roulants ?",
                a: [
                  "Ils font l'objet d'une formation dédiée (R457), aux règles différentes puisqu'ils sont mobiles : retrouvez le détail sur notre page Travaux en hauteur et échafaudages."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t": {
    source: "/secourisme",
    lead: "SECURIFORM est habilitée centre de formation Sauveteur Secouriste du Travail. Formez-vous aux gestes qui sauvent avec des professionnels du secourisme.",
    sections: [
      {
        title: "Ce que dit le Code du travail",
        eyebrow: "Le SST en entreprise",
        blocks: [
          {
            type: "p",
            text: "L'article R. 4224-15 du Code du travail impose au minimum un salarié formé aux premiers secours dans :"
          },
          {
            type: "list",
            items: [
              "chaque atelier où sont accomplis des travaux dangereux ;",
              "chaque chantier du BTP employant au moins 20 travailleurs pendant plus de 15 jours, lorsque des travaux dangereux y sont réalisés."
            ]
          }
        ]
      },
      {
        title: "Le protocole Protéger – Alerter – Secourir",
        eyebrow: "Le réflexe à connaître",
        blocks: [
          {
            type: "p",
            text: "Toute intervention de secourisme suit cette même séquence, dans cet ordre, quelle que soit la situation rencontrée."
          },
          {
            type: "steps",
            items: [
              {
                title: "Protéger",
                text: [
                  "Repérer les dangers persistants, les supprimer ou en écarter la victime, sans jamais se mettre soi-même en danger."
                ]
              },
              {
                title: "Alerter",
                text: [
                  "Faire alerter ou alerter directement les secours (15, 18 ou 112), en donnant une localisation précise et l'état de la victime."
                ]
              },
              {
                title: "Secourir",
                text: [
                  "Pratiquer les gestes adaptés à l'état de la victime, en attendant l'arrivée des secours professionnels."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Quelles situations ?",
        eyebrow: "Gestes essentiels",
        blocks: [
          {
            type: "p",
            text: "Un repère synthétique : la formation SST permet de reconnaître ces situations et de réagir avec les bons gestes, dans le calme."
          },
          {
            type: "table",
            head: [
              "Situation"
            ],
            rows: [
              [
                "La victime saigne abondamment"
              ],
              [
                "La victime s’étouffe"
              ],
              [
                "La victime se plaint d’un malaise"
              ],
              [
                "La victime se plaint de brûlures"
              ],
              [
                "La victime se plaint d’une douleur empêchant certains mouvements"
              ],
              [
                "La victime se plaint d’une plaie qui ne saigne pas abondamment"
              ],
              [
                "La victime ne répond pas mais elle respire"
              ],
              [
                "La victime ne répond pas et ne respire pas"
              ]
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "La formation SST est-elle obligatoire dans mon entreprise ?",
                a: [
                  "Elle l'est dès lors que vous employez du personnel dans un atelier à travaux dangereux, ou sur un chantier de 20 salariés ou plus occupés plus de 15 jours à des travaux dangereux. En dehors de ces cas, l'INRS recommande tout de même de former 10 à 15 % de l'effectif, quelle que soit l'activité."
                ]
              },
              {
                q: "Quelle est la durée de validité du certificat SST ?",
                a: [
                  "Le certificat est valable 24 mois."
                ]
              },
              {
                q: "Le SST a-t-il un rôle en dehors des situations d'urgence ?",
                a: [
                  "Oui. Au quotidien, le SST est aussi un relais de prévention : il peut repérer des situations dangereuses et les signaler à sa hiérarchie, contribuant ainsi à l'amélioration continue de la sécurité dans l'entreprise."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "secourisme-et-incendie/manipulation-dextincteurs": {
    source: "/manipulation-extincteurs",
    lead: "Reconnaître un début d'incendie, choisir l'extincteur adapté et l'utiliser efficacement : une formation avec pratique sur feu réel ou simulé.",
    sections: [
      {
        title: "Le triangle du feu et les modes d'extinction",
        eyebrow: "Comprendre pour mieux agir",
        blocks: [
          {
            type: "p",
            text: "Un feu naît de la rencontre de trois éléments : un combustible, un comburant (généralement l'oxygène de l'air) et une source de chaleur. Supprimer l'un des trois suffit à l'éteindre. C'est exactement ce que fait chaque type d'extincteur, mais pas de la même façon."
          }
        ]
      },
      {
        title: "Quatre façons d'éteindre un feu",
        eyebrow: "Comment ça marche",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Refroidissement",
                text: [
                  "Abaisser la température sous le seuil d'inflammation. C'est le principe de l'extincteur à eau."
                ]
              },
              {
                title: "Étouffement",
                text: [
                  "Couper l'apport d'oxygène en formant une barrière. C'est le principe de la mousse et du CO2."
                ]
              },
              {
                title: "Affamage",
                text: [
                  "Supprimer le combustible, par exemple en coupant une alimentation en gaz."
                ]
              },
              {
                title: "Inhibition",
                text: [
                  "Stopper la réaction chimique elle-même. C'est le principe des poudres ABC."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les classes de feu, et ce qu'il ne faut jamais faire",
        eyebrow: "Bien choisir son extincteur",
        blocks: [
          {
            type: "p",
            text: "Utiliser le mauvais extincteur peut aggraver la situation au lieu de la maîtriser : c'est le premier réflexe enseigné en formation."
          },
          {
            type: "table",
            head: [
              "Classe",
              "Exemple",
              "Extincteur adapté",
              "À ne jamais utiliser"
            ],
            rows: [
              [
                "A : solides",
                "Bois, papier, textiles",
                "Eau, poudre",
                "—"
              ],
              [
                "B : liquides",
                "Essence, solvants, peintures",
                "Mousse, poudre",
                "Eau (le feu s'étend)"
              ],
              [
                "C : gaz",
                "Propane, butane, méthane",
                "Poudre (après coupure du gaz)",
                "Intervenir sans couper l'alimentation"
              ],
              [
                "D : métaux",
                "Magnésium, sodium",
                "Poudre spéciale métaux",
                "Eau et CO2 (réaction violente possible)"
              ],
              [
                "Électrique",
                "Tableaux, appareils sous tension",
                "CO2, poudre (non conducteurs)",
                "Eau et mousse (risque d'électrocution)"
              ],
              [
                "F : huiles de cuisson",
                "Friteuses professionnelles",
                "Produit chimique humide dédié",
                "Eau (explosion de vapeur)"
              ]
            ]
          }
        ]
      },
      {
        title: "La technique en 5 temps",
        eyebrow: "Le bon geste",
        blocks: [
          {
            type: "p",
            text: "Ce déroulé s'applique à tous les extincteurs portatifs, quel que soit le type."
          },
          {
            type: "steps",
            items: [
              {
                title: "Approcher",
                text: [
                  "Se rapprocher du feu tout en gardant une distance de sécurité, avec toujours une issue derrière soi."
                ]
              },
              {
                title: "Dégoupiller",
                text: [
                  "Retirer la goupille de sécurité qui protège le levier d'action."
                ]
              },
              {
                title: "Vérifier",
                text: [
                  "Confirmer sur l'étiquette que l'extincteur correspond bien à la classe de feu rencontrée."
                ]
              },
              {
                title: "Actionner",
                text: [
                  "Appuyer sur la poignée pour libérer l'agent extincteur."
                ]
              },
              {
                title: "Diffuser",
                text: [
                  "Viser la base du feu, avec un mouvement de balayage, jusqu'à extinction complète."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les principaux types d'extincteurs",
        eyebrow: "Connaître son matériel",
        blocks: [
          {
            type: "table",
            head: [
              "Type",
              "Portée indicative",
              "Point de vigilance"
            ],
            rows: [
              [
                "Eau",
                "10 à 15 mètres",
                "Jamais sur liquides inflammables, électricité ou métaux"
              ],
              [
                "Poudre",
                "3 à 6 mètres",
                "Réduit fortement la visibilité, peut irriter les voies respiratoires"
              ],
              [
                "Mousse",
                "5 à 10 mètres",
                "Conductrice : jamais sur installation électrique"
              ],
              [
                "CO2",
                "1 à 3 mètres",
                "Ne jamais tenir la tuyère à main nue (risque de brûlure par le froid)"
              ]
            ]
          }
        ]
      },
      {
        title: "Que faire une fois le feu éteint ?",
        eyebrow: "Ce n'est pas terminé",
        blocks: [
          {
            type: "p",
            text: "Même après extinction apparente, il faut laisser les sapeurs-pompiers inspecter la zone à la recherche de foyers résiduels, ventiler les lieux pour évacuer les fumées, et surveiller les matériaux qui pourraient se rallumer en refroidissant mal."
          },
          {
            type: "p",
            text: "Tout extincteur utilisé, même partiellement, doit être signalé pour être rechargé ou remplacé : il perd rapidement en efficacité une fois entamé."
          },
          {
            type: "aside",
            items: [
              "Alerter les secours avant toute tentative d'extinction",
              "Toujours garder une issue de secours derrière soi",
              "Laisser les pompiers inspecter, même feu éteint",
              "Signaler tout extincteur utilisé pour rechargement"
            ],
            title: "À retenir"
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Pourquoi ne jamais utiliser d'eau sur un feu de liquide inflammable ?",
                a: [
                  "L'eau, plus dense, coule sous le liquide en feu, se vaporise brutalement et projette le liquide enflammé alentour : au lieu d'éteindre le feu, elle l'étend violemment."
                ]
              },
              {
                q: "Cette formation est-elle obligatoire dans mon entreprise ?",
                a: [
                  "L'article R4227-28 du Code du travail impose à l'employeur de prendre les mesures nécessaires pour combattre efficacement tout début d'incendie, ce qui suppose que le personnel soit formé à l'utilisation des extincteurs."
                ]
              },
              {
                q: "Que faire si je ne suis pas sûr de la classe de feu ?",
                a: [
                  "Dans le doute, privilégiez toujours l'alerte des secours plutôt qu'une tentative d'extinction hasardeuse : un extincteur mal choisi peut aggraver la situation."
                ]
              },
              {
                q: "Cette formation couvre-t-elle aussi les RIA ?",
                a: [
                  "Oui, la pratique peut inclure la manipulation des Robinets d'Incendie Armés (RIA), en complément des extincteurs portatifs."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "secourisme-et-incendie/equipier-de-premiere-intervention-epi": {
    source: "/equipier-premiere-intervention",
    lead: "Former des référents internes capables d'agir dans les premières minutes critiques d'un incendie, avec extincteurs et RIA, avant l'arrivée des secours.",
    sections: [
      {
        title: "Une obligation qui dépend de votre profil",
        eyebrow: "Vue d'ensemble",
        blocks: [
          {
            type: "p",
            text: "L'article R4227-28 du Code du travail impose au chef d'établissement de prendre les mesures nécessaires pour combattre efficacement tout début d'incendie. Le référentiel APSAD R6, reconnu par les assureurs, structure l'organisation de la sécurité incendie autour de trois rôles complémentaires."
          }
        ]
      },
      {
        title: "Les trois rôles du référentiel APSAD R6",
        eyebrow: "Bien s'y retrouver",
        blocks: [
          {
            type: "table",
            head: [
              "Rôle",
              "Mission"
            ],
            rows: [
              [
                "EPI : Équipier de Première Intervention",
                "Donne l'alarme, alerte les secours, intervient avec les moyens sur place (extincteurs, RIA)"
              ],
              [
                "ESI : Équipier de Seconde Intervention",
                "Renforce les EPI avec des moyens complémentaires, en attendant les secours (facultatif)"
              ],
              [
                "EIT : Équipier d'Intervention Technique",
                "Effectue les coupures d'énergies et fluides, met les installations en sécurité (facultatif)"
              ]
            ]
          }
        ]
      },
      {
        title: "Organiser son intervention",
        eyebrow: "Le bon enchaînement",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Reconnaître",
                text: [
                  "Évaluer rapidement la classe de feu et son ampleur : début maîtrisable ou incendie développé."
                ]
              },
              {
                title: "Alarme et alerte",
                text: [
                  "Déclencher l'alarme et appeler les pompiers (18 ou 112), simultanément, sans jamais retarder l'un pour l'autre."
                ]
              },
              {
                title: "Mettre en sécurité",
                text: [
                  "S'assurer que toute personne présente évacue : la protection des vies prime toujours sur celle des biens."
                ]
              },
              {
                title: "Intervenir",
                text: [
                  "Attaquer le feu à deux minimum, avec l'extincteur ou le RIA adapté, en gardant toujours une issue de repli."
                ]
              },
              {
                title: "Accueillir les secours",
                text: [
                  "Guider les pompiers vers le foyer et leur transmettre toutes les informations utiles à leur arrivée."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les limites absolues de l'intervention",
        eyebrow: "Ce qu'il ne faut jamais dépasser",
        blocks: [
          {
            type: "p",
            text: "C'est sans doute l'enseignement le plus important : un EPI n'est pas un sapeur-pompier, et sa mission s'arrête là où le danger devient trop grand."
          },
          {
            type: "cards",
            items: [
              {
                title: "Un début d'incendie seulement",
                text: [
                  "Flammes limitées, fumée modérée, chaleur supportable. Au-delà, on évacue immédiatement."
                ]
              },
              {
                title: "Jamais seul",
                text: [
                  "Toujours à deux minimum : l'un attaque le feu, l'autre surveille et assiste."
                ]
              },
              {
                title: "Un nombre d'essais limité",
                text: [
                  "Si le feu n'est pas maîtrisé après 2 à 3 extincteurs, l'intervention s'arrête : on évacue et on attend les secours."
                ]
              },
              {
                title: "Connaître ses limites",
                text: [
                  "Pas d'équipement respiratoire, pas de tenue ignifuge : un EPI n'entre jamais dans une zone enfumée ou en flammes."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Le RIA, Robinet d'Incendie Armé",
        eyebrow: "Plus puissant qu'un extincteur",
        blocks: [
          {
            type: "p",
            text: "Toujours alimenté en eau et prêt à l'emploi, le RIA offre une capacité d'extinction nettement supérieure à celle d'un extincteur portatif."
          },
          {
            type: "table",
            head: [
              "Critère",
              "Extincteur portatif",
              "RIA"
            ],
            rows: [
              [
                "Durée d'utilisation",
                "15 à 30 secondes",
                "Illimitée, tant que l'eau est disponible"
              ],
              [
                "Portée",
                "3 à 6 mètres",
                "Jusqu'à 15 mètres en jet bâton"
              ],
              [
                "Classes de feu couvertes",
                "Selon le type d'agent",
                "Efficace sur A et B ; jamais sur gaz (C) ni électricité (E)"
              ],
              [
                "Manipulation",
                "Une personne",
                "Deux personnes recommandées (force de recul importante)"
              ]
            ]
          }
        ]
      },
      {
        title: "Connaître les coupures essentielles",
        eyebrow: "Avant d'intervenir",
        blocks: [
          {
            type: "p",
            text: "Couper certaines énergies avant d'attaquer le feu réduit considérablement les risques, pour l'intervenant comme pour l'efficacité de l'extinction."
          },
          {
            type: "cards",
            items: [
              {
                title: "Électricité",
                text: [
                  "Couper le disjoncteur général ou utiliser l'arrêt d'urgence, pour éviter tout risque d'électrocution."
                ]
              },
              {
                title: "Gaz",
                text: [
                  "Fermer la vanne générale ou le robinet de la bouteille, pour ne pas alimenter davantage le foyer."
                ]
              },
              {
                title: "Ventilation",
                text: [
                  "Arrêter les systèmes de ventilation, qui propagent fumées et oxygène dans tout le bâtiment."
                ]
              },
              {
                title: "Machines",
                text: [
                  "Actionner les arrêts d'urgence pour éviter étincelles, échauffements ou mouvements dangereux."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Un extincteur ou un RIA : lequel utiliser ?",
                a: [
                  "L'extincteur convient pour un feu très naissant et localisé. Le RIA, avec sa durée illimitée et sa portée supérieure, permet une attaque plus soutenue, mais jamais sur un feu de gaz ou d'origine électrique."
                ]
              },
              {
                q: "Que faire si le feu ne diminue pas malgré l'intervention ?",
                a: [
                  "Il faut arrêter immédiatement et évacuer. Passé 2 à 3 extincteurs sans résultat, l'intervention EPI est terminée : la suite revient aux sapeurs-pompiers."
                ]
              },
              {
                q: "Cette formation couvre-t-elle aussi l'évacuation ?",
                a: [
                  "Non, l'évacuation fait l'objet d'une formation dédiée, complémentaire à celle-ci : retrouvez le détail sur notre page Formations incendie et évacuation."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "secourisme-et-incendie/evacuation": {
    source: "/evacuation",
    lead: "Préparer et encadrer un exercice d'évacuation : rôles de guide-file et serre-file, comportement humain en situation de danger, point de rassemblement.",
    sections: [
      {
        title: "Guide-file et serre-file",
        eyebrow: "Deux rôles complémentaires",
        blocks: [
          {
            type: "p",
            text: "Une évacuation ordonnée repose sur des personnes désignées à l'avance, reconnaissables et formées à leur rôle précis."
          }
        ]
      },
      {
        title: "Les missions de chacun",
        eyebrow: "Qui fait quoi",
        blocks: [
          {
            type: "table",
            head: [
              "Rôle",
              "Missions principales"
            ],
            rows: [
              [
                "Guide-file",
                "Dirige les personnes vers la sortie appropriée, les accompagne jusqu'au point de rassemblement, maintient le calme"
              ],
              [
                "Serre-file",
                "Vérifie que sa zone a été évacuée et sort en dernier"
              ]
            ]
          },
          {
            type: "p",
            text: "Pour être identifiables immédiatement, guides-files et serre-files sont équipés d'un sifflet, d'un brassard ou gilet fluorescent, et parfois d'un mégaphone."
          }
        ]
      },
      {
        title: "Le comportement humain face au danger",
        eyebrow: "Comprendre pour mieux agir",
        blocks: [
          {
            type: "p",
            text: "Face à un signal de danger, la peur peut dégénérer en réactions désorganisées : mouvements chaotiques vers les sorties, imitation aveugle des autres, ou au contraire déni du danger et refus d'évacuer. Ces réflexes ne sont pas des exceptions : ce sont des réactions humaines courantes que la formation permet d'anticiper."
          },
          {
            type: "p",
            text: "Une alarme reconnaissable, des consignes simples et répétées, et la présence visible de guides-files rassurants suffisent à transformer ces réactions instinctives en évacuation ordonnée."
          },
          {
            type: "aside",
            items: [
              "Un signal d'alarme reconnu de tous",
              "Une consigne unique et claire, répétée si besoin",
              "Une autorité visible (guide-file identifiable)",
              "Un point de rassemblement clairement identifié"
            ],
            title: "Ce qui rassure et canalise"
          }
        ]
      },
      {
        title: "Trois actions à mener en même temps",
        eyebrow: "Dès la détection",
        blocks: [
          {
            type: "p",
            text: "Dès qu'un danger est détecté, ces trois actions démarrent simultanément, sans attendre l'une pour commencer l'autre."
          },
          {
            type: "cards",
            items: [
              {
                title: "Alarme et évacuation",
                text: [
                  "Déclenchement immédiat du signal d'alarme, guides-files et serre-files entrent en action."
                ]
              },
              {
                title: "Alerte des secours",
                text: [
                  "Une personne dédiée contacte les pompiers (18 ou 112), en donnant localisation, nature du danger et effectif présent."
                ]
              },
              {
                title: "Confinement du foyer",
                text: [
                  "Si possible sans risque, un Équipier de Première Intervention agit sur un début d'incendie, sans jamais retarder l'évacuation."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Adapter l'évacuation aux personnes handicapées",
        eyebrow: "Une évacuation pour tous",
        blocks: [
          {
            type: "table",
            head: [
              "Situation",
              "Bonne pratique"
            ],
            rows: [
              [
                "Fauteuil roulant",
                "Orienter vers une zone d'attente sécurisée (ZAS)"
              ],
              [
                "Déficience visuelle",
                "Guidage verbal détaillé, contact physique maintenu jusqu'au point de rassemblement"
              ],
              [
                "Déficience auditive",
                "Communication visuelle, gestes clairs, signal lumineux d'alarme"
              ],
              [
                "Mobilité réduite",
                "Bras d'appui, rythme adapté, mieux vaut une progression lente qu'un maintien sur place"
              ]
            ]
          },
          {
            type: "p",
            text: "La zone d'attente sécurisée (ZAS) est un local résistant au feu au moins une heure, permettant d'attendre l'extraction par les pompiers en toute sécurité."
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Peut-on utiliser l'ascenseur pour évacuer une personne à mobilité réduite ?",
                a: [
                  "Non, l'usage des ascenseurs est interdit en cas d'incendie, quelle que soit la situation, car ils peuvent se bloquer ou propager fumée et flammes."
                ]
              },
              {
                q: "Faut-il prévenir les pompiers avant un exercice d'évacuation ?",
                a: [
                  "Oui, c'est recommandé pour éviter qu'ils ne se déplacent inutilement en pensant à un incendie réel."
                ]
              },
              {
                q: "Cette formation remplace-t-elle celle d'Équipier de Première Intervention ?",
                a: [
                  "Non, ce sont deux formations complémentaires : l'une prépare à organiser l'évacuation, l'autre à intervenir sur un début d'incendie. Retrouvez le détail sur notre page Formations incendie et évacuation."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "risques-lies-au-poste-de-travail/gestes-et-postures": {
    source: "/gestes-postures",
    lead: "Prévenez les troubles musculosquelettiques et adoptez les bons réflexes de manutention.",
    sections: [
      {
        title: "Les TMS, première cause de maladie professionnelle",
        eyebrow: "Une obligation dès qu'il y a manutention",
        blocks: [
          {
            type: "p",
            text: "L'article R4541-8 du Code du travail impose à l'employeur d'informer et de former tout salarié dont l'activité comporte des manutentions manuelles : port, levage, poussée, traction ou déplacement de charges. Les troubles musculosquelettiques représentent près de 87 % des maladies professionnelles reconnues en France, et la lombalgie est à l'origine de 20 % des accidents du travail."
          }
        ]
      },
      {
        title: "Six principes pour manutentionner en sécurité",
        eyebrow: "Les fondamentaux",
        blocks: [
          {
            type: "p",
            text: "Ces principes constituent le cœur pratique de la formation : ils s'appliquent à chaque geste de manutention, quel que soit le métier."
          },
          {
            type: "steps",
            items: [
              {
                title: "Se rapprocher de la charge",
                text: [
                  "Plus une charge est éloignée du corps, plus la contrainte sur la colonne vertébrale augmente. Il faut l'encadrer avec les pieds avant de la soulever."
                ]
              },
              {
                title: "Chercher l'équilibre",
                text: [
                  "Écarter les pieds à la largeur du bassin et décaler légèrement un pied pour créer une base stable avant tout effort."
                ]
              },
              {
                title: "Fléchir les genoux",
                text: [
                  "Utiliser la force des jambes, bien plus puissantes que celles du dos, en pliant les genoux plutôt qu'en se penchant en avant."
                ]
              },
              {
                title: "Garder le dos droit",
                text: [
                  "Respecter les courbures naturelles de la colonne pendant tout le mouvement, du sol jusqu'à la position debout."
                ]
              },
              {
                title: "Assurer une prise ferme",
                text: [
                  "Saisir la charge avec la paume des mains, jamais du bout des doigts, en privilégiant une prise symétrique à deux mains."
                ]
              },
              {
                title: "Pivoter avec les pieds",
                text: [
                  "Ne jamais tourner le tronc en portant une charge : se repositionner en déplaçant tout le corps pour éviter les torsions."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Adapter le poste, pas seulement le geste",
        eyebrow: "Au-delà du geste",
        blocks: [
          {
            type: "p",
            text: "La formation s'accompagne toujours d'un regard sur l'organisation du poste : un aménagement adapté réduit le risque bien plus durablement qu'un bon réflexe isolé."
          },
          {
            type: "table",
            head: [
              "Type de poste",
              "Risque principal",
              "Aménagement clé"
            ],
            rows: [
              [
                "Manutention répétitive (entrepôt, logistique)",
                "Flexions répétées du dos",
                "Hauteur de prélèvement entre 60 cm et 1,20 m"
              ],
              [
                "Poste assis prolongé (bureau)",
                "Tensions cervicales et lombaires",
                "Siège réglable, écran à hauteur des yeux"
              ],
              [
                "Poste debout prolongé (production, vente)",
                "Fatigue des jambes et du dos",
                "Tapis anti-fatigue, appui fessier"
              ],
              [
                "Aide à la personne (soin, EHPAD)",
                "Ports de charge humaine",
                "Lits réglables, lève-personnes, draps de glisse"
              ]
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "La formation gestes et postures est-elle obligatoire dans mon entreprise ?",
                a: [
                  "Elle l'est dès qu'un poste implique des manutentions manuelles : port, levage, poussée, traction ou déplacement de charges. Ce n'est pas réservé à l'industrie : bureaux, commerce, santé et collectivités sont tout autant concernés."
                ]
              },
              {
                q: "Existe-t-il des limites de poids à respecter ?",
                a: [
                  "Les repères couramment retenus sont de 25 kg pour un homme et 15 kg pour une femme, mais ces seuils dépendent aussi de la fréquence des gestes, de la posture et des aides mécaniques disponibles au poste."
                ]
              },
              {
                q: "Une ceinture lombaire suffit-elle à protéger le dos ?",
                a: [
                  "Non. Une ceinture lombaire ne remplace jamais une formation aux bons gestes : utilisée en permanence, elle peut même affaiblir les muscles du dos. Elle reste un outil ponctuel, pas une solution de fond."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "risques-lies-au-poste-de-travail/tronconneuse-thermique-a-chaine": {
    source: "/tronconneuse-thermique",
    lead: "Prise en main, entretien et bonnes pratiques de coupe : une formation centrée sur le risque le plus caractéristique de cet outil, le rebond.",
    sections: [
      {
        title: "Le rebond, principal danger de la tronçonneuse",
        eyebrow: "Le risque à connaître avant tout",
        blocks: [
          {
            type: "p",
            text: "Le rebond (ou kickback) se produit lorsque la pointe du guide-chaîne touche un obstacle ou se retrouve coincée : la tronçonneuse est alors violemment projetée vers l'opérateur, en une fraction de seconde. C'est la cause la plus fréquente des blessures graves liées à cet outil, et le point sur lequel la formation insiste en priorité."
          }
        ]
      },
      {
        title: "Les autres risques de l'utilisation",
        eyebrow: "Ce que la formation prévient aussi",
        blocks: [
          {
            type: "cards",
            items: [
              {
                title: "Coupure grave",
                text: [
                  "Lors d'une prise en main incorrecte ou d'un déséquilibre pendant la coupe."
                ]
              },
              {
                title: "Vibrations",
                text: [
                  "Une exposition prolongée peut affecter la circulation sanguine des mains à long terme."
                ]
              },
              {
                title: "Chute d'arbre ou de branche",
                text: [
                  "Risque majeur lors de l'abattage, si la trajectoire de chute n'a pas été correctement anticipée."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Le kit de protection complet",
        eyebrow: "S'équiper correctement",
        blocks: [
          {
            type: "p",
            text: "Contrairement à beaucoup d'outils, l'utilisation d'une tronçonneuse nécessite un équipement de protection individuelle complet :"
          },
          {
            type: "cards",
            items: [
              {
                title: "Chaussures anti-coupure",
                text: [
                  "Chaussures de sécurité avec coque de protection, indispensables en complément du pantalon anti-coupure."
                ]
              },
              {
                title: "Pantalon ou jambières anti-coupure",
                text: [
                  "Contiennent des fibres qui bloquent la chaîne en cas de contact accidentel avec la jambe."
                ]
              },
              {
                title: "Veste ou manchettes anti-coupure",
                text: [
                  "Protègent le haut du corps et les bras en cas de contact accidentel avec la chaîne."
                ]
              },
              {
                title: "Gants anti-coupure",
                text: [
                  "Protègent les mains lors de la manipulation de la tronçonneuse."
                ]
              },
              {
                title: "Casque",
                text: [
                  "Protège la tête des chutes de branches."
                ]
              },
              {
                title: "Écran facial grillagé",
                text: [
                  "Visière grillagée qui protège le visage et les yeux des projections de copeaux et de débris."
                ]
              },
              {
                title: "Protections auditives",
                text: [
                  "Protègent contre le bruit du moteur thermique."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Les vérifications de routine",
        eyebrow: "Avant de démarrer",
        blocks: [
          {
            type: "p",
            text: "Tension de la chaîne, affûtage, niveaux de carburant et d'huile de chaîne, et surtout fonctionnement du frein de chaîne : ce dernier point est le plus important, car c'est lui qui peut stopper la chaîne en une fraction de seconde en cas de rebond."
          }
        ]
      },
      {
        title: "L'abattage d'un arbre en 4 temps",
        eyebrow: "La méthode",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Évaluer",
                text: [
                  "Observer l'inclinaison naturelle de l'arbre, le vent et les obstacles alentour pour définir la direction de chute."
                ]
              },
              {
                title: "Entailler",
                text: [
                  "Réaliser l'entaille directionnelle du côté où l'arbre doit tomber."
                ]
              },
              {
                title: "Trait d'abattage",
                text: [
                  "Effectuer le trait opposé, en conservant une charnière de bois qui guidera la chute."
                ]
              },
              {
                title: "Se replier",
                text: [
                  "Reculer immédiatement vers une zone de repli dégagée, jamais dans l'axe de chute."
                ]
              }
            ]
          }
        ]
      },
      {
        title: "Vous vous posez des questions ?",
        eyebrow: "Questions fréquentes",
        blocks: [
          {
            type: "faq",
            items: [
              {
                q: "Comment éviter le rebond ?",
                a: [
                  "En évitant tout contact de la pointe du guide-chaîne avec un obstacle, en tenant fermement l'outil à deux mains, et en vérifiant que le frein de chaîne fonctionne correctement avant chaque utilisation."
                ]
              },
              {
                q: "Le pantalon anti-coupure est-il vraiment indispensable ?",
                a: [
                  "Oui, sans exception. C'est l'une des rares protections capables de bloquer la chaîne en cas de contact accidentel avec la jambe, et son absence expose à des blessures graves."
                ]
              },
              {
                q: "Peut-on couper au-dessus des épaules ?",
                a: [
                  "Non, cette position est déconseillée : elle réduit le contrôle de l'outil et augmente fortement le risque de rebond et de perte d'équilibre."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
};

export function findFormationDetail(slug: string[]): FormationDetail | undefined {
  return formationDetails[slug.join("/")];
}
