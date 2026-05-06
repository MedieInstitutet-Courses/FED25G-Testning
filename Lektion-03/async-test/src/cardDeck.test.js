import { it, describe, expect, beforeEach } from 'vitest';
import CardDeck from './CardDeck';
import PlayingCard from './PlayingCard';

describe('Class CardDeck', () => {
  describe('Create carddeck async', () => {
    let cardDeck;
    let cards;
    beforeEach(() => {
      cardDeck = new CardDeck();
      cards = cardDeck.createDeck();
    });

    it.skip('should return a Promise that is resolved', async () => {
      expect(cards).toBeInstanceOf(Promise);
      await expect(cards).resolves.toBeDefined();
    });

    it('should resolve to correct deck of cards', async () => {
      let cardDeck = new CardDeck();
      let cards = await cardDeck.createDeck();

      expect(typeof cards).toBe('object');
      expect(cards[0]).toBeInstanceOf(PlayingCard);
      expect(Array.isArray(cards)).toBe(true);
      expect(cards[0]).toHaveProperty('suit');
      expect(cards[0]).toHaveProperty('value');
      expect(cards[0]).toHaveProperty('isFaceDown');
      expect(cards[0].isFaceDown).toBe(true);
    });
  });
});
