function computerPlay() {
  min = Math.ceil(1);
  max = Math.floor(4);

  let value = Math.floor(Math.random() * (max - min) + min);

  if (value === 1) {
    return "rock";
  } else if (value === 2) {
    return "paper";
  } else if (value === 3) {
    return "scissors";
  }
}

const playerChoiceRock = document.querySelector("#playerRock");
const playerChoicePaper = document.querySelector("#playerPaper");
const playerChoiceScissors = document.querySelector("#playerScissors");

const computerChoiceRock = document.querySelector("#computerRock");
const computerChoicePaper = document.querySelector("#computerPaper");
const computerChoiceScissors = document.querySelector("#computerScissors");

function setChoiceHighlight(e) {
  e.classList.toggle("selected");
}

function removeChoiceHighlight() {
  playerChoiceRock.classList.remove("selected");
  playerChoicePaper.classList.remove("selected");
  playerChoiceScissors.classList.remove("selected");
  computerChoiceRock.classList.remove("selected");
  computerChoicePaper.classList.remove("selected");
  computerChoiceScissors.classList.remove("selected");
}

playerChoiceRock.addEventListener("click", () => {
  removeChoiceHighlight();
  single_round("rock", computerPlay());
});

playerChoicePaper.addEventListener("click", () => {
  removeChoiceHighlight();
  single_round("paper", computerPlay());
});

playerChoiceScissors.addEventListener("click", () => {
  removeChoiceHighlight();
  single_round("scissors", computerPlay());
});

computerChoiceRock.addEventListener("click", () => {
  let resultText = document.querySelector(".result");
  resultText.textContent = "Please select a player choice!";
});

computerChoicePaper.addEventListener("click", () => {
  let resultText = document.querySelector(".result");
  resultText.textContent = "Please select a player choice!";
});

computerChoiceScissors.addEventListener("click", () => {
  let resultText = document.querySelector(".result");
  resultText.textContent = "Please select a player choice!";
});

function incrementComputerScore() {
  let computerScore = document.querySelector("#computer_score");
  let computerTotal = computerScore.textContent;

  if (computerTotal < 5) {
    computerTotal++;
    computerScore.textContent = computerTotal;
  }
}

function incrementPlayerScore() {
  let playerScore = document.querySelector("#player_score");
  let playerTotal = playerScore.textContent;

  if (playerTotal < 5) {
    playerTotal++;
    playerScore.textContent = playerTotal;
  }
}

function roundWinText() {
  let playerScore = document.querySelector("#player_score");
  let computerScore = document.querySelector("#computer_score");
  let resultText = document.querySelector(".result");

  if (playerScore.textContent >= 5) {
    resultText.textContent = "You won the game!";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (computerScore.textContent >= 5) {
    resultText.textContent = "You lost the game!";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (playerScore.textContent < 5 && computerScore.textContent < 5) {
    resultText.textContent = "You win the round!";
  }
}

function roundLossText() {
  let playerScore = document.querySelector("#player_score");
  let computerScore = document.querySelector("#computer_score");
  let resultText = document.querySelector(".result");

  if (playerScore.textContent >= 5) {
    resultText.textContent = "You won the game!";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (computerScore.textContent >= 5) {
    resultText.textContent = "You lost the game!";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
  } else if (playerScore.textContent < 5 && computerScore.textContent < 5) {
    resultText.textContent = "You lose the round!";
  }
}

function roundDrawText() {
  let resultText = document.querySelector(".result");
  resultText.textContent = "It's a draw!";
}

function single_round(playerChoice, computerSelection) {
  if (playerChoice === "rock") {
    if (computerSelection === "rock") {
      roundDrawText();
      setChoiceHighlight(playerChoiceRock);
      setChoiceHighlight(computerChoiceRock);
    } else if (computerSelection === "paper") {
      incrementComputerScore();
      roundLossText();
      setChoiceHighlight(playerChoiceRock);
      setChoiceHighlight(computerChoicePaper);
    } else if (computerSelection === "scissors") {
      incrementPlayerScore();
      roundWinText();
      setChoiceHighlight(playerChoiceRock);
      setChoiceHighlight(computerChoiceScissors);
    }
  }

  if (playerChoice === "paper") {
    if (computerSelection === "rock") {
      incrementPlayerScore();
      roundWinText();
      setChoiceHighlight(playerChoicePaper);
      setChoiceHighlight(computerChoiceRock);
    } else if (computerSelection === "paper") {
      roundDrawText();
      setChoiceHighlight(playerChoicePaper);
      setChoiceHighlight(computerChoicePaper);
    } else if (computerSelection === "scissors") {
      incrementComputerScore();
      roundLossText();
      setChoiceHighlight(playerChoicePaper);
      setChoiceHighlight(computerChoiceScissors);
    }
  }

  if (playerChoice === "scissors") {
    if (computerSelection === "rock") {
      incrementComputerScore();
      roundLossText();
      setChoiceHighlight(playerChoiceScissors);
      setChoiceHighlight(computerChoiceRock);
    } else if (computerSelection === "paper") {
      incrementPlayerScore();
      roundWinText();
      setChoiceHighlight(playerChoiceScissors);
      setChoiceHighlight(computerChoicePaper);
    } else if (computerSelection === "scissors") {
      roundDrawText();
      setChoiceHighlight(playerChoiceScissors);
      setChoiceHighlight(computerChoiceScissors);
    }
  }
}
