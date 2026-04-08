
const Suit = Object.freeze({
  HEARTS: "♥",
  DIAMONDS: "♦",
  CLUBS: "♣",
  SPADES: "♠"
});

const Rank = Object.freeze({
  TWO: { value: 2, label: "2" },
  THREE: { value: 3, label: "3" },
  FOUR: { value: 4, label: "4" },
  FIVE: { value: 5, label: "5" },
  SIX: { value: 6, label: "6" },
  SEVEN: { value: 7, label: "7" },
  EIGHT: { value: 8, label: "8" },
  NINE: { value: 9, label: "9" },
  TEN: { value: 10, label: "10" },
  JACK: { value: 11, label: "J" },
  QUEEN: { value: 12, label: "Q" },
  KING: { value: 13, label: "K" },
  ACE: { value: 14, label: "A" }
});

class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    
    toString() {
        return `${this.rank.label}${this.suit}`;
    }
}

export default class Deck {
    constructor() {
        this.cards = [];

        for (const rank of Object.values(Rank)) {
            for (const suit of Object.values(Suit)) {
                this.cards.push( new Card(suit, rank) );
            }
        }
    }

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }
}