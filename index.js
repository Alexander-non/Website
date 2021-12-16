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

function Translate(mainButton1, mainButton2, mainButton3, mainButton4, mainButton5, mainButton6, groupWorkTitle, Theme, Language){
    //Gombok leforditása a főoldalon
    document.getElementById("szorakozas").innerHTML = mainButton1;
    document.getElementById("munkajog").innerHTML = mainButton2;
    document.getElementById("elerhetosegem").innerHTML = mainButton3;
    document.getElementById("projekteim").innerHTML = mainButton4;
    document.getElementById("csoport_munka").innerHTML = mainButton5;
    document.getElementById("iskolam").innerHTML = mainButton6;
    document.getElementById("cim").innerHTML = groupWorkTitle;
    document.getElementById("theme").innerHTML = Theme;
    document.getElementById("language").innerHTML = Language;
};