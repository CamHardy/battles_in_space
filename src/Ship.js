// Ship.js

class Ship extends Phaser.GameObjects.Container {
    constructor(scene, type, pilotName, x, y) {
        super(scene, x, y);
        
        //TODO: refactor local shipData to be this.shipData, do not assign all these stats to separate vars
        // tbh it might be best to not do that, since shipData also includes all elligible pilots and upgrades, even though this ship should only have one pilot and 0+ upgrades
        let shipData = Function('"use strict";return(' + type + ')')();
        if (shipData) {
            this.key = shipData.key;
            this.name = shipData.name;
            this.weapon = shipData.stats['weapon'];
            this.agility = shipData.stats['agility'];
            this.hull = shipData.stats['hull'];
            this.shield = shipData.stats['shield'];

            //TODO: handle error condition where invalid pilot name is used/no matching pilot is found
            for (let pilot of shipData.pilots) {
                if (pilot.name == pilotName) {
                    this.pilot = pilot;
                }
            }
        }
    }

    draw() {
        this.drawBase();
        this.drawInfo();
        this.drawShip(); 

        this.scene.add.existing(this);
    }

    drawBase() {
        let base = this.scene.add.image(0, 0, 'ship_base')
            .setScale(config.scale);
        this.add(base);

        // draw the base decorations (firing arc, bullseye, initiative, etc)
        //TODO: only draw the firing arcs relevant to the ship type (front/rear/both)
        let firingArc = this.scene.add.image(0, -4 * config.scale, 'ship_firingArc')
            .setScale(config.scale);
        switch (this.pilot.faction) {
            case 'Rebellion':
                firingArc.tint = 0xff0000;
                break;
            case 'Galactic Empire':
                firingArc.tint = 0x00ff00;
                break;
        }
        this.add(firingArc);
    }

    drawInfo() {
        // draw stats to the side
        for (let i = 0; i < this.pilot.initiative; i++) {
            let initiative = this.scene.add.image((12 + (2 * i)) * config.scale, -8 * config.scale, 'dot')
                .setTint(0xdd7700)
                .setScale(config.scale);
            this.add(initiative);
        }

        for (let w = 0; w < this.weapon; w++) {
            let weapon = this.scene.add.image((12 + (2 * w)) * config.scale, 0 * config.scale, 'dot')
                .setTint(0xdd2222)
                .setScale(config.scale);
            this.add(weapon);
        }
        
        for (let a = 0; a < this.agility; a++) {
            let agility = this.scene.add.image((12 + (2 * a)) * config.scale, 2 * config.scale, 'dot')
                .setTint(0x88dd44)
                .setScale(config.scale);
            this.add(agility);
        }

        for (let h = 0; h < this.hull; h++) {
            let hull = this.scene.add.image((12 + (2 * h)) * config.scale, 4 * config.scale, 'dot')
                .setTint(0xdddd44)
                .setScale(config.scale);
            this.add(hull);
        }

        for (let s = 0; s < this.shield; s++) {
            let shield = this.scene.add.image((12 + (2 * s)) * config.scale, 6 * config.scale, 'dot')
                .setTint(0x44aaff)
                .setScale(config.scale);
            this.add(shield);
        }

        for (let c = 0; c < (this.pilot.force_capacity || this.pilot.charge_capacity); c++) {
            let capacity = this.scene.add.image((12 + (2 * c)) * config.scale, 8 * config.scale, 'dot')
                .setTint(this.pilot.force_capacity ? 0xaa66dd : 0xddaa22)
                .setScale(config.scale);
            this.add(capacity);
        }

        // draw pilot name below
        let p_name = this.scene.add.text(0, -1 + (5 * config.scale), this.pilot.name, {fontFamily: 'toy', fontSize: `${128*config.scale}px`})
            .setScale(0.125)
            .setOrigin(0.5 + (0.01 * (config.scale % 2)), 0);
        this.add(p_name);
    }

    drawShip() {
        let sprite = this.scene.add.sprite(0, 0, this.key)
            .setScale(config.scale);
        this.add(sprite);
    }
}