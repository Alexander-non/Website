/*document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
}*/

function Volume() {
    let volumeNum = $("#volume-slider").val()/100
    const music = document.getElementById("music")
    music.volume = volumeNum;
};

var Pressed = false;
document.addEventListener("keydown", (event) => {
    if (event.keyCode === 77) {
        if (Pressed == true) {
            Pressed = false;
            document.getElementById("menu-sidepage").style.left = "-50%";
        } else {
            Pressed = true;
            document.getElementById("menu-sidepage").style.left = "2%";
            }
        }
});
$('document').ready(() => {
    Volume()
    $("#display").click(() => {
        $("#display-select-holder").slideToggle("slow", "swing");
    });
    $("#graphics").click(() => {
        $("#graphics-select-holder").slideToggle("slow", "swing");
    });
    $("#volume").click(() => {
        $("#volume-slider").slideToggle("slow", "swing");
    });
    $("#language").click(() => {
        $("#language-select-holder").slideToggle("slow", "swing");
    });
});

$("#volume-slider").change(() => {
    Volume()
});

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------      Game Content      -------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


var xPlayerPosition = 0;
var xPlayerVelocity = 0;
var BackgroundMovement = 0;
var isMoving = true;
var MovementSpeed = 10;





/*------------------------------------------------------------------   CHARACTER MOVEMENTS   -------------------------------------------------------------*/
function MovementRight() {
    xPlayerPosition += MovementSpeed;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement += MovementSpeed;
    //console.log(BackgroundMovement)

    //Charcter animation for running
    if (MovementRight.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "Textures/Character/slimeAttackRight.gif";}, 500);
    MovementRight.done = true;
};
function MovementLeft() {
    xPlayerPosition -= MovementSpeed;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement -= MovementSpeed;
    //console.log(BackgroundMovement)


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
    for (let x = 0; x < numberOfForests; x++) {
            ForestPart = "forestPartX" + (x + 2);                                                                 //Grabbing all of the Trees      
            document.getElementById(ForestPart).style.marginLeft = ForestPosition[x] - BackgroundMovement;       //Moving generated forests
    };
    //Moving generated enemies
    for (let x = EnemyPosition.length; x > 0; x--) {
            Enemy = "enemy-hitbox" + x;                                                               //Grabbing all of the enemies
            document.getElementById(Enemy).style.marginLeft = EnemyPosition[x-1]  - BackgroundMovement;      //Moving generated enemies
    };
};

document.addEventListener("keydown", function (event) {
switch (event.keyCode) {
    case 68:
        if (isMoving == true) {
            MovementRight();
            BackgroundMoving();
            Collision();
        } else {
            console.log("You cannot move!")
        };
        //console.log('The "x" position is equal to: ', xPlayerVelocity)
        break;
    case 65:
        if (isMoving == true) {
            MovementLeft();
            BackgroundMoving();
            Collision();
        } else {
            console.log("You cannot move!")
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
var Battling = false


function EnemyGeneration() {
    ForestEnemies();
    ForestBoss();    
};

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
    document.querySelector('span').appendChild(clone);

    //Creating variables to make my work easier
    topInPx = "-910px";
    borderToSee = "1px solid #000000";
    SizeInPx = "1000px";
    positionToSee = "absolute";
    
    //Customizing the generated tree so I can see them clearer
    clone.style.top = topInPx;
    clone.style.marginLeft = marginLeftInPx;
    //clone.style.border = borderToSee
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


    for (let x = numberOfEnemiesForests; x > 0; x--) {
        var EnemyMovablePosition = EnemyStartingPosition + RandomSpacing;
        var number = x;

        //Creating new div element as a new enemy hitbox and adding it to the game area
        enemyHitbox = document.createElement("div");
        document.querySelector('span').appendChild(enemyHitbox);

        enemySkin = document.createElement("img");
        enemyHitbox.appendChild(enemySkin);
        enemySkin.src = "Textures/Enemies/Normals/Forest/Blue Forest Slime Idling.gif";
        enemySkin.style.width = 175;
        enemySkin.style.position = "absolute"
        enemySkin.style.top = HitboxTop / 2.5;
        enemySkin.style.left = -10;
        enemySkin.style.transform = "scaleX(1)";


        
        
        document.createAttribute("id", "enemy-hitbox" + number);
        enemyHitbox.setAttribute("id", "enemy-hitbox" + number);
        
    

        document.getElementById("enemy-hitbox" + number).style.width = HitboxWidth;
        document.getElementById("enemy-hitbox" + number).style.height = HitboxHeight;
        document.getElementById("enemy-hitbox" + number).style.position = "absolute";
        document.getElementById("enemy-hitbox" + number).style.marginLeft = EnemyMovablePosition;
        document.getElementById("enemy-hitbox" + number).style.top = HitboxTop;
        document.getElementById("enemy-hitbox" + number).style.zIndex = "996";
        //document.getElementById("enemy-hitbox" + number).style.backgroundColor = "red";

        //Putting the enemies generated position to a list
        EnemyPosition.push(EnemyMovablePosition);
        EnemyPosition.sort(function(a, b){return b - a});
        //Generating random number between 1000-800 and adding it to current enemy position
        RandomSpacing += 1000;
        EnemyMovablePosition += RandomSpacing;

        //console.log(EnemyPosition)
}};

function ForestBoss() {

};

/*-------------------------------------------------------------------------   BATTLE SYSTEM   ---------------------------------------------------------------------*/

function Battle() {
    Battling = true
    window.open("battle.html", '_blank');
    setInterval(() => {
        if (Battling == true) {
            isMoving = false;
            isBattling();
        } else {
            isMoving = true;
        }
        
    }, 1000);
}

function Collision() {
    for (let x = EnemyPosition.length; x > 0; x--) {
        Enemy = "enemy-hitbox" + x;                                                        //Grabbing all of the enemies
        EnemiesCurrentPosition = document.getElementById(Enemy).offsetLeft;                                        //Making a variable to check there current position
        
        if (EnemiesCurrentPosition -580 == 0) {
            //Battle
            EnemyPosition.pop();
            document.getElementById(Enemy).remove();
            Battle();
            //document.getElementById(Enemy).style.visibility = "hidden";
            
            console.log("Reached enemy");
        };
        //console.log(Enemy, "'s x-position is", EnemiesCurrentPosition, "and the its staring position is:", EnemyPosition[index])
    };    
};