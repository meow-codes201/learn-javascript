function subscribe(){
    const sub = document.querySelector('.sub');
    if(sub.innerText === 'Subscribe'){
        sub.innerText = 'Subscribed';

        sub.classList.add("subed");
    
    }
    else{
        sub.innerText = 'Subscribe';
        sub.classList.remove("subed");
    }

}

function calculate(){
    let costElement = document.querySelector(".cost");
    let cost = Number(costElement.value);
    if (isNaN(cost) || cost <0) {
    document.querySelector('.total').innerText = "Enter a valid amount 😭";
    return;
    }
 
    if(cost < 40){
        cost += 10;
    }
 

   document.querySelector(".total").innerHTML = `$${cost}`;
}

function check(event){

    if(event.key === 'Enter'){
        calculate();
    }
    
    
}