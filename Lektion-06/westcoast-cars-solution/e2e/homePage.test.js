import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should contain the correct page title', async ({ page }) => {
    await page.goto('');
    await expect(page).toHaveTitle(/välkommen/i);
  });
});
