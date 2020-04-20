// MenuScene.js

class MenuScene extends Phaser.Scene {
    constructor() {
        super({key: 'MenuScene'});
    }

    init() {
    	this.factionItems = [
    		{key: 'First Order', frame: 0, enabled: false},
    		{key: 'Galactic Empire', frame: 1, enabled: true},
    		{key: 'Galactic Republic', frame: 2, enabled: false},
    		{key: 'Rebellion', frame: 3, enabled: true},
    		{key: 'Resistance', frame: 4, enabled: false},
    		{key: 'Scum and Villainy', frame: 5, enabled: false},
    		{key: 'Separatist Alliance', frame: 6, enabled: false}
    	];
    	this.menuItems = [];
    }

    preload() {}

    create() {
    	this.add.text(config.width/2, 40, 'CHOOSE A FACTION:', {fontFamily: 'awkward', fontSize: '256px'})
            .setOrigin(0.5)
            .setScale(0.25);

    	for (let i in this.factionItems) {
    		new IconButton(this, config.width / 2, i * 50 + 110, this.factionItems[i]);
    	}
    }
    
    update() {}
}