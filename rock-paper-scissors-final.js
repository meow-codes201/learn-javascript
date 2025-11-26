const choices = ['rock','paper','scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let computerScore =0;
let playerScore =0;
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const resultDisplay = document.getElementById('result');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === 'scissors')?'YOU WIN!':'YOU LOSE!'
                break;
            case "paper":
                result = (computerChoice === 'rock')?'YOU WIN!':'YOU LOSE!'
                break;
            case "scissors":
                result = (computerChoice === 'paper')?'YOU WIN!':'YOU LOSE!'
                break;
            

        }
    }
    playerDisplay.textContent = `PLAYER:${playerChoice}`;
    computerDisplay.textContent = `COMPUTER:${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText","redText");
    switch(result){
        case "YOU WIN!":
            playerScore ++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.classList.remove("redText");
            resultDisplay.classList.add("greenText");
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent  = computerScore;
            resultDisplay.classList.remove("greenText");
            resultDisplay.classList.add("redText");
            break;
    }
    

}