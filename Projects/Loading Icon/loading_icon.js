const loadingCircle = document.getElementById("loading-circle");
const tiles = document.getElementsByClassName("tile");
let color1 = color2 = color3 = 0
let RotateDegree = 0

setInterval(() => {
    loadingCircle.style.left = (window.innerWidth - loadingCircle.offsetWidth)/2 + "px";
    loadingCircle.style.top = (window.innerHeight - loadingCircle.offsetHeight)/3 + "px";
}, 10);
let numberOftiles = 35;
for (let i = 0; i < numberOftiles; i++) {
    const innerTiles = document.createElement("div");
    innerTiles.style.borderRadius = loadingCircle.offsetWidth/ 50 + "px"
    innerTiles.style.transform = `rotate(`+RotateDegree+`deg)`;
    innerTiles.setAttribute("class" , "tile");
    loadingCircle.appendChild(innerTiles);
    RotateDegree += 360 / numberOftiles
};
let currentTile = lastTile = 0;
let default_height = 40;
let amplitude;
let amplitude_display = document.querySelector('#amplitude_display');
setInterval(() => {
    amplitude = document.querySelector('#amplitude').value;
    amplitude_display.innerHTML = amplitude/100;
    
    tiles[currentTile].style.height = `${amplitude}%`
    if (currentTile >= tiles.length-1) {currentTile = 0} else {currentTile++}
    setTimeout(() => {
        tiles[lastTile].style.height = `${default_height}%`
        if (lastTile == tiles.length-1) {lastTile = 0} else {lastTile++}
    }, 400);
}, 100);

let colorPick, Red = 0, Green = 0, Blue = 0;
setInterval(() => {
    colorPick = Math.floor(Math.random() * 3) + 1;
    for (let x = 0; x < tiles.length; x++) {tiles[x].style.backgroundColor = `rgb(${Red}, ${Green}, ${Blue})`}
    switch (colorPick) {
        case 1:
            Red >= 255 ? Red = 0 : Red += Math.floor(Math.random() * 10) + 1;
            break;
        case 2:
            Green >= 255 ? Green = 0 : Green += Math.floor(Math.random() * 10) + 1;
            break;
        case 3:
            Blue >= 255 ? Blue = 0 : Blue += Math.floor(Math.random() * 10) + 1;
            break;
    };
}, 100);