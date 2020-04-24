// labelButton.js

class LabelButton extends Phaser.GameObjects.Container {
	constructor(scene, x, y, label) {
		super(scene, x, y);

		let text = this.scene.add.bitmapText(x, y, 'customfont', label.toUpperCase(), 12)
			.setOrigin(0, 0.5);

		this.setInteractive(new Phaser.Geom.Rectangle(0, -text.height / 2, text.width, text.height / 2), Phaser.Geom.Rectangle.Contains);
		this.on('pointerover', () => {
    	 	text.setTint(0x00ff00);
    	}, this);
    	this.on('pointerout', () => {
    	 	text.setTint(0xffffff);
    	}, this);

		this.scene.add.existing(this);
	}
}