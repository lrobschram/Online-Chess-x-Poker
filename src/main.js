import GameScene from "./scenes/GameScene.js";
import runDeckTests from "./tests/deckTests.js";
import runHandTests from "./tests/handTests.js";
import runPokerTests from "./tests/pokerTests.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [GameScene]
};

new Phaser.Game(config);

runDeckTests();
runHandTests();
runPokerTests();