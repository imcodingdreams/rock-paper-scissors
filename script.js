

// for (let i = 0; i < images.length; i++) {
//   const choice = images[i];
// }


const rockChoice = document.getElementById("rock")
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

rockChoice.addEventListener("click", functionRock);
paperChoice.addEventListener("click", functionPaper);
scissorsChoice.addEventListener("click", functionScissors);


function functionRock() {
  let text = document.getElementById("rock").innerText;
  userChoice.innerHTML = "The user chose rock";
}

function functionPaper() {
  let text = document.getElementById("paper").innerText;
  userChoice.innerHTML = "The user chose paper";
}

function functionScissors() {
  let text = document.getElementById("scissors").innerText;
  userChoice.innerHTML = "The user chose scissors";
}