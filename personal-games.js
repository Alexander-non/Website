var canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext('2d');
var mouse = {
    x : undefined,
    y: undefined
}

var colorArray = [
    "#1D3D59",
    "#EAE8D8",
    "#FE6F42",
    "#FDB93A",
    "#FEE7D8",
    "#C7601A",
    "#1B3C45"
];


var maxRad = 10;
var minRad = 25;


window.addEventListener('mousemove', 
    function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});



function Circle(x, y, vx, vy, rad){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.rad = rad;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
        c.fillStyle = this.color
        c.fill();
    }

    this.update = function(){
        if(this.x > innerWidth - this.rad || this.x < 0 + this.rad){
            this.vx = -this.vx;
        }
    
        if(this.y > innerHeight - this.rad || this.y < 0 + this.rad){
            this.vy = -this.vy;
        }
    
        this.x += this.vx;
        this.y += this.vy;
        
        if (mouse.x - this.x < 100 && mouse.x - this.x > -100
            && mouse.y - this.y < 100 && mouse.y - this.y > -100) { 
                
        if(this.rad < maxRad){
            this.rad += this.rad/10;  
        } 
        } else if(this.rad > minRad){
            this.rad -= this.rad/50;
        }


        this.draw();

    }

}



var circleArray = [];

for(var i = 0; i < 2000; i++){
    var x = Math.random()*(innerWidth - rad * 2) + rad;
    //var x = innerWidth / 2;
    var vx = (Math.random() - 0.5) * 3;
    var y = Math.random()*(innerHeight - rad * 2) + rad;
    //var y = innerHeight / 2;
    var vy = (Math.random() - 0.5) * 3;
    var rad = 15;
    circleArray.push(new Circle(x, y, vx, vy, rad));
    
}



function anim(){
    requestAnimationFrame(anim);
    //c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

}

anim();

