function computerPlay() {
	const rps = ['rock', 'paper', 'scissors'];
	const choice = rps[Math.floor(Math.random() * rps.length)];
	return choice;
}
const body = document.querySelector('body');
body.setAttribute(
	'style',
	'height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column'
);
const results = document.getElementById('results');
results.setAttribute(
	'style',
	'width: 50vw; display: flex; flex-direction: column; align-items: center;'
);
let userScore = document.getElementById('user-score');
userScore.setAttribute('style', 'text-align: center;');
let computerScore = document.getElementById('computer-score');
let choices = document.getElementById('choices');
let finalResult = document.getElementById('final-result');
let userPoints = 1;
let computerPoints = 1;

function oneRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return (choices.textContent =
			"It's a draw! You chose " +
			playerSelection +
			' and the computer chose ' +
			computerSelection);
	}

	if (
		(playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'scissors' && computerSelection == 'paper')
	) {
		userScore.textContent = userPoints++;
		choices.textContent =
			'You win! You chose ' +
			playerSelection +
			' and the computer chose ' +
			computerSelection;
	} else {
		computerScore.textContent = computerPoints++;
		choices.textContent =
			'You lose! You chose ' +
			playerSelection +
			' and the computer chose ' +
			computerSelection;
	}

	if (userPoints == 6) {
		finalResult.textContent = 'You are the winner!';
	} else if (computerPoints == 6) {
		finalResult.textContent = 'The computer is the winner!';
	} else {
		return;
	}
}

const rock = document
	.getElementById('rock')
	.addEventListener('click', function () {
		if (userPoints == 6 || computerPoints == 6) {
			return;
		} else {
			oneRound('rock', computerPlay());
		}
	});
const paper = document
	.getElementById('paper')
	.addEventListener('click', function () {
		if (userPoints == 6 || computerPoints == 6) {
			return;
		} else {
			oneRound('paper', computerPlay());
		}
	});
const scissors = document
	.getElementById('scissors')
	.addEventListener('click', function () {
		if (userPoints == 6 || computerPoints == 6) {
			return;
		} else {
			oneRound('scissors', computerPlay());
		}
	});
