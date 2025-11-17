//arrays and loops
/*
let arr = [10,20,30,40,50];
console.log(arr);
console.log(arr[0]);

//arr[4] = 100;
console.log(arr);
ar = [89,'hi',true,false,{name : 'alixe'},[4,5,6]];
console.log(typeof ar);
console.log(ar.length);
ar.push("WHAT");
console.log(ar);
arr.splice(4,1);
console.log(arr);




// arr = [11]
//console.log(arr);

//while loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}

//for loop
for(let j=1;j<=5;j++){
    console.log(j);
    
}
*/
/*
//array 

const todoList = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];
for(let i=0;i<todoList.length;i++){
    console.log(todoList[i]);
    
}
*/
/*
const nums = [1,2,3,4];
let dbld = [];
let db = []
for(let i=0;i<nums.length;i++){
    dbld[i]=nums[i] * 2;
    db.push(nums[i]+2);
}
console.log(dbld);
console.log(db);
*/
const ar1 = [1,2,3,4];
const ar2 = ar1;
ar2.push(4);
console.log(ar1);
console.log(ar2);
const [f,s,t,l]=[1,2,3,4];//destructuring

for(let i=0;i<=10;i++){
    if(i%3===0){
        // break;
        continue;
    }
    console.log(i);
    
}
let i = 1;
while(i <= 10){
    if(i%2===0){
    console.log(i);
    }
    i++;
    
}
