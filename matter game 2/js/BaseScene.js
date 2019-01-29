class BaseScene extends Phaser.Scene {
    constructor(id) {
        super(id);
        this.id = id;
        this.tileDataKey;
        this.tileDataSource;
    }
    preload() {
        this.load.tilemapTiledJSON(this.tileDataKey, this.tileDataSource);
    }
    create() {
        const map = this.make.tilemap({ key: this.tileDataKey });
        const tileset = map.addTilesetImage('kenney-tileset');
        this.background = map.createStaticLayer('background', tileset, 0, 0);
        this.land = map.createStaticLayer('platforms', tileset, 0, 0);
        this.foreground = map.createStaticLayer('foreground', tileset, 0, 0);
        this.land.setCollisionByProperty({ collides: true });

        const myLand = this.matter.world.convertTilemapLayer(this.land); //TODO

        this.player = new Player(this, 64, map.heightInPixels - 128);


        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.matter.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player.sprite, false, 0.5, 0.5);

        this.keys = this.input.keyboard.addKeys({
            space: Phaser.Input.Keyboard.KeyCodes.SPACE
        });

}
    update(time, delta) {

        this.player.update();
    }
}