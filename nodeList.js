let myBtns = document.querySelectorAll(".myBtns");
console.log(myBtns); // nodeList
const newBtn = document.createElement("button");
newBtn.textContent = 'button 5';
newBtn.classList = 'myBtns'; 
document.body.appendChild(newBtn)
myBtns = document.querySelectorAll(".myBtns");
console.log(myBtns);

myBtns.forEach(btn =>{
    // btn.style.backgroundColor = 'tomato';
    btn.textContent += '😂'
})

myBtns.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
        event.target.style.backgroundColor = 'tomato'; 
    })
})

//mouseover
myBtns.forEach(btn=>{
    btn.addEventListener("mouseover",(event)=>{

        event.target.style.backgroundColor = 'violet';

    })


    btn.addEventListener("mouseout",(event)=>{

        event.target.style.backgroundColor = 'green';

    })



})



myBtns.forEach(btn=>{
    btn.addEventListener('click',event=>{
        event.target.remove();
        myBtns = document.querySelectorAll(".myBtns");
        
        console.log(myBtns);
    })
})
