// labelButton.js

class LabelButton extends Phaser.GameObjects.Container {
	constructor(scene, x, y, label) {
		super(scene, x, y);

		let text = this.scene.add.text(x, y, label.toUpperCase(), {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(0, 0.5)
			.setScale(0.125);

		this.setInteractive(new Phaser.Geom.Rectangle(0, 0, text.width * 0.125, text.height * 0.07), Phaser.Geom.Rectangle.Contains);
		this.on('pointerover', () => {
    	 	text.setFill('#00ff00');
    	}, this);
    	this.on('pointerout', () => {
    	 	text.setFill('#ffffff');
    	}, this);

		this.scene.add.existing(this);
	}
}