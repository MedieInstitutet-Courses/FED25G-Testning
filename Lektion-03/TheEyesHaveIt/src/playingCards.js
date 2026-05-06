export const createCardDeck = ({ suits, values }) => {
  //   First test...
  // return [];

  if (!Array.isArray(suits) || !Array.isArray(values)) {
    throw new TypeError('suits and values must be arrays');
  }

  if (suits.length !== 4 || values.length !== 13) {
    throw new RangeError(
      'suits and values must be standard lengths (4 and 13)',
    );
  }

  let deck = [];

  for (let suit of suits) {
    for (const value of values) {
      deck.push({ value, suit, isFaceDown: true });
      //   deck.push(`${value} of ${suit} is facedown`);
    }
  }

  return deck;
};
