// LoadScene.js

class LoadScene extends Phaser.Scene {
	constructor() {
		super({key: 'LoadScene'});
	}

	init() {}

	preload() {
		// load all dem assets
    	this.load.spritesheet('factions', 'assets/factions.png', {frameWidth: 17, frameHeight: 17});
    	this.load.image('x_wing', 'assets/player_test.png');
        this.load.image('tie_fighter', 'assets/enemy_test.png');
        this.load.image('ship_base', 'assets/base.png');
        this.load.image('ship_firingArc', 'assets/firing_arc.png');
        this.load.image('dot', 'assets/dot.png');

        let loadingBar = this.add.graphics({
        	fillStyle: 0xffd515
        });

        this.add.text(config.width / 2, 200, 'LOADING...', {fontFamily: 'awkward', fontSize: '256px'})
            .setFill('#ffd515')
            .setOrigin(0.5, 0.7)
            .setScale(0.125);
        this.load.on('progress', (percent) => {
        	loadingBar.fillRect(0, config.height / 2 - 5, config.width * percent, 10);
        });
	}

	create() {
		this.scene.start('MenuScene');
	}

	update() {}
}
