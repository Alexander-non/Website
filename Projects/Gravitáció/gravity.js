const cube = document.getElementById("object");
const gravitionSlider = document.getElementById("gravity-slider");
const gravitionDisplay = document.getElementById("gravity-display");
const jumpButton = document.getElementById("jump-button");
const jumpSlider = document.getElementById("jump-slider");
const jumpDisplay = document.getElementById("jump-display");
cube.style.bottom = "150px";
var gravitionF = 0.1;
var cubeVelocity = 0;

gravitionSlider.addEventListener('input', function () {
    gravitionF = gravitionSlider.value/100;
    gravitionDisplay.innerHTML = gravitionSlider.value;
}, false);
jumpSlider.addEventListener('input', function () {
    jumpDisplay.innerHTML = jumpSlider.value;
}, false);
jumpButton.addEventListener('click', function () {
    gravitionF = gravitionSlider.value/100;
    cubeVelocity = jumpSlider.value;
});

setInterval(() => {
    currentCubeY = parseInt(cube.style.bottom.replace("px", ""))
    cubeVelocity -= gravitionF;
    currentCubeY += cubeVelocity;
    cube.style.bottom = currentCubeY + "px";
    if (currentCubeY <= 150) {
        cubeVelocity = 0;
        cube.style.bottom = "150px";
    }
}, 10);