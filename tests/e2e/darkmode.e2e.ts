import { test, expect } from '@playwright/test';

test.describe('Dark mode', () => {
  test('defaults to dark mode (no light class)', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/light/);
  });

  test('toggle switches to light mode and back', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');
    const toggleLabel = page.locator('#theme-toggle [data-theme-toggle-label]');
    const lightIcon = page.locator('#theme-toggle [data-theme-toggle-icon-light]');
    const darkIcon = page.locator('#theme-toggle [data-theme-toggle-icon-dark]');
    const html = page.locator('html');

    // Initially dark
    await expect(toggleLabel).toHaveText('Light');
    await expect(lightIcon).toBeVisible();
    await expect(darkIcon).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-label', 'Light mode');
    await expect(html).not.toHaveClass(/light/);

    // Switch to light
    await toggle.click();
    await expect(html).toHaveClass(/light/);
    await expect(toggleLabel).toHaveText('Dark');
    await expect(lightIcon).toBeHidden();
    await expect(darkIcon).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-label', 'Dark mode');

    // Switch back to dark
    await toggle.click();
    await expect(html).not.toHaveClass(/light/);
    await expect(toggleLabel).toHaveText('Light');
    await expect(lightIcon).toBeVisible();
    await expect(darkIcon).toBeHidden();
    await expect(toggle).toHaveAttribute('aria-label', 'Light mode');
  });

  test('persists theme preference across page loads', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');

    // Switch to light
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/light/);

    // Reload
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/light/);
    await expect(page.locator('#theme-toggle [data-theme-toggle-label]')).toHaveText('Dark');
    await expect(toggle).toHaveAttribute('aria-label', 'Dark mode');
  });

  test('persists light mode across client-side navigation', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('#theme-toggle');
    const toggleLabel = page.locator('#theme-toggle [data-theme-toggle-label]');

    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/light/);
    await expect(toggleLabel).toHaveText('Dark');

    await page.getByRole('link', { name: 'Public Transport Webshop' }).first().click();
    await expect(page).toHaveURL(/\/projects\/public-transport-webshop/);
    await expect(page.locator('html')).toHaveClass(/light/);
    await expect(page.locator('#theme-toggle [data-theme-toggle-label]')).toHaveText('Dark');
    await expect(page.locator('#theme-toggle')).toHaveAttribute('aria-label', 'Dark mode');
  });

  test('no FOUC on dark mode load', async ({ page }) => {
    // Set dark preference in localStorage before navigating
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('theme', 'dark'));
    await page.reload();

    // html should not have light class at any point
    const html = page.locator('html');
    await expect(html).not.toHaveClass(/light/);
  });

  test('uses localized theme toggle labels on Finnish pages', async ({ page }) => {
    await page.goto('/fi/');

    const toggle = page.locator('#theme-toggle');
    const toggleLabel = page.locator('#theme-toggle [data-theme-toggle-label]');

    await expect(toggleLabel).toHaveText('Vaalea');
    await expect(toggle).toHaveAttribute('aria-label', 'Vaalea tila');

    await toggle.click();
    await expect(toggleLabel).toHaveText('Tumma');
    await expect(toggle).toHaveAttribute('aria-label', 'Tumma tila');
  });
});
