import { expect, test, type Page } from "@playwright/test";

// Évite l'affichage du bandeau cookies pendant le test.
async function acceptNecessaryCookies(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.setItem(
      "securiform-cookie-consent",
      JSON.stringify({ version: 1, timestamp: Date.now(), categories: { necessaire: true, audience: false } }),
    );
  });
}

test.describe("Formulaire de contact", () => {
  test.beforeEach(async ({ page }) => {
    await acceptNecessaryCookies(page);
  });

  test("bloque l'envoi si les champs obligatoires sont vides", async ({ page }) => {
    await page.goto("/contact/");
    await page.getByRole("button", { name: "Envoyer le message" }).click();

    // La validation du navigateur empêche l'envoi : aucun message de retour n'apparaît.
    await expect(page.getByLabel(/^Nom/)).toBeFocused();
    await expect(page).toHaveURL(/\/contact\/$/);
  });

  test("préremplit la formation depuis une fiche formation", async ({ page }) => {
    const formation = await page.goto("/contact/").then(() =>
      page.locator("#formation option:not([value=''])").first().getAttribute("value"),
    );
    expect(formation).toBeTruthy();

    await page.goto(`/contact/?formation=${encodeURIComponent(formation!)}#formulaire`);
    await expect(page.locator("#formation")).toHaveValue(formation!);
  });

  test("envoie un message et affiche la confirmation", async ({ page }) => {
    const date = new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

    await page.goto("/contact/");
    await page.getByLabel(/^Nom/).fill("Test automatique hebdomadaire");
    await page.getByLabel(/^Email/).fill(process.env.CONTACT_TEST_EMAIL || "test-automatique@example.com");
    await page.getByLabel(/^Message/).fill(
      `[TEST AUTOMATIQUE] Vérification hebdomadaire du formulaire de contact (${date}). Merci de ne pas répondre.`,
    );
    // L'anti-spam ignore silencieusement les envois faits moins de 3 s après l'affichage.
    await page.waitForTimeout(4_000);
    // Captcha Turnstile : le jeton doit être arrivé dans le champ caché avant l'envoi.
    // (Pas de widget si le site testé n'a pas de clés Turnstile : rien à attendre.)
    if ((await page.locator("#formulaire .turnstile-widget").count()) > 0) {
      await expect(page.locator('#formulaire input[name="cf-turnstile-response"]')).toHaveValue(/.+/, {
        timeout: 20_000,
      });
    }
    await page.getByRole("button", { name: "Envoyer le message" }).click();

    // Un envoi réussi redirige vers la page de confirmation.
    await expect(page).toHaveURL(/\/contact\/merci\/$/, { timeout: 30_000 });
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(/demande est bien arrivée/);
  });
});
