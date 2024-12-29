import * as ImportBattle from "../TrashAdventure/battle.js";
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



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------      Game Content      -------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


let BackgroundMovement = 0;
let isMoving = true;
const MovementSpeed = 10;
const body = document.querySelector('body');

/*------------------------------------------------------------------   MISCS   -------------------------------------------------------------*/
const music = document.getElementById("music");
const fps = document.getElementById("fps");
let startTime = Date.now();
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
        };
    };
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
});

try {
    FPSCounter();
    setInterval(() => {
        Day_Night_Cycle();
        //ShowMap();
        Music();
    }, 10);
} catch (error) {
    null
};

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
        body.style.backgroundImage =  "linear-gradient(rgb(0, 0, 0, "+opacity+"), #0d91a6)"
    } else {
        body.style.backgroundImage =  "linear-gradient(#0d91a6, #0d91a6)"
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
const characterSkin = document.getElementById("characterSkin");
function CharacterMovement(movementSide) {
    if (movementSide == "right") {
        BackgroundMovement += MovementSpeed;
        
        //Charcter animation for running
        if (CharacterMovement.done) return;
        setTimeout(() => {
            characterSkin.src = "../TrashAdventure/Textures/Character/slimeAttackLeft.gif";
            characterSkin.style.transform = "scaleX(1)";
        }, 500);
        CharacterMovement.done = true;
    } else if (movementSide == "left") {
        BackgroundMovement <= - 150 ? BackgroundMovement -= 0 : BackgroundMovement -= MovementSpeed;

        //Charcter animation for running
        if (CharacterMovement.done) return;
        setTimeout(() => {
            characterSkin.src = "../TrashAdventure/Textures/Character/slimeAttackLeft.gif";
            characterSkin.style.transform = "scaleX(-1)";
        }, 500);
        CharacterMovement.done = true;
    };
};
function Assetmoving(arrayName) {
    // Moving generated trees //
    const array = document.getElementsByClassName(arrayName);                                      //Grabbing all of the assets
    for (let x = 0; x < array.length; x++) {array[x].style.marginLeft = -BackgroundMovement};       //Moving generated assets
};

if (isMoving == true) {
    document.addEventListener("keydown", (event) => {
        const Forest = document.getElementsByClassName("forestHolder")
        switch (event.keyCode) {
            case 68:
                CharacterMovement("right");
                Assetmoving("forestHolder");
                Assetmoving("enemy-hitbox");
                Collision();
                break;
            case 65:
                CharacterMovement("left");
                Assetmoving("forestHolder");
                Assetmoving("enemy-hitbox");
                Collision();
                break;
            default:
                break;
        };
    });
    document.addEventListener("keyup", (event) => {
        switch (event.keyCode) {
            case 68:
                CharacterMovement.done = false;
                document.getElementById("characterSkin").src = "../TrashAdventure/Textures/Character/slimeIdleLeft.gif";
                characterSkin.style.transform = "scaleX(1)";
                break;
            case 65:
                CharacterMovement.done = false;
                document.getElementById("characterSkin").src = "../TrashAdventure/Textures/Character/slimeIdleLeft.gif";
                characterSkin.style.transform = "scaleX(-1)";
                break;
            default:
                break;}
    });
} else {console.log("You cannot move!")};


/*---------------------------------------------------------------------     GENERATING GAME ASSETS     ----------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var forest_align = -150;
window.onload = function() {
    GeneratingForests(forest_align)
    EnemyGeneration();

    var Forests = document.getElementsByClassName('forestHolder');
    setInterval(() => {
        if (Forests[Forests.length - 1].offsetLeft + Forests[Forests.length - 1].offsetWidth < window.innerWidth) {
            forest_align += Forests[Forests.length - 1].offsetWidth;
            GeneratingForests(forest_align);
        };
    }, 100);
};


var EnemyPosition = [];
var Battling = false;
export { Battling };
const numberOfEnemiesForests = 5;
const GROUND = document.getElementById('ground');

function EnemyGeneration() {
    ForestEnemies();
    ForestBoss();    
};

/*-------------------------------------------------------------------------   BACKGROUND   ---------------------------------------------------------------------*/


/*---------------------------------------------------------------   TREES   -----------------------------------------------------------*/

function GeneratingForests(forest_left) {
    const Forest = document.createElement("div"); 
    Forest.setAttribute('class', 'forestHolder');
    Forest.setAttribute('id', 'forest_' + forest_align);
    Forest.style.left = forest_left + 'px';
    GeneratingTrees(4, Forest);
    GROUND.appendChild(Forest);
};
function GeneratingTrees(NumberOfTrees, forest) {
    const type_of_trees = ['frontTrees', 'middleTrees', 'backgroundTrees'];
    const list_of_tree_imgs = ['ComplexTree1', 'ComplexTree2', 'ComplexTree3', 'SimpleTree1', 'SimpleTree2', 'SimpleTree3'];
    const scheme = "../TrashAdventure/Textures/";
    var left_design = -150;
    let previous_tree_type = 0;
    let previous_tree_skin = 0;
    let previous_treeBackgroundFrames = 0;

    let treeBackgroundFrames = 7;

    for (let x = 0; x < NumberOfTrees; x++) {
        const tree = document.createElement('div');
            let random_tree_type = Math.floor(Math.random() * (type_of_trees.length - 0) + 0);
            while (previous_tree_type == random_tree_type) {random_tree_type = Math.floor(Math.random() * (type_of_trees.length - 0) + 0)};
            previous_tree_type = random_tree_type;
        tree.setAttribute('class', 'treePlacement ' + type_of_trees[random_tree_type]);
        tree.style.left = left_design + "px";

        const treeSkin = document.createElement('img');
            let random_tree_skin = Math.floor(Math.random() * (list_of_tree_imgs.length - 0) + 0);
            while (previous_tree_skin == random_tree_skin) {random_tree_skin = Math.floor(Math.random() * (list_of_tree_imgs.length - 0) + 0)};
            previous_tree_skin = random_tree_skin;
        treeSkin.src = scheme + list_of_tree_imgs[random_tree_skin] + ".png";
        treeSkin.setAttribute('class', 'tree_imgs');

        const treeBackground = document.createElement('img');
            let random_treeBackgroundFrames = Math.floor(Math.random() * (treeBackgroundFrames - 0) + 0);
            while (previous_treeBackgroundFrames == random_treeBackgroundFrames) {random_treeBackgroundFrames = Math.floor(Math.random() * (treeBackgroundFrames - 0) + 0);}
                    previous_treeBackgroundFrames = random_treeBackgroundFrames;
                treeBackground.src = scheme + "background_frame" + random_treeBackgroundFrames + ".png"
                //background_frame0
                tree.appendChild(treeSkin);
                forest.appendChild(tree);
                
                left_design += Math.floor(Math.random() * (200 - 150) + 150);
            };

};

/*-------------------------------------------------------------------------   ENEMIES   ---------------------------------------------------------------------*/
var HitboxWidth = 200;
var HitboxHeight = HitboxWidth / 1.5;
var HitboxTop = -125; 
var EnemyStartingPosition = 2000;
function ForestEnemies() {
    let RandomSpacing = 0;

    for (let x = 0; x < numberOfEnemiesForests; x++) {
        const enemy_skin_number = 4;
        var EnemyMovablePosition = EnemyStartingPosition + RandomSpacing;

        //Creating new div element as a new enemy hitbox and adding it to the game area
        const enemyHitbox = document.createElement("div");
        const enemySkin = document.createElement("img");
        
        enemyHitbox.setAttribute("class", "enemy-hitbox");
        enemySkin.setAttribute("class", 'enemySkin');
    
        enemySkin.src = "../TrashAdventure/Textures/Enemies/Normals/Forest/BlueForestSlime_Idling_" + Math.floor(Math.random() * (enemy_skin_number - 0) + 0) + ".gif";

        enemyHitbox.style.width = HitboxWidth;
        enemyHitbox.style.height = HitboxHeight;
        enemyHitbox.style.left = EnemyMovablePosition;
        enemyHitbox.style.top = HitboxTop;
        enemyHitbox.style.position = "absolute";
        enemyHitbox.style.zIndex = "996";
        //enemyHitbox.style.backgroundColor = "red"

        //Generating random number between 1000-800 and adding it to current enemy position
        RandomSpacing += Math.floor(Math.random() * (1000 - 800) + 800);
        EnemyMovablePosition += RandomSpacing;

        //console.log(EnemyPosition)
        enemyHitbox.appendChild(enemySkin);
        GROUND.appendChild(enemyHitbox);
}};

function ForestBoss() {

};

/*-------------------------------------------------------------------------   BATTLE SYSTEM   ---------------------------------------------------------------------*/
var EnemyImg = document.getElementsByClassName("enemySkin")[0]
var PlayerSkin = null
function BattleBegin() {
    BattleAnim();
    //Battling = true
    music.muted = true;
    //isMoving = false;
    //window.open("battle.html", '_blank');
    if (Battling == true) { ImportBattle.isBattling(); }
    else { isMoving = true; };

    console.log(PlayerSkin.src, "|||", EnemyImg.src, isMoving)
};

function BattleAnim() {
    const darkenBG = document.createElement("div");
    darkenBG.innerText = "dark"
    

};

function Collision() {
    const Enemies = document.getElementsByClassName("enemy-hitbox");
    for (let x = 0; x < Enemies.length; x++) {
        const offsetCorrection = 430 /*End of Enemy hitbox*/ + HitboxWidth;
        if (Enemies[x].offsetLeft - offsetCorrection <= 0) {
            EnemyImg = document.getElementsByClassName("enemySkin")[x];
            PlayerSkin = document.getElementById("characterSkin");

            Enemies[x].remove();
            BattleBegin();
            /*for (let i = 0; i < EnemyImg.length; i++) { var EnemySkin = EnemyImg[0].src };
            localStorage.setItem("PlayerSkin", PlayerSkin);
            localStorage.setItem("EnemySkin", EnemySkin);*/
        };
    };
    
};

export { PlayerSkin, EnemyImg, isMoving };
