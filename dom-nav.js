const element1 = document.getElementById("fruits");
const veg = document.getElementById("veg");
const element2 = document.querySelectorAll("ul");

const iceCream = document.getElementById("icecream");

const apple = document.getElementById("apple");

const nextSibling = apple.nextElementSibling;
nextSibling.style.backgroundColor = 'violet';
 
const onion = document.getElementById("onions");
const nextSibling1 = onion.nextElementSibling;
nextSibling1.style.backgroundColor = 'violet';

const prevIce = iceCream.previousElementSibling;
prevIce.style.backgroundColor ='pink'; //why


const firstChild = element1.firstElementChild;
 firstChild.style.color = 'white';
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = 'coral';
lastChild.style.color = 'white'

element2.forEach(x=>{
    const c1 = x.firstElementChild;
    c1.style.backgroundColor= 'green'
})

element1Siblings = element1.nextElementSibling;
element1Siblings.style.textDecoration = 'underline';
element1Siblings.style.textDecorationThickness = '2px'

element2.forEach(e2=>{
    const last = e2.lastElementChild;
    last.style.fontSize = '2rem';
})
const parent = apple.parentElement;
parent.style.fontSize = '1.5rem';
const children = fruits.children;
Array.from(children).forEach((child)=>{
    child.style.color = 'black';
})

children[1].style.backgroundColor = 'black'
children[1].style.color = 'white'