const choices = document.querySelectorAll(".choices");

choices.forEach((choices) => {
  choices.addEventListener("click", function () {
    const userChoice = document.getElementById("userChoice");
    document.getElementById("userChoice").innerText = `User chose ${userChoice}`;

    const compOptions = ["rock", "paper", "scissors"];
    const compChoice = compOptions[Math.floor(Math.random() * 3)];
    document.getElementById("compChoice").innerText = `Computer chose ${compChoice}`;
  });
});

// const currentUserChoice = `User chose ${userChoice}`;
// const currentCompChoice = `Computer chose ${compChoice}`;

//  Comparison
const compareChoices = (userChoice, compChoice) => {
  // Tie
  if (userChoice === compChoice) {
    return gameResults.innerText = "It's a tie!";
  }
  // Rock
  if (userChoice === "rock") {
    if (compChoice === "scissors") {
      return gameResults.innerText = "You won!";
    } else {
      return gameResults.innerText = "The computer won!";
    }
  }
};
  if (userChoice === "paper" && compChoice === "rock") {
    gameResults.innerText = "You won!";
  } else {
    return gameResults.innerText = "The computer won!";
  }
  // Scissors
  if (userChoice === "scissors" && compChoice === "paper") {
    gameResults.innerText = "You won!";
  } else {
    return gameResults.innerText = "The computer won!";
  }
};
