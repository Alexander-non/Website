function TacticsButtonsOrganizer() {
        const ButtonsArray = document.querySelector('#attack_types').querySelectorAll('button');
        for (let x = 0; x < ButtonsArray.length; x++) {ButtonsArray[x].style.marginTop = 100/ButtonsArray.length + "%"}
};
function WarMapIMG() {
        const war_map_IMG = document.querySelector('#war_map').children[0];
        war_map_IMG.src = "./Res/" + country.children[country.value-1].id + ".png";
}
function WarMap() {
        //Random WarTroopData
        const Countries = country.children;
        const Enemy = document.querySelector('#troop_stats').children[1].children[0];
        const Troops = document.querySelector('#troop_stats').children[2].children[0];
        let TroopNumber = Math.floor(Math.random() * (500 - 180)) +  180;
        const Supply = document.querySelector('#troop_stats').children[3].children[0];
        const Power = document.querySelector('#troop_stats').children[4].children[0];
        let SupplyMeter = 100;
        let Weapons = Math.random() * (1 - 0.1) + 0.1; //A katonák fegyverei
        let PlayerDice = (Math.random() * (6 - 1) + 1)/10; //A Játékos Dobása
        let SupplyDecrease = setInterval(() => {}, 1000);
        
        document.querySelector('#troop_create').addEventListener("click", () => {
                clearInterval(SupplyDecrease);
                SupplyMeter = 100;
                TroopNumber = Math.floor(Math.random() * (500 - 180)) +  180;
                PlayerDice = Math.random() * (1 - 0.1) + 0.1;
                Weapons = Math.random() * (1 - 0.1) + 0.1;

                let TargetCountry = country.children[Math.floor(Math.random() * (Countries.length - 0)) + 0].innerText
                if (TargetCountry == country.children[country.value-1].innerText) {TargetCountry = country.children[Math.floor(Math.random() * (Countries.length - 0)) + 0].innerText} else {Enemy.innerText = TargetCountry};
                Troops.innerText = TroopNumber  + " ezer";
                Supply.innerText = SupplyMeter + "%";
                SupplyDecrease = setInterval(() => {
                        if (SupplyMeter < 0) {
                                clearInterval(SupplyDecrease);
                                SupplyMeter = 0;
                        } else {
                                SupplyMeter = parseFloat(SupplyMeter -= parseInt(Attack_cost) + TroopNumber/1000)
                                if (SupplyMeter < 0) {
                                        SupplyMeter = 0
                                }
                                else {
                                        SupplyMeter -= parseInt(Attack_cost) + TroopNumber/1000
                                }
                        } //Ha eléri a nullát a supply a katonák meghalnak
                        Supply.innerText = Math.round(SupplyMeter * 100) / 100 + "%"; //Math.round(SupplyMeter * 100) / 100
                }, 1000);
                Power.innerText = Math.round(TroopNumber * Weapons * PlayerDice)   

        });
        document.querySelector('#troop_delete').addEventListener("click", () => {
                clearInterval(SupplyDecrease);
                SupplyMeter = 100;
                Enemy.innerText = "???";
                Troops.innerText = 0;
                Supply.innerText = "100%";
                Power.innerText = 0;

        });

        Enemy.innerText = "???"//country.children[Math.floor(Math.random() * (Countries.length - 0)) + 0].innerText;
        Troops.innerText = 0 //TroopNumber  + "ezer";
        Supply.innerText = "100%" //SupplyMeter + "%";
        Power.innerText = 0 //Math.round(TroopNumber * Weapons * PlayerDice)   

        //Setting WarMap's image
        WarMapIMG();
};

const russia = {
        population_stat: 182229700,
        manpower_stat: (182229700/100)*85, //85%-a népességnek
        wealth_stat: 856712,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 12000000
};
const england = {
        population_stat: 402260775,
        manpower_stat: (402260775/100)*85, //85%-a népességnek
        wealth_stat: 1614942,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 8905000
};
const france = {
        population_stat: 80060700,
        manpower_stat: (80060700/100)*85, //85%-a népességnek
        wealth_stat: 862804,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 8410000
};
const hungary = {
        population_stat: 50000000,
        manpower_stat: (50000000/100)*85, //85%-a népességnek
        wealth_stat: 732455,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 7800000
};
const turkey = {
        population_stat: 22142000,
        manpower_stat: (22142000/100)*85, //85%-a népességnek
        wealth_stat: 667593,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 2850000
};
const germany = {
        population_stat: 78239000,
        manpower_stat: (78239000/100)*85, //85%-a népességnek
        wealth_stat: 1062639,
        morale_stat: 100,
        food_stat: 100,
        effectives_stat: 11000000
};
const italy = {
        population_stat: 35260700,
        manpower_stat: (35260700/100)*85, //85%-a népességnek
        wealth_stat: 767302,
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
let Attack_cost = 1;

const attack_types = document.querySelector('#attack_types');
for (let x = 0; x < attack_types.children.length; x++) {attack_types.children[x].addEventListener("click", () => {Attack_cost = attack_types.children[x].value});};


country.addEventListener("change", () => {
	for (let x = 0; x < Stats.length; x++) {
                Stats[x] == wealth ? 
                        Object.values(StatHolders[country.value-1])[x] > 1000000 ? Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]/1000000 * 100) / 100 + " m" : 
                        Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]/1000 * 10) / 10 + " ezer": /*end of this*/
		Stats[x] == morale || Stats[x] == food ? 
			Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]) + "%" : 
			Math.round(Object.values(StatHolders[country.value-1])[x]) > 1000000 ? 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x] / 1000000) + "m" : 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]);
	}
        WarMapIMG();
});

(() => {
        for (let x = 0; x < Stats.length; x++) {
                Stats[x] == wealth ? 
                        Object.values(StatHolders[country.value-1])[x] > 1000000 ? Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]/1000000 * 100) / 100 + " m" : 
                        Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]/1000 * 10) / 10 + " ezer": /*end of this*/
		Stats[x] == morale || Stats[x] == food ?
			Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]) + "%" : 
			Math.round(Object.values(StatHolders[country.value-1])[x]) >= 1000000 ? 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x] / 1000000) + "m" : 
				Stats[x].innerText = Math.round(Object.values(StatHolders[country.value-1])[x]);
	}
        TacticsButtonsOrganizer();
        WarMap();
})();