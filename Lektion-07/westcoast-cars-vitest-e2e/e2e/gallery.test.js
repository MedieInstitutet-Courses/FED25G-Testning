import { test, expect } from '@playwright/test';

test.describe('Gallery Page', () => {
  test('should display a list of vehicles', async ({ page }) => {
    await page.goto('/pages/gallery/gallery.html');

    // const items = page.getByRole('listitem');
    // console.log(await items.count()); // 15 items inte 10
    // const items = page
    //   .getByRole('listitem')
    //   .filter({ has: page.locator('.card') });
    // console.log(await items.count()); // 15 items inte 10

    const items = page.locator('.card');

    console.log(await items.count());
    console.log(await items.first().innerHTML());

    await expect(await items.count()).toBeGreaterThan(5);
    await expect(await items.count()).toBe(10);
  });
});
