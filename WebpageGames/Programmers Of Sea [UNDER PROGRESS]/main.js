const Player = document.getElementById("player");
var speed = 0


document.addEventListener('click', (e) => {
    const Elements = document.getElementsByClassName("random_island");
    let box = document.querySelector("#player");
    let boxBoundingRect = box.getBoundingClientRect();
    let boxCenter= {
        x: boxBoundingRect.left + boxBoundingRect.width/2, 
        y: boxBoundingRect.top + boxBoundingRect.height/2
    };
    
    let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y) )*(180 / Math.PI) + 90;
    box.style.transform = `rotate(${angle}deg)`;
    var playerOldPosition = [boxBoundingRect.left, boxBoundingRect.top]
    setTimeout(() => {
        box.style.left = e.pageX - boxBoundingRect.width/2 + "px"
        box.style.top = e.pageY + "px"
        var playerNewPosition = [parseFloat(box.style.left.replace('px', '')), parseFloat(box.style.top.replace('px', ''))]

        console.log(playerNewPosition, playerOldPosition, Elements)
        for (let x = 0; x < Elements.length; x++) {
            if (Elements[x].style.top != "") {
                Elements[x].style.left = parseInt(Elements[x].style.left.replace('px', '')) - playerNewPosition[0] + "px";
                Elements[x].style.top =  parseInt(Elements[x].style.left.replace('px', '')) - playerNewPosition[1] + "px";  
            } else {
                Elements[x].style.left = Elements[x].style.left - playerNewPosition[0] + "px";
                Elements[x].style.top =  Elements[x].style.top - playerNewPosition[1] + "px";  
            }
            
        }
    }, 1000);
});
document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 68:
            speed += 10;
            Player.style.left = speed + "px";
            Player.style.rotate = "90deg";
            break;
        case 65:
            speed -= 10;
            Player.style.left = speed + "px";
            Player.style.rotate = "-90deg";
            break;
        case 87:
            speed += 10;
            Player.style.top = speed + "px";
            Player.style.rotate = "0deg";
            break;
        case 83:
            speed -= 10;
            Player.style.top = speed + "px";
            Player.style.rotate = "180deg";
            break;
    
        default:
            break;
    }
});