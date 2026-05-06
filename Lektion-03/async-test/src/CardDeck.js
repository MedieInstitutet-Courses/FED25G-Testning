import PlayingCard from './PlayingCard';

export default class CardDeck {
  deck = [];

  constructor() {
    this.suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    this.values = [
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
  }

  createDeck() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let deck = [];

        for (let suit of this.suits) {
          for (const value of this.values) {
            deck.push(new PlayingCard(suit, value));
          }
        }

        resolve(deck);
      }, 0);
    });
  }

  shuffle(deck) {
    let i = deck.length;
    let j;
    let tmp;

    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = deck[j];
      deck[j] = deck[i];
      deck[i] = tmp;
    }

    return deck;
  }

  deal(cards, cardsPerHand, players) {
    const hands = Array.from({ length: players }, () => []);

    for (let i = 0; i < cardsPerHand; i++) {
      for (let index = 0; index < players; index++) {
        if (cards.length === 0) {
          throw new Error('Not enough cards');
        }

        hands[index].push(cards.shift());
      }
    }
    return hands;
  }
}
