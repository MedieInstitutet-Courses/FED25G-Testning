import { it, describe, expect, beforeEach } from 'vitest';
import CardDeck from './CardDeck';

describe('Class CardDeck', () => {
  describe('Create carddeck', () => {
    let cardDeck;
    let cards;
    beforeEach(() => {
      cardDeck = new CardDeck();
      cards = cardDeck.createDeck();
    });

    it('should return an array', () => {
      expect(Array.isArray(cards)).toBe(true);
    });

    it('should return a deck with 52 cards', () => {
      expect(cards).toHaveLength(52);
    });

    it('should create card objects with value, suit and isFaceDown properties', () => {
      const card = cards[0];

      expect(card).toBeTypeOf('object');
      expect(card).toHaveProperty('suit');
      expect(card).toHaveProperty('value');
      expect(card).toHaveProperty('isFaceDown');
    });

    it('should return a card facedown', () => {
      const card = cards[0];

      expect(card.isFaceDown).toBe(true);
    });

    it('should return a card of type object', () => {
      const card = cards[0];

      expect(card).toBeTypeOf('object');
    });
  });

  describe('Shuffle carddeck', () => {
    let cardDeck;
    let cards;
    beforeEach(() => {
      cardDeck = new CardDeck();
      cards = cardDeck.createDeck();
    });

    it('should randomize the order of cards', () => {
      // const originalOrder = [...cards];
      const originalOrder = structuredClone(cards);
      const shuffled = cardDeck.shuffle(cards);

      const testCard = shuffled[0];
      const oldCard = originalOrder[0];

      expect(testCard.value).not.toEqual(oldCard.value);
    });

    it('should not change the number of cards', () => {
      const shuffled = cardDeck.shuffle(cards);

      expect(shuffled).toHaveLength(52);
    });
  });

  describe('Deal the carddeck', () => {
    let cardDeck;
    let cards;
    beforeEach(() => {
      cardDeck = new CardDeck();
      cards = cardDeck.createDeck();
    });

    it('should deal the correct number of hands', () => {
      const hands = cardDeck.deal(cards, 5, 2);

      expect(hands).toHaveLength(2);
    });

    it('should deal each hand the correct number of cards', () => {
      const hands = cardDeck.deal(cards, 5, 2);

      expect(hands[0]).toHaveLength(5);
      expect(hands[1]).toHaveLength(5);
    });
  });
});
