function TacticsButtonsOrganizer() {
        const ButtonsArray = document.querySelector('#attack_types').querySelectorAll('button');
        for (let x = 0; x < ButtonsArray.length; x++) {ButtonsArray[x].style.marginTop = 100/ButtonsArray.length + "%"}
};

const russia = {
        population_stat: 182229700,
        manpower_stat: (182229700/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 12000000
};
const england = {
        population_stat: 402260775,
        manpower_stat: (402260775/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 8905000
};
const france = {
        population_stat: 80060700,
        manpower_stat: (80060700/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 8410000
};
const hungary = {
        population_stat: 50000000,
        manpower_stat: (50000000/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 7800000
};
const turkey = {
        population_stat: 22142000,
        manpower_stat: (22142000/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 2850000
};
const germany = {
        population_stat: 78239000,
        manpower_stat: (78239000/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 11000000
};
const italy = {
        population_stat: 35260700,
        manpower_stat: (35260700/100)*85, //85%-a népességnek
        wealth_stat: 0,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 5615000
};


const country = document.querySelector('#country_select'); 

const population = document.querySelector('#population');
const manpower = document.querySelector('#manpower');
const wealth = document.querySelector('#wealth');
const morale = document.querySelector('#morale');
const food = document.querySelector('#food');
const effectives = document.querySelector('#effectives');
const Stats = [population,manpower,wealth,morale,food,effectives];
const StatHolders = [russia, england, france, hungary, turkey, germany, italy]; 

country.addEventListener("change", () => {
	for (let x = 0; x < Stats.length; x++) {
		Stats[x] == morale || Stats[x] == food ? 
			Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]) + "%" : 
			Math.round(Object.values(StatHolders[country.value-1])[x]) > 1000000 ? 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x] / 1000000) + "m" : 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]);
	}
});


function WarMapTroopRandom() {
        const Countries = document.querySelector('#country_select').children;
        const Enemy = document.querySelector('#troop_stats').children[1].children[0];
        const Troops = document.querySelector('#troop_stats').children[2].children[0];
        const TroopNumber = Math.floor(Math.random() * (500 - 180)) +  180;
        const Supply = document.querySelector('#troop_stats').children[3].children[0];
        const Power = document.querySelector('#troop_stats').children[4].children[0];
        let SupplyMeter = 100;
        const Weapons = Math.random() * (1 - 0.1) + 0.1; //A katonák fegyverei
        const PlayerDice = Math.random() * (1 - 0.1) + 0.1; //A Játékos Dobása
        

        Enemy.innerText = document.querySelector('#country_select').children[Math.floor(Math.random() * (Countries.length - 0)) + 0].innerText;
        Troops.innerText = TroopNumber  + "ezer";
        Supply.innerText = SupplyMeter + "%";
        let SupplyDecrease = setInterval(() => {
                SupplyMeter <= 0 ? clearInterval(SupplyDecrease) : SupplyMeter--; //Ha eléri a nullát a supply a katonák meghalnak
                Supply.innerText = SupplyMeter + "%";
        }, 1000);
        Power.innerText = Math.round(TroopNumber * Weapons * PlayerDice)
        
        
}

(() => {
        
        for (let x = 0; x < Stats.length; x++) {
		Stats[x] == morale || Stats[x] == food ? 
			Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]) + "%" : 
			Math.round(Object.values(StatHolders[country.value-1])[x]) >= 1000000 ? 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x] / 1000000) + "m" : 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]);
	}
        TacticsButtonsOrganizer();
        WarMapTroopRandom();
})();