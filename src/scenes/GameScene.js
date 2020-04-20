// GameScene.js
class GameScene extends Phaser.Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    init() {
        this.playerShips1 = [];
        this.playerShips2 = [];

        this.gameStates = [
            'PLANNING',
            'SYSTEM',
            'ACTIVATION',
            'ENGAGEMENT',
            'END'
        ];

        this.count = 0;
    }

    preload() {}

    create() {
        let goodGuy = new Ship(this, 'x_wing', 'Luke Skywalker', 200, 200);
        this.playerShips1.push(goodGuy);
        let badGuy = new Ship(this, 'tie_fighter', 'Iden Versio', 400, 200);
        this.playerShips2.push(badGuy);

        for (let p1ship of this.playerShips1) {
            p1ship.draw();
        }

        for (let p2ship of this.playerShips2) {
            p2ship.draw();
        }

        this.txt = this.add.text(0, 0, this.gameStates[0]);
    }

    update() {
        let currentGameState = Math.floor(this.count) % 5;
        this.txt.text = this.gameStates[currentGameState];
        this.count += 0.01;
    }
}