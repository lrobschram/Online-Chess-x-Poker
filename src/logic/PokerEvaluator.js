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
     * Counts each time a rank appears in the given list of cards and maps the rank label to the count
     * @param {List[Card]} cards -- a list of the current cards
     * @returns a map of rank labels to counts
     */
    cardCount(cards) {
        const counts = new Map();

        for (const card of cards) {
            const rank = card.rank.label;
            counts.set(rank, (counts.get(rank) || 0) + 1);
        }

        return counts;
    }

    /**
     * Looks at the rank labels that need to be selected and compares them to the cards in the hand,
     * Counts any that share a rank with the rank label list
     * @param {List[Card]} cards -- a list of the current cards
     * @param {List[String]} ranksCounted -- a list of rank labels
     */
    selectRanks(cards, ranksCounted) {
        
        for (const card of cards) {
            for (const rank of ranksCounted) {
                if (card.rank.label === rank) {
                    this.cardsCounted.push(card);
                    break;
                }
            }
        }

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
     * Returns the card with the highest rank
     * @param {List[Card]} cards -- a list of the current cards
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

    /**
     * Considers the given hand and determines which poker hand type it is and returns the hand type,
     * Also stores the cards counted in the poker hand
     * @param {Hand} hand -- the hand object to be evaluated
     * @returns the poker hand type
     */
    evalHand(hand) {

        const n = hand.cards.length;
        const cards = hand.cards;
        const suits = [];
        const ranks = [];

        for (const card of hand.cards) {
            suits.push(card.suit);
            ranks.push(card.rank.value);
        }

        // ~~~ count based hands ~~~
        let pair = false;
        let threeKind = false;
        const ranksCounted = [];

        const rankCounts = this.cardCount(cards);
        for (const count of rankCounts) {
            
            if (count[1] === 4) {
                ranksCounted.push(count[0]);
                this.selectRanks(cards, ranksCounted);
                return "four_of_a_kind"
            }

            if (count[1] === 2 && pair) {
                ranksCounted.push(count[0]);
                this.selectRanks(cards, ranksCounted);
                return "two_pair";
            }

            if (count[1] === 2) {
                ranksCounted.push(count[0]);
                pair = true;
            }

            if (count[1] === 3) {
                ranksCounted.push(count[0]);
                threeKind = true;
            }

        }

        if (pair && threeKind) {
            this.selectRanks(cards, ranksCounted);
            return "full_house";
        }

        if (threeKind) {
            this.selectRanks(cards, ranksCounted);
            return "three_of_a_kind";
        }

        if (pair) {
            this.selectRanks(cards, ranksCounted);
            return "pair";
        }

        // ~~~ flushes + straights ~~~
        if (n === 5) {

            let flush = true;
            for (let i = 0; i < (suits.length - 1); i++) {
                if (suits[i] !== suits[i + 1]) {
                    flush = false;
                }
            }

            const straight = this.isStraight(ranks);

            if (flush && straight) {
                this.cardsCounted = [...hand.cards];
                return "straight_flush";
            } 

            if (straight) {
                this.cardsCounted = [...hand.cards];
                return "straight";
            }

            if (flush) {
                this.cardsCounted = [...hand.cards];
                return "flush";
            }
        }

        // ~~~ high card ~~~
        const highCard = this.calcHighest(cards);
        this.cardsCounted.push(highCard);
        return "high_card";
    }
}