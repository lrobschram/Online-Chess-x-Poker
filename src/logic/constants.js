
export const Suit = Object.freeze({
  CLUBS: "♣",
  DIAMONDS: "♦",
  HEARTS: "♥",
  SPADES: "♠"
});

export const Rank = Object.freeze({
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

export const SuitOrder = {
  "♣": 0,
  "♦": 1,
  "♥": 2,
  "♠": 3
};

export const PokerHand = Object.freeze({
  HIGH_CARD: { value: 1, label: "High Card" },
  PAIR: { value: 2, label: "Pair" },
  TWO_PAIR: { value: 3, label: "Two Pair" },
  THREE_KIND: { value: 4, label: "Three of a Kind" },
  STRAIGHT: { value: 5, label: "Straight" },
  FLUSH: { value: 6, label: "Flush" },
  FULL_HOUSE: { value: 7, label: "Full House" },
  FOUR_KIND: { value: 8, label: "Four of a Kind" },
  STRIAGHT_FLUSH: { value: 9, label: "Straight Flush" },
});