let buttons = document.querySelectorAll(".myBtns");
buttons.forEach(btn=>{
    btn.addEventListener('click',event=>{
        btn.classList.toggle("enabled");

    })
})
// buttons.forEach(btn=>{
//     btn.addEventListener('click',event=>{
//         btn.classList.toggle("disabled");

//     })
// })
buttons.forEach(btn =>{
    btn.addEventListener("click",event=>{
        if(event.target.classList === 'enabled'){
        event.target.classList.replace('enabled','disabled');
        event.target.textContent ='disabled';
        }
        else{
            event.target.classList.replace('disabled','enabled');

        }


    })
})


buttons.forEach(button=>{
    button.addEventListener('mousedown',event=>{
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button=>{
    button.addEventListener('mouseout',event=>{
        event.target.classList.toggle("hover");
    })
})