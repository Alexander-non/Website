let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth; //Canvas méretét csak így lehet
canvas.height = window.innerHeight; //
let ctx = canvas.getContext("2d"); // Canvas ecset

//négyzet
ctx.beginPath() //inicializálás
ctx.fillStyle = "rgb(0, 255, 0)"
ctx.strokeStyle = "rgb(0, 255, 0)"
ctx.lineWidth = 10
let x = 300;
for (let i = 0; i < 2; i++) {
    ctx.rect(x, y = 300, w = 100, h = 100)  //forma lementése memóriába
    ctx.stroke() //véglegesítés
    x+= 200
}

//kör
ctx.fillStyle = "rgb(255, 128, 0)"
ctx.strokeStyle = "rgb(255, 128, 0)"
for (let i = 0; i < 2; i++) {
    ctx.beginPath()
    ctx.arc(x, y = 500, radius = 50, startAngle = 0, endAngle = Math.PI*2)
    ctx.stroke()
    x+= 200
}

//vonal
ctx.beginPath()
ctx.fillStyle = "rgb(128, 128, 128)"
ctx.strokeStyle = "rgb(128, 128, 128)"
ctx.lineCap = "round"
ctx.lineWidth = 20

let numZigZags = 5;
x = 0;
ctx.moveTo(x = 0, y = 0)

for (let i = 0; i < numZigZags; i++) {
    if (i % 2 == 0) {y = innerHeight} else {y=0}
    x+=innerWidth/numZigZags;
    ctx.lineTo(x, y)
    ctx.stroke()
}

//kép
let imageobj = new Image()
imageobj.src = "https://w7.pngwing.com/pngs/151/483/png-transparent-brown-tabby-cat-cat-dog-kitten-pet-sitting-the-waving-cat-animals-cat-like-mammal-pet-thumbnail.png"
x = 500
y = 100
h = 200
w = 500
for (let i = 0; i < 10; i++) {
    ctx.drawImage(imageobj, x, y, w, h)
    x+= 200
    y+= 100
}


const Ball = function(params){
    this.para = param
}