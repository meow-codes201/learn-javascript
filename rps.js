let computerChoice = "";
let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

document.querySelector(".score").innerHTML = `
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

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
let isAutoPlaying = false;
let intervalId;

function autoplay(){

    if(!isAutoPlaying){
        intervalId = setInterval(()=>{
            playGame(pickCompMove())
        },1000);
    isAutoPlaying = true;
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}

document.body.addEventListener("keydown",(event) =>{
    if(event.key === 'r'){
        playGame("rock");
    }
    else if(event.key === 'p'){
        playGame("paper");
    }
    else if(event.key === 's'){
        playGame("scissors");
    }

})


function playGame(playerChoice){
let computerChoice = pickCompMove();
let result = "";
if(playerChoice === computerChoice){
    result = "tie";   
}
else if(playerChoice ==='rock'){
    if(computerChoice ==='scissors'){
        result = "win";
    }
    else{
        result = "loss";
    }
}
else if(playerChoice ==='paper'){
    if(computerChoice ==='rock'){
               result = "win";
    }
    else{
        
        result = "loss";
    }
}
else if(playerChoice ==='scissors'){
    if(computerChoice ==='paper'){
               result = "win";
    }
    else{
        
        result = "loss";
    }
}

if(result ==="win"){
    score.wins+=1;
}
else if(result ==="loss"){
    score.losses+=1;
}
else if(result==="tie"){
    score.ties+=1;
}
localStorage.setItem('score',JSON.stringify(score));
document.querySelector(".score").innerHTML = `
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
document.querySelector(".result").innerHTML = `Your ${result}`;

document.querySelector(".moves").innerHTML = `
Player - <img src="${playerChoice}-emoji.png" class="move-icon" alt=""> & Computer - <img src="${computerChoice}-emoji.png" alt="" class="move-icon">
`;
}

function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    // document.querySelector(".score").innerHTML = 
    document.querySelector(".score").innerHTML = `
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
document.querySelector(".result").innerHTML = ``;

document.querySelector(".moves").innerHTML = ``
}

