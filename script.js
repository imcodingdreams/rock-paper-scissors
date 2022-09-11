const choices = document.querySelectorAll(".choices");
let userScore = 0;
let compScore = 0;
let winner;

choices.forEach((choices) => {
  choices.addEventListener("click", function() {
    const userChoice = this.id;
    document.getElementById("userChoice").innerText = `You chose ${userChoice}`;
    const compOptions = ["rock", "paper", "scissors"];
    const compChoice = compOptions[Math.floor(Math.random() * 3)];
    document.getElementById("compChoice").innerText = `Computer chose ${compChoice}`;
    compareInputs(this.id, compChoice);
    scoreResults();
  });
});

function compareInputs(userChoice, compChoice) {
  if (userChoice === compChoice) {
    winner = "tie"
  } else if (userChoice === "rock") {
    if (compChoice === "scissors") {
      winner = "user"
    } else {
      winner = "computer"
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      winner = "user"
    } else {
      winner = "computer"
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "paper") {
      winner = "user"
    } else {
      winner = "computer"
    }
  }
};

function scoreResults() {
  if (winner === "tie") {
    return gameResults.innerText = "It's a tie!";
  } else if (winner === "user") {
    userScore++;
    document.getElementById("userScore").innerText = `You: ${userScore}`;
    return gameResults.innerText = "You won!";
  } else if (winner === "computer") {
    compScore++;
    document.getElementById("compScore").innerText = `Computer: ${compScore}`;
    return gameResults.innerText = "The computer won!";
  }
};