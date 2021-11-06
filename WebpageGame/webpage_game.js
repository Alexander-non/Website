var langClicked = 0;
var themeClicked = 0;
var pressed = 0;


document.addEventListener("keydown", function (event) {
    if (event.key === 'm') {
        pressed++;
    if (pressed % 2 == 0) {
        document.getElementById("menu-sidepage").style.width = "0%";
        document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
        document.getElementById("blackscreen").style.display = "none";
    } else {
        document.getElementById("menu-sidepage").style.width = "50%";
        setTimeout(
            function() {
                document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
                }, 250
        )
        document.getElementById("blackscreen").style.display = "block";
        }
    }
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------      Game Content      -------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


var xPlayerPosition = 0;
var xPlayerVelocity = 0;
var BackgroundMovement = 0;
var movementToggle = true;






/*------------------------------------------------------------------   CHARACTER MOVEMENTS   -------------------------------------------------------------*/
var MovementRight = function() {
    xPlayerPosition += 10;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement += 10;
    console.log(BackgroundMovement)

    //Charcter animation for running
    if (MovementRight.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "Textures/Character/slimeAttackRight.gif";}, 500);
    MovementRight.done = true;
};
var MovementLeft = function() {
    xPlayerPosition -= 10;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement -= 10;
    console.log(BackgroundMovement)


    //Charcter animation for running
    if(MovementLeft.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "Textures/Character/slimeAttackLeft.gif";}, 500);
    MovementLeft.done = true;
};

function BackgroundMoving() {
    //Moving generated trees
    document.getElementById("forestPart1").style.marginLeft = -BackgroundMovement;      //First forest moving
    document.getElementById("forestPartX").style.marginLeft = -BackgroundMovement;     //Second forest moving
    for (let index = 0; index < numberOfForests; index++) {
            ForestPart = "forestPartX" + (index + 2);                                   //Grabbing all of the Trees
            ForestCurrentPosition = ForestPosition[index] - BackgroundMovement;        //Making a current position tracking variable
            
            document.getElementById(ForestPart).style.marginLeft = ForestCurrentPosition;       //Moving generated forests
            /*console.log(ForestPart, "'s x-position is", ForestCurrentPosition, "and the its staring position is:", ForestPosition[index]) //Loging the position of trees*/
    };
    //Moving generated enemies
    for (let index = 0; index < numberOfEnemiesForests; index++) {
            Enemy = "enemy-hitbox" + (index + 1);                                                  //Grabbing all of the enemies
            EnemiesCurrentPosition = EnemyPosition[index]  - BackgroundMovement;        //Making a current position tracking variable
            
            document.getElementById(Enemy).style.marginLeft = EnemiesCurrentPosition;      //Moving generated enemies
            //console.log(Enemy, "'s x-position is", EnemiesCurrentPosition, "and the its staring position is:", EnemyPosition[index])
    };
};

document.addEventListener("keydown", function (event) {
switch (event.keyCode) {
    case 68:
        if (movementToggle == true) {
            MovementRight();
            BackgroundMoving();
            Collision();
        } else {
            console.log("You cannot move!")
        };
        //console.log('The "x" position is equal to: ', xPlayerVelocity)
        break;
    case 65:
        if (movementToggle == true) {
            MovementLeft();
            BackgroundMoving();
            Collision();
        };
        //console.log('The "x" position is equal to: ', xPosition)
        break;
    case 83:
        yPosition += 10;
        console.log('The "y" position is equal to: ', yPosition)
        document.getElementById("character").style.marginTop = yPosition;
        break;
    case 87:
        yPosition -= 10;
        console.log('The "y" position is equal to: ', yPosition)
        document.getElementById("character").style.marginTop = yPosition;
        break;
    default:
        break;
    }
});
document.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 68:
            MovementRight.done = false;
            document.getElementById("characterSkin").src = "Textures/Character/slimeIdleRight.gif";
            break;
        case 65:
            MovementLeft.done = false;
            document.getElementById("characterSkin").src = "Textures/Character/slimeIdleLeft.gif";
            break;
        default:
            break;}
});



/*---------------------------------------------------------------------     GENERATING GAME ASSETS     ----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

window.onload = function() {
    GeneratingTrees(); 
    EnemyGeneration();
};


var ForestPosition = [];
var EnemyPosition = [];
var numberOfForests = 100;
var numberOfEnemiesForests = 5;



/*---------------------------------------------------------------------     TREES     ----------------------------------------------------------------*/
marginLeftInPx = 300;
function GeneratingTrees() {
    //Generator more forest after each other
    for (let index = 0; index < numberOfForests; index++) {

    // Create a clone of element with the selected id:
    let clone = document.querySelector('#forestPartX').cloneNode( true );

    // Change the id attribute of the newly created element:
    number = index + 2;
    clone.setAttribute('id', 'forestPartX' + number);

    // Append the newly created element on element you select 
    document.querySelector('section').appendChild(clone);

    //Creating variables to make my work easier
    topInPx = "-910px";
    borderToSee = "1px solid #000000";
    SizeInPx = "1000px";
    positionToSee = "absolute";
    
    //Customizing the generated tree so I can see them clearer
    clone.style.top = topInPx;
    clone.style.marginLeft = marginLeftInPx;
    clone.style.border = borderToSee
    clone.style.position = positionToSee;
    clone.style.height = SizeInPx;
    clone.style.width = SizeInPx;
    ForestPosition.push(marginLeftInPx);
    RTD = Math.floor(Math.random() *(250 - 200) + 200); //RandomTreeDistance
    marginLeftInPx += RTD;
}};


/*-------------------------------------------------------------------------   ENEMIES   ---------------------------------------------------------------------*/
function ForestEnemies() {

    HitboxWidth = 150;
    HitboxHeight = HitboxWidth / 1.5;
    HitboxTop = -100;
    EnemyStartingPosition = 3000;
    offset = EnemyStartingPosition - HitboxWidth;
    RandomSpacing = 0;


    for (let index = 0; index < numberOfEnemiesForests; index++) {
        EnemyMovablePosition = EnemyStartingPosition + RandomSpacing;
        

        //Creating new div element as a new enemy hitbox and adding it to the game area
        enemyHitbox = document.createElement("div");
        document.querySelector('section').appendChild(enemyHitbox);

        enemySkin = document.createElement("img");
        enemyHitbox.appendChild(enemySkin);
        /*enemyIDSkin = document.createAttribute("id", "enemySkin");
        enemySkin.setAttribute("id", "enemySkin");*/
        enemySkin.src = "Textures/Enemies/Normals/Forest/Blue Forest Slime Idling.gif";
        enemySkin.style.width = 175;
        enemySkin.style.position = "absolute"
        enemySkin.style.top = HitboxTop / 2.5;
        enemySkin.style.left = -10;
        enemySkin.style.transform = "scaleX(1)";
        console.log(EnemyPosition)


        
        number = index + 1;
        newID = document.createAttribute("id", "enemy-hitbox" + number);
        enemyHitbox.setAttribute("id", "enemy-hitbox" + number);
        
    

        document.getElementById("enemy-hitbox" + number).style.width = HitboxWidth;
        document.getElementById("enemy-hitbox" + number).style.height = HitboxHeight;
        document.getElementById("enemy-hitbox" + number).style.position = "absolute";
        document.getElementById("enemy-hitbox" + number).style.marginLeft = EnemyMovablePosition;
        document.getElementById("enemy-hitbox" + number).style.top = HitboxTop;
        document.getElementById("enemy-hitbox" + number).style.zIndex = "996";
        /*document.getElementById("enemy-hitbox" + number).style.backgroundColor = "red";*/

        //Putting the enemies generated position to a list
        EnemyPosition.push(EnemyMovablePosition);
        //Generating random number between 1000-800 and adding it to current enemy position
        RandomSpacing += 1000;
        EnemyMovablePosition += RandomSpacing;
}};

function ForestBoss() {};

function EnemyGeneration() {
    ForestEnemies();
    ForestBoss();    
};

function Battle() {
    movementToggle = false;
    window.open("battle.html", '_blank');
}

function Collision() {
    for (let index = 0; index < numberOfEnemiesForests; index++) {
        Enemy = "enemy-hitbox" + (index + 1);                                                        //Grabbing all of the enemies
        EnemiesCurrentPosition = EnemyPosition[index] - 580;                                        //Making a variable to check there current position
        
        if (BackgroundMovement == EnemiesCurrentPosition) {
            //Battle
            Battle();
            console.log("Reached enemy");
        };
        //console.log(Enemy, "'s x-position is", EnemiesCurrentPosition, "and the its staring position is:", EnemyPosition[index])
    };    
};