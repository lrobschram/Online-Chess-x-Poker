export default class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.add.text(300, 400, "Poker Chess v2", {
      fontSize: "32px",
      color: "#ffffff"
    });
  }
}