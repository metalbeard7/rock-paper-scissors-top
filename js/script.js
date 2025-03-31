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
function getHumanChoice() {
    let terminator = prompt("Rock, Paper, Scissors... your choice.");
    return terminator;
    
}
//compare answers and determine a winner or tie
function playRound(humanChoice, computerChoice) {
    let answer;
    humanChoice = humanChoice.toLowerCase();
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log("It is a tie, please try again.");
                    answer = "tie";
                    break;
                case "paper":
                    console.log("You lost, the computer has won.");
                    answer = "lost";
                    break;
                case "scissors":
                    console.log("YES! This is how we beat the machines!");
                    answer = "win";
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("Analog for the win.");
                    answer = "win";
                    break;
                case "paper":
                    console.log("Nothing but knots, its a tie.");
                    answer = "tie";
                    break;
                case "scissors":
                    console.log("Oh no, you have been cut to shreds, you lost.");
                    answer = "lost"
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("AI is smashing your dreams, you lost.");
                    answer = "lost";
                    break;
                case "scissors":
                    console.log("Oh baby, we could do this all day, we should tie the knot.");
                    answer = "tie";
                    break;
                case "paper":
                    console.log("Shred the competition! You won!");
                    answer = "win";
                    break;

            }    
            break;
        }
        return answer;
    }
    

//create a round of play, increment score and continue to next round
