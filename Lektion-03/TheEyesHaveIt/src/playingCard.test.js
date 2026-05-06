import { it, describe, expect } from 'vitest';
import CardDeck from './CardDeck';
import PlayingCard from './PlayingCard';

describe('Playing Card', () => {
  it('should return isFaceDown false when flipped', () => {
    const cardDeck = new CardDeck().createDeck();
    const sampleCard = cardDeck[0];
    const card = new PlayingCard(sampleCard.suit, sampleCard.value);

    card.flip();

    expect(card.isFaceDown).toBe(false);
  });
});
