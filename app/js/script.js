function computerPlay() {
  min = Math.ceil(1);
  max = Math.floor(4);
  return Math.floor(Math.random() * (max - min) + min);
}

function single_round(playerSelection, computerSelection) {
  playerSelection = prompt().toLowerCase();
  console.log(playerSelection);
  computerSelection = computerPlay;
  console.log(computerSelection());

  if (playerSelection === "rock") {
    if (computerSelection === 1) {
      return console.log("It's a draw!");
    } else if (computerSelection === 2) {
      return console.log("You lose! Paper beats Rock.");
    } else {
      return console.log("You win! Rock beats Scissors.");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === 1) {
      return console.log("You win! Paper beats Rock.");
    } else if (computerSelection === 2) {
      return console.log("It's a draw!");
    } else {
      return console.log("You lose! Scissors beat Paper.");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === 1) {
      return console.log("You lose! Rock beats Scissors.");
    } else if (computerSelection === 2) {
      return console.log("You win! Scissors beat Paper.");
    } else {
      return console.log("It's a draw!");
    }
  } else {
    alert("Please choose either rock, paper, or scissors! (Check for typos)");
  }
}

function game(n) {
  player_score = 0;
  computer_score = 0;

  n = parseInt(prompt());

  for (let i = 0; i < n; i++) {
    single_round();
  }
}

game();
