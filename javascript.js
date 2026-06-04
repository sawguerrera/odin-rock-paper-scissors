// Getting Computer to choose Rock, Paper, Scissors

let randomNumber = Math.floor(Math.random() * 10) + 1;

function getComputerChoice(randomNumber) {
    if (randomNumber <= 3) {
        return "Rock";
    } else if (randomNumber <= 7) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getComputerChoice(randomNumber);

// Asking human to select Rock, Paper, Scissors

let userInput = window.prompt("Enter Rock, Paper or Scissors:", "");

function getHumanChoice(userInput) {
    if (userInput == "Rock") {
        return "Rock";
    } else if (userInput === "Paper") {
        return "Paper"
    } else if (userInput === "Scissors") {
        return "Scissors"
    } else {
        "Please enter a valid object.";
    }
}

getHumanChoice(userInput);

// Playing a single round, declaring a winner of that 
// round and printing the score

let humanScore = 0;

let computerScore = 0;

let humanChoice = getHumanChoice(userInput);

let computerChoice = getComputerChoice(randomNumber);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("We have a draw!");
    } else if (humanChoice == "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock!");
        computerScore++;
    }  else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper!" );
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
}

console.log(humanScore);
console.log(computerScore);

// Playing 5 rounds, declaring the overall winner of the match.


function playGame(playMatch) {
    
    let humanScore = 0;

    let computerScore = 0;

    let humanChoice = getHumanChoice(userInput);

    let computerChoice = getComputerChoice(randomNumber);

        function playMatch(humanChoice, computerChoice) {
            if (humanChoice == computerChoice) {
                console.log("We have a draw!");
        }   else if (humanChoice == "Rock" && computerChoice === "Paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
        }   else if (humanChoice === "Paper" && computerChoice === "Scissors") {
                console.log("You lose! Scissors beats Paper!" );
                computerScore++;
        }   else if (humanChoice === "Scissors" && computerChoice === "Rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
        }   else if (humanChoice === "Paper" && computerChoice === "Rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
        }   else if (humanChoice === "Scissors" && computerChoice === "Paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
        }   else if (humanChoice === "Rock" && computerChoice === "Scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore++;
        }   
    }
}

// console.log(humanScore);
// console.log(computerScore);
// playGame(playMatch * 4);

// console.log(`The final match score is` + `Human:` + `${humanScore}` + `Computer:` + `${computerScore}` )
