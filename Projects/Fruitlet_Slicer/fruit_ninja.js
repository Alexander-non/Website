/*IDEAS
*
* RANDOM FRUITS --++
* SCORE/PROGRESS BAR SYSTEM ---- 
* LIFE SYSTEM ----
* POWER UP FRUITS -+++
* COMBOS 
* BOMBS ----
* AUDIO 
* MENU ----
* NAME : FRUITLET SLICER ----
*/
const body = document.querySelector("body");
const FruitList = ["apple", "lemon", "orange", "watermelon", "strawberry",     "mango", "pomegranate", "avocado", "coconut", "dragonfruit"]
const one_sideLeft = 0
const gravity = 0.1
const fruitVelocityY = Math.random() * (14 - 11) + 11;
const fruitVelocityX = Math.random() * (5 - 1) + 1;
const fruitPartVelocityY = Math.random() * (3 - 2) + 2;
const fruitPartVelocityX = Math.random() * (2 - 1.5) + 1.5;
const lifeContainer = document.getElementById("life_bar");
const lifeScore = document.getElementById("life_score");
const endCredits = document.getElementById("end_credit");
const menu = document.getElementById("menu");
const maxLives = 3;
var currentLives = maxLives;
lifeScore.innerHTML = maxLives + "/" + currentLives;
var fall = true

////////////////////////////  SCORE SYSTEM  /////////////////////////////////////
const score = document.getElementById("score");
const scoreRequirements = document.getElementById("score_requirements");
var progressBar = document.getElementById("progress_bar");
var scoreRequired = [];
var scoreRequiredData = 10;
for (let x = 0; x < 10; x++) {scoreRequired.push(parseInt(scoreRequiredData)), scoreRequiredData *= 1.5};
var rapidity = 1000;

function ScoreSystem(usage) {
    if (usage == 1) {
        scorePart = document.createElement("div");
        scorePart.style.position = "absolute"
        scorePart.style.height = "100%";
        scorePart.style.width = 0;
        scorePart.style.backgroundColor = "green";
        scorePart.style.transitionDuration = "0.5s"
        progressBar.appendChild(scorePart);
        scoreRequirements.innerText = scoreRequired[0]
    } else {
        scorePart.style.width = (progressBar.offsetWidth / scoreRequired[0]) * parseInt(score.innerText) + "px";
    };
    
};
ScoreSystem(1);

//Mouse custom trail
function CustomCursor() {
    $(document).mousemove( (e)=> { $(".pointer").css({left:e.pageX, top:e.pageY});});
    trailWidth = 25
    trailHeight = 25
    trailOpacity = 100
    trailTransition = 0.01
    canTrail = true
    for (let i = 0; i < 10; i++) {
        var trailFragment = document.createElement("div");
        if (i == 0) {trailFragment.setAttribute("id", "pointer-leader")}
        trailFragment.setAttribute("class", "pointer");
        trailFragment.style.position = "absolute";
        trailFragment.style.width = trailWidth + "px" ;
        trailFragment.style.zIndex = 104;
        trailFragment.style.height = trailHeight + "px";
        trailFragment.style.transform = "translate(-50%, -50%) rotate(50deg)";
        trailFragment.style.backgroundColor = "white";
        trailFragment.style.opacity = trailOpacity + "%";
        trailFragment.style.border = "5px solid rgba(0, 0, 255, 0.5)"
        trailFragment.style.pointerEvents = "none";
        trailFragment.style.transition = trailTransition + "s";
        body.append(trailFragment);

        if (trailHeight >= 40) {canTrail = false}
        canTrail == true ? trailWidth += 5 : trailWidth -= 5
        canTrail == true ? trailHeight += 5 : trailHeight -= 5
        trailOpacity <= 5 ? trailOpacity = 5 : trailOpacity -= 5
        trailTransition += 0.015
}};
CustomCursor();

const Effect = function (left, top) {
    const effect = document.createElement("div");
    effect.style.position = "absolute"
    effect.style.height = 100 + "px";
    effect.style.width = 100 + "px";
    effect.style.animation = "explosion 4s ease forwards";
    effect.style.borderRadius = "50px";
    effect.style.backgroundColor = "white";
    effect.style.zIndex = 103;
    effect.style.left = left;
    effect.style.top = top;
    body.appendChild(effect);
};

// Turning the fruits cut side where the mouse is located at!
window.addEventListener('mousemove', (e) => {
    let box = document.querySelectorAll("#side-container");
    for (let x = 0; x < box.length; x++) {
        let boxBoundingRect = box[x].getBoundingClientRect();
        let boxCenter= {
            x: boxBoundingRect.left + boxBoundingRect.width/2, 
            y: boxBoundingRect.top + boxBoundingRect.height/2
        };
    
        let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI);
        box[x].style.transform = `rotate(${angle}deg)`;
        
    };
});
document.addEventListener("mousemove", (e) => {
    MouseVelocity = Math.sqrt(Math.pow(Math.abs(e.movementX), 2) + Math.pow(Math.abs(e.movementY), 2))
}, false);

//Bulgária


const FruitSkins = {
    Bomb : {
        fruitType: "bomb",
        height: 200,
        width: 105, 
        color: "linear-gradient(#000000, #000000)",
        L_border_Radius: "150px 0px 0px 150px",
        R_border_Radius: "0px 150px 150px 0px",
        extraParts: ["L_bomb", "R_bomb"],
    },
    Apple : {
        fruitType: "fruit",
        height: 150,
        width: 80,
        color: "linear-gradient(#C7372F, #C7372F)",
        L_border_Radius: "50% 5px 5px 50%",
        R_border_Radius: "5px 50% 50% 5px",
        extraParts: ["L_apple", "R_apple"],
    },
    Lemon : {
        fruitType: "fruit",
        height: 150,
        width: 75,
        color: "linear-gradient(#FEF250, #FEF250)",
        L_border_Radius: "75px 0px  0px 200px",
        R_border_Radius: "0px 200px 75px 0px",
        extraParts: ["B_lemon", ""],
    },
    Orange : {
        fruitType: "fruit",
        height: 150,
        width: 80, //Always half of height
        color: "linear-gradient(#ED7014, #ED7014)",
        L_border_Radius: "150px 0px 0px 150px",
        R_border_Radius: "0px 150px 150px 0px",
        extraParts: ["B_orange", ""],
    },
    Watermelon : {
        fruitType: "fruit",
        height: 225,
        width: 100,
        color: "linear-gradient(to left, #739C46, #739C46, #3B4B24, #3B4B24, #739C46, #739C46, #3B4B24, #3B4B24, #739C46, #739C46)",
        L_border_Radius: "150px 0px 0px 150px",
        R_border_Radius: "0px 150px 150px 0px",
        extraParts: ["L_watermelon", "R_watermelon"],
    },
    Strawberry : {
        fruitType: "fruit",
        height: 100,
        width: 50,
        color: "linear-gradient(#C50102, #C50102)",
        L_border_Radius: "25px 0px 0px 90%",
        R_border_Radius: "0px 25px 90% 0px",
        extraParts: ["L_strawberry", "R_strawberry"],
    },
};

const SpecialPowerUps = {
    Gravity: {
        id: "gravityFlip",
        text: "Gravity Flipped!",
        color: "purple",
        animation: "gravityFlip 4s ease 1",
        animationTime: 3900,
        type: "gravity",
    },
};

////////////////////////////  POWER UP SYSTEM  /////////////////////////////////////
var powerUpTime = 10;
var CurrentPowerType = null
var specialPowerContainer = null
var specialPowerBar = null
var specialPowerTime = null

function PowerUp(id, text, color, animation, timeToRemove, type) {
    const powerUp_Text = document.createElement("p");
    powerUp_Text.setAttribute("id", id);
    powerUp_Text.innerHTML = text;
    powerUp_Text.style.color = color;
    powerUp_Text.style.animation = animation;
    body.appendChild(powerUp_Text); 

    setTimeout(() => {
        powerUp_Text.remove();
    }, timeToRemove);
    return type
};

setIntPowerUp = null
setTimPowerUp = null
function PowerUpBar(color) {
    if ($('#special-power_container').length > 0) {
        powerUpTime = 10;
        clearInterval(setIntPowerUp);
        clearTimeout(setTimPowerUp);
    } else {
        specialPowerContainer = document.createElement("div");
        specialPowerBar = document.createElement("div");
        specialPowerTime = document.createElement("span");
        specialPowerContainer.setAttribute("id", "special-power_container");
        specialPowerBar.setAttribute("id", "special-power_bar");
        specialPowerTime.setAttribute("id", "special-power_time");

        specialPowerContainer.appendChild(specialPowerTime);
        specialPowerContainer.appendChild(specialPowerBar);
        body.appendChild(specialPowerContainer);
    }
    specialPowerBar.style.width = "100%";
    specialPowerBar.style.backgroundColor = color;
    specialPowerTime.innerHTML = powerUpTime + "s";

    setIntPowerUp = setInterval(() => {
        CurrentPowerType = PowerType;
        powerUpTime -= 1;
        specialPowerBar.style.width = powerUpTime * 10 + "%";
        specialPowerTime.innerHTML = parseInt(powerUpTime) + "s";
    }, 1000);

    setTimPowerUp = setTimeout(() => {
        clearInterval(setIntPowerUp);
        CurrentPowerType = null;
        powerUpTime = 10;
        specialPowerContainer.remove();
    }, powerUpTime*1000);
};

const Fruit = function (
    sideContainer, 
    sliceLeft, 
    sliceRight, 
    sliceHeight, 
    sliceWidth, 
    sliceMarginLeft, 
    L_fruitRadius,
    R_fruitRadius,
    sliceColor, 
    fruitDetails,
    fruitType,
    gravitionForce, 
    cubeVelocityY, cubeVelocityX, 
    sliceVelocityY, sliceVelocityX, 
    randomSide,
    isSpecialFruit,
    fallGuys) {

    this.sideContainer = sideContainer;
    this.sliceHeight = sliceHeight;
    this.sliceWidth = sliceWidth;
    this.sliceLeft = sliceLeft
    this.sliceRight = sliceRight;
    this.sliceMarginLeft = sliceMarginLeft;
    this.L_fruitRadius = L_fruitRadius
    this.R_fruitRadius = R_fruitRadius
    this.sliceColor = sliceColor
    this.fruitDetails = fruitDetails
    this.fruitType = fruitType
    this.gravitionForce = gravitionForce;
    this.cubeVelocityY = cubeVelocityY;
    this.cubeVelocityX = cubeVelocityX;
    this.sliceVelocityY = sliceVelocityY
    this.sliceVelocityX = sliceVelocityX
    this.randomSide = randomSide
    this.isSpecialFruit = isSpecialFruit
    this.fallGuys = fallGuys
    

    sideContainer.setAttribute('id', 'side-container');
    sideContainer.style.position = "absolute"
    sideContainer.style.height = sliceHeight + "px";
    sideContainer.style.width = sliceWidth*2 + "px";
    sideContainer.style.left = Math.random() * (window.innerWidth/6*4 - window.innerWidth/6) + window.innerWidth/6 + "px";
    sideContainer.style.bottom = -190 + "px";
    sideContainer.style.zIndex = "100"
    body.append(sideContainer);

    sliceLeft.style.position = "absolute"
    sliceLeft.style.height = sliceHeight + "px";
    sliceLeft.style.width = sliceWidth + "px";
    sliceLeft.style.borderWidth = "3px 0px 3px 3px"
    sliceLeft.style.borderStyle = "solid"
    sliceLeft.style.borderColor = "black"
    sliceLeft.style.borderRadius = L_fruitRadius
    sliceLeft.style.left = sliceMarginLeft + "px";
    sliceLeft.style.bottom = 0 + "px";
    sliceLeft.style.backgroundImage = sliceColor
    sliceLeft.setAttribute('class', fruitDetails[0]);
    sideContainer.appendChild(sliceLeft);
    isSpecialFruit == true ? sliceLeft.style.boxShadow = "0px 0px 40px yellow" : sliceLeft.style.boxShadow = "none";

    sliceMarginLeft += sliceWidth
    sliceMarginLeft = 0;
    


    sliceRight.style.position = "absolute"
    sliceRight.style.height = sliceHeight + "px";
    sliceRight.style.width = sliceWidth + "px";
    sliceRight.style.borderWidth = "3px 3px 3px 0px"
    sliceRight.style.borderStyle = "solid"
    sliceRight.style.borderColor = "black"
    sliceRight.style.borderRadius = R_fruitRadius
    sliceRight.style.left = sliceMarginLeft + sliceWidth + "px";
    sliceRight.style.bottom = 0 + "px";
    sliceRight.style.backgroundImage = sliceColor
    sliceRight.setAttribute('class', fruitDetails[1]);
    sideContainer.appendChild(sliceRight);
    isSpecialFruit == true ? sliceRight.style.boxShadow = "0px 0px 40px yellow" : sliceRight.style.boxShadow = "none";

    sliceMarginLeft += sliceWidth
    sliceMarginLeft = 0;
    

    const FruitMovement = setInterval(() => {
        currentCubeY = parseInt(sideContainer.style.bottom.replace("px", ""));
        currentCubeX = parseInt(sideContainer.style.left.replace("px", ""));
            if (CurrentPowerType == "gravity") {if (parseInt(cubeVelocityY) <= 0) {fallGuys = false}};
            if (fallGuys == false) {cubeVelocityY += gravitionForce} else {cubeVelocityY -= gravitionForce};
        currentCubeY += cubeVelocityY;
        randomSide > 5 ? currentCubeX -= cubeVelocityX : currentCubeX += cubeVelocityX;
        sideContainer.style.bottom = currentCubeY + "px";
        sideContainer.style.left = currentCubeX + "px";

        //Fruit didn't get cut
        if (currentCubeY < -300 || currentCubeY > window.innerHeight + 100) {
            if (fruitType != "bomb") {currentLives == 0 ? currentLives = 0 : currentLives -= 1;}
            lifeContainer.style.width = currentLives * (100/maxLives) + "%";
            lifeScore.innerHTML = maxLives + "/" + currentLives;
            clearInterval(FruitMovement);
            sideContainer.remove();
        };

        //Player lost
        if (currentLives <= 0) {
            clearInterval(Spawnfruit);
            endCredits.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
            endCredits.children[0].style.color = "rgb(255, 255, 255)";
            endCredits.children[1].style.color = "rgb(173, 255, 47)";
        };
    }, 10);
    
    
    sideContainer.addEventListener('mouseover', () => {
        if (MouseVelocity >= 40) {
            if (fruitType == "bomb") {
                explsLeft = sideContainer.style.left;
                explsBottom = sideContainer.style.bottom;
                Explosion = new Effect(explsLeft, explsBottom)
                clearInterval(Spawnfruit);
                
                sideContainer.remove();
                setTimeout(() => {
                    endCredits.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
                    endCredits.children[0].style.color = "rgb(255, 255, 255)";
                    endCredits.children[1].style.color = "rgb(173, 255, 47)";
                }, 1000);
                
            } else {
                clearInterval(FruitMovement);
                score.innerText = parseInt(score.innerText) + 1;
                ScoreSystem(2);
                //Level up
                if (parseInt(progressBar.children[0].style.width) >= parseInt(progressBar.offsetWidth)) {
                    scoreRequired.shift();
                    scoreRequirements.innerText = scoreRequired[0];
                    score.innerText = 0;
                    progressBar.children[0].style.width = 0;
    
                    //Difficulty raising
                    clearInterval(Spawnfruit);
                    rapidity *= 0.95
                    Spawnfruit = setInterval(() => {FruitSelection()}, rapidity)
                };
                //Special fruit action
                if (isSpecialFruit == true) {
                    PowerType = PowerUp(SpecialPowerUps.Gravity.id, SpecialPowerUps.Gravity.text, SpecialPowerUps.Gravity.color, SpecialPowerUps.Gravity.animation, SpecialPowerUps.Gravity.animationTime, SpecialPowerUps.Gravity.type);
                    PowerBar = PowerUpBar(SpecialPowerUps.Gravity.color);
                    endCredits.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
                    setTimeout(() => {endCredits.style.backgroundColor = "transparent"}, SpecialPowerUps.Gravity.animationTime);
                };
                
    
                sideContainer.remove();
                sliceLeft.style.bottom = sideContainer.style.bottom;
                sliceRight.style.bottom = sideContainer.style.bottom;
                sliceLeft.style.transform = sideContainer.style.transform;
                sliceRight.style.transform = sideContainer.style.transform;
                sliceLeft.style.left = parseInt(sideContainer.style.left.replace("px", "")) + sliceWidth + "px";
                sliceRight.style.left = sideContainer.style.left;
                body.appendChild(sliceLeft);
                body.appendChild(sliceRight);
                
                
    
                setInterval(() => {
                    currentfruitPartY = parseInt(sliceLeft.style.bottom.replace("px", ""))
                    currentfruitPartLeftX = parseInt(sliceLeft.style.left.replace("px", ""))
                    currentfruitPartRightX = parseInt(sliceRight.style.left.replace("px", ""))
                        if (CurrentPowerType == "gravity") {if (parseInt(sliceVelocityY) <= 0) {fallGuys = false}}
                        if (fallGuys == false) {sliceVelocityY += gravitionForce} else {sliceVelocityY -= gravitionForce}
                    currentfruitPartY += sliceVelocityY;
                    currentfruitPartLeftX += sliceVelocityX;
                    currentfruitPartRightX -=sliceVelocityX
                    sliceLeft.style.bottom = currentfruitPartY + "px";
                    sliceRight.style.bottom = currentfruitPartY + "px";
                    sliceLeft.style.left = currentfruitPartLeftX + "px";
                    sliceRight.style.left = currentfruitPartRightX + "px";
                    if (currentfruitPartY < -100) {sliceLeft.remove(), sliceRight.remove()}
                },  10);
            }
        };
    });
};
function FruitSelection() {
    RandomFruit = Math.floor(Math.random() * (FruitList.length/2 - 0) + 0);
    Math.floor(Math.random() * (100 - 0) + 0) == 1 ? hasSpecialPower = true : hasSpecialPower = false;// 1 in 100
    switch (RandomFruit) {
        case 0:
            Bomb = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Bomb.height, FruitSkins.Bomb.width, one_sideLeft,
            FruitSkins.Bomb.L_border_Radius, FruitSkins.Bomb.R_border_Radius, FruitSkins.Bomb.color, FruitSkins.Bomb.extraParts, FruitSkins.Bomb.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX, 
            Math.floor(Math.random() * (10 - 1) + 1), false, fall)
            break;
        case 1:
            Apples = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Apple.height, FruitSkins.Apple.width, one_sideLeft,
            FruitSkins.Apple.L_border_Radius, FruitSkins.Apple.R_border_Radius, FruitSkins.Apple.color, FruitSkins.Apple.extraParts, FruitSkins.Apple.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX, 
            Math.floor(Math.random() * (10 - 1) + 1), hasSpecialPower, fall)
            break;
        case 2:
            Lemon = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Lemon.height, FruitSkins.Lemon.width, one_sideLeft, 
            FruitSkins.Lemon.L_border_Radius, FruitSkins.Lemon.R_border_Radius, FruitSkins.Lemon.color, FruitSkins.Lemon.extraParts, FruitSkins.Lemon.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX, 
            Math.floor(Math.random() * (10 - 1) + 1), hasSpecialPower, fall)
            break;
        case 3:
            Orange = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Orange.height, FruitSkins.Orange.width, one_sideLeft, 
            FruitSkins.Orange.L_border_Radius, FruitSkins.Orange.R_border_Radius, FruitSkins.Orange.color, FruitSkins.Orange.extraParts, FruitSkins.Orange.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX,
            Math.floor(Math.random() * (10 - 1) + 1), hasSpecialPower, fall)
            break;
        case 4:
            Watermelon = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Watermelon.height, FruitSkins.Watermelon.width, one_sideLeft, 
            FruitSkins.Watermelon.L_border_Radius, FruitSkins.Watermelon.R_border_Radius, FruitSkins.Watermelon.color, FruitSkins.Watermelon.extraParts, FruitSkins.Watermelon.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX,
            Math.floor(Math.random() * (10 - 1) + 1), hasSpecialPower, fall)
            break;
        case 5:
            Strawberry = new Fruit(document.createElement("div"), document.createElement("div"), document.createElement("div"), FruitSkins.Strawberry.height, FruitSkins.Strawberry.width, one_sideLeft, 
            FruitSkins.Strawberry.L_border_Radius, FruitSkins.Strawberry.R_border_Radius, FruitSkins.Strawberry.color, FruitSkins.Strawberry.extraParts, FruitSkins.Strawberry.fruitType, gravity, fruitVelocityY, fruitVelocityX, fruitPartVelocityY, fruitPartVelocityX,
            Math.floor(Math.random() * (10 - 1) + 1), hasSpecialPower, fall)
            break;
    
        default:
            break;
    }
};
var Spawnfruit = null
function Start() {
    const Direction = Math.floor(Math.random() * (4 - 0) + 0);
    switch (Direction) {
        case 0: menu.style.top = "100%";
            break;
        case 1: menu.style.top = "-100%";
            break;
        case 2: menu.style.left = "100%";
            break;
        case 3: menu.style.left = "-100%";
            break;
        default:
            break;
    };
    setTimeout(() => {
        Spawnfruit = setInterval(() => {FruitSelection()}, rapidity);
        menu.remove();
    }, 600);
}