const choices = document.querySelectorAll(".choices");
let score = 0;
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
  });
});

function compareInputs(userChoice, compChoice) {
  // Tie
  if (userChoice === compChoice) {
    return gameResults.innerText = "It's a tie!";
  }
  if (userChoice === "rock") {
    if (compChoice === "scissors") {
      userScore++;
      document.getElementById("userScore").innerText = `You: ${userScore}`;
      return gameResults.innerText = "You won!";
    } else {
      compScore++;
      document.getElementById("compScore").innerText = `Computer: ${compScore}`;
      return gameResults.innerText = "The computer won!";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      winner = user
      userScore++;
      document.getElementById("userScore").innerText = `You: ${userScore}`;
      return gameResults.innerText = "You won!";
    } else {
      winner = computer
      compScore++;
      document.getElementById("compScore").innerText = `Computer: ${compScore}`;
      return gameResults.innerText = "The computer won!";
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "paper") {
      userScore++;
      document.getElementById("userScore").innerText = `You: ${userScore}`;
      return gameResults.innerText = "You won!";
    } else {
      compScore++;
      document.getElementById("compScore").innerText = `Computer: ${compScore}`;
      return gameResults.innerText = "The computer won!";
    }
  }
};


function currentMatch (userChoice, compChoice) {
  if(winner = user){

  }
}