let playerScore=0;
let computerScore=0;


const playerScoreText= document.getElementById("player-score");
const computerScoreText= document.getElementById("computer-score");
const choicesContainer= document.getElementById("choices-container");
const statusText= document.getElementById("status-text");

choicesContainer.addEventListener("click" , (event) => {
  const clickedButton = event.target.closest(".choice-btn");

  if(! clickedButton) return;

  const userChoice= clickedButton.dataset.choice;

  console.log("youclicked:", userChoice);


  let computerChoice = getComputerChoices();

  console.log("computerhose:", computerChoice);

  playRound(userChoice, computerChoice);




});

function getComputerChoices() {
  const choices = ["rock","paper","scissor"];

  const randomVariable= Math.floor(Math.random()* 3);

  return choices[randomVariable];

}

function playRound(player, computer ){
  if (player === computer) {
    statusText.textContent="it is tie ! both chose ${player}.";
    return;


  }
  if(
    (player=="scissor"&&computer=="paper")||
    (player=="rock"&&computer=="scissor")||
    (player=="paper"&&computer=="rock")


  ) {
    playerScore++;
    playerScoreText.textContent=playerScore;
    statusText.textContent=`u win! ${player}beats ${computer}`;

  }

  else{
    computerScore++;
    computerScoreText.textContent=computerScore;
    statusText.textContent=`you lase! ${computer} beats ${player}.`;
  }

};



