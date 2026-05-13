import { test, expect } from '@playwright/test';

test.describe('Contact Us Page', () => {
  test('should have correct inputs for each field', async ({ page }) => {
    await page.goto('/pages/contact/contact.html');

    // await page.getByLabel('Förnamn').fill('Michael');
    await page.getByPlaceholder('Ange förnamn').fill('Michael');

    // await page.getByLabel('Efternamn').fill('Gustavsson');
    // await page.getByPlaceholder(/ange efternamn/i).fill('Gustavsson');
    await page.locator('.form-control label[for=lastName]').fill('Gustavsson');

    // await page.getByLabel('E-Post').fill('michael@mail.com');
    await page.getByTestId('email').fill('michael@mail.com');

    // await page.getByLabel('Meddelande').fill('Var vänlig och kontakta mig');
    await page.getByTitle('message').fill('Var vänlig och kontakta mig');

    await page.getByRole('button', { name: 'Skicka' }).click();
    // XPath locator...
    // await page.locator('//form/button').click();

    await expect(page).toHaveTitle(/tack/i);
  });
});
