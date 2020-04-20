// IconButton.js

class IconButton extends Phaser.GameObjects.Container {
	constructor(scene, x, y, data) {
		super(scene, x, y);

		this.setOrigin(0.5);
		let icon = this.scene.add.image(x, y, 'factions', data.frame)
			.setOrigin(0.5)
			.setScale(config.scale);
		let text = this.scene.add.text(x + 25, y, data.key.toUpperCase(), {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(0, 0.7)
			.setScale(0.125);

		if (!data.enabled) {
			icon.tint = 0x666666;
			text.tint = 0x666666;
		}
		
		this.setInteractive(new Phaser.Geom.Rectangle(-17, -17, 42 + text.width * 0.125, 34), Phaser.Geom.Rectangle.Contains);
		this.on('pointerover', () => {
    	 	if (data.enabled) {
    	 		text.setFill('#00ff00');
    	 	}
    	}, this);
    	this.on('pointerout', () => {
    	 	text.setFill('#ffffff');
    	}, this);
    	this.on('pointerup', () => {
    		if (data.enabled) {
    			this.scene.scene.start('FleetScene', {faction: data.key});
    		}
    	}, this);

		this.scene.add.existing(this);
	}
}