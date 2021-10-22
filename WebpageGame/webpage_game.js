var xPosition = 0;
var yPosition = 0;
var xPlayerPosition = 0;
var yPlayerPosition = 0;
var mL = 700;
var langClicked = 0;
var themeClicked = 0;
var pressed = 0;
var numberOfForests = 3

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

var ForestPosition = [];
var ForestList = [];

var MovementRight = function() {
    if(MovementRight.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "slimeAttackRight.gif";
    }, 500);
    MovementRight.done = true;
};
var MovementLeft = function() {
    if(MovementLeft.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "slimeAttackLeft.gif";
    }, 500);
    MovementLeft.done = true;
};

function BackgroundMoving() {
    document.getElementById("forestPart1").style.marginLeft = -xPlayerPosition; //First forest moving
    document.getElementById("forestPartX").style.marginLeft = -xPlayerPosition; //Second forest moving
    for (let index = 1; index < ForestPosition.length + 1; index++) {
        for (let indx = 0; indx < ForestList.length; indx++) {
            document.getElementById("forestPartX" + index).style.marginLeft = ForestList[indx] -xPlayerPosition;            
        }
    }
    
}


document.addEventListener("keydown", function (event) {
switch (event.key) {
    case "d":
        MovementRight();
        xPosition += 10;
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        BackgroundMoving();
        
        
        //console.log(gmh)
        
        
        
        //console.log('The "x" position is equal to: ', xPlayerPosition)
        break;
    case "a":
        MovementLeft();
        xPosition -= 10;
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        BackgroundMoving();


        console.log('The "x" position is equal to: ', xPosition)
        break;
    case "s":
        yPosition += 10;
        console.log('The "y" position is equal to: ', yPosition)
        document.getElementById("character").style.marginTop = yPosition;
        break;
    case "w":
        yPosition -= 10;
        console.log('The "y" position is equal to: ', yPosition)
        document.getElementById("character").style.marginTop = yPosition;
        break;
    default:
        break;}
});

document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "d":
            MovementRight.done = false;
            document.getElementById("characterSkin").src = "slimeIdleRight.gif";
            break;
        case "a":
            MovementLeft.done = false;
            document.getElementById("characterSkin").src = "slimeIdleLeft.gif";
            break;
    
        default:
            break;
    }
});

window.onload = function() {
    //Generator 2 more forest after each other
    for (let index = 0; index < 1; index++) {

    // Create a clone of element with the selected id:
    let clone = document.querySelector('#forestPartX').cloneNode( true );

    // Change the id attribute of the newly created element:
    number = index + 2
    clone.setAttribute('id', 'forestPartX' + number);

    // Append the newly created element on element you select 
    document.querySelector('section').appendChild(clone);

    //Aligning the newly generated trees
    clone.style.top = "0px";
    clone.style.marginLeft = mL;
    ForestPosition.push(mL)
    ForestList.push(clone)
    mL = mL + 600;
    console.log(ForestPosition)
    console.log(ForestList)
}}
    