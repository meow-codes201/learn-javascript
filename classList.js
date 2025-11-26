const myBtn = document.getElementById("myBtn");
const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");

// myBtn.classList.add("enabled");
// myBtn.classList.remove("enabled");
// myBtn.classList.toggle("enabled");
myBtn.addEventListener("mouseover",(event)=>{
    myBtn.classList.toggle("hover");
})

myBtn.addEventListener("mouseout",(event)=>{
    myBtn.classList.toggle("hover");
})

myBtn.classList.add("enabled");




myBtn.addEventListener('click',event=>{
    if(event.target.classList.contains('disabled')){
        event.target.textContent += '😮'

    }
    else{
    event.target.classList.replace('enabled','disabled');

    }
})

myH1.addEventListener('click',event=>{
    if(event.target.classList.contains('disabled')){
        // event.target.textContent += '😮'
        event.target.classList.replace("disabled","enabled")

    }
    else{
    event.target.classList.replace('enabled','disabled');

    }
})



