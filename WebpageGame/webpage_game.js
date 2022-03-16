try {localStorage["key"] = value;} catch {console.log()}
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

FPSCounter();
try {
    setInterval(() => {
        Day_Night_Cycle();
        ShowMap();
        Music();
    }, 1);
} catch (error) {
    console.log()
};


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------      Game Content      -------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


let xPlayerPosition = 0;
let xPlayerVelocity = 0;
let BackgroundMovement = 0;
let isMoving = true;
const MovementSpeed = 10;


/*------------------------------------------------------------------   MISCS   -------------------------------------------------------------*/
const music = document.getElementById("music");
const fps = document.getElementById("fps");
const startTime = Date.now();
let Pressed = false;
let frame = 0;

//Sidemenu content
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
    $("#display").click(() => {
        $("#display-select-holder").slideToggle("slow", "linear");
    });
    $("#graphics").click(() => {
        $("#graphics-select-holder").slideToggle("slow", "linear");
    });
    $("#volume").click(() => {
        $("#volume-slider").slideToggle("slow", "linear");
    });
    $("#language").click(() => {
        $("#language-select-holder").slideToggle("slow", "linear");
    });
});

//FPS Counter
function FPSCounter() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(FPSCounter);
};

function Day_Night_Cycle() {
    const sun = document.getElementById("sun-rod");
    const moon = document.getElementById("moon-rod");
    let sunrise = 6
    let opacity = 1
    //Time for day night cycle
    const date = new Date();
    const rawHour = date.getHours()
    const hour = rawHour - sunrise;
    const min = date.getMinutes();
    const hourDegree = 90 - (hour * 15) - (min * 0.125);

    moon.style.transform = `rotate(` + (hourDegree-180) + `deg)`;
    sun.style.transform = `rotate(`+hourDegree+`deg)`;
    
    if (hourDegree-180 <= 0 && hourDegree-180 >= -90 || hourDegree-180 <= -270 && hourDegree-180 >= -365) {
        document.querySelector('body').style.backgroundImage =  "linear-gradient(rgb(0, 0, 0, "+opacity+"), #0d91a6)"
    } else {
        document.querySelector('body').style.backgroundImage =  "linear-gradient(#0d91a6, #0d91a6)"
    };
};
function ShowMap() {
    let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;
    const levelMap = document.getElementById("mapLevel");
    const worldMap = document.getElementById("mapWorld");

    
    if (zoom <= 68 && zoom >= 27) {
        levelMap.style.display = "block";
    } else {levelMap.style.display = "none";};
    if (zoom <= 26 && zoom >= 24) {
        worldMap.style.display = "block";
    } else {worldMap.style.display = "none";};
};
function Music() {
    let volumeNum = $("#volume-slider").val()/100;
    music.volume = volumeNum;
};
/*------------------------------------------------------------------   CHARACTER MOVEMENTS   -------------------------------------------------------------*/
function MovementRight() {
    xPlayerPosition += MovementSpeed;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement += MovementSpeed;
    //console.log(BackgroundMovement)

    //Charcter animation for running
    if (MovementRight.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "/Website/WebpageGame/Textures/Character/slimeAttackRight.gif";}, 500);
    MovementRight.done = true;
};
function MovementLeft() {
    xPlayerPosition -= MovementSpeed;
    document.getElementById("character").style.marginLeft = xPlayerVelocity; //Movement
    BackgroundMovement -= MovementSpeed;
    //console.log(BackgroundMovement)


    //Charcter animation for running
    if(MovementLeft.done == true) {return};
    setTimeout(() => {
        document.getElementById("characterSkin").src = "/Website/WebpageGame/Textures/Character/slimeAttackLeft.gif";}, 500);
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

document.addEventListener("keydown", (event) => {
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
    default:
        break;
    }
});
document.addEventListener("keyup", (event) => {
    switch (event.keyCode) {
        case 68:
            MovementRight.done = false;
            document.getElementById("characterSkin").src = "/Website/WebpageGame/Textures/Character/slimeIdleRight.gif";
            break;
        case 65:
            MovementLeft.done = false;
            document.getElementById("characterSkin").src = "/Website/WebpageGame/Textures/Character/slimeIdleLeft.gif";
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
var numberOfForests = 50;
var numberOfEnemiesForests = 5;
var Battling = false
const GROUND = document.getElementById('ground');

function EnemyGeneration() {
    ForestEnemies();
    ForestBoss();    
};

/*---------------------------------------------------------------------     TREES     ----------------------------------------------------------------*/
var marginLeftInPx = 300;
let SelectedTree = 0
function GeneratingTrees() {
    const ListOfTreeImgsSRC = ['ComplexTree1', 'ComplexTree2', 'ComplexTree3', 'SimpleTree1', 'SimpleTree2', 'SimpleTree3'];
    const ListOfTreeImgs = document.getElementsByClassName("treeImg");
    //Generator more forest after each other
    for (let index = 0; index < numberOfForests; index++) {

        // Create a clone of element with the selected id:
        let clone = document.querySelector('#forestPartX').cloneNode( true );

        // Change the id attribute of the newly created element:
        number = index + 2;
        clone.setAttribute('id', 'forestPartX' + number);

        // Append the newly created element on element you select 
        GROUND.appendChild(clone);

        //Creating variables to make my work easier
        topInPx = "-910px";
        SizeInPx = "1000px";
        positionToSee = "absolute";
        
        //Customizing the generated tree so I can see them clearer
        clone.style.top = topInPx;
        clone.style.marginLeft = marginLeftInPx;
        clone.style.position = positionToSee;
        clone.style.height = SizeInPx;
        clone.style.width = SizeInPx;
        ForestPosition.push(marginLeftInPx);
        RTD = Math.floor(Math.random() *(250 - 200) + 200); //RandomTreeDistance
        marginLeftInPx += RTD;
    }
    //Random tree custom look
    for (let x = 0; x < ListOfTreeImgs.length; x++) {
        SelectedTree++;
        ListOfTreeImgs[x].src = "/Website/WebpageGame/Textures/" + ListOfTreeImgsSRC[Math.floor(Math.random() * (ListOfTreeImgsSRC.length - 0) + 0)] + ".png";
        if (SelectedTree % 3 == 0) {
            ListOfTreeImgs[x].style.filter = "brightness("+ Math.floor(Math.random() * (95 - 90) + 90) +"%)", " grayscale("+ Math.floor(Math.random() * (20 - 10) + 10) +"%)";
        } else if (SelectedTree % 5 == 0) {
            ListOfTreeImgs[x].style.filter =  "brightness("+ Math.floor(Math.random() * (90 - 80) + 80) +"%)", " grayscale("+ Math.floor(Math.random() * (20 - 10) + 10) +"%)";;
        }
    };
    
};

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

        //Creating new div element as a new enemy hitbox and adding it to the game area
        enemyHitbox = document.createElement("div");
        GROUND.appendChild(enemyHitbox);

        const enemySkin = document.createElement("img");
        enemyHitbox.appendChild(enemySkin);
        enemySkin.src = "/Website/WebpageGame/Textures/Enemies/Normals/Forest/BlueForestSlimeIdling.gif";
        enemySkin.style.width = 175;
        enemySkin.style.position = "absolute"
        enemySkin.style.top = HitboxTop / 2.5;
        enemySkin.style.left = -10;
        enemySkin.style.transform = "scaleX(1)";


        
        
        document.createAttribute("id", "enemy-hitbox" + x);
        enemyHitbox.setAttribute("id", "enemy-hitbox" + x);
        enemySkin.setAttribute("class", 'enemySkin');
        
    

        document.getElementById("enemy-hitbox" + x).style.width = HitboxWidth;
        document.getElementById("enemy-hitbox" + x).style.height = HitboxHeight;
        document.getElementById("enemy-hitbox" + x).style.position = "absolute";
        document.getElementById("enemy-hitbox" + x).style.marginLeft = EnemyMovablePosition;
        document.getElementById("enemy-hitbox" + x).style.top = HitboxTop;
        document.getElementById("enemy-hitbox" + x).style.zIndex = "996";
        //document.getElementById("enemy-hitbox" + x).style.backgroundColor = "red";

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
    music.muted = true;
    window.open("battle.html", '_blank');
    if (Battling == true) {
        isMoving = false;
        isBattling();
    } else {
        isMoving = true;
    }
}


function Collision() {
    for (let x = EnemyPosition.length; x > 0; x--) {
        Enemy = "enemy-hitbox" + x;                                                        //Grabbing all of the enemies
        EnemiesCurrentPosition = document.getElementById(Enemy).offsetLeft;                                        //Making a variable to check there current position
        
        if (EnemiesCurrentPosition -580 == 0) {
            //Battle
            const EnemyImg = document.getElementsByClassName("enemySkin");
            const PlayerSkin = document.getElementById("characterSkin").src;
            for (let i = 0; i < EnemyImg.length; i++) { var EnemySkin = EnemyImg[0].src };
            localStorage.setItem("PlayerSkin", PlayerSkin);
            localStorage.setItem("EnemySkin", EnemySkin);
            EnemyPosition.pop();
            document.getElementById(Enemy).remove();
            Battle();
            //document.getElementById(Enemy).style.visibility = "hidden";
            
            console.log("Reached enemy");
        };
        //console.log(Enemy, "'s x-position is", EnemiesCurrentPosition, "and the its staring position is:", EnemyPosition[index])
    };    
};
