var game;
var config = {
    pixelArt: true,
    zoom: 2,
    type: Phaser.AUTO,
    width: 460,
    height: 460,
    backgroundColor: 0x222233,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    // REMOVED FOR TESTING
    scene: [LoadScene, TitleScene, MenuScene, FleetScene, GameScene]
};

window.addEventListener('load', () => {
    game = new Phaser.Game(config);
    // ADDED FOR TESTING
    //game.scene.add('FleetScene', FleetScene);
    //game.scene.start('FleetScene', {faction: 'Rebellion'});
    //game.scene.start('FleetScene', {faction: 'Galactic Empire'});
});