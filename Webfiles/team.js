dragArea = document.getElementById("bullet-board-inner")
const notes = document.querySelectorAll('.note')
for (let x = 0; x < notes.length; x++) {
    Drag(notes[x]);
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
    element.style.zIndex = 3;
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
        CurrentXPos = -2
    } else if (CurrentElementXPos < element.offsetWidth - Correction/2) {
        CurrentXPos = 2
    } else if (CurrentElementYPos > dragArea.offsetHeight - Correction) {
        CurrentYPos = -2
    } else if (CurrentElementYPos < element.offsetHeight - Correction/4) {
        CurrentYPos = 2
    }

     OldXPos = mouse.clientX;
     OldYPos = mouse.clientY;
     element.style.top = (element.offsetTop - CurrentYPos) + "px";
     element.style.left = (element.offsetLeft - CurrentXPos) + "px";
    }

    function StopDraging() {
        element.style.zIndex = 2;
        document.onmouseup = null;
        document.onmousemove = null;
    }
}