const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const computerScoreDisplay = document.getElementById("computer-score");
const userScoreDisplay = document.getElementById("user-score");
let userChoice;
let computerChoice;
let result;
let computerScore = 0;
let userScore = 0;

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    computerChoice = "rock";
  }
  if (randomNum === 2) {
    computerChoice = "scissors";
  }
  if (randomNum === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you won";
    userScore++;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost";
    computerScore++;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost";
    computerScore++;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you won";
    userScore++;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you won";
    userScore++;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost";
    computerScore++;
  }

  if (computerScore === 3) {
    alert("Computer Won!, Game Over");
    computerScore = 0;
    userScore = 0;
    userChoice="";
    computerChoice="";
    result="";
  }
  if (userScore === 3) {
    alert("User Won!, Game Over");
    computerScore = 0;
    userScore = 0;
    userChoice="";
    computerChoice="";
    result="";
  }

  resultDisplay.innerHTML = result;
  computerScoreDisplay.innerHTML = computerScore;
  userScoreDisplay.innerHTML = userScore;
}
