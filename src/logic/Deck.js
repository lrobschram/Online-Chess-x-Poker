import Card from "../logic/Card.js";

const Suit = Object.freeze({
  CLUBS: "♣",
  DIAMONDS: "♦",
  HEARTS: "♥",
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

const suitOrder = {
  "♣": 0,
  "♦": 1,
  "♥": 2,
  "♠": 3
};

export default class Deck {

    /**
     * Initializes a deck object with a list of 52 cards by default
     * Can also to provide a list of cards to exclude from the deck
     * @param {List[Card]} removeCards -- cards to exclude from the deck
     */
    constructor(removeCards = []) {
        this.cards = [];

        for (const rank of Object.values(Rank)) {
            for (const suit of Object.values(Suit)) {

                const toAdd = new Card(suit, rank);

                let dontAdd = false;
                for (const card of removeCards) {
                    if (toAdd.isEqual(card)) {
                        dontAdd = true;
                        break;
                    }
                }

                if (!dontAdd) {
                    this.cards.push(toAdd);
                }
            }
        }

        this.shuffle();
    }

    /**
     * Method to draw the bottom n cards from the deck
     * @param {integer} n -- the amount of cards to draw
     * @returns a list of drawn cards
     */
    draw(n) {

        const drawnCards = []

        for (let i = 0; i < n; i++) {

            const drawn = this.cards.pop()

            if (drawn === undefined) {
                // TODO refresh the deck when it runs out
                console.log("The deck is empty!")
            } else {
                drawnCards.push(drawn)
            }
        }

        return drawnCards
    }

    /**
     * Shuffles the deck using the Fisher-Yates shuffle
     */
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    /**
     * Takes a copy of the current cards in the deck and 
     * returns a list of cards sorted by first the suit then the rank
     * @returns a sorted list of the current cards in the deck
     */
    sortBySuit() {
        const sortedDeck = [...this.cards];

        sortedDeck.sort((a, b) => {
            const suitDiff = suitOrder[a.suit] - suitOrder[b.suit];

            if (suitDiff !== 0) {
                return suitDiff;
            }

            return b.rank.value - a.rank.value;
        });

        return sortedDeck;
    }

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }

    printDeck() {
        const arr = this.toString();

        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}: ${arr[i]}`);
        }
    }

}