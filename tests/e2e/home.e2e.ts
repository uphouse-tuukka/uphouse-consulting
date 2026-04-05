import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders hero with company line, tagline, and CTA", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#main-content h1")).toHaveText(
      "Tuukka Ylöstalo",
    );
    await expect(
      page.getByText("Software developer behind UpHouse Consulting"),
    ).toBeVisible();
    await expect(
      page.getByText("Less complexity, more software."),
    ).toBeVisible();

    const cta = page.getByRole("link", { name: "Contact me" }).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain("mailto:");
    expect(href).toContain("subject=");
  });

  test("renders bio section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText("I think good consulting is about more than technical skill."),
    ).toBeVisible();
  });

  test("renders 3 project cards", async ({ page }) => {
    await page.goto("/");
    const cards = page.locator("article");
    await expect(cards).toHaveCount(3);
  });

  test("project card links to case study", async ({ page }) => {
    await page.goto("/");
    const firstCard = page.locator("article").first();
    const link = firstCard.locator("a").first();
    const href = await link.getAttribute("href");
    expect(href).toMatch(/^\/projects\//);
  });

  test("social links are present", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("link", { name: /GitHub/i }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /LinkedIn/i }).first(),
    ).toBeVisible();
  });

  test("skip link appears on Tab and targets main content", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByText("Skip to content");
    await expect(skipLink).toBeVisible();
    const href = await skipLink.getAttribute("href");
    expect(href).toBe("#main-content");
  });

  test("renders localized shared chrome on Finnish home", async ({ page }) => {
    await page.goto("/fi/");

    await expect(page.locator("html")).toHaveAttribute("lang", "fi");
    await expect(page.getByRole("link", { name: "UpHouse Consulting" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Avaa englanninkielinen versio" })).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(page.getByText("Siirry sisältöön")).toBeVisible();
  });

  test("locale switch link has correct aria-label on Finnish home", async ({ page }) => {
    await page.goto("/fi/");
    const switchLink = page.getByRole("link", { name: "Avaa englanninkielinen versio" });
    await expect(switchLink).toBeVisible();
    await expect(switchLink).toHaveAttribute("aria-label", "Avaa englanninkielinen versio");
  });

  test("locale switch link has correct aria-label on English home", async ({ page }) => {
    await page.goto("/");
    const switchLink = page.getByRole("link", { name: "Open the Finnish version" });
    await expect(switchLink).toBeVisible();
    await expect(switchLink).toHaveAttribute("aria-label", "Open the Finnish version");
  });

  test("renders Finnish home copy", async ({ page }) => {
    await page.goto("/fi/");

    await expect(page.locator("#main-content h1")).toHaveText("Tuukka Ylöstalo");
    await expect(page.getByText("Ohjelmistokehittäjä UpHouse Consultingin takana")).toBeVisible();
    await expect(page.getByText("Vähemmän monimutkaisuutta, enemmän ohjelmistoa.")).toBeVisible();
    await expect(page.getByRole("link", { name: "Ota yhteyttä" }).first()).toBeVisible();
  });

  test("keeps Finnish project card links inside /fi/", async ({ page }) => {
    await page.goto("/fi/");

    const firstCard = page.locator("article").first().locator("a").first();
    await expect(firstCard).toHaveAttribute("href", /^\/fi\/projects\//);
  });
});
