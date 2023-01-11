const choiceText = document.getElementById('choices');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let uS = 0;
let cS = 0;

function getComputerChoice() {
	let choice = ['Rock', 'Paper', 'Scissors'];
	let random = choice[Math.floor(Math.random() * choice.length)];
	return random;
}

function round() {
	let computerChoice = getComputerChoice();
	let playerChoice;

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
	} else if (
		(playerChoice === 'Paper' && computerChoice === 'Paper') ||
		(playerChoice === 'Rock' && computerChoice === 'Rock') ||
		(playerChoice === 'Scissors' && computerChoice === 'Scissors')
	) {
		choiceText.textContent = `Draw! You chose ${playerChoice} & the computer chose ${computerChoice}`;
	}
}
round();
//function game() {
//for (let i = 0; i < 10; i++) {
//	if (cS > 4 || uS > 4) break;
//round();
//}
//}
//
//game();
