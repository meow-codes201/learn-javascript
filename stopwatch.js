const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}



function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }

}


function reset(){
    clearInterval(timer);
    // let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    display.textContent = '00:00:00:00';



}

function update(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    

    let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    let min = Math.floor(elapsedTime/(1000 * 60 )%60)
    let sec = Math.floor(elapsedTime/1000 % 60);
    let ms = Math.floor(elapsedTime % 1000 / 10);
    hours = hours.toString().padStart(2,0);
    min = min.toString().padStart(2,0);
    sec = sec.toString().padStart(2,0);
    ms = ms.toString().padStart(2,0);
    

    display.textContent = `${hours}:${min}:${sec}:${ms}`;



}