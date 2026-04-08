import GameScene from "./scenes/GameScene.js";
import { testDeckSize, testDeckDisplay } from "./tests/pokerTests.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [GameScene]
};

new Phaser.Game(config);

testDeckSize();
testDeckDisplay();