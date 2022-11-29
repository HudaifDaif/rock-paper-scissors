function gameRound() {
	function getComputerChoice() {
		let computerRand = Math.floor(Math.random() * 3) + 1;
		let computerSelection =
			computerRand === 1
				? "Rock"
				: computerRand === 2
				? "Paper"
				: "Scissors";

		return computerSelection;
	}

	computerSelection = getComputerChoice();

	// console.log(computerSelection);

	// *    take player choice in prompt and format

	do {
		playerChoice = prompt("Rock? Paper? Scissors?", "Choose wisely");

		function formatSelection() {
			let playerSelection =
				playerChoice[0].toUpperCase() + playerChoice.substring(1);
			return playerSelection;
		}

		playerSelection = formatSelection();
	} while (
		playerSelection !== "Rock" &&
		playerSelection !== "Paper" &&
		playerSelection !== "Scissors"
	);

	console.log("You played " + playerSelection);

	function playRound(playerSelection, computerSelection) {
		return playerSelection === "Rock" && computerSelection === "Scissors"
			? "Win!"
			: playerSelection === "Paper" && computerSelection === "Rock"
			? "Win!"
			: playerSelection === "Scissors" && computerSelection === "Paper"
			? "Win!"
			: playerSelection === computerSelection
			? "Draw!"
			: "Lose!";
	}

	roundOutcome = playRound(playerSelection, computerSelection);
}

console.log("You " + roundOutcome);
