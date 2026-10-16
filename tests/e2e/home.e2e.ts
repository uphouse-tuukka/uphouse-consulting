import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders hero with company line, tagline, and CTA", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#main-content h1")).toHaveText(
      "Tuukka Ylöstalo",
    );
    await expect(
      page.getByText("Software engineering & AI development workflows"),
    ).toBeVisible();
    await expect(
      page.getByText("I build software and the AI workflows that help teams deliver it."),
    ).toBeVisible();

    const cta = page.getByRole("link", { name: "Contact me" }).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute("href");
    expect(href).toContain("mailto:");
    expect(href).toContain("contact@uphouseconsulting.fi");
    expect(href).toContain("subject=");
  });

  test("renders bio section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByText(
        "I'm Tuukka, a software engineer and consultant based in Helsinki.",
      ),
    ).toBeVisible();
  });

  test("renders product engineering and AI workflow fit areas", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByText("Where I'm useful")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Full-stack product engineering" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "AI development workflows", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "AI-powered products" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Early products with technical ownership" }),
    ).toBeVisible();
    await expect(
      page.getByText("Tell me what you need to build or where your development process gets stuck."),
    ).toBeVisible();
    await expect(page.locator("article")).toHaveCount(5);
  });

  test("leads with the ticketing portal and keeps the AI tutor last", async ({ page }) => {
    await page.goto("/");
    const cards = page.locator("article");
    await expect(cards).toHaveCount(5);
    await expect(cards.nth(0)).toContainText("Public Transport Ticketing Portal");
    await expect(cards.nth(1)).toContainText("Salt & Scroll");
    await expect(cards.nth(2)).toContainText("Wayrunner");
    await expect(cards.nth(4)).toContainText("Japanese AI Tutor");
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
      page.getByText("Ohjelmistokehitys ja tekoäly"),
    ).toBeVisible();
    await expect(
      page.getByText("Rakennan ohjelmistoja ja tuon tekoälyn osaksi tiimien kehitystyötä."),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Ota yhteyttä" }).first(),
    ).toBeVisible();
    await expect(
      page.getByText("Missä voin auttaa"),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Fullstack-kehitys",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Kehitystyön automatisointi tekoälyllä" }),
    ).toBeVisible();
  });

  test("keeps Finnish project card links inside /fi/", async ({ page }) => {
    await page.goto("/fi/");

    const firstCard = page.locator("article").first().locator("a").first();
    await expect(firstCard).toHaveAttribute("href", /^\/fi\/projects\//);
  });

  test("Finnish project cards show Finnish content", async ({ page }) => {
    await page.goto("/fi/");

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
