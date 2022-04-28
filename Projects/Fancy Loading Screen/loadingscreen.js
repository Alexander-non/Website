const loadingCircle = document.getElementById("loading-circle");
const tiles = document.getElementsByClassName("tile");
const colour = Math.floor(Math.random() * 3);
let color1 = color2 = color3 = 0
let RotateDegree = 0

setInterval(() => {
    loadingCircle.style.left = (window.innerWidth - loadingCircle.offsetWidth)/2 + "px";
    loadingCircle.style.top = (window.innerHeight - loadingCircle.offsetHeight)/3 + "px";
}, 10);
for (let i = 0; i < 36; i++) {
    const innerTiles = document.createElement("div");
    innerTiles.style.borderRadius = loadingCircle.offsetWidth/ 50 + "px"
    innerTiles.style.transform = `rotate(`+RotateDegree+`deg)`;
    innerTiles.setAttribute("class" , "tile");
    loadingCircle.appendChild(innerTiles);
    RotateDegree += 10
};
o = i = 0;
setInterval(() => {
    tiles[o].style.height = "50%"
    o++
    if (o == tiles.length) {o = 0}
}, 100);
setTimeout(() => {
    setInterval(() => {
        tiles[i].style.height = "40%"
        i++
        if (i == tiles.length) {i = 0}
    }, 100);
}, 400);
setInterval(() => {
    for (let x = 0; x < tiles.length; x++) {tiles[x].style.backgroundColor = `rgb(`+color1+`, `+color2+`, `+color3+`)`}
    console.log(colour)
    switch (colour) {
        case 1:
            color1++
            if (color1 == 255) {color2++, color1 = 0}
            if (color2 == 255) {color3++, color2 = 0}
            if (color3 == 255) {color3 = 0}
            break;
        case 2:
            color2++
            if (color2 == 255) {color3++, color2 = 0}
            if (color3 == 255) {color1++, color3 = 0}
            if (color1 == 255) {color1 = 0}
            break;
        case 3:
            color3++
            if (color3 == 255) {color2++, color3 = 0}
            if (color2 == 255) {color1++, color2 = 0}
            if (color1 == 255) {color1 = 0}
            break;
        default:
            break;
    };
}, 1);