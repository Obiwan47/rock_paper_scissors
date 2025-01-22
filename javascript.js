function getComputerChoice() {

    const moves = ["ROCK", "PAPER", "SCISSORS"];
    return moves[Math.floor(Math.random() * 3)];

}

function getHumanChoice() {

    const player = prompt("Ingrese su jugada (ROCK - PAPER - SCISSORS)");
    return player.toUpperCase();
}


function playRound(computerChoice, humanChoice) {

    if(humanChoice === computerChoice) {

        console.log("It's a tie");

    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    
    ) {

        humanScore++;
        console.log("You Win");

    } else {
        if (
            (computerChoice === "ROCK" && humanChoice === "SCISSORS") ||
            (computerChoice === "PAPER" && humanChoice === "ROCK") ||
            (computerChoice === "SCISSORS" && humanChoice === "PAPER")

        ) {
            computerScore++;
            console.log("You Lose");
            
        } else {
            console.log("Invalid entry");
        }

    }

}

let humanScore = 0;
let computerScore = 0;

const computerSelection = (getComputerChoice());
const humanSelection = (getHumanChoice());

console.log('Computadora: ' + computerSelection);
console.log('Jugador: ' + humanSelection);

playRound(computerSelection, humanSelection);

console.log('Player score:' + humanScore);
console.log('Computer score: ' + computerScore);