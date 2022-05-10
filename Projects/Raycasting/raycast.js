numberofcubes = 20;
var CubeCoordinates = [];
for (let x = 0; x < numberofcubes; x++) {
    let CubeCoordinate = [];
    let cube = document.createElement("div");
    cube.setAttribute("class", "cube");
    cube.style.width = Math.floor(Math.random() * (150 - 90) + 90) + "px";
    cube.style.height = Math.floor(Math.random() * (150 - 90) + 90) + "px";
    cube.style.top = Math.floor(Math.random() * (window.innerHeight-50 - 50) + 50) + "px";
    cube.style.left = Math.floor(Math.random() * (window.innerWidth-50 - 50) + 50) + "px";
    document.querySelector("body").append(cube);
    //Logging cubes hitboxes
    let CCTS = parseInt(cube.style.top.replace("px", "")); //CurrentCubeTopSide
    let CCRS = parseInt(cube.style.left.replace("px", "")) + parseInt(cube.style.width.replace("px", "")); //CurrentCubeRightSide
    let CCBS = parseInt(cube.style.top.replace("px", "")) + parseInt(cube.style.height.replace("px", "")); //CurrentCubeBottomSide
    let CCLS = parseInt(cube.style.left.replace("px", "")); //CurrentCubeLeftSide
    let CCH = parseInt(cube.style.height.replace("px", "")); //CurrentCubeHeight
    CubeCoordinate.push(CCTS, CCRS, CCBS, CCLS, CCH);
    CubeCoordinates.push(CubeCoordinate);
};

deegre = 0
var mouse = {x : undefined, y: undefined};
var line = document.createElement("div");
var line2 = document.createElement("div");
line.setAttribute("id", "line");
line2.setAttribute("id", "line");


line2.style.transform = "rotate(180deg)";
line2.style.backgroundColor = "blue"
line2.style.width = "10px"



document.querySelector("body").append(line);
document.querySelector("body").append(line2);

cubes2 = document.getElementsByClassName("cube");
window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

        CurrentTops = [];
        CurrentBottoms = [];
        ClosestTop = 1000;
        ClosestBottom = 0;
        for (let x = 0; x < CubeCoordinates.length; x++) {
            if (CubeCoordinates[x][1] > mouse.x && mouse.x > CubeCoordinates[x][3]) {
                /*TOP OF THE CUBE CHECKS*/
                CurrentTops2 = [];
                CurrentTops.push(CubeCoordinates[x][0]);
                for (let y = 0; y < CurrentTops.length; y++) {
                    //Leelenőrizzük hogy elhagytuk-e már a jelenlegi cube tetejét amihez alkalmazkodik
                    if (CurrentTops[y] - mouse.y > 0) {
                        CurrentTops2.push(CurrentTops[y])
                        //Beállitjuk hogyha ha több "cube" felett is van a legközelebbihez alkalmazkodjon
                        for (let z = 0; z < CurrentTops2.length; z++) {if (CurrentTops2[z] < ClosestTop) {ClosestTop = CurrentTops2[z]}};
                    };
                };
                line.style.height = (ClosestTop - mouse.y) + "px";

                /*for (let cube = 0; cube < cubes2.length; cube++) {
                    if (cubes2[cube].offsetTop == ClosestTop) {
                        cubes2[cube].style.backgroundColor = "red"
                    } else {
                        cubes2[cube].style.backgroundColor = "black"
                    }
                }*/
                
                console.log(ClosestTop, mouse.y, line.style.height, "||",CubeCoordinates[x][1], mouse.x, CubeCoordinates[x][3]);

                /*BOTTOM OF THE CUBE CHECKS*/
                CurrentBottoms2 = [];
                CurrentBottoms.push(CubeCoordinates[x][2]);
                for (let y = 0; y < CurrentBottoms.length; y++) {
                    //Leelenőrizzük hogy elhagytuk-e már a jelenlegi cube tetejét amihez alkalmazkodik
                    if (CurrentBottoms[y] - mouse.y < 0) {
                        CurrentBottoms2.push(CurrentBottoms[y])
                        //Beállitjuk hogyha ha több "cube" felett is van a legközelebbihez alkalmazkodjon
                        for (let z = 0; z < CurrentBottoms2.length; z++) {if (CurrentBottoms2[z] > ClosestBottom) {ClosestBottom = CurrentBottoms2[z]}};
                    };
                };
                line2.style.height = -(ClosestBottom- mouse.y) + "px";
                
            }
        };
        

        line.style.top = mouse.y + "px";
        line.style.left = mouse.x + "px";

        line2.style.top = ClosestBottom  + "px";
        line2.style.left = mouse.x + "px";
});