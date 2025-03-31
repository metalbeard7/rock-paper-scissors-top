//Create function to randomly generate a number between 1-3

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
 