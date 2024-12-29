const elementsOfMap = document.getElementsByClassName("elements_of_map");
const ground = document.getElementById("floor"); 
const center = document.getElementById("center");
center.style.left = window.innerWidth/2 - center.style.width + "px";
center.style.top = window.innerHeight/2 - center.style.height + "px";
ground.style.height = window.innerHeight + "px";
ground.style.width = window.innerWidth + "px";
var movementZ = 1
const speed = 10

document.addEventListener("keydown", (key) => {
    for (let x = 0; x < elementsOfMap.length; x++) {
        var movementX = elementsOfMap[x].style.left;
        var movementY = elementsOfMap[x].style.top;
        switch (key.keyCode) {
            case 81:
                elementsOfMap[x].style.transform = "scale("+movementZ+")"; 
                movementZ += 0.05;
                break;
            case 69:
                elementsOfMap[x].style.transform = "scale("+movementZ+")";
                movementZ -= 0.05;
                break;
            case 87:
                elementsOfMap[x].style.top = movementY + "px";
                movementY -= speed;
                break;
            case 83:
                elementsOfMap[x].style.top = movementY + "px";
                movementY += speed;
                break;
            case 65:
                elementsOfMap[x].style.left = movementX + "px";
                movementX  -= speed;
                break;
            case 68:
                elementsOfMap[x].style.left = movementX + "px";
                movementX += speed;
                break;
        
            default:
                break;
        };
    };
});