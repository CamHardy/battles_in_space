// IconButton.js

class IconButton extends Phaser.GameObjects.Container {
	constructor(scene, x, y, data) {
		super(scene, x, y);

		//this.setOrigin(0.5);
		let icon = this.scene.add.image(x, y, 'factions', data.frame)
			.setOrigin(0.5)
			.setScale(2);
		let text = this.scene.add.bitmapText(x + 25, y, 'customfont', data.key.toUpperCase(), 12)
      .setTint(0xffffff)
			.setOrigin(0, 0.25);

		if (!data.enabled) {
			icon.setTint(0x666666);
			text.setTint(0x666666);
		}
    
		this.setInteractive(new Phaser.Geom.Rectangle(-17, -17, 42 + text.width, icon.height * config.zoom), Phaser.Geom.Rectangle.Contains);
		this.on('pointerover', () => {
  	 	if (data.enabled) {
  	 		text.setTint(0x00ff00);
  	 	}
  	}, this);
  	this.on('pointerout', () => {
      if (data.enabled) {
  	    text.setTint(0xffffff);
      }
  	}, this);
  	this.on('pointerup', () => {
  		if (data.enabled) {
  			this.scene.scene.start('FleetScene', {faction: data.key});
  		}
  	}, this);

		this.scene.add.existing(this);
	}
}