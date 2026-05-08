import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'How to install Playwright' }).click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
  await page.getByRole('link', { name: 'Generating tests' }).click();
});