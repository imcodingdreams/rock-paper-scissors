const choices = document.querySelectorAll(".choices");


choices.forEach((choices) => {
  choices.addEventListener("click", function () {
    const userChoice = this.id;
    document.getElementById("userChoice").innerText = `You chose ${userChoice}`;
    const compOptions = ["rock", "paper", "scissors"];
    const compChoice = compOptions[Math.floor(Math.random() * 3)];
    document.getElementById(
      "compChoice"
    ).innerText = `Computer chose ${compChoice}`;
    // const compScore = document.getElementById("compScore").innerText = `Computer: ${}`;
    compareInputs(this.id, compChoice);
  });
});

function compareInputs(userChoice, compChoice) {
  // Tie
  if (userChoice === compChoice) {
    return (gameResults.innerText = "It's a tie!");
  }
  // Rock
  if (userChoice === "rock") {
    if (compChoice === "scissors") {
      return (gameResults.innerText = "You won!");
    } else {
      return (gameResults.innerText = "The computer won!");
    }
  }
  // Paper
  else if (userChoice === "paper") {
    if (compChoice === "rock") {
      return (gameResults.innerText = "You won!");
    } else {
      return (gameResults.innerText = "The computer won!");
    }
  }
  // Scissors
  else if (userChoice === "scissors") {
    if (compChoice === "paper") {
      return (gameResults.innerText = "You won!");
    } else {
      return (gameResults.innerText = "The computer won!");
    }
  }
};
