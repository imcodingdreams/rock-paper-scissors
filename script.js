

// for (let i = 0; i < images.length; i++) {
//   const choice = images[i];
// }



const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

rockChoice.addEventListener("click", functionRock);
paperChoice.addEventListener("click", functionPaper);
scissorsChoice.addEventListener("click", functionScissors);


function functionRock() {
  let text = rockChoice;
  userChoice.innerHTML = "The user chose rock";
}

function functionPaper() {
  let text = paperChoice;
  userChoice.innerHTML = "The user chose paper";
}

function functionScissors() {
  let text = scissorsChoice;
  userChoice.innerHTML = "The user chose scissors";
}

// const comp = document.getElementById("compChoice");


// compChoice.addEventListener("click", compRdmChoice);
// let index = compRdmChoice(0, compOptions.length);

// function compRdmChoice() {
//   if (compChoice = rockChoice) {
//     userChoice.innerHTML = "The user chose rock";
//   } else if (compChoice = paperChoice) {
//     userChoice.innerHTML = "The user chose paper";
//   } else {
//     userChoice.innerHTML = "The user chose scissors";
//   }
// }

// compRdmChoice();

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


// let index = compOptions





// How can I make the computer knows that she have to pick a random choice after the usersChoice?

// function getRdmInteger() {
//   let text = document.getElementById().innerText;
//   compChoice.innerHTML = "The computer chose rock";
// }

// getRdmInteger();

// function functionPaper() {
//   let text = document.getElementById("paper").innerText;
//   computerChoice.innerHTML = "The computer chose paper";
// }

// function functionScissors() {
//   let text = document.getElementById("scissors").innerText;
//   computerChoice.innerHTML = "The computer chose scissors";
// }

