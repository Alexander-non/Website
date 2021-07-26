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


var maxRad = 50;
var minRad = 15;


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
        c.arc(this.x, this.y, this.rad, 0, Math.PI*2, false); //Kör méreteinek megadása
        c.fillStyle = this.color
        c.fill();
    }

    this.update = function(){
        if(this.x > innerWidth - this.rad || this.x < 0 + this.rad){
            this.vx = -this.vx;
        } //Vissza pattanás az X kördináta rendszeren
    
        if(this.y > innerHeight - this.rad || this.y < 0 + this.rad){
            this.vy = -this.vy;
        }//Vissza pattanás az Y kördináta rendszeren
    
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

for(var i = 0; i < 750 /**A 10 arra utal mennyi kör jelenik meg.*/; i++){
    var x = innerWidth / 2; //A terület ahol a körök pattoghatnak (X)
    var vx = (Math.random() - 0.5) * 10; //X-kördináta rendszer sebessége.
    var y = innerHeight / 2; //A terület ahol a körök pattoghatnak (Y)
    var vy = (Math.random() - 0.5) * 10; //Y-kördináta rendszer sebessége.
    var rad = 20; //A körök nagysága
    circleArray.push(new Circle(x, y, vx, vy, rad));
    
}



function animation(){
    requestAnimationFrame(animation);
     c.clearRect(0, 0, innerWidth, innerHeight); //Törli a körök elöző pozicióját hogy ugy látszodjon mozognak (A zárojelben a terület van amit töröl)
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update(); //Folyamatos circleArray vagyis kicsit kör updateje
    }

}

animation();