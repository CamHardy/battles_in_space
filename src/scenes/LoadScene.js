// LoadScene.js

class LoadScene extends Phaser.Scene {
	constructor() {
		super({key: 'LoadScene'});
	}

	init() {}

	preload() {
		// load all dem assets
		this.load.bitmapFont('customfont', 'data/fonts/customfont.png', 'data/fonts/customfont.xml');
		this.load.spritesheet('factions', 'assets/factions.png', {frameWidth: 17, frameHeight: 17});
		this.load.image('titleLogo', 'assets/title.png');
		this.load.image('x_wing', 'assets/player_test.png');
		this.load.image('tie_fighter', 'assets/enemy_test.png');
		this.load.image('ship_base', 'assets/base.png');
		this.load.image('ship_firingArc', 'assets/firing_arc.png');
		this.load.image('dot', 'assets/dot.png');

		let loadingBar = this.add.graphics().fillStyle(0xffd515);

		this.load.on('progress', (percent) => {
			loadingBar.fillRect(0, config.height / 2 - 5, config.width * percent, 10);
		});
	}

	create() {
		this.scene.start('TitleScene');
	}

	update() {}
}
