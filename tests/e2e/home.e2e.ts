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
      page.getByText(
        "I think good consulting is about more than technical skill.",
      ),
    ).toBeVisible();
  });

  test("renders good fit section without changing project card count", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByText("Where I'm useful")).toBeVisible();
    await expect(page.getByText("Senior fullstack capacity")).toBeVisible();
    await expect(
      page.getByText("Existing products that need momentum"),
    ).toBeVisible();
    await expect(
      page.getByText("New products and AI ideas"),
    ).toBeVisible();
    await expect(
      page.getByText("A developer who thinks beyond the ticket"),
    ).toBeVisible();
    await expect(
      page.getByText("Probably not the best fit for throwaway campaign sites"),
    ).toBeVisible();
    await expect(page.locator("article")).toHaveCount(3);
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
    await expect(
      page.getByRole("link", { name: "UpHouse Consulting" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Avaa englanninkielinen versio" }),
    ).toBeVisible();

    await page.keyboard.press("Tab");
    await expect(page.getByText("Siirry sisältöön")).toBeVisible();
  });

  test("locale switch link has correct aria-label on Finnish home", async ({
    page,
  }) => {
    await page.goto("/fi/");
    const switchLink = page.getByRole("link", {
      name: "Avaa englanninkielinen versio",
    });
    await expect(switchLink).toBeVisible();
    await expect(switchLink).toHaveAttribute(
      "aria-label",
      "Avaa englanninkielinen versio",
    );
  });

  test("locale switch link has correct aria-label on English home", async ({
    page,
  }) => {
    await page.goto("/");
    const switchLink = page.getByRole("link", {
      name: "Open the Finnish version",
    });
    await expect(switchLink).toBeVisible();
    await expect(switchLink).toHaveAttribute(
      "aria-label",
      "Open the Finnish version",
    );
  });

  test("renders Finnish home copy", async ({ page }) => {
    await page.goto("/fi/");

    await expect(page.locator("#main-content h1")).toHaveText(
      "Tuukka Ylöstalo",
    );
    await expect(
      page.getByText("Ohjelmistokehittäjä, UpHouse Consulting"),
    ).toBeVisible();
    await expect(
      page.getByText("Vähemmän turhaa mutkikkuutta, enemmän toimivaa softaa."),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Ota yhteyttä" }).first(),
    ).toBeVisible();
    await expect(
      page.getByText("Millaisissa projekteissa olen parhaimmillani"),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Senioritason fullstack-kehittäjä",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Uudet tuotteet ja tekoälyideat" }),
    ).toBeVisible();
  });

  test("keeps Finnish project card links inside /fi/", async ({ page }) => {
    await page.goto("/fi/");

    const firstCard = page.locator("article").first().locator("a").first();
    await expect(firstCard).toHaveAttribute("href", /^\/fi\/projects\//);
  });

  test("Finnish project cards show Finnish content", async ({ page }) => {
    await page.goto("/fi/");

    // The first project (order:1) keeps its Finnish title with "verkkokauppa"
    const firstCard = page.locator("article").first();
    await expect(firstCard).toContainText("verkkokauppa");
  });

  test("locale switch updates header links after client-side language change", async ({
    page,
  }) => {
    await page.goto("/");

    const homeLink = page.getByRole("link", { name: "UpHouse Consulting" });
    const switchLink = page.locator("header a").nth(1);

    await expect(homeLink).toHaveAttribute("href", "/");
    await expect(switchLink).toHaveText("Suomeksi");

    await switchLink.click();

    await expect(page).toHaveURL("/fi/");
    await expect(homeLink).toHaveAttribute("href", "/fi/");
    await expect(switchLink).toHaveText("In English");
    await expect(switchLink).toHaveAttribute("href", "/");

    await switchLink.click();

    await expect(page).toHaveURL("/");
    await expect(homeLink).toHaveAttribute("href", "/");
    await expect(switchLink).toHaveText("Suomeksi");
    await expect(switchLink).toHaveAttribute("href", "/fi/");
  });
});
