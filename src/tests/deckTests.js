import Deck from "../logic/Deck.js";

export default function runDeckTests() {
  console.log("~~~~Running Deck tests~~~~")
  testDeckSize();
  testDeckDraw();
}

function testDeckSize() {
  const deck = new Deck();

  if (deck.cards.length !== 52) {
    console.log("Deck size test FAILED");
  } else {
    console.log("Deck size test PASSED");
  }
}

function testDeckDisplay() {
  const deck = new Deck();

  console.log("Whole Deck:", deck.toString());
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

function testShuffle() {

}

function testRefillDeck() {

}