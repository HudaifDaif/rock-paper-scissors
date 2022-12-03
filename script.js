function getComputerChoice() {
	let computerRand = Math.floor(Math.random() * 3) + 1;
	let compChoice =
		computerRand === 1 ? "Rock" : computerRand === 2 ? "Paper" : "Scissors";

	return compChoice;
}

let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection) {
	if (playerSelection !== undefined) {
		return playerSelection === "Rock" && computerSelection === "Scissors"
			? (roundOutcome = "Win!")
			: playerSelection === "Paper" && computerSelection === "Rock"
			? (roundOutcome = "Win!")
			: playerSelection === "Scissors" && computerSelection === "Paper"
			? (roundOutcome = "Win!")
			: playerSelection === computerSelection
			? (roundOutcome = "Draw!")
			: (roundOutcome = "Lose!");
	}
}

const scoreArray = [0, 0];

function getOverallScore(roundOutcome) {
	if (roundOutcome == "Win!") {
		scoreArray[0] += 1;
		return scoreArray;
	} else if (roundOutcome == "Lose!") {
		scoreArray[1] += 1;
		return scoreArray;
	}
}

const rockChoiceBtn = document.querySelector(".rockBtn");
rockChoiceBtn.addEventListener("click", () => {
	playRound("Rock", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
});

const paperChoiceBtn = document.querySelector(".paperBtn");
paperChoiceBtn.addEventListener("click", () => {
	playRound("Paper", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
});

const scissorsChoiceBtn = document.querySelector(".scissorsBtn");
scissorsChoiceBtn.addEventListener("click", () => {
	playRound("Scissors", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
});

const scoreBoard = document.querySelector(".scoreBoard");
// scoreBoard.textContent = `Your score is:\n${scoreArray[0]}\nComputer Score is ${scoreArray[1]}`
