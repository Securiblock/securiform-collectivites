// Arbre de décision du questionnaire « Quelle formation me faut-il ? ».
// Étapes : domaine → précision (si plusieurs formations) → première formation / recyclage → effectif → résultat.
// Les domaines et formations viennent du catalogue du site (voir app/outils/quelle-formation/page.tsx).

export type QuestionnaireFormation = {
  title: string;
  href: string;
  group?: string;
  description: string;
  duration?: string;
  groupSize?: string;
  validation: string;
  recyclage?: { months: number; href: string };
};

export type QuestionnaireDomaine = {
  id: string;
  title: string;
  formations: QuestionnaireFormation[];
};

export type Choix = { id: string; label: string; hint?: string };

export const TYPES: Choix[] = [
  { id: "initiale", label: "Première formation", hint: "Les agents n'ont jamais suivi cette formation." },
  { id: "recyclage", label: "Recyclage", hint: "Renouveler ou maintenir une formation déjà suivie." },
];

export const EFFECTIFS: (Choix & { max: number })[] = [
  { id: "1-3", label: "1 à 3 agents", max: 3 },
  { id: "4-8", label: "4 à 8 agents", max: 8 },
  { id: "9-15", label: "9 à 15 agents", max: 15 },
  { id: "16+", label: "Plus de 15 agents", max: 16 },
];

export type Reponses = {
  domaine?: string;
  formation?: string;
  type?: string;
  effectif?: string;
};

export type Etape = "domaine" | "formation" | "type" | "effectif" | "resultat";

export function etapeCourante(reponses: Reponses, domaines: QuestionnaireDomaine[]): Etape {
  if (!reponses.domaine) return "domaine";
  const domaine = domaines.find((d) => d.id === reponses.domaine);
  if (domaine && domaine.formations.length > 1 && !reponses.formation) return "formation";
  if (!reponses.type) return "type";
  if (!reponses.effectif) return "effectif";
  return "resultat";
}

export function formationChoisie(reponses: Reponses, domaines: QuestionnaireDomaine[]): QuestionnaireFormation | undefined {
  const domaine = domaines.find((d) => d.id === reponses.domaine);
  if (!domaine) return undefined;
  if (domaine.formations.length === 1) return domaine.formations[0];
  return domaine.formations.find((f) => f.href === reponses.formation);
}

// « 6 personnes maximum » → 6 ; « 6 à 8 personnes » → 8.
export function tailleMaxGroupe(groupSize?: string): number | null {
  if (!groupSize) return null;
  const nombres = groupSize.match(/\d+/g)?.map(Number) ?? [];
  return nombres.length ? Math.max(...nombres) : null;
}

export function conseilLieu(effectifId: string, groupSize?: string): string {
  const effectif = EFFECTIFS.find((e) => e.id === effectifId);
  const max = tailleMaxGroupe(groupSize);
  if (!effectif) return "";

  if (max && effectif.max > max) {
    const sessions = Math.ceil(effectif.max / max);
    const volume = effectif.id === "16+" ? `au moins ${sessions}` : `environ ${sessions}`;
    return `Cette formation accueille ${max} personnes maximum par session : prévoyez ${volume} sessions. Nos formateurs interviennent directement dans vos services : les sessions peuvent être échelonnées pour ne pas désorganiser vos équipes.`;
  }

  if (effectif.id === "1-3") {
    return "Pour un petit effectif, pensez à regrouper des agents de plusieurs services, ou d'une collectivité voisine, pour compléter le groupe et optimiser le coût par agent. Nous étudions avec vous l'organisation la plus adaptée.";
  }

  return `Une seule session suffit${max ? ` (jusqu'à ${max} personnes par groupe)` : ""} : nos formateurs interviennent directement dans vos services, sans déplacement de vos agents.`;
}

export function messageDevis(formation: QuestionnaireFormation, reponses: Reponses): string {
  const type = reponses.type === "recyclage" ? "un recyclage" : "une première formation";
  const effectif = EFFECTIFS.find((e) => e.id === reponses.effectif)?.label ?? "";
  return `Bonjour, nous souhaitons organiser ${type} « ${formation.title} » pour ${effectif.toLowerCase()}. Pouvez-vous nous faire parvenir un devis ? Merci.`;
}
