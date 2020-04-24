// MenuButton.js

class MenuButton extends Phaser.GameObjects.BitmapText {
  constructor(scene, x, y, text, callback) {
    super(scene, x, y, 'customfont', text, 24);
    this.setOrigin(0.5);
    this.setTint(0xffd515);

    let width = this.width;
    let height = this.height;
    this.setInteractive(new Phaser.Geom.Rectangle(0, 0, width, height), Phaser.Geom.Rectangle.Contains)
      .on('pointerover', () => {
        this.setText('- ' + text + ' -')
          .input.hitArea.setTo((this.width - width) / 2, 0, width, height);
      })
      .on('pointerout', () => {
        this.setText(text)
          .input.hitArea.setTo(0, 0, width, height);
      })
      .on('pointerup', () => {
        callback();
      });
  }
}