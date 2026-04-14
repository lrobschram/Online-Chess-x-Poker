import  Hand from "../logic/Hand.js";
import Card from "../logic/Card.js";
import { Suit, Rank } from "../logic/constants.js";
import PokerEvaluator from "../logic/PokerEvaluator.js";

export default function runPokerTests() {
  console.log("~~~~Running Poker tests~~~~")
  testHighCard();
  testPair();
  testTwoPair();
  testThreeOfKind();
  testFourOfKind();
  testFullHouse();
  testFlush();
  testStraight();
  testStraightFlush();
}

function testHighCard() {
    const highCard = new Card(Suit.HEARTS, Rank.ACE);
    const mockDeck = [highCard, 
                        new Card(Suit.CLUBS, Rank.JACK),
                        new Card(Suit.DIAMONDS, Rank.SEVEN),
                        new Card(Suit.SPADES, Rank.THREE),
                        new Card(Suit.HEARTS, Rank.EIGHT)];
    
    const hand = new Hand(mockDeck);

    const pokerEval = new PokerEvaluator(hand);

    if (pokerEval.cardsCounted[0] !== highCard) {
        console.log("Correct high card test FAILED");
    } else {
        console.log("Correct high card test PASSED");
    }
    
    if (pokerEval.handType !== "high_card") {
        console.log("High card hand type test FAILED");
    } else {
        console.log("High card hand type test PASSED");
    }
}

function testPair() {
    const k1 = new Card(Suit.HEARTS, Rank.KING);
    const k2 = new Card(Suit.CLUBS, Rank.KING);

    const mockDeck = [
        k1,
        k2,
        new Card(Suit.DIAMONDS, Rank.SEVEN),
        new Card(Suit.SPADES, Rank.THREE),
        new Card(Suit.HEARTS, Rank.EIGHT)
    ];

    const hand = new Hand(mockDeck);
    const pokerEval = new PokerEvaluator(hand);

    if (
        pokerEval.cardsCounted.length !== 2 ||
        !pokerEval.cardsCounted[0].isEqual(k1) ||
        !pokerEval.cardsCounted[1].isEqual(k2)
    ) {
        console.log("Correct pair cards test FAILED");
    } else {
        console.log("Correct pair cards test PASSED");
    }

    if (pokerEval.handType !== "pair") {
        console.log("Pair hand type test FAILED");
    } else {
        console.log("Pair hand type test PASSED");
    }
}

function testTwoPair() {
    const k1 = new Card(Suit.HEARTS, Rank.KING);
    const k2 = new Card(Suit.CLUBS, Rank.KING);
    const s1 = new Card(Suit.DIAMONDS, Rank.SEVEN);
    const s2 = new Card(Suit.HEARTS, Rank.SEVEN);

    const mockDeck = [
        k1,
        k2,
        s1,
        new Card(Suit.SPADES, Rank.THREE),
        s2
    ];

    const hand = new Hand(mockDeck);
    const pokerEval = new PokerEvaluator(hand);

    if (
        pokerEval.cardsCounted.length !== 4 ||
        !pokerEval.cardsCounted[0].isEqual(k1) ||
        !pokerEval.cardsCounted[1].isEqual(k2) ||
        !pokerEval.cardsCounted[2].isEqual(s1) ||
        !pokerEval.cardsCounted[3].isEqual(s2) 
    ) {
        console.log("Correct two pair cards test FAILED");
    } else {
        console.log("Correct two pair cards test PASSED");
    }

    if (pokerEval.handType !== "two_pair") {
        console.log("Two pair hand type test FAILED");
    } else {
        console.log("Two pair hand type test PASSED");
    }
}

function testThreeOfKind() {
    const q1 = new Card(Suit.HEARTS, Rank.QUEEN);
    const q2 = new Card(Suit.CLUBS, Rank.QUEEN);
    const q3 = new Card(Suit.DIAMONDS, Rank.QUEEN);

    const mockDeck = [q1, q2, q3,
        new Card(Suit.SPADES, Rank.FIVE),
        new Card(Suit.HEARTS, Rank.TWO)
    ];

    const hand = new Hand(mockDeck);
    const pokerEval = new PokerEvaluator(hand);

    if (
        pokerEval.cardsCounted.length !== 3 ||
        !pokerEval.cardsCounted[0].isEqual(q1) ||
        !pokerEval.cardsCounted[1].isEqual(q2) ||
        !pokerEval.cardsCounted[2].isEqual(q3)
    ) {
        console.log("Correct three of a kind cards test FAILED");
    } else {
        console.log("Correct three of a kind cards test PASSED");
    }

    if (pokerEval.handType !== "three_of_a_kind") {
        console.log("Three of a kind hand type test FAILED");
    } else {
        console.log("Three of a kind hand type test PASSED");
    }
}

function testFourOfKind() {
    const n1 = new Card(Suit.HEARTS, Rank.NINE);
    const n2 = new Card(Suit.CLUBS, Rank.NINE);
    const n3 = new Card(Suit.DIAMONDS, Rank.NINE);
    const n4 = new Card(Suit.SPADES, Rank.NINE);

    const mockDeck = [n1, n2, n3, n4,
        new Card(Suit.HEARTS, Rank.ACE)
    ];

    const hand = new Hand(mockDeck);
    const pokerEval = new PokerEvaluator(hand);

    if (
        pokerEval.cardsCounted.length !== 4 ||
        !pokerEval.cardsCounted[0].isEqual(n1) ||
        !pokerEval.cardsCounted[1].isEqual(n2) ||
        !pokerEval.cardsCounted[2].isEqual(n3) ||
        !pokerEval.cardsCounted[3].isEqual(n4)
    ) {
        console.log("Correct four of a kind cards test FAILED");
    } else {
        console.log("Correct four of a kind cards test PASSED");
    }

    if (pokerEval.handType !== "four_of_a_kind") {
        console.log("Four of a kind hand type test FAILED");
    } else {
        console.log("Four of a kind hand type test PASSED");
    }
}

function testFullHouse() {
    const t1 = new Card(Suit.HEARTS, Rank.TEN);
    const t2 = new Card(Suit.CLUBS, Rank.TEN);
    const t3 = new Card(Suit.DIAMONDS, Rank.TEN);
    const f1 = new Card(Suit.SPADES, Rank.FOUR);
    const f2 = new Card(Suit.HEARTS, Rank.FOUR);

    const mockDeck = [t1, t2, t3, f1, f2];

    const hand = new Hand(mockDeck);
    const pokerEval = new PokerEvaluator(hand);

    if (
        pokerEval.cardsCounted.length !== 5
    ) {
        console.log("Correct full house cards test FAILED");
    } else {
        console.log("Correct full house cards test PASSED");
    }

    if (pokerEval.handType !== "full_house") {
        console.log("Full house hand type test FAILED");
    } else {
        console.log("Full house hand type test PASSED");
    }
}

function testStraight() {
    const cards = [
        new Card(Suit.CLUBS, Rank.FIVE),
        new Card(Suit.DIAMONDS, Rank.SIX),
        new Card(Suit.SPADES, Rank.SEVEN),
        new Card(Suit.HEARTS, Rank.EIGHT),
        new Card(Suit.HEARTS, Rank.NINE)
    ];

    const hand = new Hand(cards);
    const pokerEval = new PokerEvaluator(hand);

    if (pokerEval.cardsCounted.length !== 5) {
        console.log("Correct straight cards test FAILED");
    } else {
        console.log("Correct straight cards test PASSED");
    }

    if (pokerEval.handType !== "straight") {
        console.log("Straight hand type test FAILED");
    } else {
        console.log("Straight hand type test PASSED");
    }
}

function testFlush() {
    const cards = [
        new Card(Suit.HEARTS, Rank.ACE),
        new Card(Suit.HEARTS, Rank.JACK),
        new Card(Suit.HEARTS, Rank.SEVEN),
        new Card(Suit.HEARTS, Rank.THREE),
        new Card(Suit.HEARTS, Rank.EIGHT)
    ];

    const hand = new Hand(cards);
    const pokerEval = new PokerEvaluator(hand);

    if (pokerEval.cardsCounted.length !== 5) {
        console.log("Correct flush cards test FAILED");
    } else {
        console.log("Correct flush cards test PASSED");
    }

    if (pokerEval.handType !== "flush") {
        console.log("Flush hand type test FAILED");
    } else {
        console.log("Flush hand type test PASSED");
    }
}

function testStraightFlush() {
    const cards = [
        new Card(Suit.SPADES, Rank.FIVE),
        new Card(Suit.SPADES, Rank.SIX),
        new Card(Suit.SPADES, Rank.SEVEN),
        new Card(Suit.SPADES, Rank.EIGHT),
        new Card(Suit.SPADES, Rank.NINE)
    ];

    const hand = new Hand(cards);
    const pokerEval = new PokerEvaluator(hand);

    if (pokerEval.cardsCounted.length !== 5) {
        console.log("Correct straight flush cards test FAILED");
        console.log(pokerEval.cardsCounted);
    } else {
        console.log("Correct straight flush cards test PASSED");
    }

    if (pokerEval.handType !== "straight_flush") {
        console.log("Straight flush hand type test FAILED");
    } else {
        console.log("Straight flush hand type test PASSED");
    }
}