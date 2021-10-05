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

document.getElementsByClassName("theme-select").onclick = function languageChange() {
    document.getElementsByClassName("theme-select").innerHTML = key
    switch (key) {
        case "Normal":
            alert("Normalzed")
            break;
        case "Light":
            alert("Light mode!")
            break;
        case "Dark":
            alert("Light mode!")
            break;
        case "Ocean":
            
            break;
        case "Old":
            
            break;
        case "Apocalips":
            
            break;
        case "Console":
            
            break;
        case "Minecraft":
            
            break;
        case "Terraria":
            
            break;
        case "Undertale":
    
        default:
            alert("ALERT")
            break;
    }
}

/*function englishTranslate() {
    //Gombok leforditása a főoldalon
    document.getElementById("szorakozas").innerHTML = "ENTERTAINMENT";
    document.getElementById("munkajog").innerHTML = "LABOR LAW";
    document.getElementById("elerhetosegem").innerHTML = "MY CONTACT";
    document.getElementById("projekteim").innerHTML = "PROJECTS";
    document.getElementById("csoport_munka").innerHTML = "GROUPWORK";
    document.getElementById("iskolam").innerHTML = "SCHOOL";
    document.getElementById("cspc").innerHTML = "Group Work"; //cspc = Csoport Projekt Cim
    document.getElementById("theme").innerHTML = "Theme";
    document.getElementById("language").innerHTML = "Language";
}*/
