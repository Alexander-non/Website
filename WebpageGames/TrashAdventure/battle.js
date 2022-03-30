value = localStorage["key"]; //Linking two JS files together DO NOT REMOVE
const Cards = document.getElementsByClassName("cards");
const CardFace = document.getElementsByClassName("card-front");
const CardIcons = document.getElementsByClassName("class-icon");
const Deck = document.getElementById("deck");
const Sky = document.getElementById("sky");
const TypeBox = document.getElementById("typebox-holder");
const PlayerSkin = localStorage.getItem("PlayerSkin");
const EnemySkin = localStorage.getItem("EnemySkin");
const musicBattle = document.getElementById("music_battle");
let SpellName = ""
let CardAlign = 0;


window.onload = () => {
    //Disabling movement
    isMoving = false
    //Setting character skins
    document.getElementById("character_battle_skin").src = PlayerSkin;
    document.getElementById("enemy_battle_skin").src = EnemySkin;
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
    
    //CardFace[x].style.marginLeft = "20%";
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

RandomNumber = Math.floor(Math.random() * (10 - 2) ) + 2
SpellName = Math.random().toString(36).substring(2, RandomNumber + 2);
for (let x = 0; x < SpellName.length; x++) {
    const letter_holder = document.createElement("div");
    const letter = document.createElement("p");
    letter_holder.style.width = "10%"//100/SpellName.length + "%"
    letter_holder.style.left = (100 - (SpellName.length * 10) - (0.5 * SpellName.length)) / 2 + "%"
    letter_holder.setAttribute("class", "typebox-letter-holder");
    letter.setAttribute("class", "typebox-letter");
    letter.innerHTML = SpellName[x];
    letter_holder.appendChild(letter);
    TypeBox.appendChild(letter_holder);
};
//Detecting keypresses
let i = 0
document.addEventListener("keypress", (event) => {
    TypeBoxLetter = document.getElementsByClassName("typebox-letter");
    TypeBoxLetterHolder = document.getElementsByClassName("typebox-letter-holder");
    JollyList = []
    for (let x = 0; x < TypeBoxLetter.length; x++) {JollyList.push(TypeBoxLetter[x])}
    if (i != JollyList.length) {
        if (JollyList[i].innerHTML == event.key) {TypeBoxLetterHolder[i].style.backgroundColor = "green", i+=1} 
        else {TypeBoxLetterHolder[i].style.backgroundColor = "red", i+=1}
    };
});


function isBattling() {
    //active on victory
    setTimeout(() => {
        Battling = false;
        console.log("Battle ended")
    }, 10000);
}