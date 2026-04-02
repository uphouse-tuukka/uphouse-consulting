import { test, expect } from '@playwright/test';

test.describe('Performance budgets', () => {
  test('no console errors on home page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('no console errors on project page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/projects/public-transport-webshop');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('total JS payload under 5KB', async ({ page }) => {
    let totalJS = 0;
    page.on('response', (response) => {
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('javascript')) {
        const contentLength = response.headers()['content-length'];
        if (contentLength) totalJS += parseInt(contentLength, 10);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(totalJS).toBeLessThan(5 * 1024); // 5KB
  });

  test('page weight under 100KB (excluding fonts and images)', async ({ page }) => {
    let totalBytes = 0;
    page.on('response', (response) => {
      const contentType = response.headers()['content-type'] || '';
      // Exclude fonts and images
      if (contentType.includes('font') || contentType.includes('image')) return;
      const contentLength = response.headers()['content-length'];
      if (contentLength) totalBytes += parseInt(contentLength, 10);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    expect(totalBytes).toBeLessThan(100 * 1024); // 100KB
  });
});
