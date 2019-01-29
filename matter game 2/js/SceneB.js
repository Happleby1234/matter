class SceneB extends BaseScene {
    constructor(){
        super('sceneB');
    }
    
    preload() {
        this.load.tilemapTiledJSON('slopes2', 'assets/tiles/slopes2.json');        
    }
    
    create() {
        super.create();
    }
    
    update(time, delta) {
        if (Phaser.Input.Keyboard.JustDown(this.keys.space)) {
            this.scene.switch('sceneA')
        }
        super.update();
    }
}