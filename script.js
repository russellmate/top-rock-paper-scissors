const choiceText = document.getElementById('choices');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let uS = 0;
let cS = 0;

function getComputerChoice() {
	let choice = ['rock', 'paper', 'scissors'];
	let random = choice[Math.floor(Math.random() * choice.length)];
	return random;
}

function getPlayerChoice() {
	rock.addEventListener('onclick', () => {
		return 'rock';
	});
	paper.addEventListener('onclick', () => {
		return 'paper';
	});
	scissors.addEventListener('onclick', () => {
		return 'scissors';
	});
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

function round(playerChoice, computerChoice) {
	if (
		(playerChoice === 'rock' && computerChoice === 'paper') ||
		(playerChoice === 'paper' && computerChoice === 'scissors') ||
		(playerChoice === 'scissors' && computerChoice === 'rock')
	) {
		choiceText.textContent = `You lose! You chose ${playerChoice} & the computer chose ${computerChoice}`;
		cS++;
		computerScore.textContent = cS;
	} else if (
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		choiceText.textContent = `You win! You chose ${playerChoice} & the computer chose ${computerChoice}`;
		uS++;
		userScore.textContent = uS;
	} else {
		choiceText.textContent = `Draw! You chose ${playerChoice} & the computer chose ${computerChoice}`;
	}
}

round(playerChoice, computerChoice);

//function game() {
//	for (let i = 0; i < 5; i++) {
//		round(playerChoice, computerChoice);
//	}
//}
//
//game();
