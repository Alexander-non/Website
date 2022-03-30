function GameArea() {
    const cells = 30;
    let ActiveNumofCells = 5;

    let GameArea = document.createElement("table");
    GameArea.style.backgroundColor = "#00000050";
    GameArea.style.borderCollapse = "collapse"
    GameArea.style.position = "absolute";
    GameArea.style.zIndex = 0;
    GameArea.style.left = 0;
    GameArea.style.top = 0;
    GameArea.style.width = "100%";
    GameArea.style.height = "100%";
    document.querySelector("body").appendChild(GameArea);
    for (let x = 0; x < cells; x++) {
        let GameRow = document.createElement("tr");
        GameRow.style.height = 100/cells + "px";
        GameRow.style.width = "100%";
        GameRow.style.border = "0.5px solid black";
        GameArea.appendChild(GameRow);
        //Creating game columns
        for (let x = 0; x < cells; x++) {
            let GameColumn = document.createElement("td");
            GameColumn.setAttribute('class', 'cell');
            GameColumn.style.height = 100/cells + "px";
            GameColumn.style.width = 100/cells + "px";
            GameColumn.style.border = "1px solid black";
            GameRow.appendChild(GameColumn);
        };
    };
    for (let x = 0; x < ActiveNumofCells; x++) {
        RandomCell = Math.floor(Math.random() * (cells*cells - 1) ) + 1;
        ActiveCell = document.getElementsByClassName('cell')[RandomCell];
        $(ActiveCell).addClass('Active');
    };
    setInterval(() => {
        for (let x = 0; x < ActiveNumofCells; x++) {
            RandomCell = Math.floor(Math.random() * (cells*cells - 0) ) + 0;
            ActiveCell = document.getElementsByClassName('cell')[RandomCell];
            $(ActiveCell).toggleClass('Active');
        };
    }, 30);

};
$("document").ready(()=> {
    GameArea();
});