// console.log("Hello World");

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

function getComputerChoice(randomNumber) {
    if (randomNumber <= 3) {
        return 'Rock';
    } else if (randomNumber <= 7) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

console.log(getComputerChoice(randomNumber));


