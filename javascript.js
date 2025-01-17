function getComputerChoice() {

    const moves = ["ROCK", "PAPER", "SCISSORS"];

    return moves[Math.floor(Math.random() * 3)];

}

let vComputer = (getComputerChoice());

document.write(vComputer);