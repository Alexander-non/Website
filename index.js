var langClicked = 0;
var themeClicked = 0;
var pressed = 0;

document.getElementById("menu-button-open").onclick = function menuOpen() {
    pressed++;
    document.getElementById("menu-sidepage").style.width = "25%";
    setTimeout(
        function() {
            document.getElementById("menu-button-close").style.display = "block";
            document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
            }, 250
    )
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
        setTimeout(
            function() {
                document.getElementById("menu-button-close").style.display = "block";
                document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
                }, 250
        )
        document.getElementById("blackscreen").style.display = "block";
        }
    }
});


document.getElementById("language").onclick = function languageChangeAppear() {
    langClicked++;

    if (langClicked % 2 == 0) {
        document.getElementById("language-select-holder").style.display = "none";
    } else {
        document.getElementById("language-select-holder").style.display = "block";
    }
}
document.getElementById("theme").onclick = function themeChangeAppear() {
    themeClicked++;

    if (themeClicked % 2 == 0) {
        document.getElementById("theme-select-holder").style.display = "none";
    } else {
        document.getElementById("theme-select-holder").style.display = "block";
    }
}
var selectedID = ''

function themeChange(){

}

// LANGUAGE CHANGES

function english(){
    //Gombok leforditása a főoldalon
    document.getElementById("szorakozas").innerHTML = "ENTERTAINMENT"
    document.getElementById("munkajog").innerHTML = "LABOR LAW"
    document.getElementById("elerhetosegem").innerHTML = "MY CONTACT"
    document.getElementById("projekteim").innerHTML = "PROJECTS"
    document.getElementById("csoport_munka").innerHTML = "GROUPWORK"
    document.getElementById("iskolam").innerHTML = "SCHOOL"
    document.getElementById("cim").innerHTML = "Group Work"
    document.getElementById("theme").innerHTML = "Theme"
    document.getElementById("language").innerHTML = "Language"
}
function hungarian(){
    document.getElementById("szorakozas").innerHTML = "SZÓRAKOZÁS"
    document.getElementById("munkajog").innerHTML = "MUNKA JOG"
    document.getElementById("elerhetosegem").innerHTML = "ELÉRHETŐSÉGEM"
    document.getElementById("projekteim").innerHTML = "PROJEKTEIM"
    document.getElementById("csoport_munka").innerHTML = "CSOPORT MUNKA"
    document.getElementById("iskolam").innerHTML = "ISKOLÁM"
    document.getElementById("cim").innerHTML = "Csoport Munka"
    document.getElementById("theme").innerHTML = "Téma"
    document.getElementById("language").innerHTML = "Nyelv"
}