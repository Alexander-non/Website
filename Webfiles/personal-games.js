const GameDIVS = document.getElementsByClassName("Games");
const GameHolderDIV = document.getElementById("GameHolder");
const Button = document.getElementById("Button");
const JoyStick = document.getElementById("Joystick_part2");
Button.style.setProperty('--ButtonAfterRight','2.5%');
Button.style.setProperty('--ButtonAfterTop','-10%');
leftSUM = (GameHolderDIV.offsetWidth / 100) * 10;
Activer = 1;
function SetActive(direction) {
    const boxSize = ((GameHolderDIV.offsetWidth / 100) * 20) + 37.5 //DIV SIZE + MARGIN_LEFT + ORIGINAL LEFT
    GameDIVS[Activer].setAttribute('id', "");
    if (direction == 1) {
        if (Activer == GameDIVS.length-1) {Activer = GameDIVS.length-1;} 
        else {
            Activer++;
            leftSUM -= boxSize;
        };
    } else {
        if (Activer == 0) {Activer = 0;}
        else {
            Activer--;
            leftSUM += boxSize;
        };
    }
    GameDIVS[Activer].setAttribute('id', "Active");
};
function JoyStick_FUNC(Joystick, Bend) {
    Joystick.style.transform = "perspective(2vh) rotateZ("+ Bend +"deg)";
    setTimeout(() => {Joystick.style.transform = "perspective(2vh) rotateZ("+ 0 +"deg)";}, 300);
};
document.addEventListener("keydown", (e) =>  {
    switch (e.keyCode) {
        case 68:
            SetActive(1);
            JoyStick_FUNC(JoyStick, 20);
            for (let x = 0; x < GameDIVS.length; x++) {GameDIVS[x].style.left = leftSUM + 'px'};
            break;
        case 65:
            SetActive(0);
            JoyStick_FUNC(JoyStick, -20);
            for (let x = 0; x < GameDIVS.length; x++) {GameDIVS[x].style.left = leftSUM + 'px'};
            break;
        case 69:
            Button.style.setProperty('--ButtonAfterRight','10%');
            Button.style.setProperty('--ButtonAfterTop','5%');
            setTimeout(() => {
                Button.style.setProperty('--ButtonAfterRight','2.5%');
                Button.style.setProperty('--ButtonAfterTop','-10%');
                setTimeout(() => {window.open(GameDIVS[Activer].children[2].href);}, 100);
            }, 100);   
           
            break;
        default:
            break;
    };
});