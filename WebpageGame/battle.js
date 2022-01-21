var Cards = document.getElementsByClassName("cards");
var Icons = document.getElementsByClassName("class-icon");
var Deck = document.getElementById("deck");
var Sky = document.getElementById("sky");
var CardAlign = 0;
var CardFaceAlign = 20;

for (let x = 0; x < Cards.length; x++) {
    Cards[x].style.marginLeft = CardAlign;
    CardAlign += Deck.offsetWidth / Cards.length;

    var cardFace = document.createElement("div");
    cardFace.style.position = "relative";
    cardFace.style.boxShadow = "0px 0px 50px black"
    cardFace.style.marginLeft = CardFaceAlign + "%";
    cardFace.style.top = "5%";
    cardFace.style.width = "60%";
    cardFace.style.height = "90%";
    switch (x) {
        case 0:
            cardFace.setAttribute("id", "melee");
            Icons[x].src = "Textures/Melee.png";
            break;
        case 1:
            cardFace.setAttribute("id", "mage");
            Icons[x].src = "Textures/Mage.png";
            break;
        case 2:
            cardFace.setAttribute("id", "range");
            Icons[x].src = "Textures/Range.png";
            break;
        case 3:
            cardFace.setAttribute("id", "priest");
            Icons[x].src = "Textures/Priest.png";
            break;
        case 4:
            cardFace.setAttribute("id", "assassin");
            Icons[x].src = "Textures/Assassin.png";
            break;
        default:
            cardFace.style.backgroundColor = "transparent";
            break;
    }
    Cards[x].appendChild(cardFace);
};
function isBattling() {
    //active on victory
    setTimeout(() => {
        Battling = false;
        console.log("Battle ended")
    }, 1000);
}