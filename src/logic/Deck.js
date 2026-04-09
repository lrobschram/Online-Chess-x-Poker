
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

export class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
    
    toString() {
        return `${this.rank.label}${this.suit}`;
    }
}

export class Deck {
    constructor() {
        this.cards = [];

        for (const rank of Object.values(Rank)) {
            for (const suit of Object.values(Suit)) {
                this.cards.push( new Card(suit, rank) );
            }
        }
    }

    /**
     * Method to draw the top n cards from the deck
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

    shuffle() {

    }

    sortBySuit() {
        
    }

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }

}

export class Hand {
    constructor(cards) {
        this.cards = cards;
    }

    discard(indices) {

    }

    /**
     * Takes a list off cards and adds them to the end of the current hand
     * @param {List[Card]} newCards -- A list of cards to add to the hand
     */
    addCards(newCards) {
        const copyHand = [...this.cards];
        this.cards = copyHand.concat(newCards);
    }

    size() {
        return this.cards.length;
    }

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }
}