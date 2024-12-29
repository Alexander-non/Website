/*
* Submarine moving effect + bubbles
* Depth meter ++++
* Level generation (getImageData canvas)
* Flashlight at deeper depths
* Plants/Rock generation based on color of block
* Texture of block + background (parallax) based on height
* Biome based map + background
* UI
* Minimap
* Overview of sub
* Entity generation
* Different type of subs
* Health + death screen
* Story
* Game name
* Home + setting menu
* Optimization
* Multyplayer
*/



let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");



function degRad(deg){
    return (Math.PI/180) * deg
}

const FLUID_FRICTION = 0.925;

let imageX = 100;
let imageY = 100;

const Submarine = function (x = innerWidth/2 - (document.getElementById("submarine").offsetWidth), y = innerHeight/2 - (document.getElementById("submarine").offsetHeight), speed = 0, pitch = 0, pitchSpeed = 0, speedLimit = 3, pitchLimit = 30, element = document.getElementById("submarine")) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.pitch = pitch;
    this.pitchSpeed = pitchSpeed;
    this.speedLimit = speedLimit;
    this.pitchLimit = pitchLimit;
    this.element = element;

    this.DOMChange = function(){
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.element.style.transform = `scaleX(${(this.speed > 0 ? '1' : '-1')})`; 
        document.querySelector("#submarine > img").style.rotate = `${this.pitch}deg`
        //document.querySelector("#depth_meter > h1").innerText = `${Math.round(this.y)}`
    }

    this.calcMovement = function(keys){

        //Check keys pressed and change movement
        if (keys.KeyA) {
            this.speed -= 0.05
            imageX += 0.05
        }
        if (keys.KeyD) {
            imageX -= 0.05
            this.speed += 0.05
        }
        if (keys.KeyE) {
            this.speed > 0 ? this.pitchSpeed += 0.1 : this.pitchSpeed -= 0.1;
        }
        if (keys.KeyQ) { 
            this.speed > 0 ? this.pitchSpeed -= 0.1 : this.pitchSpeed += 0.1;
        }
        if (keys.KeyR) { 
            this.pitch *= 0.95;
        }
        if (keys.KeyF) { 
            this.speed >= 0 ? this.speed -= 0.1 : this.speed += 0.1;
        }

        //Add pitchSpeed to pitch
        this.pitch += this.pitchSpeed;

        //Limit pitch
        if (Math.abs(this.pitch) > this.pitchLimit) {
            this.pitch = (Math.abs(this.pitch) / this.pitch) * this.pitchLimit;
        }

        //Limit pitching speed
        if(Math.abs(this.pitchSpeed) > 1) {
            this.pitchSpeed = (Math.abs(this.pitchSpeed) / this.pitchSpeed) * 1
        }

        //Change this.x and this.y using pitch and speed
        this.x += this.speed * Math.cos(degRad(this.pitch))

        //ha előre
        if((Math.abs(this.speed) / this.speed) > 0){
            this.y += this.speed * Math.sin(degRad(this.pitch))
        } else{ 
        //ha nem
            this.y += this.speed * Math.sin(-degRad(this.pitch))
        }

        //Apply speed limit
        if (Math.abs(this.speed) > this.speedLimit) {
            this.speed = (Math.abs(this.speed) / this.speed) * this.speedLimit;
        }

        //Apply pitch friction
        this.pitchSpeed *= FLUID_FRICTION*0.95

        //Apply speed friction
        if(!keys.KeyA && !keys.KeyD){
            this.speed *= FLUID_FRICTION
        }

    }
    //Border limit
    this.checkBorders = function(){
        if (this.x <= innerWidth/10) {
            this.x = innerWidth/10
            this.speed = 0
        } else if (this.x + this.element.offsetWidth > (innerWidth/10)*9) {
            this.x = (innerWidth/10)*9 - this.element.offsetWidth;
        }       
        if (this.y <= innerHeight/10) {
            this.y = innerHeight/10
            this.speed = 0
        } else if (this.y + this.element.offsetHeight > (innerHeight/10)*9) {
            this.y = (innerHeight/10)*9 - this.element.offsetHeight;
        }       
    }
}

//Singleton 
let Player = new Submarine()

//Handle keychecks
let keys = {}
window.addEventListener("keydown", event => {
    keys[event.code] = true
})
window.addEventListener("keyup", event => {
    keys[event.code] = false
})




const depthNeedle = document.querySelector('#depth_meter_needle');
const depthMeter = document.querySelector('#depth_meter');
const maxDepth = 1000;
let currentDepth = 100;
let depthChkpoints = maxDepth/100;
let depthMeterJumps = 180/depthChkpoints;
let textHolder = document.createElement('div');
textHolder.setAttribute('id', 'depthTextHolder');
depthMeter.appendChild(textHolder);
colorLevel = ['green', 'yellow', 'red'];
for (let x = 0; x < colorLevel.length; x++) {
    let depthLevel = document.createElement('div');
    depthLevel.style.transform = `rotate(${(x*180/colorLevel.length)}deg)`
    depthLevel.style.backgroundColor = colorLevel[x];
    depthLevel.setAttribute('class', 'depthLevel');
    textHolder.appendChild(depthLevel);
}


let width = 6000;
let height = 6000;
let upscale = 30;
let background = new Image();
background.src = "background.png"

function update() {  
    requestAnimationFrame(update)
    ctx.drawImage(background, 700/upscale, 700/upscale, width/upscale, height/upscale, 0, 0, width, height)
    const imgData = ctx.getImageData(0, 0, width/50, height/50)
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255-imgData.data[i];
        imgData.data[i+1] = 255-imgData.data[i+1];
        imgData.data[i+2] = 255-imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);

    //ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    /*for (let i = 0; i < 50; i++) {
        
        width+=50;
        height+=50;
    }*/
    

    Player.calcMovement(keys)
    Player.checkBorders()
    Player.DOMChange()
    depthNeedle.style.transform = `rotate(${(Player.y-(innerHeight/10))*(180/maxDepth)-90}deg)`;
}
update()


// invert colors
/*for (let i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255-imgData.data[i];
    imgData.data[i+1] = 255-imgData.data[i+1];
    imgData.data[i+2] = 255-imgData.data[i+2];
    imgData.data[i+3] = 255;
}
ctx.putImageData(imgData, 0, 0);
*/
