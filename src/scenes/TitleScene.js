// TitleScene.js

class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'});
  }

  init() {}

  preload() {}

  create() {
    // display title.png
    this.add.image(config.width / 2, 130, 'titleLogo');

    this.playButton = new MenuButton(this, config.width / 2, 275, 'PLAY', () => this.scene.start('MenuScene'));
    this.add.existing(this.playButton);

    this.optionButton = new MenuButton(this, config.width / 2, 325, 'OPTIONS', () => {/* TODO: go to menu screen */});
    this.add.existing(this.optionButton);

    this.quitButton = new MenuButton(this, config.width / 2, 375, 'QUIT', () => {/* TODO: quit electron app */});
    this.add.existing(this.quitButton);
  }

  update() {}
}