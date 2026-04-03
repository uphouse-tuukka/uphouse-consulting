import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('renders hero with name, role, tagline, and CTA', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#main-content h1')).toHaveText('Tuukka Ylöstalo');
    await expect(page.getByText('Software Developer')).toBeVisible();
    await expect(page.getByText('Less complexity, more software.')).toBeVisible();

    const cta = page.getByRole('link', { name: 'Contact me' }).first();
    await expect(cta).toBeVisible();
    const href = await cta.getAttribute('href');
    expect(href).toContain('mailto:');
    expect(href).toContain('subject=');
  });

  test('renders bio section', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('push back on wasted effort')).toBeVisible();
  });

  test('renders 3 project cards', async ({ page }) => {
    await page.goto('/');
    const cards = page.locator('article');
    await expect(cards).toHaveCount(3);
  });

  test('project card links to case study', async ({ page }) => {
    await page.goto('/');
    const firstCard = page.locator('article').first();
    const link = firstCard.locator('a').first();
    const href = await link.getAttribute('href');
    expect(href).toMatch(/^\/projects\//);
  });

  test('social links are present', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /GitHub/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /LinkedIn/i }).first()).toBeVisible();
  });

  test('skip link appears on Tab and targets main content', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skipLink = page.getByText('Skip to content');
    await expect(skipLink).toBeVisible();
    const href = await skipLink.getAttribute('href');
    expect(href).toBe('#main-content');
  });
});
