"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CONSENT_CATEGORIES, type ConsentCategoryId } from "./categories";
import { readConsent, writeConsent, type ConsentState } from "./consent-storage";

type ConsentView = "hidden" | "banner" | "panel";

type ConsentContextValue = {
  consent: ConsentState | null;
  view: ConsentView;
  acceptAll: () => void;
  refuseAll: () => void;
  savePreferences: (categories: Record<ConsentCategoryId, boolean>) => void;
  openPreferences: () => void;
  dismiss: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function defaultCategories(overrideAll?: boolean): Record<ConsentCategoryId, boolean> {
  const entries = CONSENT_CATEGORIES.map((category) => [
    category.id,
    category.required || Boolean(overrideAll),
  ] as const);
  return Object.fromEntries(entries) as Record<ConsentCategoryId, boolean>;
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [view, setView] = useState<ConsentView>("hidden");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = readConsent();
      setConsent(stored);
      setView(stored ? "hidden" : "banner");
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const acceptAll = useCallback(() => {
    const next = writeConsent(defaultCategories(true));
    setConsent(next);
    setView("hidden");
  }, []);

  const refuseAll = useCallback(() => {
    const next = writeConsent(defaultCategories(false));
    setConsent(next);
    setView("hidden");
  }, []);

  const savePreferences = useCallback((categories: Record<ConsentCategoryId, boolean>) => {
    const withRequired = { ...categories };
    CONSENT_CATEGORIES.forEach((category) => {
      if (category.required) withRequired[category.id] = true;
    });
    const next = writeConsent(withRequired);
    setConsent(next);
    setView("hidden");
  }, []);

  const openPreferences = useCallback(() => setView("panel"), []);
  const dismiss = useCallback(() => setView("hidden"), []);

  const value = useMemo<ConsentContextValue>(
    () => ({ consent, view, acceptAll, refuseAll, savePreferences, openPreferences, dismiss }),
    [consent, view, acceptAll, refuseAll, savePreferences, openPreferences, dismiss],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsentContext(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsentContext doit être utilisé à l'intérieur d'un CookieConsentProvider");
  }
  return context;
}

export function useConsent(categoryId: ConsentCategoryId): boolean {
  const { consent } = useConsentContext();
  return consent?.categories[categoryId] ?? false;
}
