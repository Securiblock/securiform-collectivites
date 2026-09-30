import { addMonths, todayInFrance } from "@/src/lib/dates";

// Calcul d'échéance de recyclage, partagé entre le navigateur (calculateur)
// et le serveur (inscription au rappel) : le serveur ne fait jamais confiance au calcul client.

export type RecyclageSource = "site" | "reference";

export type RecyclageFormation = {
  key: string;
  label: string;
  group: string;
  href: string;
  months: number;
  source: RecyclageSource;
  note: string;
};

// Le rappel part 3 mois avant l'échéance : le temps d'organiser une session.
export const RAPPEL_AVANCE_MOIS = 3;

export type RecyclageStatut = "valide" | "bientot" | "expire";

export type RecyclageCalcul = {
  echeance: string;
  dateRappel: string;
  statut: RecyclageStatut;
};

export function calculerRecyclage(
  formation: Pick<RecyclageFormation, "months">,
  dateFormation: string,
  today = todayInFrance(),
): RecyclageCalcul {
  const echeance = addMonths(dateFormation, formation.months);
  const rappelTheorique = addMonths(echeance, -RAPPEL_AVANCE_MOIS);
  const dateRappel = rappelTheorique < today ? today : rappelTheorique;

  let statut: RecyclageStatut = "valide";
  if (echeance < today) statut = "expire";
  else if (rappelTheorique <= today) statut = "bientot";

  return { echeance, dateRappel, statut };
}
