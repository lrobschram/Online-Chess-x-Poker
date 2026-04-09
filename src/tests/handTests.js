import { Hand, Card } from "../logic/Deck.js";

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

export default function runHandTests() {
  console.log("~~~~Running Hand tests~~~~")
  testHandSize();
  testAddCards();
}

function testHandSize() {
  const mockDeck = [new Card(Suit.HEARTS, Rank.ACE), 
                    new Card(Suit.CLUBS, Rank.JACK),
                    new Card(Suit.DIAMONDS, Rank.SEVEN),
                    new Card(Suit.SPADES, Rank.THREE)];

  const hand = new Hand(mockDeck);

  if (hand.size() !== 4) {
    console.log("Hand size test FAILED");
  } else {
    console.log("Hand size test PASSED");
  }
}

function testDiscard() {

}

function testAddCards() {
    const mockDeck = [new Card(Suit.HEARTS, Rank.ACE), 
                    new Card(Suit.CLUBS, Rank.JACK)];

    const hand = new Hand(mockDeck);

    const d7 = new Card(Suit.DIAMONDS, Rank.SEVEN);
    const s3 = new Card(Suit.SPADES, Rank.THREE);
    const cardsToAdd = [d7, s3];
    
    hand.addCards(cardsToAdd);

    if (hand.size() !== 4) {
        console.log("Hand size after adding cards test FAILED");
    } else {
        console.log("Hand size after adding cards test PASSED");
    }

    if (hand.cards[2].suit !== Suit.DIAMONDS && hand.cards[2].rank !== Rank.SEVEN) {
        console.log(`Adding ${d7.toString()} test FAILED`);
    } 
    else if (hand.cards[3].suit !== Suit.SPADES && hand.cards[3].rank !== Rank.THREE) {
        console.log(`Adding ${s3.toString()} test FAILED`);
    } else {
        console.log("Both cards added test PASSED")
    }
}