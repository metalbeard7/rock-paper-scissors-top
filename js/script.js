function getComputerChoice(){
   let a = Math.floor(Math.random() * 3) +1;
    
   if (a <= 1) { 
    console.log("Rock");
   } else if (a <= 2) {
    console.log("Scissors");
   } else if (a <= 3) {
    console.log("Paper");
   }
   return a;

}
 