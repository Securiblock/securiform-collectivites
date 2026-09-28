export type CookieCategory = "Essentiel" | "Mesure d'audience";

export type CookieRow = {
  nom: string;
  emetteur: string;
  finalite: string;
  duree: string;
  categorie: CookieCategory;
};

// Aujourd'hui, la seule donnée mémorisée sur ce site est votre choix en matière de
// cookies (stockée dans le stockage local de votre navigateur, traitée comme un
// cookie au sens des recommandations de la CNIL). Le site n'utilise aucun outil de
// mesure d'audience, de publicité ou d'intégration tierce (vidéo, carte...) à ce
// jour. Si un tel outil est ajouté, il apparaîtra dans ce tableau avant sa mise en service.
export const cookieRows: CookieRow[] = [
  {
    nom: "securiform-cookie-consent",
    emetteur: "SECURIFORM Collectivités (première partie)",
    finalite: "Mémoriser vos choix en matière de cookies (accepté / refusé, par catégorie)",
    duree: "6 mois",
    categorie: "Essentiel",
  },
];

export const cookiesPageIntro = {
  paragraphs: [
    "Un cookie (ou traceur) est un petit fichier déposé sur votre appareil lors de la consultation d'un site internet. Il peut être utilisé pour assurer le bon fonctionnement du site, mémoriser vos préférences, ou mesurer sa fréquentation.",
    "Le dépôt de cookies non essentiels (mesure d'audience, publicité, contenus intégrés) nécessite votre consentement préalable, conformément aux recommandations de la Commission Nationale de l'Informatique et des Libertés (CNIL). Les cookies strictement nécessaires au fonctionnement du site ne nécessitent pas de consentement.",
  ],
};

export const cookiesPageOutro = {
  gestion: {
    title: "Comment gérer vos préférences",
    paragraphs: [
      "Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels, ou de personnaliser votre choix par catégorie.",
      "Vous pouvez à tout moment revenir sur votre choix via le lien « Gérer mes cookies » disponible en pied de chaque page.",
      "Vous pouvez également configurer votre navigateur pour refuser tous les cookies ou être averti avant leur dépôt ; cela peut toutefois affecter le bon fonctionnement de certains sites.",
    ],
  },
  duree: {
    title: "Durée de conservation de votre choix",
    paragraphs: [
      "Votre choix en matière de cookies est conservé pendant 6 mois. Passé ce délai, ou si vous supprimez les données de votre navigateur, le bandeau de consentement vous sera de nouveau présenté.",
    ],
  },
};
