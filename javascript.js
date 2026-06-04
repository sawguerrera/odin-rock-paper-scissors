// Getting Computer to choose Rock, Paper, Scissors

let randomNumber = Math.floor(Math.random() * 10) + 1;

function getComputerChoice(randomNumber) {
    if (randomNumber <= 3) {
        return "rock";
    } else if (randomNumber <= 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

// getComputerChoice(randomNumber);

// Asking human to select Rock, Paper, Scissors

let userInput = window.prompt("Enter Rock, Paper or Scissors:", "");

function getHumanChoice(userInput) {
    if (userInput == "rock") {
        return "rock";
    } else if (userInput === "paper") {
        return "paper"
    } else if (userInput === "scissors") {
        return "scissors"
    } else {
        "Please enter a valid object.";
    }
}

// getHumanChoice(userInput);

// Playing a single round, declaring a winner of that 
// round and printing the score

let humanScore = 0;

let computerScore = 0;

let humanChoice = getHumanChoice(userInput);

let computerChoice = getComputerChoice(randomNumber);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("We have a draw!");
    } else if (humanChoice == "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }  else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!" );
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
}

// Playing 5 rounds, declaring the overall winner of the match.

function playGame() {
    playRound(humanChoice, computerChoice);
    showScore();
    playRound(humanChoice, computerChoice);
    showScore();
    playRound(humanChoice, computerChoice);
    showScore();
    playRound(humanChoice, computerChoice);
    showScore();
    playRound(humanChoice, computerChoice);
    showScore();
}

const showScore = () => {
    console.log('User Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
    if (humanScore > computerScore) {
        console.log('You Win!');
    } else if (computerScore > humanScore) {
        console.log('Computer Wins!');
    }
}

const saveScore = 

playGame();

// playGame();

// console.log(humanScore);
// console.log(computerScore);
// playGame(playMatch * 4);

// console.log(`The final match score is` + `Human:` + `${humanScore}` + `Computer:` + `${computerScore}` )
