
export default class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    isEqual(otherCard) {
        if ( (this.suit === otherCard.suit) && (this.rank.value === otherCard.rank.value) ) {
            return true;
        } else {
            return false;
        }
    }
    
    toString() {
        return `${this.rank.label}${this.suit}`;
    }
}