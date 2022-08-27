
// Users's Choice

const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

rockChoice.addEventListener("click", functionRock);
paperChoice.addEventListener("click", functionPaper);
scissorsChoice.addEventListener("click", functionScissors);

function functionRock() {
  let text = rockChoice;
  userChoice.innerText = "The user chose rock";
}

function functionPaper() {
  let text = paperChoice;
  userChoice.innerText = "The user chose paper";
}

function functionScissors() {
  let text = scissorsChoice;
  userChoice.innerText = "The user chose scissors";
}


// Computer's Random Choice

let result = document.getElementById("compChoice");

let compOptions = [
  "The computer chose rock",
  "The computer chose paper",
  "The computer chose scissors",
];

function compRdmChoice(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

rdmChoice.addEventListener("click", () => {
  let index = compRdmChoice(0, compOptions.length - 1);
  result.innerText = compOptions[index];
});

// Choices Comparison

// How can I grab the score results and put them in the usersChoice and compChoice variables?

let choice1 = userChoice; 
let choice2 = compChoice;
let score = document.getElementById("gameResults");

function scoreResults() {
  if (choice1 === "rock" && choice2 === "scissors") {
    if (choice1 === "paper" && choice2 === "rock") {
      if (choice1 === "scissors" && choice2 === "paper") {
        return (score.innerText = "The user won!");
      }
    } else {
      if (choice1 === "rock" && choice2 === "paper") {
        if (choice1 === "paper" && choice2 === "scissors") {
          if (choice1 === "scissors" && choice2 === "rock") {
            return (score.innerText = "The computer won!");
          }
        } else {
          if (choice1 === "rock" && choice2 === "rock") {
            if (choice1 === "paper" && choice2 === "paper") {
              if (choice1 === "scissors" && choice2 === "scissors") {
                return (score.innerText = "It's a tie!");
              }
            }
          }
        }
      }
    }
  }
}

scoreResults();



// let index = compOptions

// for (let i = 0; i < images.length; i++)
//   const choice = images[i];
// }

// How can I make the computer knows that she have to pick a random choice after the usersChoice?
