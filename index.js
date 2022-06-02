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

function Translate(language) {
    var transElement = [];    
    {
        var translateButtons = document.getElementsByClassName("main-buttons");
        const translateTitle = document.getElementById("group-work-title");
        const translateSidepageButtons = document.getElementsByClassName("menu-sidepage-buttons");
        var translateLanguageButtons = document.getElementById("language-select-holder");

        for (let i = 0; i < translateButtons.length; i++) {transElement.push(translateButtons[i]);}
        transElement.push(translateTitle);
        for (let i = 0; i < translateSidepageButtons.length; i++) {transElement.push(translateSidepageButtons[i]);};
        for (let i = 0; i < translateLanguageButtons.children.length; i++) {transElement.push(translateLanguageButtons.children[i]);};
    }
    engList = [
        'ENTERTAINMENT', 'LABOR LAW', 'CONTACTS', 'MY PROJECTS', 'GROUP WORK', 'OTHERS', 'SCHOOL', 
        'Group Work',
        'Theme', 'Language', 'None',
        'English', 'Hungarian', 'France', 'German', 'Spanish', 'Russian', 'Chinese', 'Japanese'];
    hunList = [
        'SZÓRAKOZÁS', 'MUNKA JOG', 'ELÉRHETŐSÉGEM', 'PROJEKTEIM', 'CSOPORT MUNKA', 'EGYEBEK', 'ISKOLÁM',
        'Csoport Munka',
        'Téma', 'Nyelv', 'None',
        'Angol', 'Magyar', 'Francia', 'Német', 'Spanyol', 'Orosz', 'Kínai', 'Japán'];
    //Gombok leforditása a főoldalon
    switch (language) {
        case 'eng':
            for (let x = 0; x < translateButtons.length; x++) {transElement[x].innerHTML = "<span>[</span> <b>" + engList[x] + "</b> <span>]</span>";};
            for (let i = translateButtons.length; i < (transElement.length - translateLanguageButtons.children.length); i++) {transElement[i].innerText = engList[i];};
            for (let y = (transElement.length - translateLanguageButtons.children.length); y < transElement.length; y++) {transElement[y].innerHTML = `<button class="settings-select" onclick="Translate('`+engList[y].toLowerCase().substr(0, 3) +`')">` + engList[y] + `</button>`;}
            break;
        case 'hun':
            for (let x = 0; x < translateButtons.length; x++) {transElement[x].innerHTML = "<span>[</span> <b>" + hunList[x] + "</b> <span>]</span>";};
            for (let i = translateButtons.length; i < (transElement.length - translateLanguageButtons.children.length); i++) {transElement[i].innerText = hunList[i];};
            for (let y = (transElement.length - translateLanguageButtons.children.length); y < transElement.length; y++) {transElement[y].innerHTML = `<button class="settings-select" onclick="Translate('`+engList[y].toLowerCase().substr(0, 3) +`')">` + hunList[y] + `</button>`;}
            break;
        default:
            console.log('Még nincs kész!')
            break;
    }
};