import { PlayerSkin, EnemyImg, Battling, isMoving } from "../TrashAdventure/webpage_game.js";

const Cards = document.getElementsByClassName("cards");
const CardFace = document.getElementsByClassName("card-front");
const CardIcons = document.getElementsByClassName("class-icon");
const Deck = document.getElementById("deck");
const Sky = document.getElementById("sky");
const TypeBox = document.getElementById("typebox-holder");
//const EnemySkin = localStorage.getItem("EnemySkin");
const musicBattle = document.getElementById("music_battle");
let SpellName = ""
let CardAlign = 0;

window.onload = () => {
    //Disabling movement
    //Setting character skins
    document.getElementById("character_battle_skin").src = PlayerSkin;
    document.getElementById("enemy_battle_skin").src = EnemyImg;
}


setInterval(() => {
    try {
        musicBattle.volume = 0.1;
    } catch (error) {
        console.log()
    }
}, 1);


for (let x = 0; x < Cards.length; x++) {
    Cards[x].style.marginLeft = CardAlign + "%";
    CardAlign += 20;
    switch (x) {
        case 0:
            CardFace[x].setAttribute("id", "melee");
            CardIcons[x].src = "Textures/Melee.png";
            break;
        case 1:
            CardFace[x].setAttribute("id", "mage");
            CardIcons[x].src = "Textures/Mage.png";
            break;
        case 2:
            CardFace[x].setAttribute("id", "range");
            CardIcons[x].src = "Textures/Range.png";
            break;
        case 3:
            CardFace[x].setAttribute("id", "priest");
            CardIcons[x].src = "Textures/Priest.png";
            break;
        case 4:
            CardFace[x].setAttribute("id", "assassin");
            CardIcons[x].src = "Textures/Assassin.png";
            break;
        default:
            CardFace[x].style.backgroundColor = "transparent";
            break;
    }
    Cards[x].appendChild(CardFace[x]);
};
//Generating div's that contain the words letter
function WordSpell() {
    const RandomNumber = Math.floor(Math.random() * (10 - 2) ) + 2;
    const SpellName = Math.random().toString(36).substring(2, RandomNumber + 2); //Temporary
    let SupportVariable = 0;

    for (let x = 0; x < SpellName.length; x++) {
        const letter_holder = document.createElement("div");
        const letter = document.createElement("p");
        letter_holder.style.width = "10%"//100/SpellName.length + "%"
        letter_holder.style.left = (100 - (SpellName.length * 10) - (0.5 * SpellName.length)) / 2 + "%";
        letter_holder.setAttribute("class", "typebox-letter-holder");
        letter.setAttribute("class", "typebox-letter");
        letter.innerHTML = SpellName[x];
        letter_holder.appendChild(letter);
        TypeBox.appendChild(letter_holder);
    };

    window.addEventListener("keypress", (event) => {
        const TypeBoxLetter = document.getElementsByClassName("typebox-letter");
        const TypeBoxLetterHolder = document.getElementsByClassName("typebox-letter-holder");
        let SupportList = [];
        for (let x = 0; x < TypeBoxLetter.length; x++) {SupportList.push(TypeBoxLetter[x])};
        if (SupportVariable != SupportList.length) {
            if (SupportList[SupportVariable].innerHTML == event.key) {TypeBoxLetterHolder[SupportVariable].style.backgroundColor = "green", SupportVariable += 1}
            else {TypeBoxLetterHolder[SupportVariable].style.backgroundColor = "red", SupportVariable += 1};
        };
    });
};

//Generating new words if one the cards are clicked
for (let x = 0; x < Cards.length; x++) {
    var firstCardPull = true;
    Cards[x].addEventListener("click", () => {
        console.log(TypeBox.children)
        if (firstCardPull == true) {WordSpell(); firstCardPull = false}
        else {TypeBox.innerHTML = ""; WordSpell();}
    });
};

export function isBattling() {
    //active on victory
    setTimeout(() => {
        //Battling = false;
        //isMoving = false;
        console.log("Battle ended");
    }, 10000);
};