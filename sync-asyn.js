/*
//asynchronous operation
setTimeout(()=>{
    console.log('im asynchronous');
    
},2000);

//synchronous
console.log(1);
console.log(2);
console.log(3);
*/

function func1(callback,x){
    setTimeout(()=>{console.log('task 1');
        callback(x);
    },3000);
    
}



function func2(num){
    console.log('task 2');
    console.log('task 3');
    console.log('task 4');
    console.log(`task ${num}`);
    
}


// func1(func2,5);
// func2();
