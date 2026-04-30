import { it, describe, expect } from 'vitest';
import CardDeck from './CardDeck';

describe('Class CardDeck', () => {
  describe('Create carddeck', () => {
    const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    const values = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
    ];
    let cardDeck;
    let cards;

    it('should return an array', () => {
      // Arrange...
      cardDeck = new CardDeck({ suits, values });
      // Act...
      cards = cardDeck.createDeck();
      // Assert...
      expect(Array.isArray(cards)).toBe(true);
    });

    it('should return a deck with 52 playingcards', () => {
      // Arrange...
      cardDeck = new CardDeck({ suits, values });
      cards = cardDeck.createDeck();

      expect(cards).toHaveLength(52);
    });

    it('should throw an error when suits is not an array', () => {
      cardDeck = new CardDeck({ suits: '', values });
      expect(() => cardDeck.createDeck()).toThrow();
    });

    it('should throw an error when values is not an array', () => {
      cardDeck = new CardDeck({ suits, values: '' });
      expect(() => cardDeck.createDeck()).toThrow();
    });

    it('should create a card object with correct properties, suit and value', () => {
      // Arrange...
      cardDeck = new CardDeck({ suits, values });
      // Act...
      cards = cardDeck.createDeck();
      const card = cards[0];

      // Assert...
      expect(card).toBeTypeOf('object');
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('value');
      expect(card).toHaveProperty('isFaceDown');
    });
  });
});
