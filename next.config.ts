import type { NextConfig } from "next";
import { wordpressRedirects } from "./src/content/redirects";

const isDev = process.env.NODE_ENV === "development";

// Content-Security-Policy. Le site ne charge rien depuis l'extérieur (polices next/font
// et images servies par le site, aucun outil d'audience, aucune carte ni vidéo), sauf le
// captcha Turnstile des formulaires : son script et son iframe viennent de challenges.cloudflare.com.
// 'unsafe-inline' : scripts d'hydratation de Next et JSON-LD. 'unsafe-eval' : uniquement en
// développement (React s'en sert pour le débogage, jamais en production).
// Tout nouveau service externe (audience, carte, vidéo…) devra être ajouté ici.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self';
  connect-src 'self';
  frame-src https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  upgrade-insecure-requests;
`;

// En-têtes de sécurité appliqués à toutes les pages.
const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader.replace(/\s{2,}/g, " ").trim() },
  // HTTPS obligatoire pendant 1 an (sans includeSubDomains : les sous-domaines e-mail restent libres).
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  // Interdit l'affichage du site dans une iframe d'un autre domaine (clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
];

const nextConfig: NextConfig = {
  // Toutes les URLs internes du site (nav, footer, contenu) sont écrites avec
  // un slash final pour matcher les anciennes URLs WordPress.
  trailingSlash: true,
  // Redirections 301 des anciennes URLs WordPress (voir src/content/redirects.ts).
  async redirects() {
    return wordpressRedirects;
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
