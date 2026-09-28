import type { ConsentCategoryId } from "./categories";

export const CONSENT_STORAGE_KEY = "securiform-cookie-consent";
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000; // ~6 mois

export type ConsentState = {
  version: 1;
  timestamp: number;
  categories: Record<ConsentCategoryId, boolean>;
};

function isValidConsentState(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<ConsentState>;
  return (
    candidate.version === 1 &&
    typeof candidate.timestamp === "number" &&
    typeof candidate.categories === "object" &&
    candidate.categories !== null
  );
}

export function isExpired(state: ConsentState): boolean {
  return Date.now() - state.timestamp > CONSENT_MAX_AGE_MS;
}

export function readConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed: unknown = JSON.parse(raw);
    if (!isValidConsentState(parsed)) return null;
    if (isExpired(parsed)) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(categories: Record<ConsentCategoryId, boolean>): ConsentState {
  const state: ConsentState = {
    version: 1,
    timestamp: Date.now(),
    categories,
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Le stockage local peut être indisponible (navigation privée, quota) ;
    // le consentement reste alors valable uniquement pour la session en cours.
  }

  return state;
}
