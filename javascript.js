// Getting Computer to choose Rock, Paper, Scissors

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber <= 3) {
        return "rock";
    } else if (randomNumber <= 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

// getComputerChoice();

// Asking human to select Rock, Paper, Scissors

function getHumanChoice() {
    let userInput = window.prompt("Rock, Paper or Scissors?", "");
    if (userInput.toLowerCase() === "rock") {
        return "rock";
    } else if (userInput.toLowerCase() === "paper") {
        return "paper"
    } else if (userInput.toLowerCase() === "scissors") {
        return "scissors"
    } else if (userInput.toLowerCase() !== "rock" || "paper" || "scissors") {
        alert("Please enter a valid object")
    } else {
        console.log("This falls out of conditional scope.")
    }
}

// getHumanChoice();

// Playing a single round 

let humanScore = 0;

let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log('We have a draw!');
        humanScore++
        computerScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() === "paper")  {
        console.log('You Lose! Paper beats Rock.')
        computerScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "scissors") {
        console.log('You Lose! Scissors beats Paper.')
        computerScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "rock") {
        console.log('You Lose! Rock beats Scissors.')
        computerScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        console.log('You Win! Paper beats Rock.')
        humanScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        console.log('You Win! Scissors beats Paper.')
        humanScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        console.log('You Win! Rock beats Scissors.')
        humanScore++
        console.log(`User Score: ` + `${humanScore} ` + ` ` + `Computer Score: ` + `${computerScore}`);
    }
}

// playRound();

function playGame() {
    // Plays the game 5 times
    for (let i = 0; i < 5; i++) {
        // Print Round Result
        playRound(getHumanChoice(), getComputerChoice());
        // const playerSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        // const currentRound = playRound(playerSelection, computerSelection);
        // console.log(currentRound);
    }

    if (humanScore > computerScore) {
        console.log('Human User Wins Match!')
    } else if (humanScore < computerScore) {
        console.log('Computer User Wins Match!')
    } else if (humanScore === computerScore) {
        console.log('We have a Match Draw!')
    }
}

playGame();
