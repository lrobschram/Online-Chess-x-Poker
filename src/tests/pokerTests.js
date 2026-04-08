import Deck from "../logic/Deck.js";

export function testDeckSize() {
  const deck = new Deck();

  if (deck.cards.length !== 52) {
    console.log("Deck size test failed");
  } else {
    console.log("Deck size test passed");
  }
}

export function testDeckDisplay() {
  const deck = new Deck();

  console.log("Whole Deck:", deck.toString());
}