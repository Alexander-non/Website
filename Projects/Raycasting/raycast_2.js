{ // Segédfunkciók
    function rand(min, max){
        max += 1
        return Math.floor(Math.random() * (max - min) + min)
    }
    var randomProp = function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[ keys.length * Math.random() << 0]];
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

    function pitTetel(a, b){
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }

    function angleCalc(x1, y1, x2, y2) {
        dx = x2-x1
        dy = y2-y1
        return (Math.atan2(dy , dx));
    }
    function avg(grid){
        temp = 0
        grid.forEach(i => {
            temp += i
        });
        return (temp / grid.length)
    }

    function searchIngriday(srcgriday, srcObj) {
        for (let i = 0; i < srcgriday.length; i++) {
            if(srcgriday[i] == srcObj){
                return {"object":srcObj, "index":i}
            }
        }
        return undefined
    }
    var mouse = {
        x: 0,
        y: 0
    }
    document.addEventListener('mousemove', (e)=> {   
        mouse.x = e.clientX
        mouse.y = e.clientY
    })

    function RGBToHSL(r, g, b){
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
          ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
          : 0;
        return [
          60 * h < 0 ? 60 * h + 360 : 60 * h,
          100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
          (100 * (2 * l - s)) / 2,
        ];
    }

    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
}

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

//Raycast csak a gömbre! (angleCalc)

function RayCast(x, y, angle, step = 3) {
    while (dist(x, y, window.innerWidth/2, window.innerHeight/2) < window.innerWidth*1.25) {
        x += step * Math.cos(degRad(angle));
        y += step * Math.sin(degRad(angle));
        if (dist(x, y, window.innerWidth/2, window.innerHeight/2) < 100) {
            break;
        }
    }
    return {x, y};
}
let rayCast;
function update() {
    let mouseToCircle = angleCalc(mouse.x, mouse.y, window.innerWidth/2, window.innerHeight/2 )
    requestAnimationFrame(update);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    let Start = {x : window.innerWidth/2 + 100*Math.cos(mouseToCircle + Math.PI/2), y : window.innerHeight/2 + 100*Math.sin(mouseToCircle + Math.PI/2)}
    let End = {x : window.innerWidth/2 + 100*Math.cos(mouseToCircle - Math.PI/2), y : window.innerHeight/2 + 100*Math.sin(mouseToCircle - Math.PI/2)}
    let AngleRange = angleCalc(mouse.x, mouse.y, End.x, End.y) - angleCalc(mouse.x, mouse.y, Start.x, Start.y);
    //let AngleRange = Math.abs(angleCalc(mouse.x, mouse.y, End.x, End.y)) - Math.abs(angleCalc(mouse.x, mouse.y, Start.x, Start.y)); IT LOOKS COOL
    //if (radDeg(AngleRange) < 0) {AngleRange += 360}
    //if (radDeg(AngleRange) > 360) {AngleRange -= 360}
    for (let o = 0; o < 20; o++) {
        rayCast = RayCast(mouse.x, mouse.y, 360 + radDeg(angleCalc(mouse.x, mouse.y, Start.x, Start.y) + AngleRange/19*o));

        ctx.beginPath()
        ctx.strokeStyle = "rgb(0, 0, 0)";
        ctx.lineWidth = 1;
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(rayCast.x, rayCast.y)
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.strokeStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = 1;
    ctx.arc(window.innerWidth/2, window.innerHeight/2, radius = 100, startAngle = 0, endAngle = Math.PI*2)
    ctx.stroke();
}
update()