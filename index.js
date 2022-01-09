var langClicked = 0;
var themeClicked = 0;
var TimesPressed = 0;
var Pressed = false;

document.getElementById("menu-button-open").onclick = function menuOpen() {
    Pressed = true;
    TimesPressed++;

    document.getElementById("menu-sidepage").style.width = "25%";
    setTimeout(
        function() {
            document.getElementById("menu-button-close").style.display = "block";
            document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
            }, 250
    );
    document.getElementById("blackscreen").style.display = "block";
};
document.getElementById("menu-button-close").onclick = function menuClose() {
    TimesPressed++;
    Pressed = false;

    document.getElementById("menu-sidepage").style.width = "0%";
    document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
    document.getElementById("menu-button-close").style.display = "none";
    document.getElementById("blackscreen").style.display = "none";
}
document.addEventListener("keydown", function (event) {
    if (event.key == 'm') {
        TimesPressed++;
        if (TimesPressed % 2 == 0) {
            Pressed = false;
        } else {
            Pressed = true;
        };
        
    if (Pressed == false) {
        document.getElementById("menu-sidepage").style.width = "0%";
        document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
        document.getElementById("menu-button-close").style.display = "none";
        document.getElementById("blackscreen").style.display = "none";
    } else {
        document.getElementById("menu-sidepage").style.width = "25%";
        setTimeout(() => {
                document.getElementById("menu-button-close").style.display = "block";
                document.getElementById("menu-sidepage-buttons-holder").style.display = "block";
                }, 250
        )
        document.getElementById("blackscreen").style.display = "block";
        };
    };
});


document.getElementById("language").onclick = function languageChangeAppear() {
    langClicked++;

    if (langClicked % 2 == 0) {
        document.getElementById("language-select-holder").style.display = "none";
    } else {
        document.getElementById("language-select-holder").style.display = "block";
    }
};
document.getElementById("theme").onclick = function themeChangeAppear() {
    themeClicked++;

    if (themeClicked % 2 == 0) {
        document.getElementById("theme-select-holder").style.display = "none";
    } else {
        document.getElementById("theme-select-holder").style.display = "block";
    }
};

function themeChange(){

}

// LANGUAGE CHANGES

function Translate(language){
    transElement = ['szorakozas', 'munkajog', 'elerhetosegem', 'projekteim', 'csoport_munka', 'egyebek', 'iskolam', 'cim', 'theme', 'language'];
    engList = ['ENTERTAINMENT', 'LABOR LAW', 'CONTACTS', 'MY PROJECTS', 'GROUP WORK', 'OTHERS', 'SCHOOL', 'Group Work', 'Theme', 'Language'];
    hunList = ['SZÓRAKOZÁS', 'MUNKA JOG', 'ELÉRHETŐSÉGEM', 'PROJEKTEIM', 'CSOPORT MUNKA', 'EGYEBEK', 'ISKOLÁM', 'Csoport Munka', 'Téma', 'Nyelv'];
    //Gombok leforditása a főoldalon
    switch (language) {
        case 'eng':
            for (let x = 0; x < transElement.length; x++) {
                document.getElementById(transElement[x]).innerHTML = engList[x];
            }
            break;
        case 'hun':
            for (let x = 0; x < transElement.length; x++) {
                document.getElementById(transElement[x]).innerHTML = hunList[x];
            }
            break;
    
        default:
            console.log('Failure')
            break;
    }
};