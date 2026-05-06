import { it, describe, expect } from 'vitest';
import { createCardDeck } from './playingCards';

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

  it('should return an array', () => {
    const cards = createCardDeck({ suits, values });
    expect(Array.isArray(cards)).toBe(true);
  });

  it('should return a deck with 52 cards', () => {
    const cards = createCardDeck({ suits, values });
    expect(cards).toHaveLength(52);
  });

  // check for invalid argument types
  it('should throw an error if suits or values are not arrays', () => {
    expect(() => createCardDeck({ suits: 'not an array', values })).toThrow();
    expect(() => createCardDeck({ suits, values: 'not an array' })).toThrow();
  });

  // check the argument lengths
  it('should throw an error if suits or values are not standard lengths', () => {
    expect(() => createCardDeck({ suits: ['Clubs'], values })).toThrow(/4/);
    expect(() => createCardDeck({ suits, values: ['4', 'King'] })).toThrow(
      /13/,
    );
  });

  // check each card has the right shape
  it('should create card objects with value, suit and isFaceDown properties', () => {
    const cards = createCardDeck({ suits, values });
    const card = cards[0];

    expect(card).toBeTypeOf('object');
    expect(card).toHaveProperty('suit');
    expect(card).toHaveProperty('value');
    expect(card).toHaveProperty('isFaceDown');
  });

  // Check that a card is facedown as default...
  it('should return a card facedown', () => {
    const cards = createCardDeck({ suits, values });
    const card = cards[0];

    expect(card.isFaceDown).toBe(true);
  });
});
