let computerChoice="";
function playr(){
const randNum = Math.random();
if(randNum >= 0 && randNum <1/3){
    
    computerChoice = 'rock';

}
else if(randNum>1/3 && randNum<2/3){
    
     computerChoice = 'paper';
}
else if(randNum>2/3 && randNum<1){
    
     computerChoice = 'scissors';
}
console.log(computerChoice);

let result ="";
if(computerChoice ==='rock'){
    result = "Tie";
}
else if(computerChoice ==='paper'){
    result = "Computer Wins";

}
else if(computerChoice ==='scissors'){
    result = "Player Wins";
}
alert("Computer chose "+computerChoice+". "+" You chose Rock. Thus "+result);

}

function playp(){
const randNum = Math.random();
if(randNum >= 0 && randNum <1/3){
    
    computerChoice = 'rock';

}
else if(randNum>1/3 && randNum<2/3){
    
     computerChoice = 'paper';
}
else if(randNum>2/3 && randNum<1){
    
     computerChoice = 'scissors';
}
console.log(computerChoice);

let result ="";
if(computerChoice ==='rock'){
    result = "Player Wins";
}
else if(computerChoice ==='paper'){
    result = "Tie";

}
else if(computerChoice ==='scissors'){
    result = "Computer Wins";
}
alert("Computer chose "+computerChoice+". "+" You chose Paper. Thus "+result);

    
}

function plays(){
const randNum = Math.random();
if(randNum >= 0 && randNum <1/3){
    
    computerChoice = 'rock';

}
else if(randNum>1/3 && randNum<2/3){
    
     computerChoice = 'paper';
}
else if(randNum>2/3 && randNum<1){
    
     computerChoice = 'scissors';
}
console.log(computerChoice);

let result ="";
if(computerChoice ==='rock'){
    result = "Computer Wins";
}
else if(computerChoice ==='paper'){
    result = "Player Wins";

}
else if(computerChoice ==='scissors'){
    result = "Tie";
}
alert("Computer chose "+computerChoice+". "+" You chose Scissors. Thus "+result);


}