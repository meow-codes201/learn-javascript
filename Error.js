/*try {
    console.log('hey');
    

    console.leg("hello");
}
catch{
    console.error("uh oh, looks like you meant log in line 5");
    
}
finally{
    console.log("regardless");
    
}
*/
try{
const dividend = Number(window.prompt('enter dividend'));
const divisor = Number(window.prompt('divisor'));
if(divisor===0){ 
    throw new Error("Can't divide by 0");
    
}
if(isNaN(dividend)||isNaN(divisor)){
    throw new Error("dividend and divisor must be a number");
}
const result = dividend/divisor;
console.log(result);
}
catch(error){
    console.error(error);
    
}
finally{
    console.log('end');
    
}
