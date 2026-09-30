import { findFormationNode } from "@/src/content/formations-catalog";
import type { RecyclageFormation, RecyclageSource } from "@/src/lib/recyclage";

// Durées de validité utilisées par le calculateur de recyclage.
// - source "site" : durée déjà annoncée sur la fiche formation du site ;
// - source "reference" : périodicité réglementaire de référence (CACES®, NF C 18-510),
//   À VALIDER PAR SECURIFORM avant mise en ligne.
// Les formations sans périodicité établie (incendie, gestes et postures, échafaudages…)
// sont volontairement absentes.

type RecyclageDefinition = {
  key: string;
  path: string[];
  label?: string;
  months: number;
  source: RecyclageSource;
  note: string;
};

const CONDUITE = "autorisations-de-conduite-et-caces";
const AIPR = "autorisation-dintervention-a-proximite-des-reseaux-a-i-p-r";

const definitions: { group: string; items: RecyclageDefinition[] }[] = [
  {
    group: "Secourisme",
    items: [
      {
        key: "sst",
        path: ["secourisme-et-incendie", "sauveteur-secouriste-du-travail-s-s-t"],
        months: 24,
        source: "site",
        note: "Certificat SST valable 24 mois, maintenu par un recyclage MAC.",
      },
    ],
  },
  {
    group: "AIPR",
    items: [
      { key: "aipr-concepteur", path: [AIPR, "concepteurs"], label: "AIPR Concepteur", months: 60, source: "site", note: "Examen AIPR valable 5 ans." },
      { key: "aipr-encadrant", path: [AIPR, "encadrants"], label: "AIPR Encadrant", months: 60, source: "site", note: "Examen AIPR valable 5 ans." },
      { key: "aipr-operateur", path: [AIPR, "operateurs"], label: "AIPR Opérateur", months: 60, source: "site", note: "Examen AIPR valable 5 ans." },
    ],
  },
  {
    group: "Habilitations électriques",
    items: [
      {
        key: "habilitation-electrique",
        path: ["habilitations-electriques"],
        label: "Habilitation électrique (tous niveaux)",
        months: 36,
        source: "reference",
        note: "Recyclage recommandé tous les 3 ans par la norme NF C 18-510.",
      },
    ],
  },
  {
    group: "Conduite d'engins",
    items: [
      { key: "r482", path: [CONDUITE, "engins-de-chantier"], months: 120, source: "reference", note: "Durée de référence du CACES® R482 : 10 ans." },
      { key: "r486", path: [CONDUITE, "plates-formes-elevatrices-mobiles-de-personnel"], months: 60, source: "reference", note: "Durée de référence du CACES® R486 : 5 ans." },
      { key: "r489", path: [CONDUITE, "chariots-de-manutention-automoteurs-a-conducteur-porte-recommandation-r489"], months: 60, source: "reference", note: "Durée de référence du CACES® R489 : 5 ans." },
      { key: "r485", path: [CONDUITE, "chariots-de-manutention-automoteurs-a-conducteur-accompagnant"], months: 60, source: "reference", note: "Durée de référence du CACES® R485 : 5 ans." },
      { key: "r484", path: [CONDUITE, "ponts-roulants-recommandation-r484"], months: 60, source: "reference", note: "Durée de référence du CACES® R484 : 5 ans." },
      { key: "r490", path: [CONDUITE, "grues-auxiliaires-de-chargement-de-vehicules-recommandation-r490"], months: 60, source: "reference", note: "Durée de référence du CACES® R490 : 5 ans." },
    ],
  },
];

export const recyclageFormations: RecyclageFormation[] = definitions.flatMap(({ group, items }) =>
  items.map((item) => {
    const found = findFormationNode(item.path);
    if (!found) {
      throw new Error(`Formation introuvable dans le catalogue : ${item.path.join("/")}`);
    }
    return {
      key: item.key,
      label: item.label ?? found.node.title,
      group,
      href: found.trail[found.trail.length - 1].href,
      months: item.months,
      source: item.source,
      note: item.note,
    };
  }),
);

export function findRecyclageFormation(key: string): RecyclageFormation | undefined {
  return recyclageFormations.find((formation) => formation.key === key);
}
