const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const result = document.querySelector(".result");

let player;
let computer;

function playGame(playerChoice) {
  player = playerChoice;
  winner();
  if(player === computer) {
    result.textContent = "Tie";
  }
  switch (player) {
    case "Rock":
      result.textContent = (computer === "Paper") ? "you lose" : "You won";
      break;
    case "Paper":
      result.textContent = (computer === "Scissor") ? "you lose" : "You won";
      break;
    case "Scissor":
      result.textContent = (computer === "Rock") ? "you lose" : "You won";
      break;
  }
  playerText.textContent = `Player Picked: ${player}`;
  computerText.textContent = `Computer Picked: ${computer}`;
}

function winner() {
  computer = Math.floor(Math.random() * 3);
  switch (computer) {
    case 0:
      computer = "Rock";
      break;
    case 1:
      computer = "Paper";
      break;
    case 2:
      computer = "Scissor";
      break;
  }
  return computer;
}


