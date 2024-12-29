let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //Canvas méretét csak így lehet
canvas.height = window.innerHeight; //
let ctx = canvas.getContext("2d"); // Canvas ecset

function rand(min, max){
    max += 1
    return Math.floor(Math.random() * (max - min) + min)
}

function dist(x1, y1, x2, y2){
    return (Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2)))
}

function angleCalc(x1, y1, x2, y2) {
    dx = x2-x1
    dy = y2-y1
    return (Math.atan2(dy , dx));
}

const gravity = 0.2;

ctx.lineWidth = 10;
const Ball = function (x, y, vx, vy, radius, strokeStyle, fillStyle) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;

    this.radius = radius;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;

    this.draw = function () {
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius - ctx.lineWidth/2, startAngle = 0, endAngle = Math.PI*2);
        ctx.stroke();
        ctx.fill();
    }

    this.calcMovement = function () {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;

        if (this.y + this.vy + this.radius>= window.innerHeight) {
            this.vy = -this.vy;
            this.y = window.innerHeight - this.radius;
        }

        /*if (this.x + this.vx + this.radius >= window.innerWidth - 50) {
            this.vx--;
        } else if(this.x + this.vx - this.radius <= 50){
            this.vx++;
        } else */if(this.x + this.vx + this.radius >= window.innerWidth || this.x + this.vx - this.radius <= 0){
            this.vx = -this.vx;
        } else if (this.x + this.vx - this.radius < -this.radius) {
            this.x  = innerWidth/2
        }
    }

    this.collisionCheck = function () {
        ballArray.forEach(item => {
            if (this != item && dist(this.x, this.y, item.x, item.y) < this.radius + item.radius) {
                this.vx += Math.cos(angleCalc(item.x, item.y, this.x, this.y))
                this.vy += Math.sin(angleCalc(item.x, item.y, this.x, this.y))

                while(dist(this.x, this.y, item.x, item.y) < this.radius + item.radius){
                    this.x += Math.cos(angleCalc(item.x, item.y, this.x, this.y))
                    this.y += Math.sin(angleCalc(item.x, item.y, this.x, this.y))
                }
            }
        })
    }
}

ballArray = []
numBalls = 10;
for (let i = 0; i < numBalls; i++) {
    ballArray.push(new 
        Ball(
            x = rand(200, window.innerWidth-200), 
            y = window.innerHeight/2 + rand(400, -400), 
            vx = rand(-5, 5), 
            vy = rand(-5, 5), 
            radius = rand(50, 100), 
            strokeColor = `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`, 
            fillColor =   `rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`
        ))
}


function update(){
    requestAnimationFrame(update)

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    //Collision Detection

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].draw();
        ballArray[i].collisionCheck();
        ballArray[i].calcMovement();
    }
}

update()