const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    backgroundColor: "#5cb786",
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
    this.load.image("test_character", "static/assets/test_character.png");
}

function create() {
    let test_character = this.add.image(0, 0, "test_character").setOrigin(0,0);
}

function update() {
    
}