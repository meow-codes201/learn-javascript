let computerChoice = "";
function pickCompMove(){
    const rnd = Math.random();
    if(rnd>=0 && rnd<1/3){
        computerChoice = 'rock';
    }
    else if(rnd>=1/3 && rnd<2/3){
        computerChoice = 'paper';
    }
    else{
        computerChoice = 'scissors';
    }
return computerChoice;

}
// function check(computerChoice){

// }

// function tax(cost,taxPercent=0.15){
//     return cost*taxPercent;

// }
// console.log(tax(2000,0.2));
// console.log(tax(5000));
function playGame(playerChoice, computerChoice=pickCompMove()){
computerChoice = pickCompMove();
if(playerChoice === computerChoice){
    alert("Tie");   
}
else if(playerChoice ==='rock'){
    if(computerChoice ==='scissors'){
        alert("Player Wins");
    }
    else{
        alert("Computer Wins");
    }
}
else if(playerChoice ==='paper'){
    if(computerChoice ==='rock'){
        alert("Player Wins");
    }
    else{
        alert("Computer Wins");
    }
}
else if(playerChoice ==='scissors'){
    if(computerChoice ==='paper'){
        alert("Player Wins");
    }
    else{
        alert("Computer Wins");
    }
}

}
