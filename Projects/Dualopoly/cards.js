function CreateAssignmentContainerItems(filename, linkParent) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  linkParent.appendChild(card);

  const cardFront = document.createElement("div");
  cardFront.setAttribute("class", "cardFront");
  const cardBack = document.createElement("div");
  cardBack.setAttribute("class", "cardBack");
  card.appendChild(cardFront);
  card.appendChild(cardBack);

  const card_text = document.createElement("span");
  card_text.innerText = filename.charAt(0).toUpperCase() + filename.slice(1).replace('_', ' ');
  cardBack.appendChild(card_text)

  const img = document.createElement("img");
  img.src = "./Res/world_event_test_card.png"
  cardFront.appendChild(img);

  const img2 = document.createElement("img");
  img2.src = "./Res/world_event_test_card.png"
  cardBack.appendChild(img2);


};

fetch("./Res/cards.json").then( response => {
    return response.json();
    }).then(jsondata => {
        const ACC = document.querySelector('#card_holder');
        for (let x = 0; x < jsondata.CardTitles.length; x++) {
          CreateAssignmentContainerItems(jsondata.CardTitles[x], ACC);
        }
        Organizie()
    });

//organize
function Organizie() {
  let leftXP = 10
  let topXP = 10
  const cards = document.getElementsByClassName("card");
  for (let x = 0; x < cards.length; x++) {
    cards[x].style.left = leftXP + "%";
    cards[x].style.top = topXP + "%";
    leftXP += 20
    if ((x+1) % 4 == 0) {topXP += 20, leftXP = 10}
    
  }
}