alert("Welcome");
console.log("Welcome back");
console.log("slow and steady");
console.log("some"+ " more" +" text: " + 88);
// console.log("some"*8);
let a=10;
console.log("Items(2):              "+"$" + (7.99 + 20.95+(Math.round(((799 + 2095))*0.1))/100));
console.log("Welcome back");
console.log('I\'m into javascript bcoz i love it, and js loves me');
console.log(`hello but what ${a}`);
console.log(`Items(${1+1}):$${(7.99 + 20.95+(Math.round(((799 + 2095))*0.1))/100)}`);
console.log(`
                some
                text
                for 
                you`);


let name1 = 'Omnis';
console.log(`My name is ${name1}`);
console.log('Total cost:$'+ ((5+3)+((5+3)*0.1)));
console.log(`Total cost:$${(5+3)+((5+3)*0.1)}`);
// alert(`Total cost:$${(5+3)+((5+3)*0.1)}`)

console.log('Total cost '+Math.round((599+295)/100));
console.log(
`total cost:${(Math.round((599+295)*0.1)/100)+5.99+2.95}
thank you, come again!`
);

let item1=799;
let item2=2095;
let shipping=499;

let itemsTotal = (2*item1 + 2*item2) / 100;
let shippingTotal = (shipping + shipping) / 100;
let totalBeforeTax = itemsTotal + shippingTotal;
let tax = totalBeforeTax * 0.10;
let total= totalBeforeTax + tax;

console.log(`Items(4): $${itemsTotal.toFixed(2)}`);
console.log(`Shipping & handling: $${shippingTotal.toFixed(2)}`);
console.log(`Total before tax: $${totalBeforeTax.toFixed(2)}`);
console.log(`Estimated Tax(10%): $${tax.toFixed(2)}`);
console.log(`Order total:$${total.toFixed(2)}`);
