import { it, expect, describe, vi } from 'vitest';
import { Window } from 'happy-dom';
import { createCard, createImage } from './dom';

// Skapa ett nytt Window objekt i kod som ska representera
// Webbläsarens Window objekt...
const window = new Window();
const document = window.document;

// Koppla ihop happy-dom's document objekt med Vitest...
vi.stubGlobal('document', document);

// Här kommer testerna...
describe('DOM', () => {
  describe('createCard function', () => {
    it('should return a html element with css class card', () => {
      // Arrange and Act...
      const section = createCard();
      // Assert...
      expect(section.nodeName).toMatch(/section/i);
      expect(section.className).toBe('card');
    });
  });

  describe('createImage function', () => {
    it('should return an image element with correct attributes', () => {
      // Arrange, Act...
      const image = createImage(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
        1,
      );

      const imageUrl = image.getAttribute('src');
      const imageId = image.getAttribute('id');

      expect(image.nodeName).toMatch(/img/i);
      expect(imageUrl).toBe(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
      );
      expect(imageId).toBe('1');
    });

    it.skip('should return an image element with correct image', () => {
      // Arrange
      const image = createImage(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
        1,
      );

      // Act...
      const imageUrl = image.getAttribute('src');

      // Assert...
      expect(imageUrl).toBe(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
      );
    });

    it.skip('should return an image element with correct id', () => {
      // Arrange
      const image = createImage(
        'https://res.cloudinary.com/softtech-dev/image/upload/v1771144614/jersnav-corvette-7100524_lnd9au.jpg',
        1,
      );

      // Act...
      const id = image.getAttribute('id');

      // Assert...
      expect(id).toBe('1');
    });
  });
});
