//create a variable called 'rock' of type string that has a value of 'rock'

//create a variable called 'paper' of type string that has a value of 'paper'

//create a variable called 'scissors' of type string that has a value of 'scissors'

//create a variable called 'rps' of type string that has a value of ['rock', 'paper', 'scissors']

//create a function called 'computerPlay' that returns either rock, paper or scissors

//create a function called 'round' with the parameters 'playerSelection' and 'computerSelection' that plays one round of the game and returns a string that declares a winner
    //create an if condition that means the player wins if they play rock and the computer plays scissors
    //create an if condition that means the player wins if they play paper and the computer plays rock
    //create an if condition that means the player wins if they play scissors and the computer plays paper

//create a function called 'game' that plays 5 rounds of the game and returns a winner or loser

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors'
const rps = [rock, paper, scissors];

//lets the computer pick a random element in the array
function computerPlay() {
    let computerChoice = rps[Math.floor(Math.random() * rps.length)];
    return computerChoice;
}

//plays one round of the game
function round(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It is a draw!';
    }

    else if (playerSelection == rock) {
        if (computerSelection == paper) {
            return 'Computer Won';
        }
        else {
            return 'Player Won';
        }
    }
    
    else if (playerSelection == scissors) {
        if (computerSelection == rock) {
            return 'Computer Won';
        }
        else {
            return 'Player Won';
        }
    }

    else if (playerSelection == paper) {
        if (computerSelection == scissors) {
            return 'Computer Won';
        }
        else {
            return 'Player Won';
        }
    }
}

//plays five rounds of the game
function game() {
    for (let loop = 0; loop < 5; loop++) {
        console.log(round(prompt('Rock, paper or scissors?').toLowerCase(), computerPlay()));
    }
}

game();