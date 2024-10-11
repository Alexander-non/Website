{ // Segédfunkciók
    function rand(min, max){
        return Math.floor((Math.random() * (max - min) + min))
    }
    function rand_hundred(min, max){
        return Math.floor((Math.random() * (max - min) + min) / 100)*100
    }

    function degRad(deg){
        return (Math.PI/180) * deg
    }

    function radDeg(rad){
        return (180/Math.PI) * rad
    }

    function dist(x1, y1, x2, y2){
        return (Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2)))
    }

    var mouse = {
        x: 0,
        y: 0
    }
    document.addEventListener('mousemove', (e)=> {   
        mouse.x = e.clientX
        mouse.y = e.clientY
    })
}

let canvas = document.querySelector("canvas");
document.addEventListener("resize", (e) => {canvas.width = window.innerWidth; canvas.height = window.innerHeight;});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = "rgb(64, 64, 64)";
let ctx = canvas.getContext("2d");



/// Obstacle generation

const ObstacleList = [];
const numOfObstacles = 10;
const obstacleTypeList = ['circle', 'square']

class Obstacle {
    constructor (type, x, y, height, width, radius) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.radius = radius;

        
        this.draw = function() {
            ctx.beginPath();
            ctx.fillStyle = "rgb(128, 128, 128)";
            if (this.type == "circle") {
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
            }
            else if (this.type == "square") {
                ctx.rect(this.x, this.y, this.width, this.height);
            }
            ctx.fill();
        };
    }
}

for (let u = 0; u < numOfObstacles; u++) {
    let obstacleItem = new Obstacle(obstacleTypeList[rand(0, obstacleTypeList.length)], rand_hundred(0, window.innerWidth), rand_hundred(0, window.innerHeight), rand_hundred(100, 400), rand_hundred(100, 400), rand_hundred(50, 150))
    ObstacleList.push(obstacleItem);
}
function RayCast(x_ray, y_ray, angle, accuracy = 3) {
    loop1: while (dist(x_ray, y_ray, window.innerWidth/2, window.innerHeight/2) < window.innerWidth) {
        x_ray += accuracy * Math.cos(degRad(angle));
        y_ray += accuracy * Math.sin(degRad(angle));
        // Hitbox checks
        for (let i = 0; i < ObstacleList.length; i++) {
            if (ObstacleList[i].type === obstacleTypeList[0]) {
                if (dist(x_ray, y_ray, ObstacleList[i].x, ObstacleList[i].y) < ObstacleList[i].radius) {break loop1;}
            }
            else if (ObstacleList[i].type === obstacleTypeList[1]) {
                if (ObstacleList[i].x - x_ray < 0 && ObstacleList[i].y - y_ray < 0 && ObstacleList[i].x + ObstacleList[i].width - x_ray > 0 && ObstacleList[i].y + ObstacleList[i].height - y_ray > 0) {break loop1;}    
            }
        }
        //if (400 - x_ray < 0 && 300 - y_ray < 0 && 500 - x_ray > 0 && 400 - y_ray > 0) {break;}
    }
    return {x_ray, y_ray};
}

/// Raycasting in works
let rayCast;
let numOfRays = 720;
function update() {
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < numOfRays; i++) {
        rayCast = RayCast(mouse.x, mouse.y, radDeg(Math.PI*2/numOfRays*i));

        ctx.beginPath();
        ctx.strokeStyle = "rgb(255,255,255, 0.1)";
        //ctx.lineCap = "round";
        ctx.lineWidth = 2;
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(rayCast.x_ray, rayCast.y_ray)
        ctx.stroke();
    }
    for (let u = 0; u < ObstacleList.length; u++) {ObstacleList[u].draw();}
}
update()
