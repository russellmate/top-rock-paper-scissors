function computerPlay() {
	const rps = ['rock', 'paper', 'scissors'];
	const choice = rps[Math.floor(Math.random() * rps.length)];
	return choice;
}

function oneRound(playerSelection, computerSelection) {
	if (
		(playerSelection == 'rock' && computerSelection == 'scissors') ||
		(playerSelection == 'paper' && computerSelection == 'rock') ||
		(playerSelection == 'scissors' && computerSelection == 'paper')
	) {
		return 'You win! ' + playerSelection + ' beats ' + computerSelection;
	} else {
		return 'You lose!';
	}
}
function game() {
	for (i = 0; i < 5; i++) {
		console.log(
			oneRound(
				prompt('Rock, paper or scissors?').toLowerCase(),
				computerPlay()
			)
		);
	}
}

game();
