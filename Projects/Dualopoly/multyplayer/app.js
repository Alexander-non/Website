(function () {

	const CountryStats = {
		'russia' : {
			population: 182229700,
			manpower: 0, //1 = 500 population
			money: 0,
			morale: 100,
			food: 100,
			soldiers: 12000000
		}

	}

	let playerId;
	let playerRef;
	let players = {};
	let playerElements = {};

	const gameArea = document.querySelector("#lobby");

	function initGame() {
		const EveryPlayer = firebase.database().ref(`players`);

		EveryPlayer.on("value", (snapshot) => {
			players = snapshot.val() || {};
			Object.keys(players).forEach((key) => {
				const characterState = players[key];
				let el = playerElements[key];
				el.querySelector(".name_placeholder").innerHTML = characterState.player_name;
				el.querySelector("#countries").value = characterState.country;

			})
		});
		EveryPlayer.on("child_added", (snapshot) => {
			const addedPlayer = snapshot.val();
			const characterElement = document.createElement('div');
			characterElement.classList.add("player_lobby");
			characterElement.style.top = 20 * gameArea.querySelectorAll('.player_lobby').length + 30 + "%";
			characterElement.innerHTML = (
				`<select id="countries">
					<option value="russia">Oroszország</option>
					<option value="england">Brit Birodalom</option>
					<option value="france">Franciaország</option>
					<option value="hungary">Osztrák-Magyar Monarchia</option>
					<option value="turkey">Török Birodalom</option>
					<option value="germany">Német Birodalom</option>
					<option value="italy">Olaszország</option>
				</select>
				<h1 class="name_placeholder"></h1>`
			);
			playerElements[addedPlayer.id] = characterElement;

			characterElement.querySelector(".name_placeholder").innerHTML = addedPlayer.player_name;
			if (addedPlayer.id === playerId) {characterElement.classList.add("you");} 
			else {characterElement.querySelector('#countries').disabled = true;}
			
			gameArea.appendChild(characterElement)
		});

		document.querySelector('#countries').addEventListener("change", () =>{
			players[playerId].country = document.querySelector('#countries').value;
			playerRef.set(players[playerId])
		});
	};

	

	function changeToLobby() {
		const menuItems = [];
		const loginMenu = document.querySelector("#login_menu");
		menuItems.push(loginMenu);
		for (let x = 0; x < menuItems.length; x++) {menuItems[x].remove();};
		gameArea.style.display = "block";
	};


	firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		/*LOGIN*/
		const startButton = document.querySelector("#startButton");
		playerId = user.uid;
		playerRef = firebase.database().ref(`players/${playerId}`);
		startButton.addEventListener("click", () =>{
			
			const name = document.querySelector("#player_nameInput").value;
			const country = 'russia' //gameArea.querySelector("#conutries").value

			playerRef.set({
				//stats
				id : playerId,
				player_name : name,
				country: country
			});

			changeToLobby();

			initGame();
		});

		playerRef.onDisconnect().remove();

		
	} else {
		/*LOGOUT*/
	};

	});
	firebase.auth().signInAnonymously().catch((error) => {console.log(error.code, error.message);});
})();