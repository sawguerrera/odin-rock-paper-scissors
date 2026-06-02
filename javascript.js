// console.log("Hello World");

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

function getComputerChoice(randomNumber) {
    if (randomNumber <= 3) {
        return "Rock";
    } else if (randomNumber <= 7) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getComputerChoice(randomNumber));

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

let humanScore = 0;

let computerScore = 0;

let humanChoice = getHumanChoice;

let computerChoice = getComputerChoice;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        alert("You lose! Paper beats Rock.")
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        alert("You lose! Scissor beats Paper." )
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        alert("You lose! Rock beats Scissors")
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        alert("You win! Paper beats Rock.")
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        alert("You win! Scissors beats Paper.")
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        alert("You win! Rock beats Scissors")
    } else {
        alert("We have a draw! Play again.")
    }
}

playRound((humanChoice, computerChoice));




