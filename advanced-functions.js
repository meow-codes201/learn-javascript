/*function greeting(){
    console.log('hellio');
    
}
greeting();
const num = 2;
const fun1 = function greet(){
    console.log('hellllllllllooooooooooooooooooo');
    
};
console.log(typeof fun1);
fun1();
// greet(); gives error
//anonymous function

const fun2 = function(){
    console.log('anonymous');
    
};
fun2();

const ob1 = {
    num:2,
    fun:function(){
        console.log('function inside object');
        console.log('hehehehehehehehehhehehe');
        
    }
}
ob1.fun();
function display(p){
    console.log(`hey ${p}`);
    
}
display("alex");
const namer = function(name){
    console.log('hiiiii '+name);
    
}
namer("Alex");

function run(p){
   p(); 
}
run(function(){

    console.log("helloo");
    
});
*/
//setTimeout(func,miliseconds)
/*
setTimeout(function(){
    console.log('setTimeout() baby! :3');
    console.log('meow :3');
    
},5000);
console.log('next line :3');

console.log('boo :3');

//setInterval - func runs every x ms
// setInterval(function(){
//     console.log("maguc maguc");    
// },1000)

let ar = ['apple','banana','mango','rose','dragon fruit','jackfruit'];
//method to loop through array - forEach(func(value,index))
ar.forEach((value,index)=>{
if(value==='dragon fruit'){
    return;//contibue = skips
}
    console.log(value);
console.log(':3');
console.log(index);

});


const arrow = () => {
    console.log('hey :3');
    console.log(':p');
}
arrow();

const arrowP = (name,greet) => console.log(`${greet} ${name}`);
arrowP('Sensei :3','heelloo');

const oneP = (only) => console.log(only+1);
oneP(99);

const obj2={
    method:()=>{//arrow

    },
    method2(){//shorthand
        
    }
};
*/

const btn = document.querySelector(".js-btn");
const eventListener = ()=>{
()=>{
    console.log('clickeddddddddddd');
    
}

}
btn.addEventListener('click',eventListener());
btn.addEventListener('click',()=>{
    console.log('clickeddddddddddd XD');
    
})
btn.removeEventListener('click',eventListener);