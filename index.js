var langClicked = 0;
var themeClicked = 0;
var pressed = 0;

document.getElementById("menu-button-open").onclick = function menuOpen() {
    pressed++;
    document.getElementById("menu-sidepage").style.width = "25%";
    document.getElementById("menu-button-close").style.display = "block";
    document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
    document.getElementById("blackscreen").style.display = "block";
}
document.getElementById("menu-button-close").onclick = function menuClose() {
    pressed--;
    document.getElementById("menu-sidepage").style.width = "0%";
    document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
    document.getElementById("menu-button-close").style.display = "none";
    document.getElementById("blackscreen").style.display = "none";
}
document.addEventListener("keydown", function (event) {
    if (event.key === 'm') {
        pressed++;
    if (pressed % 2 == 0) {
        document.getElementById("menu-sidepage").style.width = "0%";
        document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
        document.getElementById("menu-button-close").style.display = "none";
        document.getElementById("blackscreen").style.display = "none";
    } else {
        document.getElementById("menu-sidepage").style.width = "25%";
        document.getElementById("menu-button-close").style.display = "block";
        document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
        document.getElementById("blackscreen").style.display = "block";
        }
    }
});


document.getElementById("language").onclick = function languageChange() {
    langClicked++;

    if (langClicked % 2 == 0) {
        document.getElementById("language-select-holder").style.display = "none";
    } else {
        document.getElementById("language-select-holder").style.display = "block";
    }
}
document.getElementById("theme").onclick = function menu() {
    themeClicked++;

    if (themeClicked % 2 == 0) {
        document.getElementById("theme-select-holder").style.display = "none";
    } else {
        document.getElementById("theme-select-holder").style.display = "block";
    }
}


document.getElementById("language-select").onclick = function languageChange() {
    key = document.getElementById("language-select").innerHTML
    switch (key) {
        case "Angol":
            document.getElementById("szorakozas").innerHTML == "ENTERTAINMENT";
            break;
    
        default:
            break;
    }
}
