// - computer's choice , return a random value of either 'rock' 'paper' 'scissors'
function computerPlay() {
  let value = Math.floor(Math.random() * 3);
  if (value === 0) {
      return (value = 'rock');
  } else if (value === 1) {
      return (value = 'paper');
  } else {
      return (value = 'scissors');
  }
}

function game() {

  let playerWin = 0;
  let computerWin = 0;
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          let playerSelection = button.className;
          let computerSelection = computerPlay();
          playRound(playerSelection, computerSelection);
          playerWinText();
          computerWinText();
          battleWinText();
          endGame();
      });
  });


function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);

  let tie = " Its a tie !"
  let rockBeatScissors = "You Win ! Rock beat Scissors";
  let paperBeatRock = "You Win ! Paper beat Rock";
  let scissorsBeatPaper = "You Win ! Scissors beat Paper";
  let rockBeatScissorsLose = "You Lose ! Rock beat Scissors";
  let paperBeatRockLose = "You Lose ! Paper beat Rock";
  let scissorsBeatPaperLose = "You Lose ! Scissors beat Paper";
  battleWin.style.fontSize = "30px";

      if (playerSelection == computerSelection) {
          battleWin.textContent = tie;
      } else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
          playerWin++;
          battleWin.textContent = rockBeatScissors;
      } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
          playerWin++;
          battleWin.textContent = paperBeatRock;
      } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
          playerWin++;
          battleWin.textContent = scissorsBeatPaper;
      } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
          computerWin++;
          battleWin.textContent = paperBeatRockLose;
      } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
          computerWin++;
          battleWin.textContent = scissorsBeatPaperLose;
      } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
          computerWin++;
          battleWin.textContent = rockBeatScissorsLose;
      } else {
          reloadPage();
      }

  }

const container = document.getElementById('container');
const battleResult = document.createElement('div');
const btn_container = document.getElementById('btn-container');
const computer =  document.createElement('div');
const player =  document.createElement('div');
container.insertBefore(battleResult, btn_container);
battleResult.appendChild(player);
battleResult.appendChild(computer);

const battleWin = document.createElement('div');

  // player Win Output
  function playerWinText() {
      player.textContent = `PLAYER -${playerWin}`;
      player.classList.add("player");
  }

  // computer Win Output    
  function computerWinText() {
      computer.textContent = `COMPUTER -${computerWin}`;
      computer.classList.add("computer");
  }

// determines winner of the entire set
function battleWinText() {
  if (playerWin == 5 || computerWin == 5) {
      if (playerWin > computerWin) {
          battleWin.textContent = "PLAYER WIN !!!";
          battleWin.style.cssText ="color: #fac650; font-size: 60px; font-weight:500;"
      } else {
          battleWin.textContent = "COMPUTER WIN !!!";
          battleWin.style.cssText ="color:red; font-size: 60px; font-weight:500;"
      }
  } 
  battleResult.insertBefore(battleWin, computer);
  }

  battleResult.classList.add("final-battle");             

//function to end the game
  function endGame() {
      if (playerWin == 5 || computerWin == 5) {
          document.getElementById('rock').disabled = true;
          document.getElementById('paper').disabled = true; 
          document.getElementById('scissors').disabled = true;
      }
  }

}

game();
  
function reloadPage(){
  window.location.reload();
}

let resetGame = document.getElementById('resetButton');
resetGame.addEventListener('click', reloadPage);