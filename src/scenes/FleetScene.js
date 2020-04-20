// FleetScene.js

class FleetScene extends Phaser.Scene {
	constructor() {
		super({key: 'FleetScene'});
	}

	init(data) {
		this.faction = data.faction;
		this.pointsRemaining = 200;
		// selectedFleet contains objects each with ship, pilot, and upgrades (if any) 
		this.availableShips = [];
		this.availablePilots = [];
		this.availableUpgrades = [];
		this.selectedFleet = [];
	}

	preload() {}

	create() {
		this.add.text(config.width/2, 40, 'BUILD YOUR FLEET', {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(0.5)
			.setScale(0.25);
		this.prtext = this.add.text(config.width - 15, config.height - 30, `POINTS REMAINING: ${this.pointsRemaining}`, {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(1, 0.5)
			.setScale(0.125);

		// display GO button if at least one ship and one pilot are selected, and pointsRemaining >= 0
		this.goButton = this.add.text(config.width / 2, config.height - 40, 'GO!', {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(0.5)
			.setScale(0.25)
			.setFill('#00ff00')
			.setVisible(false);

		this.goButton.setInteractive(new Phaser.Geom.Rectangle(0, 140, this.goButton.width, 100), Phaser.Geom.Rectangle.Contains);
		this.goButton.on('pointerover', () => {
			this.goButton.setFill('#ffffff');
		}, this);
		this.goButton.on('pointerout', () => {
			this.goButton.setFill('#00ff00');
		}, this);
		this.goButton.on('pointerup', () => {
			// go to the next scene
			// pass this.selectedFleet 
		}, this);

		this.availablePilots = pilots[this.faction];

		for (let pilot of this.availablePilots) {
			if (this.availableShips.findIndex(x => x.name == pilot.ship.name) === -1) {
				this.availableShips.push(pilot.ship);
			}
		}

		this.availableUpgrades = this.availableShips[0].upgrade_slots.concat(this.availablePilots[1].upgrade_slots);

		// USER STORY:
		// 1. pick faction
		// 2. pick ship
		// 3. pick pilot for ship
		// 4. pick upgrade(s) for ship
		// 5. repeat 2-4 maybe
		// 6. remove/change ships/pilots/upgrades
		
		this.add.text(config.width/2, 140, `YOUR FACTION IS: ${this.faction.toUpperCase()}`, {fontFamily: 'awkward', fontSize: '256px'})
			.setOrigin(0.5)
			.setScale(0.125);

		for (let s in this.availableShips) {
			new LabelButton(this, 10, 200 + 50 * s, this.availableShips[s].name);
		}
		for (let p in this.availablePilots) {
			new LabelButton(this, 180, 200 + 50 * p, this.availablePilots[p].name).on('pointerup', () => {
				this.pointsRemaining -= this.availablePilots[p].cost;
			}, this);
		}
		for (let u in this.availableUpgrades) {
			new LabelButton(this, 400, 200 + 50 * u, this.availableUpgrades[u]);
		}
	}

	update() {
		this.prtext.text = `POINTS REMAINING: ${this.pointsRemaining}`;
		this.prtext.setFill(this.pointsRemaining > 0 ? '#ffffff' : '#ff0000');
		if (this.selectedFleet.length && this.pointsRemaining >= 0) {
			this.goButton.setVisible(true);
		}
	}
}