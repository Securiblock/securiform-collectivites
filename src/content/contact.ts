import type { DetailSection } from "@/src/content/formations-details";

export const contactHero = {
  eyebrow: "Contact",
  title: "Parlons de vos besoins en formation",
  description:
    "Décrivez-nous vos besoins par téléphone ou par email : nous vous répondons rapidement pour construire une offre adaptée à votre collectivité.",
};

export const contactAvailability = {
  title: "Disponibilité",
  description: "Du lundi au vendredi, de 8h30 à 12h30 et de 13h30 à 17h30.",
};

export const contactArea = {
  title: "Zone d'intervention",
  description:
    "Nos formateurs et vérificateurs se déplacent sur toute la moitié nord de la France pour les formations, et principalement dans les Hauts-de-France pour les VGP. Notre équipe administrative vous répond depuis nos locaux de Villeneuve d'Ascq.",
};

export const contactChecklist = {
  title: "Pour préparer votre demande",
  description: "Ces quelques informations nous permettent de vous répondre plus rapidement avec une offre précise.",
  items: [
    "Le nombre d'agents concernés par la formation",
    "Les formations souhaitées (ou les risques identifiés dans vos services)",
    "Le lieu d'intervention souhaité",
    "Une période envisagée, si vous en avez déjà une",
  ],
};

// Sections reprises à l'identique de la page « Nous contacter » de securiform.fr.
export const contactDetails: DetailSection[] = [
  {
    eyebrow: "Selon votre besoin",
    title: "Trois bonnes raisons de nous écrire",
    blocks: [
      {
        type: "cards",
        items: [
          {
            title: "Demande de devis",
            text: [
              "Vous connaissez déjà la formation ou la VGP qu'il vous faut : décrivez votre besoin, nous revenons vers vous avec une proposition chiffrée."
            ]
          },
          {
            title: "Renseignement",
            text: [
              "Vous hésitez entre plusieurs formations ou souhaitez des précisions sur une obligation réglementaire : notre équipe vous oriente."
            ]
          },
          {
            title: "Service client",
            text: [
              "Vous êtes déjà accompagné par SECURIFORM et avez une question de suivi : attestations, planning, renouvellement d'habilitation."
            ]
          }
        ]
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
            q: "Sous quel délai vais-je recevoir une réponse ?",
            a: [
              "Notre délai moyen de traitement des demandes est de 1 heure. Pour une réponse immédiate, le téléphone reste le moyen le plus rapide de nous joindre."
            ]
          },
          {
            q: "Puis-je vous contacter pour une formation sur toute la moitié nord de la France ?",
            a: [
              "Oui, nos formateurs interviennent sur toute la moitié nord de la France. Nos vérificateurs VGP se déplacent quant à eux principalement dans les Hauts-de-France."
            ]
          }
        ]
      }
    ]
  }
];
