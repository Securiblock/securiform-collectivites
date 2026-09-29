import { defineConfig, devices } from "@playwright/test";

// Tests de bout en bout lancés contre un site déjà démarré :
// - sur GitHub Actions : le site en ligne (variable SITE_URL, sinon le domaine de production) ;
// - en local : http://localhost:3000 (lancer `npm run dev` avant `npm run test:e2e`).
const productionUrl = "https://www.securiform-collectivites.fr";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: process.env.SITE_URL || (process.env.CI ? productionUrl : "http://localhost:3000"),
    locale: "fr-FR",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
