const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    backgroundColor: "#ffffff",
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            gravity: { y: 0}
        }
    },
    scene : {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

function preload() {
    this.load.image("test_character", "assets/test_character.png");
}

function create() {
    this.add.image(0, 10, "test_character");
}

function update() {
    
}