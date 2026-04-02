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
    const html = page.locator('html');

    // Initially dark
    await expect(toggle).toHaveText('Light');
    await expect(html).not.toHaveClass(/light/);

    // Switch to light
    await toggle.click();
    await expect(html).toHaveClass(/light/);
    await expect(toggle).toHaveText('Dark');

    // Switch back to dark
    await toggle.click();
    await expect(html).not.toHaveClass(/light/);
    await expect(toggle).toHaveText('Light');
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
    await expect(toggle).toHaveText('Dark');
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
});
