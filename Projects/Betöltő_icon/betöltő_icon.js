const loadingCircle = document.getElementById("loading-circle");
const tiles = document.getElementsByClassName("tile");
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
    const colour = Math.floor(Math.random() * 3) + 1;
    console.log(colour)
    for (let x = 0; x < tiles.length; x++) {tiles[x].style.backgroundColor = `rgb(`+color1+`, `+color2+`, `+color3+`)`}
    switch (colour) {
        case 1:
            if (color1 == 255) {color1 = 0}
            color1++
            break;
        case 2:
            if (color2 == 255) {color2 = 0}
            color2++
            break;
        case 3:
            if (color3 == 255) {color3 = 0}
            color3++
            break;
    };
}, 100);