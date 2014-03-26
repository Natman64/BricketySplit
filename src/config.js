//debug flags

var resetScores = false; //                              TODO IT WOULD BE WAY BAD TO LEAVE THIS ENABLED
var alwaysMobile = true;   //                      TODO do not leave this enabled

//end debug flags

//enemy spawn pattern

var minWaveEnemyDifficulty = 0.0;               //TODO raise this
var waveEnemyChance = 0.33;                     //TODO tweak this

var maxUFOs = 5;

var minUFODifficulty = 0.0;                     //TODO make this higher

var ufoChance = 1.0;                        //TODO tweak this

//end enemy spawn pattern

var windowWidth = 800;
var windowHeight = 480;

var brickHeight = 32;
var brickWidth = 96;

var wallWidth = 6;
var wallLeftX = (windowWidth - brickWidth * wallWidth) / 2;
var wallRightX = windowWidth - wallLeftX;

var gravity = 1600;

var minBrickGravity = 1000;
var maxBrickGravity = 1500;

var cameraSpeed = 32;
var fullDifficultyTime = 5 * 60 * 1000;
                      // ^Time it takes for the game to reach full difficulty, in minutes
var scrollStartRows = 3;

var rickWidth = 16;
var rickHeight = 24;

var ENEMY_LEFT = 0;
var ENEMY_RIGHT = 1;
var ENEMY_BOTTOM = 2;

var enemyMinSpeed = 64;
var enemyMaxSpeed = 256;

var groundHeight = 32;

var brickFallDelay = 2500; //2.5 seconds till bricks start falling

var arrowDownHeight = 48;

var laserSpeed = 800;

var buttonWidth = 52;
var buttonHeight = 48;

var touchButtonY = windowHeight - buttonHeight - 4;

var moveLeftButtonX = 24;
var moveRightButtonX = 24 + buttonWidth + 4;
var jumpButtonX = windowWidth - 24 - buttonWidth;