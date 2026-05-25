import PokerAI1 from "../logic/PokerAI.js";
import Card from "../logic/Card.js";
import Hand from "../logic/Hand.js";
import { Suit, Rank } from "../logic/constants.js";

export default function runAI1Tests() {
    console.log("~~~~Running AI1 tests~~~~");
    runGreedyFlushTest();

}

function runGreedyFlushTest() {
    const cards = [
            new Card(Suit.HEARTS, Rank.ACE),
            new Card(Suit.HEARTS, Rank.JACK),
            new Card(Suit.HEARTS, Rank.KING),
            new Card(Suit.HEARTS, Rank.SEVEN),
            new Card(Suit.CLUBS, Rank.JACK),
            new Card(Suit.HEARTS, Rank.THREE),
            new Card(Suit.HEARTS, Rank.EIGHT)
        ];

    const hand = new Hand(cards);
    const bot = new PokerAI1();
    bot.hand = hand;

    const actualFlush = bot.greedyFlush();
    const expectedFlush = new Hand([
            new Card(Suit.HEARTS, Rank.ACE),
            new Card(Suit.HEARTS, Rank.KING),
            new Card(Suit.HEARTS, Rank.JACK),
            new Card(Suit.HEARTS, Rank.EIGHT),
            new Card(Suit.HEARTS, Rank.SEVEN)
        ]);
    
    if (actualFlush.isEqual(expectedFlush)) {
        console.log("Greedy Flush Test PASSED");
    } else {
        console.log("Greedy Flush Test FAILED");
        console.log("Greedy Expected", expectedFlush);
        console.log("Greedy Actual", actualFlush);
    }
    
}