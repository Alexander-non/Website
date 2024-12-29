const cube = document.getElementById("object");
const gravitionSlider = document.getElementById("gravity-slider");
const gravitionDisplay = document.getElementById("gravity-display");
const jumpButton = document.getElementById("jump-button");
const jumpSlider = document.getElementById("jump-slider");
const jumpDisplay = document.getElementById("jump-display");
const groundHeight = document.querySelector('#ground').offsetHeight;
console.log(groundHeight)
cube.style.bottom = "150px";
var gravitionF = 10;
var cubeVelocity = 0;
var isGrounded;
const displays = [gravitionDisplay, jumpDisplay];
const sliders = [gravitionSlider, jumpSlider];
for (let x = 0; x < displays.length; x++) {DisplayValue(displays[x], sliders[x])};

gravitionSlider.addEventListener('input', function () {
    gravitionF = gravitionSlider.value/100;
    DisplayValue(displays[0], sliders[0]);
}, false);
jumpSlider.addEventListener('input', function () {
    DisplayValue(displays[1], sliders[1]);
}, false);
jumpButton.addEventListener('click', function () {
    gravitionF = gravitionSlider.value/100;
    if (isGrounded==true){cubeVelocity = jumpSlider.value}
    isGrounded = false;
});
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 32) {
        gravitionF = gravitionSlider.value/100;
        if (isGrounded==true){cubeVelocity = jumpSlider.value}
        isGrounded = false;
    };
});

setInterval(() => {
    currentCubeY = parseInt(cube.style.bottom.replace("px", ""))
    cubeVelocity -= gravitionF;
    currentCubeY += cubeVelocity;
    cube.style.bottom = currentCubeY + "px";
    if (currentCubeY <= groundHeight) {
        cubeVelocity = 0;
        cube.style.bottom = groundHeight + "px";
        isGrounded = true;
    }
}, 10);

function DisplayValue(displayElement, displayValue) {
    displayElement.innerHTML = displayValue.value;
};