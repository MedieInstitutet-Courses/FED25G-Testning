import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should contain the correct page title', async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveTitle(/välkommen/i);
  });

  test('should navigate to the gallery page', async ({ page }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'se våra bilar' }).click();

    await expect(page).toHaveTitle(/våra bilar/i);
    await expect(page).toHaveURL(/.*gallery.html/);
  });
});
