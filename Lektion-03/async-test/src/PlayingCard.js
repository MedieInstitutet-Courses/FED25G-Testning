export default class PlayingCard {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
    this.isFaceDown = true;
  }

  flip() {
    this.isFaceDown = !this.isFaceDown;
  }
}
