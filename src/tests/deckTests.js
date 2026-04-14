import Deck from "../logic/Deck.js";
import Card from "../logic/Card.js";
import { Suit, Rank } from "../logic/constants.js";

export default function runDeckTests() {
  console.log("~~~~Running Deck tests~~~~")
  testDeckSize();
  testDeckDraw();
  testExcludeCtor();
  testSortBySuit();
}

function testDeckSize() {
  const deck = new Deck();

  if (deck.cards.length !== 52) {
    console.log("Deck size test FAILED");
  } else {
    console.log("Deck size test PASSED");
  }
}

function testDeckDraw() {
  const deck = new Deck();
  const draw1 = deck.draw(1);

  if (deck.cards.length !== 51) {
    console.log("Deck size after 1 card drawn test FAILED");
  } else {
    console.log("Deck size after 1 card drawn test PASSED");
  }

  if (draw1.length !== 1) {
    console.log("Drawing only 1 card test FAILED");
  } else {
    console.log("Drawing only 1 card test PASSED");
  }

  // console.log("1 Card drawn:", draw1);

  const draw51 = deck.draw(52);
  
  if (deck.cards.length !== 0) {
    console.log("Deck size after all cards drawn test FAILED");
  } else {
    console.log("Deck size after all cards drawn test PASSED");
  }

  if (draw51.length !== 51) { // 51 b/c only 51 cards left in the deck
    console.log("Drawing all cards test FAILED");
  } else {
    console.log("Drawing all cards test PASSED");
  }

}

function testExcludeCtor() {
  const d7 = new Card(Suit.DIAMONDS, Rank.SEVEN);
  const ha = new Card(Suit.HEARTS, Rank.ACE);
  const cj = new Card(Suit.CLUBS, Rank.JACK);
  const s3 = new Card(Suit.SPADES, Rank.THREE);

  const excludedCards = [d7, ha, cj, s3];

  const deck = new Deck(excludedCards);

  if (deck.cards.length !== 48) {
    console.log("Deck size after excluding 4 cards test FAILED", `Len: ${deck.cards.length}`);
    console.log(`${deck.cards}`);
  } else {
    console.log("Deck size after excluding 4 cards test PASSED");
  }

  for (const card of deck.cards) {
    if (card.isEqual(d7)
    || card.isEqual(ha)
    || card.isEqual(cj)
    || card.isEqual(s3)) {
      console.log("Deck excluded 4 cards test FAILED");
      return;
    }
  }

  console.log("Deck excluded 4 cards test PASSED");
}

function testSortBySuit() {
  const deck = new Deck();
  console.log(`Deck: ${deck.toString()}`);
  console.log(`Sorted deck: ${deck.sortBySuit()}`);
}