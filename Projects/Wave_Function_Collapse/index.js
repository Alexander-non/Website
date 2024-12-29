let canvas = document.querySelector("#wave-function-collapse");
canvas.width = window.innerHeight/2;     //window.innerWidth;
canvas.height = window.innerHeight/2;
let ctx = canvas.getContext("2d");

function rand(min, max){
    return Math.floor(Math.random() * (max - min) + min);
};

let mainMatrix = [];
let loop = null;
const matrixSize = 100;
let w = canvas.width/matrixSize;
let h = canvas.height/matrixSize;
//Giving value to pixels
DEFAULT = 0
SNOW = 1
HILL = 2
FOREST = 3
GRASS = 4
SAND = 5
SHALLOWWATER = 6
WATER = 7
DEEPWATER = 8

const rules = {
    DEFAULT: [SNOW, HILL, FOREST, GRASS, SAND, SHALLOWWATER, WATER, DEEPWATER, DEFAULT],
    SNOW: [SNOW, HILL],
    HILL: [HILL, SNOW, FOREST],
    FOREST: [FOREST, GRASS],
    GRASS: [GRASS, FOREST, SAND],
    SAND: [SAND, GRASS, SHALLOWWATER, WATER],
    SHALLOWWATER: [SHALLOWWATER, WATER, SAND],
    WATER: [WATER, SHALLOWWATER, DEEPWATER],
    DEEPWATER: [DEEPWATER, WATER],
}
const ruleColors = {
    DEFAULT: 'rgb(0,0,0)',
    SNOW: 'rgb(255, 255, 255)',
    //MOUNTIN: 'rgb(171,146,136)',
    HILL: 'rgb(128, 128, 128)',
    FOREST: 'rgb(0, 100, 0)',
    GRASS: 'rgb(0, 192, 0)',
    SAND: 'rgb(255, 255, 0)',
    SHALLOWWATER: 'rgb(0,96,255)',
    WATER: 'rgb(0, 0, 255)',
    DEEPWATER: 'rgb(0, 0, 128)',
}

//Generate a matrix which acts as a map
function GenerateMap(mapSize,mapMatrix,ruleArray) {
    for (let x = 0; x < mapSize; x++) {
        let tempArray = [];
        for (let y = 0; y < mapSize; y++) {
            tempArray[y] = {
                collapsed: false,
                type: ruleArray[Object.keys(ruleArray)[0]],
            }
        }
        mapMatrix[x] = tempArray;
    }
    const startX = rand(0, mapMatrix.length);
    const startY = rand(0, mapMatrix[0].length);
    if (!mapMatrix[startX][startY].collapsed) {
        const pick = mapMatrix[startX][startY];
        pick.collapsed = true;
        const pickType = pick.type[rand(0, pick.type.length-1)];
        pick.type = [[pickType][0]];
    }
}

//Checking neighboors of pick
function checkNeighbours(x, y) {
    if (y > 0) {
        let up = mainMatrix[x][y-1];
        if (!up.collapsed) {up.type = rules[Object.keys(rules)[mainMatrix[x][y].type]];}
    }
    if (x < matrixSize-1) {
        let right = mainMatrix[x+1][y];
        if (!right.collapsed) {right.type = rules[Object.keys(rules)[mainMatrix[x][y].type]];}
    }
    if (y < matrixSize-1) {
        let down = mainMatrix[x][y+1];
        if (!down.collapsed) {down.type = rules[Object.keys(rules)[mainMatrix[x][y].type]];}
    }
    if (x > 0) {
        let left = mainMatrix[x-1][y];
        if (!left.collapsed) {left.type = rules[Object.keys(rules)[mainMatrix[x][y].type]];}
    }
}

GenerateMap(matrixSize, mainMatrix, rules);
let weightedValue = 0;
let matrixSort = mainMatrix.slice();
let lowestEntropy = rules[Object.keys(rules)[0]].length;

function update(){
    loop = requestAnimationFrame(update);
    ctx.clearRect(0,0,innerWidth,innerHeight)
    for (let x = 0; x < matrixSize; x++) {
        for (let y = 0; y < matrixSize; y++) {
            let id = mainMatrix[x][y];
            if (id.collapsed) {
                ctx.fillStyle = ruleColors[Object.keys(ruleColors)[id.type]];
                checkNeighbours(x, y);
            } else {
                ctx.fillStyle = "rgb(0, 0, 0)";
            }
            ctx.beginPath();
            ctx.fillRect(x*(w), y*(h), w, h);
        }
    }
    for (let i = 0; i < matrixSort.length; i++) {matrixSort[i] = matrixSort[i].filter(a => !a.collapsed);};
    //Check and set the lowest entropy for tiles
    for (let x = 0; x < matrixSort.length; x++) {
        for (let y = 0; y < matrixSort[x].length; y++) {
            if (matrixSort[x][y].type.length < lowestEntropy) {lowestEntropy = matrixSort[x][y].type.length;}
        }
    }
    //Saving coords of pixels with lowest entropies
    let entropyArray = []
    for (let x = 0; x < matrixSort.length; x++) {
        for (let y = 0; y < matrixSort[x].length; y++) {
            let coordsArray = []
            if (matrixSort[x][y].type.length == lowestEntropy) {coordsArray = [x, y];}
            if (coordsArray.length > 0) {entropyArray.push(coordsArray)}
        }
    }
    //Removing empty arrays
    for (let x = 0; x < matrixSort.length; x++) {if (matrixSort[x].length < 1) {matrixSort.splice(x, 1)}}
    //If there are no more options, start a new pixel
    if (entropyArray.length < 1) {
        lowestEntropy = rules[Object.keys(rules)[0]].length;
        let startX = rand(0, matrixSort.length);
        let startY = rand(0, matrixSort[startX].length);
        const pick = matrixSort[startX][startY];
        pick.collapsed = true;
        const pickType = pick.type[rand(0, pick.type.length-1)];
        pick.type = [[pickType][0]];
    }
    //Collapsing pixels with lowest entropies
    for (let x = 0; x < entropyArray.length; x++) {
        let array = entropyArray[rand(0, entropyArray.length)]
        let x = array[0];
        let y = array[1];
        //TODO --> Check neighbours and based on that choose one that mostly fits the theme better
        /*
            * SNOW 256 - 200 
            * HILL 200 - 175
            * TALLGRASS 175 - 100
            * GRASS 125 - 100
            * SAND 100 - 75
            * WATER 50 - 75
            * DEEPWATER 0 - 50
        *//*
        let weightArray = [];
        let weightedValue = 0;
        if (y > 0) {
            let up = mainMatrix[x][y-1];
            if (up.collapsed) {weightArray.push(up)}
        }
        if (x < matrixSize-1) {
            let right = mainMatrix[x+1][y];
            if (right.collapsed) {weightArray.push(right)}
        }
        if (y < matrixSize-1) {
            let down = mainMatrix[x][y+1];
            if (down.collapsed) {weightArray.push(down)}
        }
        if (x > 0) {
            let left = mainMatrix[x-1][y];
            if (left.collapsed) {weightArray.push(left)}
        }
        for (let weight = 0; weight < weightArray.length; weight++) {
            //console.log(weightArray[weight].type[0])
            weightedValue += weightArray[weight].type[0];
        }
        weightedValue = Math.round(weightedValue/weightArray.length);
        
        
        console.log(weightArray, weightedValue, matrixSort[x][y].type, matrixSort[x][y].type[matrixSort[x][y].type.indexOf(weightedValue)])
        if (matrixSort[x][y].type[matrixSort[x][y].type.indexOf(weightedValue)]) {
            matrixSort[x][y].type = [matrixSort[x][y].type[matrixSort[x][y].type.indexOf(weightedValue)]];
        } else {
            matrixSort[x][y].type = [matrixSort[x][y].type[rand(0, matrixSort[x][y].type.length)]];
        }*/
        if (matrixSort[x][y]) {
            matrixSort[x][y].type = [matrixSort[x][y].type[rand(0, matrixSort[x][y].type.length)]];
            matrixSort[x][y].collapsed = true;
        } 
        
    }
    
    //If program is done shut itself down
    if (matrixSort.length <= 1) {cancelAnimationFrame(loop)}
}
update();

let genenrateButton = document.querySelector('#generate');
genenrateButton.addEventListener('click', ()=>{
    //Cancel loop
    cancelAnimationFrame(loop);
    //Reset everything
    mainMatrix = [];
    GenerateMap(matrixSize, mainMatrix, rules);
    matrixSort = mainMatrix.slice();
    lowestEntropy = rules[Object.keys(rules)[0]].length;
    //Restart loop
    loop = requestAnimationFrame(update);
});