import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 redirects from the old WordPress URLs, to be filled in as pages are
  // migrated (e.g. { source: "/ancienne-url/", destination: "/nouvelle-url/", permanent: true }).
  // async redirects() {
  //   return [];
  // },
};

export default nextConfig;
