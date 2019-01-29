class SceneA extends BaseScene {
    constructor() {
        super('sceneA');
        this.tileDataKey = 'slopes';
        this.tileDataSource = 'assets/tiles/slopes.json';
    }

    preload() {
        super.preload();
        this.load.image('kenney-tileset', 'assets/tiles/kenney-tileset-64px-extruded.png');
        this.load.spritesheet(
            'player',
            'assets/sprites/0x72-industrial-player-32px-extruded.png', {
                frameWidth: 32,
                frameHeight: 32,
                margin: 1,
                spacing: 2
            }
        );
    }

    create() {
        super.create();
    }

    update(time, delta) {
        if (Phaser.Input.Keyboard.JustDown(this.keys.space)) {
            this.scene.switch('sceneB')
        }
        super.update();
    }
}