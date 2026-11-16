"use client";

import { useEffect, useRef } from "react";

// Captcha Cloudflare Turnstile. Invisible pour la grande majorité des
// visiteurs (appearance "interaction-only") : une case à cocher n'apparaît
// que si Cloudflare a un doute. Le widget ajoute au formulaire parent un
// champ caché `cf-turnstile-response`, vérifié côté serveur (src/lib/turnstile.ts).
//
// Rendu explicite (pas le mode automatique `class="cf-turnstile"`) : avec la
// navigation côté client de Next, le script n'est chargé qu'une fois et ne
// rescanne pas la page, donc chaque formulaire monte son propre widget.

type TurnstileApi = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile absent")));
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error("Chargement de Turnstile impossible"));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

// Uniquement `aria-busy` : l'attribut `disabled` du bouton appartient à React
// (useFormStatus dans les SubmitButton), on n'y touche pas pour ne pas se
// battre avec lui. L'état visuel et le blocage des clics sont en CSS (app/globals.css).
const setBusy = (busy: boolean) => (button: HTMLButtonElement) => {
  if (busy) button.setAttribute("aria-busy", "true");
  else button.removeAttribute("aria-busy");
};

// `resetKey` : à changer après chaque envoi qui ne quitte pas la page (un
// jeton Turnstile ne sert qu'une fois), ex. l'état renvoyé par useActionState.
export function Turnstile({ resetKey }: { resetKey?: unknown }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;
    let cancelled = false;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return;
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: SITE_KEY,
          appearance: "interaction-only",
          language: "fr",
          "refresh-expired": "auto",
          // La case à cocher va s'afficher : on lui réserve sa marge (app/globals.css).
          "before-interactive-callback": () => containerRef.current?.setAttribute("data-interactive", ""),
        });
      })
      .catch((err) => console.warn(err));

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, []);

  // Envoi en cours : partagé entre l'écouteur d'envoi et la réinitialisation.
  const submittingRef = useRef(false);

  useEffect(() => {
    if (resetKey !== undefined && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
    // Nouvelle tentative possible (ex. erreur affichée sans quitter la page).
    submittingRef.current = false;
    const form = containerRef.current?.closest("form");
    form?.querySelectorAll<HTMLButtonElement>('button[type="submit"]').forEach(setBusy(false));
  }, [resetKey]);

  // Anti double envoi : un jeton Turnstile ne sert qu'une fois. Un 2e envoi
  // repartirait avec le même jeton, refusé par Cloudflare, et une erreur
  // s'afficherait alors que le 1er a réussi (double clic). Le 2e événement
  // « submit » est annulé dès sa source : React ne lance pas l'action d'un
  // envoi déjà annulé (preventDefault). Le bouton grisé n'est qu'un retour
  // visuel, il arrive trop tard pour un double clic. Tout se débloque au bout
  // de 15 s si la page n'a pas changé (réseau en panne), pour permettre de réessayer.
  useEffect(() => {
    if (!SITE_KEY) return;
    const form = containerRef.current?.closest("form");
    if (!form) return;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const onSubmit = (event: SubmitEvent) => {
      if (submittingRef.current) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
      submittingRef.current = true;
      const buttons = form.querySelectorAll<HTMLButtonElement>('button[type="submit"]');
      buttons.forEach(setBusy(true));
      clearTimeout(timer);
      timer = setTimeout(() => {
        submittingRef.current = false;
        buttons.forEach(setBusy(false));
      }, 15_000);
    };

    form.addEventListener("submit", onSubmit);
    return () => {
      form.removeEventListener("submit", onSubmit);
      clearTimeout(timer);
    };
  }, []);

  // Pas de clé configurée = pas de widget (le serveur ne vérifie pas non
  // plus dans ce cas, voir src/lib/turnstile.ts).
  if (!SITE_KEY) return null;
  return <div ref={containerRef} className="turnstile-widget" />;
}
