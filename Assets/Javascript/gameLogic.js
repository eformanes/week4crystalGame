// $(document).ready(function() {

	var wins = 0;
	var losses = 0;
	var counter = 0;
	var cardValues = [1,1,1,1];
	var secretNumber = 0;


	
	function generateSecretNumber() {
		secretNumber = Math.floor(Math.random() * (120 - 19 +1) +19);
	}

	function populateCardValuesArray() {
		for(var i=0; i< cardValues.length;i++)
		{
			var randCardValue = Math.floor(Math.random() * (12 - 1 + 1) + 1);
			cardValues[i] = randCardValue; 
		}
	}

	function resetGame(){
		generateSecretNumber();
		populateCardValuesArray();
		updateDisplay();
		counter =0;
		updateDisplay();
	}

	function updateDisplay(){
		$("#winsDisplay").html(wins);
		$("#lossesDisplay").html(losses);
		$("#secretNumber").html(secretNumber);
		$("#counter").html(counter);
	}

	// Make this general for the crystal click.
	// $(".crystal").click(clickCrystal);

	// function clickCrystal(){
	// 	console.log("Clicked");
	// }

	function checkGameEnd(){
		//console.log("Clicked!");
		


		if(counter === secretNumber)
		{
			//win
			updateDisplay();
			alert("You win!");
			wins++;
			resetGame();
		}
		else if(counter > secretNumber){
			updateDisplay();
			alert("You lose!");
			losses++;
			resetGame();
		}
	}

	// Click functions
	$("#crystal1").click(function () {
		console.log("clicked1");
		counter += cardValues[0];
		updateDisplay();
		checkGameEnd();
		updateDisplay();
	})

	$("#crystal2").click(function () {
		console.log("clicked2");
		counter += cardValues[1];
		updateDisplay();
		checkGameEnd();
		updateDisplay();
	})

	$("#crystal3").click(function () {
		console.log("clicked3");
		counter += cardValues[2];
		updateDisplay();
		checkGameEnd();
		updateDisplay();
	})

	$("#crystal4").click(function () {
		console.log("clicked4");
		counter += cardValues[3];
		updateDisplay();
		checkGameEnd();
		updateDisplay();
	})

	//Attempt to make the general case of click.
	//$(".crystal").click(checkGameEnd(this));

	//todo
	// comment, and make a general .crystal clicked function




	//This function call initiallizes the game.
	resetGame();

// });