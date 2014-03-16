var gravity = 600;

function World() {
    
    var wallWidth = 4;
    
    this.ground = makeGround();
    
    this.rick = new Rick();
    
    this.bricks = game.add.group();
    
    this.wall = new Wall(wallWidth);
    
    this.canBrickFall = true;
    
    this.heightText = MakeLabel(0, 0, '', '32px Arial', '#ff0000');
    
    this.destroy = function () {
        this.fallingBrick.destroy();
        this.bricks.destroy();
        this.rick.destroy();
        this.heightText.destroy();
    };
    
    this.update = function (delta) {
        this.elapsedTime += delta;
        
        this.heightText.content = 'Height: ' + this.wall.height + 'm';
        
        if (this.canBrickFall) {
            var lane = this.wall.nextLane();
            
            var brick = new Brick(lane, this.wall.isOffset(lane), this.wall.width);
            this.fallingBrick = brick;
            
            this.wall.addBrick(lane);
            this.canBrickFall = false;
        }
        
        game.physics.collide(this.rick.sprite, this.ground);
        game.physics.collide(this.rick.sprite, this.bricks);
        game.physics.overlap(this.rick.sprite, this.fallingBrick.sprite, rickCollisionCallback, null, this);
        
        if (this.fallingBrick) {
            game.physics.collide(this.fallingBrick.sprite, this.bricks, brickCollisionCallback, processBrickCollision, this);
        }
        if (this.fallingBrick) {
            game.physics.collide(this.fallingBrick.sprite, this.ground, brickCollisionCallback, processBrickCollision, this);
        }
        
        this.rick.update();
    };
    
}

function processBrickCollision() {
    return true;
}

function rickCollisionCallback(rick, other) {
    
    if (other === this.fallingBrick.sprite) {
        //check if Rick was crushed
        var rickCenterX = rick.body.x + rick.body.width / 2
        
        var forgivingness = 10;
        
        if (other.body.y < rick.body.y + forgivingness && rickCenterX > other.body.x && rickCenterX < other.body.x + other.body.width) {
            rick.destroy();
        }
    }
    
}

function brickCollisionCallback(brick, other) {
    this.fallingBrick = null;
    this.bricks.add(brick);

    brick.body.immovable = true;
    brick.body.gravity.y = 0;
    this.canBrickFall = true; //one brick falling at a time
}

function makeGround() {
    var groundWidth = 640;
    var groundHeight = 32;
    
    var x = 0;
    var y = windowHeight - groundHeight;
    
    var ground = game.add.sprite(x, y, 'ground');
    ground.body.immovable = true;
    
    return ground;
}