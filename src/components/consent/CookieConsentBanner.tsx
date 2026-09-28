"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { CONSENT_CATEGORIES, type ConsentCategoryId } from "@/src/lib/consent/categories";
import { useConsentContext } from "@/src/lib/consent/ConsentContext";
import styles from "./CookieConsentBanner.module.css";

function initialDraft(saved: Record<ConsentCategoryId, boolean> | undefined): Record<ConsentCategoryId, boolean> {
  const entries = CONSENT_CATEGORIES.map(
    (category) => [category.id, category.required || Boolean(saved?.[category.id])] as const,
  );
  return Object.fromEntries(entries) as Record<ConsentCategoryId, boolean>;
}

export function CookieConsentBanner() {
  const { consent, view, acceptAll, refuseAll, savePreferences, openPreferences, dismiss } = useConsentContext();
  const [draft, setDraft] = useState<Record<ConsentCategoryId, boolean>>(() => initialDraft(consent?.categories));
  const containerRef = useRef<HTMLDivElement>(null);
  const headingId = useId();

  useEffect(() => {
    if (view !== "panel") return;
    const frame = requestAnimationFrame(() => setDraft(initialDraft(consent?.categories)));
    return () => cancelAnimationFrame(frame);
  }, [view, consent]);

  useEffect(() => {
    if (view === "hidden") return;
    containerRef.current?.focus();
  }, [view]);

  useEffect(() => {
    if (view === "hidden") return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [view, dismiss]);

  if (view === "hidden") return null;

  return (
    <div
      ref={containerRef}
      className={styles.wrapper}
      role="dialog"
      aria-modal="false"
      aria-labelledby={headingId}
      tabIndex={-1}
    >
      <div className={styles.inner}>
        <h2 id={headingId} className={styles.title}>
          Gestion des cookies
        </h2>

        {view === "banner" ? (
          <>
            <p className={styles.description}>
              Nous utilisons uniquement des cookies nécessaires au fonctionnement du site. Vous pouvez accepter ou
              refuser les cookies de mesure d&apos;audience, ou personnaliser votre choix.{" "}
              <Link href="/politique-cookies/">En savoir plus</Link>.
            </p>
            <div className={styles.actions}>
              <button type="button" className="btn btn-ghost" onClick={refuseAll}>
                Tout refuser
              </button>
              <button type="button" className="btn btn-primary" onClick={acceptAll}>
                Tout accepter
              </button>
              <button type="button" className={styles.customize} onClick={openPreferences}>
                Personnaliser
              </button>
            </div>
          </>
        ) : (
          <>
            <p className={styles.description}>
              Choisissez, catégorie par catégorie, les cookies que vous acceptez. Retrouvez le détail sur notre{" "}
              <Link href="/politique-cookies/">page cookies</Link>.
            </p>

            <ul className={styles.categoryList}>
              {CONSENT_CATEGORIES.map((category) => (
                <li key={category.id} className={styles.categoryRow}>
                  <div className={styles.categoryText}>
                    <span className={styles.categoryLabel}>{category.label}</span>
                    <p className={styles.categoryDescription}>{category.description}</p>
                  </div>
                  {category.required ? (
                    <span className={styles.alwaysOn}>Toujours actif</span>
                  ) : (
                    <label className={styles.toggle}>
                      <input
                        type="checkbox"
                        checked={draft[category.id]}
                        onChange={(event) =>
                          setDraft((prev) => ({ ...prev, [category.id]: event.target.checked }))
                        }
                      />
                      <span>{draft[category.id] ? "Activé" : "Désactivé"}</span>
                    </label>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <button type="button" className="btn btn-ghost" onClick={refuseAll}>
                Tout refuser
              </button>
              <button type="button" className="btn btn-ghost" onClick={acceptAll}>
                Tout accepter
              </button>
              <button type="button" className="btn btn-primary" onClick={() => savePreferences(draft)}>
                Enregistrer mes choix
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
