// Redirections 301 des anciennes URLs WordPress vers le nouveau site.
// Liste établie à partir des sitemaps de l'ancien site (pages, articles, produits WooCommerce
// et catégories de produits) : chaque URL indexée par Google pointe vers son équivalent le plus proche.
// Les URLs identiques sur les deux sites n'ont pas besoin de redirection.

const CONDUITE = "/formations/autorisations-de-conduite-et-caces";
const ELEC = "/formations/habilitations-electriques";
const NON_ELEC = `${ELEC}/personnel-non-electricien`;
const AIPR = "/formations/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r";
const HAUTEUR = "/formations/travaux-en-hauteur";
const ECHAFAUDAGE = `${HAUTEUR}/echafaudage`;
const SECOURS = "/formations/secourisme-et-incendie";
const RISQUES = "/formations/risques-lies-au-poste-de-travail";
const ROUTIERS = "/formations/formations-aux-risques-routiers-et-eco-conduite";

// [ancienne URL, nouvelle URL]
const pages: [string, string][] = [
  ["/boutique", "/formations/"],
  ["/bs", `${NON_ELEC}/preparation-a-lhabilitation-electrique-bs/`],
  ["/be-manoeuvre", `${NON_ELEC}/preparation-a-lhabilitation-electrique-be-manoeuvre/`],
  ["/h0b0-personnel-executant", `${NON_ELEC}/preparation-a-lhabilitation-electrique-h0-h0v-b0-personnel-executant/`],
  ["/h0b0-charge-de-chantier", `${NON_ELEC}/preparation-a-lhabilitation-electrique-h0-h0v-b0-charge-de-chantier/`],
  ["/b1-b1v-b2-b2v-br-bc-2", `${ELEC}/personnel-electricien/preparation-a-lhabilitation-electrique-bt-et-ou-ht/`],
  ["/moteurs-et-ponts", `${CONDUITE}/moteurs-et-ponts/`],
  ["/equipier-de-premiere-intervention-epi", `${SECOURS}/equipier-de-premiere-intervention-epi/`],
  ["/equipier-de-seconde-intervention-e-s-i", `${SECOURS}/equipier-de-seconde-intervention-esi/`],
  ["/formation-a-la-manipulation-dextincteurs", `${SECOURS}/manipulation-dextincteurs/`],
  [`${CONDUITE}/chariots-de-manutention-automoteurs-a-conducteur-accompagnant-recommandation-r485`, `${CONDUITE}/chariots-de-manutention-automoteurs-a-conducteur-accompagnant/`],
  ["/formations/formation-2", `${ELEC}/`],
  ["/formations/formation-2/personnel-electricien", `${ELEC}/personnel-electricien/`],
  ["/formations/formation-2/personnel-non-electricien", `${NON_ELEC}/`],
  [`${HAUTEUR}/echafaudages`, `${ECHAFAUDAGE}/`],
  [`${HAUTEUR}/echafaudages/echafaudages-roulants-recommandation-r457`, `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-roulants/`],
  [`${HAUTEUR}/echafaudages/echafaudages-fixes-recommandation-r408`, `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-fixes/`],
  [`${HAUTEUR}/echafaudages/echafaudages-fixes-et-roulants-recommandations-r408-et-r457`, `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-fixes-et-roulants/`],
  [`${SECOURS}/incendie`, `${SECOURS}/`],
  [`${RISQUES}/formation-a-lutilisation-dune-tronconneuse`, `${RISQUES}/tronconneuse-thermique-a-chaine/`],
  [`${RISQUES}/formations-aux-risques-routiers-et-eco-conduite`, `${ROUTIERS}/`],
  [`${RISQUES}/formations-aux-risques-routiers-et-eco-conduite/risques-routiers`, `${ROUTIERS}/`],
  // Formations sans équivalent dans le nouveau catalogue : renvoi vers la thématique la plus proche.
  [`${RISQUES}/responsabilite-et-devoir-en-cas-daccident`, `${RISQUES}/`],
  [`${RISQUES}/vigilance-partagee`, `${RISQUES}/`],
  ["/formations/formations-metiers", "/formations/"],
  ["/formations/formations-metiers/agent-de-nettoyage-urbain", "/formations/"],
  ["/formations/formations-metiers/agent-daccueil-en-dechetterie", "/formations/"],
  ["/formations/formations-metiers/equipier-de-collecte", "/formations/"],
];

// Anciennes fiches « produit » WooCommerce (/produit/…).
const produits: [string, string][] = [
  ["engins-de-chantier", `${CONDUITE}/engins-de-chantier/`],
  ["plates-formes-elevatrices-mobiles-de-personnel", `${CONDUITE}/plates-formes-elevatrices-mobiles-de-personnel/`],
  ["moteurs-et-ponts", `${CONDUITE}/moteurs-et-ponts/`],
  ["chariots-de-manutention-automoteurs-a-conducteur-porte", `${CONDUITE}/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489/`],
  ["chariots-de-manutention-automoteurs-a-conducteur-accompagnant", `${CONDUITE}/chariots-de-manutention-automoteurs-a-conducteur-accompagnant/`],
  ["formation-a-la-conduite-en-securite-de-micros-tracteurs", `${CONDUITE}/micro-tracteur/`],
  ["formation-a-la-conduite-en-securite-de-tondeuses-auto-portees", `${CONDUITE}/tondeuse-autoportee/`],
  ["ponts-roulants", `${CONDUITE}/ponts-roulants-recommandation-r484/`],
  ["grues-auxiliaires-de-chargement-de-vehicules", `${CONDUITE}/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490/`],
  ["formations-a-la-conduite-en-securite-de-balayeuses", `${CONDUITE}/formations-a-la-conduite-en-securite-dune-balayeuse/`],
  ["preparation-a-lhabilitation-electrique-pour-personnel-electricien-en-basse-et-ou-haute-tensions-selon-la-norme-nfc18-510-a1", `${ELEC}/personnel-electricien/preparation-a-lhabilitation-electrique-bt-et-ou-ht/`],
  ["preparation-a-lhabilitation-electrique-bs-selon-la-norme-nfc-18-510-a1", `${NON_ELEC}/preparation-a-lhabilitation-electrique-bs/`],
  ["preparation-a-lhabilitation-electrique-be-manoeuvre-selon-la-norme-nfc-18-510-a1", `${NON_ELEC}/preparation-a-lhabilitation-electrique-be-manoeuvre/`],
  ["preparation-a-lhabilitation-electrique-h0-h0v-b0-pour-charge-de-chantier-selon-la-norme-nfc-18-510-a1", `${NON_ELEC}/preparation-a-lhabilitation-electrique-h0-h0v-b0-charge-de-chantier/`],
  ["preparation-a-lhabilitation-electrique-h0-h0v-b0-pour-personnel-executant-selon-la-norme-nfc-18-510-a1", `${NON_ELEC}/preparation-a-lhabilitation-electrique-h0-h0v-b0-personnel-executant/`],
  ["concepteurs", `${AIPR}/concepteurs/`],
  ["encadrants", `${AIPR}/encadrants/`],
  ["operateurs", `${AIPR}/operateurs/`],
  ["port-du-harnais-anti-chute", `${HAUTEUR}/port-du-harnais-anti-chute/`],
  ["utilisation-montage-demontage-et-verification-dechafaudages-roulants", `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-roulants/`],
  ["utilisation-montage-demontage-et-verification-dechafaudages-fixes", `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-fixes/`],
  ["utilisation-montage-demontage-et-verification-dechafaudages-fixes-et-roulants", `${ECHAFAUDAGE}/utilisation-montage-demontage-et-verification-dechafaudages-fixes-et-roulants/`],
  ["sauveteur-secouriste-du-travail-sst", `${SECOURS}/sauveteur-secouriste-du-travail-s-s-t/`],
  ["manipulation-dextincteurs", `${SECOURS}/manipulation-dextincteurs/`],
  ["equipier-de-premiere-intervention-epi", `${SECOURS}/equipier-de-premiere-intervention-epi/`],
  ["equipier-de-seconde-intervention-esi", `${SECOURS}/equipier-de-seconde-intervention-esi/`],
  ["evacuation-guides-et-serre-files", `${SECOURS}/evacuation/`],
  ["manipulation-de-defibrillateurs", `${SECOURS}/manipulation-de-defibrillateur/`],
  ["signalisation-temporaire-de-chantiers", `${RISQUES}/signalisation-temporaire-de-chantier/`],
  ["port-des-e-p-i-equipements-de-protection-individuelle", `${RISQUES}/port-des-e-p-i-equipements-de-protection-individuelle/`],
  ["gestes-et-postures", `${RISQUES}/gestes-et-postures/`],
  ["tronconneuse-thermique-a-chaine", `${RISQUES}/tronconneuse-thermique-a-chaine/`],
  ["membres-du-cse", "/formations/membres-du-cse/"],
  ["risques-routiers-et-sensibilisation-a-leco-conduite", `${ROUTIERS}/`],
];

// Anciennes catégories de produits WooCommerce (/categorie-produit/…).
const categories: [string, string][] = [
  ["autorisations-de-conduite-et-caces", `${CONDUITE}/`],
  ["habilitations-electriques", `${ELEC}/`],
  ["habilitations-electriques/personnel-electricien", `${ELEC}/personnel-electricien/`],
  ["habilitations-electriques/personnel-non-electricien", `${NON_ELEC}/`],
  ["autorisation-dintervention-a-proximite-des-reseaux-aipr", `${AIPR}/`],
  ["travaux-en-hauteur", `${HAUTEUR}/`],
  ["travaux-en-hauteur/echafaudage", `${ECHAFAUDAGE}/`],
  ["secourisme-et-incendie", `${SECOURS}/`],
  ["risques-lies-au-poste-de-travail", `${RISQUES}/`],
  ["membres-du-cse", "/formations/membres-du-cse/"],
  ["formations-aux-risques-routiers-et-eco-conduite-2", `${ROUTIERS}/`],
];

// Anciens articles de blog 2021 (/2021/mm/jj/slug/), regroupés par sujet.
const articles: [string, string][] = [
  ["(?:formation-)?tronconneuse-.*", `${RISQUES}/tronconneuse-thermique-a-chaine/`],
  ["(?:formation-)?travaux-en-hauteur-.*", `${HAUTEUR}/`],
  ["formations?-aipr.*", `${AIPR}/`],
];

export type Redirect = { source: string; destination: string; permanent: true };

export const wordpressRedirects: Redirect[] = [
  ...pages.map(([source, destination]) => ({ source: `${source}/`, destination, permanent: true as const })),
  ...produits.map(([slug, destination]) => ({ source: `/produit/${slug}/`, destination, permanent: true as const })),
  ...categories.map(([slug, destination]) => ({
    source: `/categorie-produit/${slug}/`,
    destination,
    permanent: true as const,
  })),
  ...articles.map(([pattern, destination]) => ({
    source: `/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug(${pattern})/`,
    destination,
    permanent: true as const,
  })),
  // Filets de sécurité : tout ancien produit, catégorie ou article non listé ci-dessus.
  { source: "/produit/:slug*", destination: "/formations/", permanent: true },
  { source: "/categorie-produit/:slug*", destination: "/formations/", permanent: true },
  { source: "/:year(\\d{4})/:month(\\d{2})/:path*", destination: "/formations/", permanent: true },
];
