import Card from "../logic/Card.js";
import { Suit, Rank, SuitOrder } from "../logic/constants.js";

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
            const suitDiff = SuitOrder[a.suit] - SuitOrder[b.suit];

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