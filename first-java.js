// Create a function to get computer choice.
function getComputerChoice() {
  
  let computerSelection = Math.floor(Math.random() * 3);

      if(computerSelection === 0) {
        computerSelection = "Rock";
      }
      else if(computerSelection === 1) {
        computerSelection = "Paper";
      }
      else if(computerSelection === 2) {
        computerSelection = "Scissors";
      }
      return computerSelection;
}

function playRound(computer, player){

  var computer = getComputerChoice();
  var player = prompt("Please enter your choice");

  if (computer === player) {

    var result = "It's a Tie!";

  } 
  
  else if ((computer === "Rock" && player === "Scissors") || 
          (computer === "Scissors" && player === "Paper") || 
          (computer === "Paper" && player === "Rock")) {
    
    result = "Computer Won!";
  }
  
  else {
    result = "You Won!";
  }
  
    console.log(result);
    return result;
}

function game(){

  var roundWinner = '';
  var computerTotal = 0;
  var yourTotal = 0;

  for (let i = 0; i < 5; i++){
    
    roundWinner = playRound();

    if (roundWinner === 'Computer Won!') {
      computerTotal ++;
    } else if (roundWinner === 'You Won!') {
      yourTotal ++;
    }
    
    var finalWinner = '';
    
    if (computerTotal > yourTotal) {
      finalWinner = 'The Computer is Winner!';
    } else if (computerTotal < yourTotal) {
      finalWinner = 'Congrats! You are the Winner!';
    } else if (computerTotal === yourTotal) {
      finalWinner = 'Its a Tie, Try again!';
    }
  }
  return finalWinner;
}