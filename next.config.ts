import type { NextConfig } from "next";
import { wordpressRedirects } from "./src/content/redirects";

// En-têtes de sécurité appliqués à toutes les pages.
const securityHeaders = [
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
