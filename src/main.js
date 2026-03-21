import GameScene from "./scenes/GameScene.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [GameScene]
};

new Phaser.Game(config);