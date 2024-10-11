{
    function rand(min, max){
        return Math.floor((Math.random() * (max - min) + min))
    }
}

let canvas = document.querySelector("canvas");
document.addEventListener("resize", (e) => {canvas.width = window.innerWidth; canvas.height = window.innerHeight;});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "rgb(64, 64, 64)";
let ctx = canvas.getContext("2d");


class Tile {
    constructor (x, y, height, width, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.borders = {
            NORTH: false,
            EAST: false,
            SOUTH: false,
            WEST: false
        }
        this.closed = false;


        this.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = "black";
            if (this.borders.NORTH == true) {
                ctx.rect(this.x, this.y, this.width, borderSize);
            } else if (this.borders.EAST == true) {
                ctx.rect(this.x, this.y, borderSize, this.height);
            } else if (this.borders.SOUTH == true) {
                ctx.rect(this.x, (this.y+this.height-borderSize), this.width, borderSize);
            } else if (this.borders.WEST == true) {
                ctx.rect((this.x+this.width-borderSize), this.y, borderSize, this.height);
            }
            ctx.fill();
        };
    }
}
let borderSize = 5;
let mazeTiles = 20;
let mazeSize = 750;
let testMargin = 2;
let tileSize = (mazeSize/mazeTiles)
let MazeList = []
let tileColor = "rgb(128, 128, 128)"

for (let x = 0; x < mazeTiles; x++) {
    for (let y = 0; y < mazeTiles; y++) {
        let currentTile = new Tile(x*(tileSize)+100, y*(tileSize)+100, tileSize, tileSize, tileColor);
        MazeList.push(currentTile);
    }
}
SideList = ['NORTH','EAST','SOUTH','WEST']

//MazeList[rand(0, MazeList.length)].borders[SideList[rand(0, SideList.length)]] = true;
goalNum = 385
let goalTile = MazeList[goalNum];
goalTile.color = "red";

starterNum = rand(0, MazeList.length);
let starterTile = MazeList[starterNum];
starterTile.color = "green";

nextTile = nextNum = null;


function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    if (nextNum == goalNum || starterNum == goalNum) {} 
    else {starterNum = nextNum}
    let randomSide = rand(0, SideList.length)
    switch (randomSide) {
        case 0:
            //NORTH
            if (starterNum % 20 != 0) {
                nextTile = MazeList[starterNum-1];
                nextTile.closed = true;
                nextNum = starterNum-1;
            }
            break;
        case 1:
            //EAST
            if (starterNum < 380) {
                nextTile = MazeList[starterNum+20];
                nextTile.closed = true;
                nextNum = starterNum+20;
            }
            break;
        case 2:
            //SOUTH
            if ((starterNum-19) % 20 != 0) {
                nextTile = MazeList[starterNum+1];
                nextTile.closed = true;
                nextNum = starterNum+1;
            }
            break;
        case 3:
            //WEST
            if (starterNum > 19) {
                nextTile = MazeList[starterNum-20];
                nextTile.closed = true;
                nextNum = starterNum-20;
            }
            break;
        default:
            break;
    }
    nextTile.color = "darkgreen";


    for (let i = 0; i < MazeList.length; i++) {MazeList[i].draw();};
}
update()
console.log(MazeList)