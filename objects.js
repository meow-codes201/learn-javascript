// /*objects make our code more organized and easier to manage. They allow us to group related data and functionality together.

// objects helps us represent real-world entities more accurately by encapsulating their properties and behaviors.
// objects - let us group related data and functions together, making our code more modular and easier to maintain.
// */
// // const product = {
// // name:'socks',
// // price:1090
// // };
// // console.log(product);
// // console.log(product.name);
// // console.log("price:$"+product.price);
// // product.name='cotton socks';
// // console.log(product);
// // console.log(product.name);
// // product.type = 'clothing';
// // console.log(product);

// // delete product.price;
// // console.log(product);
// // product.price = 1000;
// // console.log(product);
// // console.log(typeof product);

// const product2 = {
//     name:'shirt',
//     'deliver-time':'5 days',
//     rating :{
//         stars:4.5,
//         count:89
//     },
//     fun: function function1(){
//         console.log('function inside object');
        
//     }

// };
// console.log(product2);
// console.log(product2.name);
// console.log(product2['name']); //same as dictionaries in python
// console.log(product2.time);//undefined
// // console.log(product2.deliver-time);//ERROR because js thinks we are subtracting
// console.log(product2['deliver-time']);//undefined
// console.log(product2.rating.stars);
// console.log(product2.rating.count);
// product2.fun();
// console.log(typeof console); //object
// console.log(typeof console.log); // function inside object=method
// console.log(typeof Math); //object
// console.log(typeof Math.random); // function inside object= method
// JSON.stringify(product2); //converts object to string
// console.log(product2);
// const jsonString = JSON.stringify(product2);
// console.log(jsonString);
// console.log(JSON.parse(jsonString));
console.log('hello'.length);
console.log('hello'.toUpperCase());
console.log('HELLO'.toLowerCase());
console.log('hello'.indexOf('e'));
console.log('hello'.replace('l','p'));
console.log('hello'.replaceAll('l','p'));
console.log('      hello         '.trim());
console.log('hello, how are you?'.split(' '));
console.log('apple,banana,cherry'.split(','));

const obj1 ={
    message:'hello',
    price:954
};
const obj2 = obj1; //copy by reference
obj1.message = 'good job';
console.log(obj2);
const obj3 ={
    message:'good job'
}

console.log(obj1 === obj3); //false because different references
console.log(obj1.message === obj3.message); //true because same value

const {message} = obj1; //destructuring, works if variable name and key name are same
console.log(message);
const obj4 = {
    // message:message
    message, //shorthand for key:value if both are same
    // method : function fun(){
    //     console.log('method here!');
        
    // }
    method(){
        console.log('methodddd hereeeeeeee!!!!');
        
    } //shorthand for method
};
console.log(obj4);
obj4.method();
const {message:msg} = obj1; //destructuring with different variable name
console.log(msg);

const {message:msg1,price:cost} = obj1;
console.log(msg1 +" "+ cost);
