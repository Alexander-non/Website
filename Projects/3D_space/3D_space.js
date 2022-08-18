const ground = document.getElementById("moved");
number = 0
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 65) {ground.style.transform = "perspective(500px) translateZ(" + number +  "px)"; number += 10}
    else if(e.keyCode == 68) {ground.style.transform = "perspective(500px) translateZ(" + number +  "px)"; number -= 10}
    
});