// Mise en avant des formations pour les communes : badge « incontournable » et
// agents concernés, affichés sur les pages formations.

const F = "/formations";

// Pages (et leurs sous-pages) mises en avant comme incontournables pour les communes.
// Mêmes formations que la section « Les incontournables des communes » de l'accueil.
const INCONTOURNABLES = [
  `${F}/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/`,
  `${F}/habilitations-electriques/personnel-non-electricien/`,
  `${F}/secourisme-et-incendie/manipulation-de-defibrillateur/`,
  `${F}/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/`,
  `${F}/autorisations-de-conduite-et-caces/tondeuse-autoportee/`,
  `${F}/autorisations-de-conduite-et-caces/micro-tracteur/`,
  `${F}/risques-lies-au-poste-de-travail/tronconneuse-thermique-a-chaine/`,
  `${F}/risques-lies-au-poste-de-travail/gestes-et-postures/`,
];

export const INCONTOURNABLE_LABEL = "Incontournable pour les communes";

export function isIncontournable(href: string): boolean {
  return INCONTOURNABLES.some((prefix) => href.startsWith(prefix));
}

// Agents concernés, du plus précis au plus général : la première entrée dont le chemin
// est un préfixe de la page l'emporte.
const AGENTS: [string, string][] = [
  [`${F}/autorisations-de-conduite-et-caces/engins-de-chantier/`, "Agents des services techniques et de la voirie"],
  [`${F}/autorisations-de-conduite-et-caces/plates-formes-elevatrices-mobiles-de-personnel/`, "Agents de l'élagage, de l'éclairage public et de la maintenance des bâtiments"],
  [`${F}/autorisations-de-conduite-et-caces/moteurs-et-ponts/`, "Agents des ateliers et des services techniques"],
  [`${F}/autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489/`, "Agents des ateliers, magasins et centres techniques"],
  [`${F}/autorisations-de-conduite-et-caces/chariots-de-manutention-automoteurs-a-conducteur-accompagnant/`, "Agents des ateliers et magasins"],
  [`${F}/autorisations-de-conduite-et-caces/micro-tracteur/`, "Agents des espaces verts"],
  [`${F}/autorisations-de-conduite-et-caces/tondeuse-autoportee/`, "Agents des espaces verts et des terrains de sport"],
  [`${F}/autorisations-de-conduite-et-caces/ponts-roulants-recommandation-r484/`, "Agents des ateliers municipaux"],
  [`${F}/autorisations-de-conduite-et-caces/grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490/`, "Agents de la voirie et des services techniques"],
  [`${F}/autorisations-de-conduite-et-caces/formations-a-la-conduite-en-securite-dune-balayeuse/`, "Agents de la propreté urbaine"],
  [`${F}/autorisations-de-conduite-et-caces/`, "Conducteurs d'engins des services techniques, de la voirie et des espaces verts"],
  [`${F}/habilitations-electriques/personnel-electricien/`, "Électriciens des services techniques et de la régie bâtiments"],
  [`${F}/habilitations-electriques/personnel-non-electricien/`, "Agents d'entretien des écoles et des bâtiments, agents techniques polyvalents, encadrants de chantier"],
  [`${F}/habilitations-electriques/`, "Électriciens et agents intervenant dans les bâtiments communaux"],
  [`${F}/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/concepteurs/`, "Agents des services voirie, urbanisme et bureaux d'études qui préparent les projets"],
  [`${F}/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/encadrants/`, "Chefs d'équipe et responsables de travaux"],
  [`${F}/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/operateurs/`, "Agents de la voirie, des réseaux et de l'éclairage public"],
  [`${F}/autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r/`, "Agents qui conçoivent, encadrent ou réalisent des travaux à proximité des réseaux"],
  [`${F}/travaux-en-hauteur/`, "Agents des bâtiments, de l'élagage et de l'éclairage public"],
  [`${F}/secourisme-et-incendie/sauveteur-secouriste-du-travail-s-s-t/`, "Tous les agents : ATSEM, restauration scolaire, accueil, services techniques"],
  [`${F}/secourisme-et-incendie/manipulation-de-defibrillateur/`, "Agents des bâtiments recevant du public : mairie, écoles, salles, équipements sportifs"],
  [`${F}/secourisme-et-incendie/manipulation-dextincteurs/`, "Tous les agents, en priorité ceux des bâtiments recevant du public"],
  [`${F}/secourisme-et-incendie/equipier-de-premiere-intervention-epi/`, "Agents désignés pour intervenir dans chaque bâtiment"],
  [`${F}/secourisme-et-incendie/equipier-de-seconde-intervention-esi/`, "Agents désignés pour intervenir en renfort des équipiers de première intervention"],
  [`${F}/secourisme-et-incendie/evacuation/`, "Agents désignés guides et serre-files dans la mairie, les écoles et les équipements"],
  [`${F}/secourisme-et-incendie/`, "Agents des bâtiments recevant du public et des services techniques"],
  [`${F}/risques-lies-au-poste-de-travail/signalisation-temporaire-de-chantier/`, "Agents de la voirie et des réseaux"],
  [`${F}/risques-lies-au-poste-de-travail/port-des-e-p-i-equipements-de-protection-individuelle/`, "Agents techniques de tous les services"],
  [`${F}/risques-lies-au-poste-de-travail/gestes-et-postures/`, "Agents techniques, d'entretien, de restauration scolaire et ATSEM"],
  [`${F}/risques-lies-au-poste-de-travail/tronconneuse-thermique-a-chaine/`, "Agents des espaces verts"],
  [`${F}/risques-lies-au-poste-de-travail/`, "Agents techniques de tous les services"],
  [`${F}/membres-du-cse/`, "Représentants du personnel en santé, sécurité et conditions de travail"],
  [`${F}/formations-aux-risques-routiers-et-eco-conduite/`, "Agents qui conduisent un véhicule de service"],
];

export function agentsConcernes(href: string): string | undefined {
  return AGENTS.find(([prefix]) => href.startsWith(prefix))?.[1];
}
