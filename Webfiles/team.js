dragArea = document.getElementById("bullet-board-inner")
Divs = document.getElementsByClassName("pin");
for (let x = 0; x < Divs.length; x++) {
    Drag(Divs[x]);
}
 

function Drag(element) {
    var CurrentXPos = 0
    var CurrentYPos = 0
    var OldXPos = 0
    var OldYPos = 0
    element.onmousedown = DragCheck;

function DragCheck(mouse) {
    mouse = mouse || window.event;
    mouse.preventDefault();
    OldXPos = mouse.clientX;
    OldYPos = mouse.clientY;
    document.onmouseup = StopDraging;
    document.onmousemove = StartDraging;
}

function StartDraging(mouse) {
    mouse = mouse || window.event;
    mouse.preventDefault();
    CurrentXPos = OldXPos - mouse.clientX;
    CurrentYPos = OldYPos - mouse.clientY;
    var CurrentElementXPos = dragArea.offsetWidth - element.offsetLeft;
    var CurrentElementYPos = dragArea.offsetHeight - element.offsetTop;
    var Correction = 40;
    if (CurrentElementXPos > dragArea.offsetWidth - Correction) {
        CurrentXPos = -1
    } else if (CurrentElementXPos < element.offsetWidth - Correction/2) {
        CurrentXPos = 1
    } else if (CurrentElementYPos > dragArea.offsetHeight - Correction) {
        CurrentYPos = -1
    } else if (CurrentElementYPos < element.offsetHeight - Correction/4) {
        CurrentYPos = 1
    }

     OldXPos = mouse.clientX;
     OldYPos = mouse.clientY;
     element.style.top = (element.offsetTop - CurrentYPos) + "px";
     element.style.left = (element.offsetLeft - CurrentXPos) + "px";
    }

    function StopDraging() {
         document.onmouseup = null;
         document.onmousemove = null;
    }
}