const choiceText = document.getElementById('choices');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const newLine = '\r\n';
let uS = 0;
let cS = 0;

choiceText.textContent = `It's up to you to beat the computer.${newLine}Select Rock, Paper or Scissors to begin.`;

const rock = document.querySelector('#rock').addEventListener('click', () => {
	if (uS === 5 || cS === 5) {
		return;
	} else {
		round('Rock', getComputerChoice());
	}
});
const paper = document.querySelector('#paper').addEventListener('click', () => {
	if (uS === 5 || cS === 5) {
		return;
	} else {
		round('Paper', getComputerChoice());
	}
});
const scissors = document
	.querySelector('#scissors')
	.addEventListener('click', () => {
		if (uS === 5 || cS === 5) {
			return;
		} else {
			round('Scissors', getComputerChoice());
		}
	});

function getComputerChoice() {
	let choice = ['Rock', 'Paper', 'Scissors'];
	let random = choice[Math.floor(Math.random() * choice.length)];
	return random;
}

let computerChoice = getComputerChoice();

function round(playerChoice, computerChoice) {
	if (
		(playerChoice === 'Rock' && computerChoice === 'Paper') ||
		(playerChoice === 'Paper' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Rock')
	) {
		choiceText.textContent = `You lose!${newLine}You chose ${playerChoice} & the computer chose ${computerChoice}`;
		cS++;
		computerScore.textContent = cS;
	} else if (
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Rock' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		choiceText.textContent = `You win!${newLine}You chose ${playerChoice} & the computer chose ${computerChoice}`;
		uS++;
		userScore.textContent = uS;
	} else if (playerChoice === computerChoice) {
		choiceText.textContent = `Draw!${newLine}You chose ${playerChoice} & the computer chose ${computerChoice}`;
	}
	if (uS === 5) {
		choiceText.textContent = `Congratulations!${newLine}You beat the computer!`;
	} else if (cS === 5) {
		choiceText.textContent = `Oh no!${newLine}You got beat by the computer!`;
	}
}

const reset = document.getElementById('reset').addEventListener('click', () => {
	choiceText.textContent = `It's up to you to beat the computer.${newLine}Select Rock, Paper or Scissors to begin.`;
	uS = 0;
	cS = 0;
	computerScore.textContent = cS;
	userScore.textContent = uS;
});
