var done = false;
function Rotate(spin) {
    element = document.getElementById(spin);
    done = true;
    if (done == true) {
        element.style.animationName = "spin";
        setTimeout(() => {
            done = false;
            if (done == false) {
                element.style.animationName = "none";
                location.reload()
            }
        }, 500);
    }
}

function Switch(element) {
    target = document.getElementById(element);
    others = ["time-table", "calculator", "clock"]
    switch (element) {
        case others[0]:
            target.style.visibility = "visible";
            document.getElementById(others[1]).style.visibility = "hidden";
            document.getElementById(others[2]).style.visibility = "hidden";
            break;
        case others[1]:
            target.style.visibility = "visible";
            document.getElementById(others[0]).style.visibility = "hidden";
            document.getElementById(others[2]).style.visibility = "hidden";
            break;
        case others[2]:
            target.style.visibility = "visible";
            document.getElementById(others[0]).style.visibility = "hidden";
            document.getElementById(others[1]).style.visibility = "hidden";
            break;
        default:
            break;
    }
}