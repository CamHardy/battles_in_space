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

    this.playButton = this.add.bitmapText(config.width/2, 275, 'customfont', 'PLAY', 24)
      .setOrigin(0.5)
      .setTint(0xffd515);
    this.optionButton = this.add.bitmapText(config.width / 2, 325, 'customfont', 'OPTIONS', 24)
      .setOrigin(0.5)
      .setTint(0xffd515);
    this.quitButton = this.add.bitmapText(config.width / 2, 375, 'customfont', 'QUIT', 24)
      .setOrigin(0.5)
      .setTint(0xffd515);

    let playWidth = this.playButton.width;
    let playHeight = this.playButton.height;

    // play
    this.playButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, playWidth, playHeight / 2), Phaser.Geom.Rectangle.Contains);
    this.playButton.on('pointerover', () => {
      this.playButton.setText('- PLAY -');
    });
    this.playButton.on('pointerout', () => {
      this.playButton.setText('PLAY');
    });
    this.playButton.on('pointerup', () => {
      this.scene.start('MenuScene');
    });

    // options
    this.optionButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.optionButton.width, this.optionButton.height / 2), Phaser.Geom.Rectangle.Contains);
    this.optionButton.on('pointerover', () => {
      this.optionButton.text = '- OPTIONS -';
    });
    this.optionButton.on('pointerout', () => {
      this.optionButton.text = 'OPTIONS';
    });

    // quit
    this.quitButton.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.quitButton.width, this.quitButton.height / 2), Phaser.Geom.Rectangle.Contains);
    this.quitButton.on('pointerover', () => {
      this.quitButton.setText('- QUIT -');
    });
    this.quitButton.on('pointerout', () => {
      this.quitButton.setText('QUIT');
    });
    this.quitButton.on('pointerup', () => {
      // redundant in the web iteration, but when ported to electro this will close the window and quit the instance
    });
  }

  update() {}
}