import { test, expect } from '@playwright/test';

test.describe('Project pages', () => {
  test('case study renders with content', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');

    await expect(page.locator('#main-content h1')).toHaveText('Public Transport Webshop');
    await expect(page.getByText('Fullstack Developer')).toBeVisible();
    await expect(page.getByText('The problem')).toBeVisible();
  });

  test('prev/next navigation works', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');

    // First project: no prev link, has next
    const nextLink = page.getByRole('link', { name: /Public Transport Website/i });
    await expect(nextLink).toBeVisible();
    await nextLink.click();

    await expect(page.locator('#main-content h1')).toHaveText('Public Transport Website');
  });

  test('case study has contextual CTA', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');
    await expect(page.getByText('Want to work together?')).toBeVisible();
    const cta = page.getByRole('link', { name: 'Contact me' });
    await expect(cta).toBeVisible();
  });

  test('back to home link works', async ({ page }) => {
    await page.goto('/projects/public-transport-webshop');
    await page.getByRole('link', { name: /Back to home/i }).click();
    await expect(page.locator('#main-content h1')).toHaveText('Tuukka Ylöstalo');
  });

  test('invalid slug returns 404', async ({ page }) => {
    const response = await page.goto('/projects/nonexistent-project');
    expect(response?.status()).toBe(404);
    await expect(page.getByText('Page not found')).toBeVisible();
    await expect(page.getByRole('link', { name: /Back to home/i })).toBeVisible();
  });

  test("renders Finnish project page content", async ({ page }) => {
    await page.goto("/fi/projects/public-transport-webshop");

    await expect(page.locator("#main-content h1")).toHaveText("Joukkoliikenteen verkkokauppa");
    await expect(page.getByText("Ongelma")).toBeVisible();
    await expect(page.getByRole("link", { name: "Ota yhteyttä" })).toBeVisible();
  });

  test("keeps previous and next project navigation inside /fi/", async ({ page }) => {
    await page.goto("/fi/projects/public-transport-webshop");

    const nextLink = page.getByRole("link", { name: /Joukkoliikenteen verkkosivusto/i });
    await expect(nextLink).toHaveAttribute("href", "/fi/projects/public-transport-website");
  });

  test("switches between English and Finnish versions of the same project", async ({ page }) => {
    await page.goto("/projects/public-transport-webshop");
    await page.getByRole("link", { name: "Suomeksi" }).click();

    await expect(page).toHaveURL("/fi/projects/public-transport-webshop");
    await expect(page.locator("#main-content h1")).toHaveText("Joukkoliikenteen verkkokauppa");
  });
});
