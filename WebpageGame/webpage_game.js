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

var ForestPosition = [];
var ForestList = [];
var numberOfForests = 100;
var xPosition = 0;
var yPosition = 0;
var xPlayerPosition = 0;
var yPlayerPosition = 0;
var BackgroundMovement = 0;

var MovementRight = function() {
    //Limiting movement between 1000 and -300px
    if (xPlayerPosition > 1000) {
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        xPosition += 0;
    } else {
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        xPosition += 10;
    };
    //Making the background move even tho the charcter stops
    BackgroundMovement +=10;
    console.log(BackgroundMovement)
    //Charcter animation for running
    if (MovementRight.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "slimeAttackRight.gif";}, 500);
    MovementRight.done = true;
};
var MovementLeft = function() {
    //Limiting movement between 1000 and -300px
    if (xPlayerPosition < -300) {
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        xPosition -= 0;
    } else {
        xPlayerPosition = xPosition;
        document.getElementById("character").style.marginLeft = xPlayerPosition; //Movement
        xPosition -= 10;
    };
    //Making the background move even tho the charcter stops
    BackgroundMovement -=10;
    console.log(BackgroundMovement)
    //Charcter animation for running
    if(MovementLeft.done) return;
    setTimeout(() => {
        document.getElementById("characterSkin").src = "slimeAttackLeft.gif";}, 500);
    MovementLeft.done = true;
};
function BackgroundMoving() {
    document.getElementById("forestPart1").style.marginLeft = -BackgroundMovement;     //First forest moving
    document.getElementById("forestPartX").style.marginLeft = -BackgroundMovement;     //Second forest moving
    for (let index = 0; index < numberOfForests; index++) {
            ForestPart = "forestPartX" + (index + 2);                               //Grabbing all of the Trees
            ForestCurrentPosition = ForestPosition[index] - BackgroundMovement;        //Making a current position tracking variable
            
            document.getElementById(ForestPart).style.marginLeft = ForestCurrentPosition;       //Moving generated forests
            /*console.log(ForestPart, "'s x-position is", ForestCurrentPosition, "and the its staring position is:", ForestPosition[index]) //Loging the position of trees*/
    }
    
};

/*------------------------------------------------------------------   CHARACTER MOVEMENTS   -------------------------------------------------------------*/

document.addEventListener("keydown", function (event) {
switch (event.keyCode) {
    case 68:
        MovementRight();
        BackgroundMoving();
        //console.log('The "x" position is equal to: ', xPlayerPosition)
        break;
    case 65:
        MovementLeft();
        BackgroundMoving();
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
            document.getElementById("characterSkin").src = "slimeIdleRight.gif";
            break;
        case 65:
            MovementLeft.done = false;
            document.getElementById("characterSkin").src = "slimeIdleLeft.gif";
            break;
        default:
            break;}
});


/*---------------------------------------------------------------------   GENERATING TREES   ----------------------------------------------------------------*/
marginLeftInPx = 300;
window.onload = function() {
    //Generator more forest after each other
    for (let index = 0; index < numberOfForests; index++) {

    // Create a clone of element with the selected id:
    let clone = document.querySelector('#forestPartX').cloneNode( true );

    // Change the id attribute of the newly created element:
    number = index + 2
    clone.setAttribute('id', 'forestPartX');
    clone.setAttribute('id', 'forestPartX' + number)

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
    ForestPosition.push(marginLeftInPx)
    marginLeftInPx = marginLeftInPx + 250;
}};
    