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

console.log(getComputerChoice(randomNumber));

// Asking human to select Rock, Paper, Scissors

let userInput = window.prompt("Rock, Paper or Scissors?", "");

function getHumanChoice(userInput) {
    if (userInput === "rock") {
        return "rock";
    } else if (userInput === "paper") {
        return "paper"
    } else if (userInput === "scissors") {
        return "scissors"
    }
}

console.log(getHumanChoice(userInput));

// Playing a single round - Part 1 declaring a winner of that round 

let humanScore = 0;

let computerScore = 0;

let humanChoice = getHumanChoice(userInput);

let computerChoice = getComputerChoice(randomNumber);

function getsWinner(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("We have a draw!");
    } else if (humanChoice == "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock!");
    }  else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper!" );
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice === "paper")  {
        computerScore++
        return computerScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return computerScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return humanScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return humanScore;
    }
}


// console.log(getsWinner(humanChoice, computerChoice));






// getWinner(humanSelection, computerSelection);


// function getWinner(humanScore, computerScore) {
//     getComputerChoice(randomNumber);
//     getHumanChoice(userInput);
//     if (getHumanChoice == getComputerChoice) {
//         alert(`We have a draw!`)
//         let humanScore = humanScore + 1;
//         let computerScore = computerScore + 1;
//     } else if (getHumanChoice == 'rock' && getComputerChoice == 'paper') {
//         alert(`You lose! Paper beats Rock.`)
//         let computerScore = computerScore + 1;
//     } else if (getHumanChoice == 'paper' && getComputerChoice == 'scissors') {
//         alert(`You lose! Scissors beats Paper.`)
//         let computerScore = computerScore + 1;
//     } else if (getHumanChoice == 'scissors' && getComputerChoice == 'rock') {
//         alert(`You lose! Rock beats Scissors.`)
//         let computerScore = computerScore + 1;
//     } else if (getHumanChoice == 'paper' && getComputerChoice == 'rock') {
//         alert(`You Win! Paper beats Rock.`)
//         let humanScore = humanScore + 1;
//     } else if (getHumanChoice == 'scissors' && getComputerChoice == 'paper') {
//         alert(`You Win! Scissors beats Paper.`)
//         let humanScore = humanScore + 1;
//     } else if (getHumanChoice == 'rock' && getComputerChoice == 'scissors') {
//         alert(`You Win! Rock beats Scissors.`)
//         let humanScore = humanScore + 1;
//     }
// }

// console.log(getWinner(humanScore, computerScore));

// function playRound() {
//     getWinner();
//     console.log('Your Score: ' + `${humanScore}`);
//     console.log('Computer Score: ' + `${computerScore}`);
// }


// console.log(playRound());

// Playing 5 rounds, declaring the overall winner of the match.

// function playGame() {
//     playRound(humanChoice, computerChoice);
//     showScore();
//     playRound(humanChoice, computerChoice);
//     showScore();
//     playRound(humanChoice, computerChoice);
//     showScore();
//     playRound(humanChoice, computerChoice);
//     showScore();
//     playRound(humanChoice, computerChoice);
//     showScore();
// }

// const showScore = () => {
//     console.log('User Score: ' + humanScore);
//     console.log('Computer Score: ' + computerScore);
//     if (humanScore > computerScore) {
//         console.log('You Win!');
//     } else if (computerScore > humanScore) {
//         console.log('Computer Wins!');
//     }
// }

// const saveScore = 

// playGame();

// playGame();

// console.log(humanScore);
// console.log(computerScore);
// playGame(playMatch * 4);

// console.log(`The final match score is` + `Human:` + `${humanScore}` + `Computer:` + `${computerScore}` )
