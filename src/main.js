var game;
var config = {
    antialias: false,
    type: Phaser.AUTO,
    width: 460,
    height: 460,
    backgroundColor: 0x222233,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // REMOVED FOR TESTING
    scene: [LoadScene, MenuScene, FleetScene, GameScene],
    scale: 2
};

window.addEventListener('load', () => {
    game = new Phaser.Game(config);
    // ADDED FOR TESTING
    //game.scene.add('FleetScene', FleetScene);
    //game.scene.start('FleetScene', {faction: 'Rebellion'});
    //game.scene.start('FleetScene', {faction: 'Galactic Empire'});
});