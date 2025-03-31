//create function to randomly generate a number between 1-3

function getComputerChoice(){
   let a = Math.floor(Math.random() * 3) +1;
    

   //tell function what to do with "number"
        //if (a <= 1) log "Rock"
        //if (a <= 2) log "Scissors"
        //if (a <= 3) log "Paper"

   if (a <= 1) { 
    console.log("Rock");
   } else if (a <= 2) {
    console.log("Scissors");
   } else if (a <= 3) {
    console.log("Paper");
   }

}
 
//create function to return a value based on user's input.
    //Have user enter value in prompt.
        //if (choice = Rock) log "Rock"
        //if (choice <= Scissors) log "Scissors"
        //if (choice <= Paper) log "Paper"

function getHumanChoice() {
   let choice = prompt("Rock, Paper, or Scissors?");
   
   if (choice === "Rock") { 
    console.log("Rock");
   } else if (choice === "Scissors") {
    console.log("Scissors");
   } else if (choice === "Paper") {
    console.log("Paper");
   }
}

//declare starting score for human and computer.

let humanScore = 0
let computerScore = 0

