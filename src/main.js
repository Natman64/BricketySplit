var windowWidth = 640;
var windowHeight = 480;

var backgroundColor = '#00FFFF';

var game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

var currentTime;
var lastTime;

var state;

var initialized = false;
var mobile = false;

function preload() {
    game.load.image('ground', 'assets/ground.png');
    game.load.image('brick', 'assets/brick.png');
    game.load.image('halfbrick', 'assets/halfbrick.png');
}

function create() {
    
    game.stage.backgroundColor = backgroundColor;
    
    setState(new MainMenu());
    
    lastTime = 0;
    
}

function update() {
    
    if (!initialized) {
        if (!game.device.desktop) {
            mobile = true;
            
            game.stage.fullScreenScaleMode = Phaser.StageScaleMode.EXACT_FIT;
            game.stage.scale.startFullScreen();
        }
        
        initialized = true;
    }
    
    currentTime = game.time.now;
    var delta = currentTime - lastTime;
    
    state.update(delta);
    
    lastTime = currentTime;
    
}

function render() {
    
    state.render();
    
}

function setState(newState) {
    if (state) {
        state.hide(newState);
    }
    
    state = newState;
    state.show();
}