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

let scoreArray = [0, 0];

function getOverallScore(roundOutcome) {
	if (roundOutcome == "Win!") {
		scoreArray[0] += 1;
		return scoreArray;
	} else if (roundOutcome == "Lose!") {
		scoreArray[1] += 1;
		return scoreArray;
	}
}

const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");

function updateScoreBoard() {
	playerScore.textContent = `Your score is:\n${scoreArray[0]}`;
	computerScore.textContent = `Computer Score is ${scoreArray[1]}`;
}

function getOutcome() {
	if (scoreArray[0] == 5) {
		playerScore.textContent = "You";
		computerScore.textContent = "Win!";
		return (scoreArray = [0, 0]);
	} else if (scoreArray[1] == 5) {
		playerScore.textContent = "You";
		computerScore.textContent = "Lose!";
	} else updateScoreBoard();
}

function roundAnimation(pressedBtn) {
	if (roundOutcome == "Win!") {
		pressedBtn.classList.add("roundWin");
	} else if (roundOutcome == "Lose!") {
		pressedBtn.classList.add("roundLose");
	} else pressedBtn.classList.add("roundDraw");
}

const rockChoiceBtn = document.querySelector(".rockBtn");
rockChoiceBtn.addEventListener("click", () => {
	playRound("Rock", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
	getOutcome();
	roundAnimation(rockChoiceBtn);
});

const paperChoiceBtn = document.querySelector(".paperBtn");
paperChoiceBtn.addEventListener("click", () => {
	playRound("Paper", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
	getOutcome();
	roundAnimation(paperChoiceBtn);
});

const scissorsChoiceBtn = document.querySelector(".scissorsBtn");
scissorsChoiceBtn.addEventListener("click", () => {
	playRound("Scissors", getComputerChoice());
	getOverallScore();
	console.log("You " + roundOutcome);
	console.log(getOverallScore(roundOutcome));
	getComputerChoice();
	getOutcome();
	roundAnimation(scissorsChoiceBtn);
});

function removeTransition(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("roundWin", "roundLose", "roundDraw");
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) =>
	choice.addEventListener("transitionend", removeTransition)
);
