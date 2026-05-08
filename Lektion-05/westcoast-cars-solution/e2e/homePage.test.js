import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('should contain index.html in the url', async ({ page }) => {
    // Arrange & Act...
    await page.goto('http://localhost:5501/index.html');
    // Assert...
    await expect(page).toHaveURL(/.*index.html/);
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('http://localhost:5501/index.html');
    await expect(page).toHaveTitle(/välkommen/i);
  });

  test('should navigate to the contact us when the link "Läs mer om oss" is clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:5501/index.html');
    await page.getByRole('link', { name: 'läs mer om oss' }).click();
    await expect(page).toHaveTitle(/om oss/i);
    await expect(page).toHaveURL(/.*about.html/);
  });

  test('should navigate to the gallery when the link "Se våra bilar" is clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:5501/index.html');
    await page.getByRole('link', { name: 'se våra bilar' }).click();
    await expect(page).toHaveTitle(/våra bilar/i);
    await expect(page).toHaveURL(/.*gallery.html/);
  });

  test('should navigate to the gallery when the menu link "Våra bilar" is clicked', async ({
    page,
  }) => {
    await page.goto('http://localhost:5501/index.html');
    await page.getByRole('link', { name: 'Våra bilar', exact: true }).click();
    await expect(page).toHaveTitle(/våra bilar/i);
    await expect(page).toHaveURL(/.*gallery.html/);
  });
});
