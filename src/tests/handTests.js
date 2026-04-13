import  Hand from "../logic/Hand.js";
import Card from "../logic/Card.js";
import { Suit, Rank } from "../logic/constants.js";

export default function runHandTests() {
  console.log("~~~~Running Hand tests~~~~")
  testHandSize();
  testAddCards();
  testDiscard();
  testSorting();
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
    const d7 = new Card(Suit.DIAMONDS, Rank.SEVEN);
    const ha = new Card(Suit.HEARTS, Rank.ACE)
    const mockDeck = [ha, 
                    new Card(Suit.CLUBS, Rank.JACK),
                    d7,
                    new Card(Suit.SPADES, Rank.THREE)];

    const hand = new Hand(mockDeck);

    hand.discard([0, 2]);

    if (hand.size() !== 2) {
        console.log("Hand size after discarding cards test FAILED");
    } else {
        console.log("Hand size after discarding cards test PASSED");
    }

    if (hand.cards.includes(d7)) {
        console.log("Correct cards after discarding 2 cards test FAILED");
    }
    else if (hand.cards.includes(ha)) {
        console.log("Correct cards after discarding 2 cards test FAILED");
    } else {
        console.log("Correct cards after discarding 2 cards test PASSED");
    }
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

function testSorting() {
    const mockDeck = [new Card(Suit.HEARTS, Rank.ACE), 
                    new Card(Suit.CLUBS, Rank.JACK),
                    new Card(Suit.DIAMONDS, Rank.SEVEN),
                    new Card(Suit.SPADES, Rank.THREE),
                    new Card(Suit.HEARTS, Rank.EIGHT),
                    new Card(Suit.SPADES, Rank.SEVEN)];

  const hand = new Hand(mockDeck);
  console.log(`Init hand: ${hand.toString()}`);

  hand.sortBySuit();
  console.log(`Suit sort: ${hand.toString()}`);

  hand.sortByRank();
  console.log(`Rank sort: ${hand.toString()}`);
}