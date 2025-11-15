let age = 8;

if(age>=18){
    console.log('vote allowed');
    
}
else if(age<18 && age>0){
    console.log('vote not allowed');
    
}
else{
    console.log('invalid age');
    
}

console.log('CAN YOU DRIVE?');

let age1 = 15;
if(age1>=16){
    console.log('You can drive');
}
else if(age1>=15){
    console.log('Almost There!');
    
}
else if(age1<16 && age1>0){
    console.log('You cannot drive');
    
}
else{
    console.log("invalid age");
    
}
let hour = 19;
hour+=5;
let nameMe = "coding meows";
if(hour>=6 && hour<12){
    console.log('Good Morning '+ nameMe+"!");
     
}
else if(hour>=12 && hour<18){
    console.log('Good Afternoon '+ nameMe+"!");
}
else{
    console.log('Good Evening '+ nameMe+"!");
}
console.log("\t\t------------------------------");

console.log('\t\t      WELCOME TO MY PARK!');
console.log("\t\t------------------------------");
let age2= 5;
let isHoliday = false;

if(((age2<=6 && age2>0)||age2>=65) && isHoliday===false){
    console.log('Discount');
    
}

let rnd = Math.random();
let result=(rnd>=0.5)?'Heads':'Tails';
let guess = 'Heads';
if(result===guess){
    console.log('You Win!');
    

}
else{
    console.log('Wrong guess');
    
}


// if(rnd<=0.5){
//     console.log('heads');
    
// }
// else{
//     console.log('Tails');
    
// }