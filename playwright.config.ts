import { defineConfig, devices } from "@playwright/test";

// Tests de bout en bout lancés contre un site déjà en ligne (production par défaut).
// Pour tester en local : SITE_URL=http://localhost:3000 npm run test:e2e
export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: process.env.SITE_URL || "https://www.securiform-collectivites.fr",
    locale: "fr-FR",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
