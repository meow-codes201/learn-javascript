// mouse events
// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// function changeColor(event){
//     myBox.style.backgroundColor = 'tomato';
//     // console.log(event);
//     myBox.textContent = 'CLICKED!'
    
// }

// myBtn.addEventListener("mouseover",(event)=>{
//     myBox.style.backgroundColor = 'brown';
//     myBox.textContent = 'You sure?';
//     myBox.style.color = 'white';
// })
// myBtn.addEventListener("click",changeColor);
// myBtn.addEventListener("mouseout",(event)=>{
//     myBox.style.backgroundColor = 'lightgreen';
//     myBox.textContent = 'Click Me';
//     myBox.style.color = 'black';
// })


//key events
const myBox = document.getElementById("myBox");
document.addEventListener("keydown",(event)=>{
    myBox.textContent = "🤖";
    myBox.style.backgroundColor = 'tomato'

})


// const myBox = document.getElementById("myBox");
document.addEventListener("keyup",(event)=>{
    myBox.textContent = "🤡";
    myBox.style.backgroundColor = 'lightblue';

})
const moveAmount = 10;
let x = 0;
let y =0;

document.addEventListener("keydown",(event)=>{
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case 'ArrowUp':
                y -= moveAmount;
                break;
            case 'ArrowDown':
                y += moveAmount;
                break;
            case 'ArrowLeft':
                x -= moveAmount;
                break;
            case 'ArrowRight':
                x += moveAmount;
                break;
            
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
        // myBox.style.top = `${y}px`;
        // myBox.style.top = `${y}px`;
    }
})