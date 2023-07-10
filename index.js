const dice = document.getElementById('dice-btn');




function diceGame() {
	//DICE 1
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "img/" + "dice-" + randomDice + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);
	
	//DICE 2
	var randomDice2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "img/" + "dice-" + randomDice2 + ".png";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = "  Player 1 Wins ! 🏆";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins ! 🏆 ";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "🚩Draw! ";
	}
	else {
		document.querySelector("h1").innerHTML = "Error!"
	}
	dice.innerHTML = "Play Again"
}