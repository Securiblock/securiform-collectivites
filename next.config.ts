import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Toutes les URLs internes du site (nav, footer, contenu) sont écrites avec
  // un slash final pour matcher les anciennes URLs WordPress.
  trailingSlash: true,
  // 301 redirects from the old WordPress URLs, to be filled in as pages are
  // migrated (e.g. { source: "/ancienne-url/", destination: "/nouvelle-url/", permanent: true }).
  // async redirects() {
  //   return [];
  // },
};

export default nextConfig;
