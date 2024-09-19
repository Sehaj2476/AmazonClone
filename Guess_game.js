const max = prompt("Enter the max number: ");
const random = Math.floor(Math.random()*max)+1; 

let guess = prompt("Guess the number: ");
while(true){
    if(guess=="quit"){
        console.log("You chose to quit :) ");
        break;
    }
    else if(guess==random){
        console.log("You made a right guess");
        break;
    } 
    else if(guess>max){
        guess = prompt("Ahh! u need to guess a smaller number than this :) ");
        }
    else{
        guess = prompt("Ahh! u need to guess a larger number than this :) ");
        }
   
}
