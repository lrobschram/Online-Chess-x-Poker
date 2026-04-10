
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

    toString() {
        return this.cards.map(card => `${card.rank.label}${card.suit}`);
    }
}