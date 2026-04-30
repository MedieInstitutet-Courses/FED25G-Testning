import PlayingCard from './PlayingCard';

export default class CardDeck {
  constructor({ suits, values }) {
    this.suits = suits;
    this.values = values;
  }
  createDeck() {
    if (!Array.isArray(this.suits) || !Array.isArray(this.values))
      throw new TypeError('Suits and Values must be arrays');

    let deck = [];

    for (let suit of this.suits) {
      for (let value of this.values) {
        deck.push(new PlayingCard(suit, value));
      }
    }

    return deck;
  }
}
