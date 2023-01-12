const choiceText = document.getElementById('choices');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
let uS = 0;
let cS = 0;

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
		choiceText.textContent = `You lose! You chose ${playerChoice} & the computer chose ${computerChoice}`;
		cS++;
		computerScore.textContent = cS;
	} else if (
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Rock' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'Paper')
	) {
		choiceText.textContent = `You win! You chose ${playerChoice} & the computer chose ${computerChoice}`;
		uS++;
		userScore.textContent = uS;
	} else if (playerChoice === computerChoice) {
		choiceText.textContent = `Draw! You chose ${playerChoice} & the computer chose ${computerChoice}`;
	}
	if (uS === 5) {
		choiceText.textContent = 'Congratulations! You beat the computer!';
	} else if (cS === 5) {
		choiceText.textContent = 'Oh no! You got beat by the computer!';
	}
}
