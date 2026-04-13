import { test, expect } from "@playwright/test";

test.describe("Project pages", () => {
  test("case study renders with content", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");

    await expect(page.locator("#main-content h1")).toHaveText(
      "Public Transport Webshop",
    );
    await expect(page.getByText("Fullstack Developer")).toBeVisible();
    await expect(page.getByText("Starting point")).toBeVisible();
  });

  test("prev/next navigation works", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");

    // First project: no prev link, has next
    const nextLink = page.getByRole("link", {
      name: /Public Transport Website/i,
    });
    await expect(nextLink).toBeVisible();
    await nextLink.click();

    await expect(page.locator("#main-content h1")).toHaveText(
      "Public Transport Website",
    );
  });

  test("case study has contextual CTA", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");
    await expect(page.getByText("Want to work together?")).toBeVisible();
    const cta = page.getByRole("link", { name: "Contact me" });
    await expect(cta).toBeVisible();
  });

  test("renders demo link only on AI tutor project", async ({ page }) => {
    await page.goto("/projects/japanese-ai-tutor");
    const demoLinkEn = page.getByRole("link", { name: "Open live demo" });
    await expect(demoLinkEn).toHaveAttribute(
      "href",
      "https://japanese-learner-sooty.vercel.app/portfolio/challenge",
    );

    await page.goto("/projects/public-transport-webshop");
    await expect(
      page.getByRole("link", { name: "Open live demo" }),
    ).toHaveCount(0);

    await page.goto("/fi/projects/japanese-ai-tutor");
    const demoLinkFi = page.getByRole("link", { name: "Avaa demo" });
    await expect(demoLinkFi).toHaveAttribute(
      "href",
      "https://japanese-learner-sooty.vercel.app/portfolio/challenge",
    );
  });

  test("renders testimonial only on webshop project", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");
    await expect(
      page.getByText(
        "Tuukka is admirably capable of handling many things at once even in hectic situations",
      ),
    ).toBeVisible();
    await expect(page.getByText("Product owner")).toBeVisible();

    await page.goto("/projects/japanese-ai-tutor");
    await expect(page.getByText("Product owner")).toHaveCount(0);

    await page.goto("/fi/projects/public-transport-webshop");
    await expect(
      page.getByText(
        "Tuukka on ihailtavan kyvykäs hoitamaan montaa asiaa samanaikaisesti hektisissäkin tilanteissa",
      ),
    ).toBeVisible();
    await expect(page.getByText("Tuoteomistaja")).toBeVisible();
  });

  test("back to home link works", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");
    await page.getByRole("link", { name: /Back to home/i }).click();
    await expect(page.locator("#main-content h1")).toHaveText(
      "Tuukka Ylöstalo",
    );
  });

  test("invalid slug returns 404", async ({ page }) => {
    const response = await page.goto("/projects/nonexistent-project");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("Page not found")).toBeVisible();
    await expect(
      page.getByRole("link", { name: /Back to home/i }),
    ).toBeVisible();
  });

  test("renders Finnish project page content", async ({ page }) => {
    await page.goto("/fi/projects/public-transport-webshop");

    await expect(page.locator("#main-content h1")).toHaveText(
      "Joukkoliikenteen verkkokauppa",
    );
    await expect(page.getByText("Lähtötilanne")).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Ota yhteyttä" }),
    ).toBeVisible();
  });

  test("keeps previous and next project navigation inside /fi/", async ({
    page,
  }) => {
    await page.goto("/fi/projects/public-transport-webshop");

    const nextLink = page.getByRole("link", {
      name: /Joukkoliikenteen verkkosivusto/i,
    });
    await expect(nextLink).toHaveAttribute(
      "href",
      "/fi/projects/public-transport-website",
    );
  });

  test("switches between English and Finnish versions of the same project", async ({
    page,
  }) => {
    await page.goto("/projects/public-transport-webshop");
    await page.getByRole("link", { name: "Suomeksi" }).click();

    await expect(page).toHaveURL("/fi/projects/public-transport-webshop");
    await expect(page.locator("#main-content h1")).toHaveText(
      "Joukkoliikenteen verkkokauppa",
    );
  });

  test("invalid Finnish slug returns 404", async ({ page }) => {
    const response = await page.goto("/fi/projects/nonexistent-project");
    expect(response?.status()).toBe(404);
  });

  test("Finnish home page outputs canonical and alternate hreflang links", async ({
    page,
  }) => {
    await page.goto("/fi/");

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      "href",
      "https://uphouseconsulting.fi/fi/",
    );

    const altEn = page.locator('link[rel="alternate"][hreflang="en"]');
    await expect(altEn).toHaveAttribute(
      "href",
      "https://uphouseconsulting.fi/",
    );

    const altFi = page.locator('link[rel="alternate"][hreflang="fi"]');
    await expect(altFi).toHaveAttribute(
      "href",
      "https://uphouseconsulting.fi/fi/",
    );
  });

  test("home page outputs Open Graph and Twitter metadata", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Tuukka Ylöstalo — Software Developer",
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      "content",
      "Portfolio and case studies for Tuukka Ylöstalo, a Helsinki-based software developer behind UpHouse Consulting.",
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://uphouseconsulting.fi/",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://uphouseconsulting.fi/og-image.png",
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image",
    );
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      "https://uphouseconsulting.fi/og-image.png",
    );
  });

  test("project pages keep page-specific metadata with the shared OG image", async ({
    page,
  }) => {
    await page.goto("/projects/public-transport-webshop");

    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "Public Transport Webshop — Tuukka Ylöstalo",
    );
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
      "content",
      "Shipped a customer-facing ticket purchasing app deployed on Azure.",
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://uphouseconsulting.fi/og-image.png",
    );
  });

  test("locale switch preserves the current project after client-side navigation", async ({
    page,
  }) => {
    await page.goto("/");

    await page.locator("article").first().locator("a").first().click();
    await expect(page).toHaveURL("/projects/public-transport-webshop");

    await page.locator("header a").nth(1).click();

    await expect(page).toHaveURL("/fi/projects/public-transport-webshop");
    await expect(page.locator("#main-content h1")).toHaveText(
      "Joukkoliikenteen verkkokauppa",
    );
  });
});
