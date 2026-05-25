import Deck from "./Deck.js";
import Hand from "./Hand.js";
import PokerEvaluator from "./PokerEvaluator.js";
import { PokerHand } from "./constants.js";

export default class PokerAI {

    constructor() {
        this.deck = new Deck();
        this.hand = new Hand( this.deck.draw(7) );
    }

    /**
     * Takes in a list of indices and returns the corresponding cards from current hand
     * @param {List[Integer]} indices - a list of card indices
     * @returns a list of card objects
     */
    getCardsFromIndices(indices) {
        let cards = [];

        for (const index of indices) {
            cards.push( this.hand.cards[index] );
        }

        return cards;
    }

    greedyStraight() {
        this.hand.sortByRank();
    }

    /**
     * Finds the best flush from the current hand by comparing chip count + pokerhand score
     * 1) sort by suits
     * 2) find flushes by moving a window of 5 (not all flushes total)
     * 3) compares the total chip + pokerhand score of each option
     * 4) returns a hand object containing the 'best' flush found
     * @returns a hand object of the best flush hand found 
     */
    greedyFlush() {
        this.hand.sortBySuit();
        let flushOpts = [];

        // Moving a window of length 5 acorss the array
        // Will miss some flush options
        for (let i = 0; i < this.hand.cards.length - 4; i++) {

            let flush = true;
            for (let j = 0; j < 4; j++) {
                if (this.hand.cards[i + j].suit !== this.hand.cards[i + j + 1].suit) {
                    flush = false;
                    break;
                }
            }

            if (flush) {
                flushOpts.push( [i, i+1, i+2, i+3, i+4] );
            }
        }

        if (flushOpts.length !== 0) {

            let bestFlush = [];
            let bestChips = 0;
            let bestPokerHand = PokerHand.HIGH_CARD;

            for (const option of flushOpts) {

                let flushToTest = new Hand( this.getCardsFromIndices(option) );
                const toEval = new PokerEvaluator(flushToTest);

                if (toEval.handType.value > bestPokerHand.value) {
                    bestFlush = flushToTest;
                    bestChips = toEval.chips;
                    bestPokerHand = toEval.handType;
                }
                else if (toEval.handType.value === bestPokerHand.value) {
                    if (toEval.chips > bestChips) {
                        bestFlush = flushToTest;
                        bestChips = toEval.chips;
                        bestPokerHand = toEval.handType;
                    }
                }
            }

            return bestFlush;

        } else {
            console.log("There were no flushes")
            return this.hand.cards;
        }

    }

    greedyPairs() {
        this.hand.sortByRank();
    }

}