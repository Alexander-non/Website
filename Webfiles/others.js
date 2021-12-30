done = false;

function HG(spin) {
    element = document.getElementById(spin);
    done = true;
    if (done == true) {
        element.style.animationName = "example";
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