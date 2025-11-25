const username = 'Panda';
document.title = 'hey'; // changes title
document.body.style.backgroundColor = 'black';
document.getElementById("welcome-msg").style.color = 'white';
document.getElementById("welcome-msg").textContent += username=== ""?"Guest":username;


/*
element selector = target and manipulate HTML elements - select from DOM
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

*/

const myHeading = document.getElementById("my-heading");
myHeading.style.color = 'purple';
myHeading.style.textAlign = 'center';
myHeading.style.backgroundColor = 'lightpink';

const fruits  = document.getElementsByClassName("fruits");
// fruits.style.color= 'white';
console.log(fruits);


Array.from(fruits).forEach((fruit)=>{
    fruit.style.fontSize = '2rem';
});


fruits[0].style.color = 'red';
fruits[1].style.color = 'salmon'
fruits[2].style.color = 'pink'

const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor  = 'white';
h4Elements[0].style.textAlign = 'center';

for(let h4Element of h4Elements){
    h4Element.style.fontSize = '3rem';
    h4Element.style.color = 'black';
    h4Element.style.backgroundColor = 'white';
    h4Element.style.textAlign = 'center';
}
const li = document.getElementsByTagName("li");
// for(let li of lis){
//     li.style.fontSize = '2rem';
//     // li.style.display = 'flex';
//     li.style.backgroundColor = 'lightgreen';
//     // li.style.
// }
Array.from(li).forEach(li => {
    li.style.fontSize = '2rem';
    li.style.textAlign = 'center';
    li.style.color = 'white';

})
const element = document.querySelector(".fruits");
element.style.backgroundColor = 'white';
const elements = document.querySelectorAll(".fruits");
// elements.style.backgroundColor = 'lightcoral'
for(e of elements){
    e.style.backgroundColor = 'green';
    e.style.margin = '2rem';
}
