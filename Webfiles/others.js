done = false;

function Rotate(spin) {
    element = document.getElementById(spin);
    done = true;
    if (done == true) {
        element.style.animationName = "spin";
        setTimeout(() => {
            done = false;
            console.log(done)
            if (done == false) {
                element.style.animationName = "none";
                location.reload()
            }
        }, 1000);
    }
}