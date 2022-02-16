var TimesPressed = 0;
var Pressed = false;

$("#menu-button-open").click(() => {
    //$("p").slideToggle();
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
});
$("#menu-button-close").click(() => {
    TimesPressed++;
    Pressed = false;

    document.getElementById("menu-sidepage").style.width = "0%";
    document.getElementById("menu-sidepage-buttons-holder").style.display = "none";
    document.getElementById("menu-button-close").style.display = "none";
    document.getElementById("blackscreen").style.display = "none";
});
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



$("#language").click(() => {
    $("#language-select-holder").slideToggle("slow", "swing");
});
$("#theme").click(() => {
    $("#theme-select-holder").slideToggle("slow", "swing");
});

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