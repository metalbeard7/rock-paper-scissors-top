//declare a variable for playerScore and computerScore and initialize to 0
let humanScore = 0
let computerScore = 0

//randomly generate the computers answer
function getComputerChoice() {
    let skyNet = Math.floor(Math.random() * 3) + 1;
    switch (skyNet) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

//take input from user and store it

//compare answers and determine a winner or tie

//create a round of play, increment score and continue to next round

