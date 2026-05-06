import CardDeck from './CardDeck.js';

const deck = new CardDeck();
const cards = deck.createDeck();

const shuffled = deck.shuffle(cards);
// const hands = deck.deal(shuffled, 5, 2);
