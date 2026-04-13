import Card from "../logic/Card.js";

export default class PokerEvaluator {

    constructor(hand) {
        this.cardsCounted =[];
        this.handType = this.evalHand(hand);
    }

    /**
     * Determines if a list of Rank objects is a straight
     * @param {List[Integer]} ranks -- a list of the current card rank values
     * @returns true if the ranks all increase by 1 each index, false if otherwise
     */
    isStraight(ranks) {
        if (ranks.length !== 5) {
            return false
        }

        const checkRank = [...ranks];
        checkRank.sort( (a, b) => a - b);

        for (let i = 0; i < (checkRank.length - 1); i++) {
            if (checkRank[i] + 1 !== checkRank[i + 1]) {
                return false;
            }
        }

        return true;
    }

    /**
     * Adds up all of the card ranks and returns their sum
     * @param {List[Rank]} ranks -- a list of the current card ranks
     * @returns the sum of all the ranks in the given list of ranks
     */
    chipCounter(ranks) {
        let chipCount = 0;

        for (const rank of ranks) {
            chipCount += rank.value;
        }

        return chipCount;
    }

    // TODO -> maybe do this somewhere else??
    calcBonus(chips) {

    }

    /**
     * 
     * @param {List[Card]} cards 
     * @returns 
     */
    calcHighest(cards) {
        let max = cards[0];
        for (const card of cards) {
            if (card.rank.value > max.rank.value) {
                max = card;
            }
        }
        return max;
    }

    // TODO -> want to return the poker hand type + cards counted in hand
    evalHand(hand) {
        const n = hand.length;
        const cards = hand.cards;

        // create list of suits + ranks
        const suits = [];
        const ranks = [];

        for (const card of hand.cards) {
            suits.push(card.suit);
            ranks.push(card.rank.value);
        }

        // count based hands

        // flushes + straights
        if (n === 5) {

            let flush = true;
            for (let i = 0; i < (suits.length - 1); i++) {
                if (suits[i] !== suits[i + 1]) {
                    flush = false;
                }
            }

            const straight = isStraight(ranks);

            if (flush && straight) {
                this.cardsCounted = hand.cards;
                return "straight_flush";
            } 

            if (straight) {
                this.cardsCounted = hand.cards;
                return "straight";
            }

            if (flush) {
                this.cardsCounted = hand.cards;
                return "flush";
            }
        }

        // high card
        const highCard = this.calcHighest(cards);
        this.cardsCounted.push(highCard);
        return "high_card";
    }
}