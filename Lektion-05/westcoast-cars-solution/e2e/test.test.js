import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/index.html');
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Läs mer om oss' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Start' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Se våra bilar' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Start' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Våra bilar', exact: true }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Start' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Om Oss', exact: true }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Start' }).click();
  await expect(
    page.getByRole('link', { name: 'Westcoast Cars' }),
  ).toBeVisible();

  await page.getByRole('link', { name: 'Kontakta Oss' }).click();
});
