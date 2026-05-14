import { it, describe, expect, beforeEach } from 'vitest';
import { render, type RenderResult } from 'vitest-browser-react';
import { ContactPage } from './ContactPage';

describe('Contact Page', () => {
  let loc: RenderResult;
  beforeEach(async () => {
    loc = await render(<ContactPage />);
  });

  it('should display page title "Kontakta Oss"', async () => {
    // const loc = await render(<ContactPage />);
    // const { getByRole } = await render(<ContactPage />);
    await expect
      .element(loc.getByRole('heading', { name: 'Kontakta Oss' }))
      .toBeInTheDocument();

    await expect.element(loc.getByText(/0303-111111/i)).toBeInTheDocument();
    // await expect.element(loc.getByTitle(/westcoast-cars/i)).toBeInTheDocument();
  });

  it('should populate the form with correct information', async () => {
    // const loc = await render(<ContactPage />);

    const firstNameInput = loc.getByLabelText(/förnamn/i);
    const lastNameInput = loc.getByPlaceholder(/ange efternamn/i);
    const emailInput = loc.getByPlaceholder(/ange e-post/i);
    const messageInput = loc.getByLabelText(/meddelande/i);
    await expect.element(firstNameInput).toBeInTheDocument();
    await expect.element(lastNameInput).toBeInTheDocument();
    await expect.element(emailInput).toBeInTheDocument();
    await expect.element(messageInput).toBeInTheDocument();

    await firstNameInput.fill('Michael');
    await lastNameInput.fill('Gustavsson');
    await emailInput.fill('michael@mail.com');
    await messageInput.fill('Testar');
  });

  it('should submit the form', async () => {
    const firstNameInput = loc.getByLabelText(/förnamn/i);
    const lastNameInput = loc.getByPlaceholder(/ange efternamn/i);
    const emailInput = loc.getByPlaceholder(/ange e-post/i);
    const messageInput = loc.getByLabelText(/meddelande/i);
    const submitButton = loc.getByText('Skicka');

    await firstNameInput.fill('Michael');
    await lastNameInput.fill('Gustavsson');
    await emailInput.fill('michael@mail.com');
    await messageInput.fill('Testar');

    await submitButton.click();
  });
});
