import { readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { test, expect } from '@playwright/test';

const distDir = path.resolve(process.cwd(), 'dist');

function getAssetBytes(htmlPath: string, extension: '.js' | '.css'): number {
  const html = readFileSync(htmlPath, 'utf8');
  const assetPattern = new RegExp(`(?:href|src)=\"(/_astro/[^\"]+\\${extension})\"`, 'g');
  const assetPaths = [...html.matchAll(assetPattern)].map((match) => match[1]);

  return assetPaths.reduce((total, assetPath) => {
    return total + statSync(path.join(distDir, assetPath.replace(/^\//, ''))).size;
  }, 0);
}

function getHomeAssetBytes(extension: '.js' | '.css'): number {
  return getAssetBytes(path.join(distDir, 'index.html'), extension);
}

function getFiHomeAssetBytes(extension: '.js' | '.css'): number {
  return getAssetBytes(path.join(distDir, 'fi', 'index.html'), extension);
}

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

  test('total JS payload under 20KB', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const totalJS = getHomeAssetBytes('.js');
    expect(totalJS).toBeLessThan(20 * 1024); // 20KB
  });

  test('page weight under 100KB (excluding fonts and images)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const totalBytes =
      statSync(path.join(distDir, 'index.html')).size +
      getHomeAssetBytes('.js') +
      getHomeAssetBytes('.css');

    expect(totalBytes).toBeLessThan(100 * 1024); // 100KB
  });
});

test.describe('Finnish home performance budgets', () => {
  test('no console errors on Finnish home page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/fi/');
    await page.waitForLoadState('networkidle');
    expect(errors).toEqual([]);
  });

  test('Finnish home total JS payload under 20KB', async ({ page }) => {
    await page.goto('/fi/');
    await page.waitForLoadState('networkidle');

    const totalJS = getFiHomeAssetBytes('.js');
    expect(totalJS).toBeLessThan(20 * 1024); // 20KB
  });

  test('Finnish home page weight under 100KB (excluding fonts and images)', async ({ page }) => {
    await page.goto('/fi/');
    await page.waitForLoadState('networkidle');

    const totalBytes =
      statSync(path.join(distDir, 'fi', 'index.html')).size +
      getFiHomeAssetBytes('.js') +
      getFiHomeAssetBytes('.css');

    expect(totalBytes).toBeLessThan(100 * 1024); // 100KB
  });
});
