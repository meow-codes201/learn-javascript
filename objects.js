/*objects make our code more organized and easier to manage. They allow us to group related data and functionality together.

objects helps us represent real-world entities more accurately by encapsulating their properties and behaviors.
objects - let us group related data and functions together, making our code more modular and easier to maintain.
*/
const product = {
name:'socks',
price:1090
};
console.log(product);
console.log(product.name);
console.log("price:$"+product.price);
product.name='cotton socks';
console.log(product);
console.log(product.name);
product.type = 'clothing';
console.log(product);

delete product.price;
console.log(product);
product.price = 1000;
console.log(product);
console.log(typeof product);

