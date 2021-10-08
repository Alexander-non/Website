xPosition = 10;
yPosition = 10;

document.addEventListener("keydown", function (event) {
switch (event.key) {
    case "d":
        xPosition += 10;
        console.log('The "x" position is equal to: ', xPosition)
        document.getElementById("character").style.marginLeft = xPosition;
        break;
    case "a":
        xPosition -= 10;
        console.log('The "x" position is equal to: ', xPosition)
        document.getElementById("character").style.marginLeft = xPosition;
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