
import { SuitOrder } from "../logic/constants.js";

export default class Hand {
    constructor(cards) {
        this.cards = cards;
    }

    /**
     * Takes a list of card indices and discards them from the current hand
     * @param {List[Integer]} indices -- list of indices of cards wanting to discard
     */
    discard(indices) {
        const newHand = [];
        for (let i = 0; i < this.cards.length; i++) {
            if (!indices.includes(i)) {
                newHand.push(newHand[i]);
            }
        }
        this.cards = newHand;
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

    /**
     * Sorts the current hand first by suit then by rank
     */
    sortBySuit() {
        this.cards.sort((a, b) => {
            const suitDiff = SuitOrder[a.suit] - SuitOrder[b.suit];

            if (suitDiff !== 0) {
                return suitDiff;
            }

            return b.rank.value - a.rank.value;
        });
    }

    /**
     * Sorts the current hand first by rank then by suit
     */
    sortByRank() {
        this.cards.sort((a, b) => {
            const rankDiff = b.rank.value - a.rank.value;

            if (rankDiff !== 0) {
                return rankDiff;
            }

            return SuitOrder[a.suit] - SuitOrder[b.suit];
        });
    }

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }

    printHand() {
        const arr = this.toString();

        for (let i = 0; i < arr.length; i++) {
            console.log(`${i}: ${arr[i]}`);
        }
    }
}