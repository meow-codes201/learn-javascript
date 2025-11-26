function walk(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkSuccess = true;
            if(walkSuccess){
            resolve('you walk 1000 steps');
        }
        else{
            reject("You didnt walk 1000 steps");
        }
    },5000);
    })
}

function eat(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const eatSuccess = true;
            if(eatSuccess){
        resolve('you eat breakfast');
        }
        else{
            reject("you didnt eat breakfast");
        }
    },2000);
    })
}

function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const sleepSuccess = true;
        if(sleepSuccess){
        resolve('you went to sleep');
        }
        else{
            reject("you didnt go to sleep");
        }
    },3000)
    })
}

async function doChores() {
    try{
        const walkResult = await walk();
    console.log(walkResult);
    
    const eatResult = await eat();
    console.log(eatResult);
    
    const sleepResult = await sleep();
    console.log(sleepResult);
    console.log('finished everything');
    
    
    }
    catch(error){
        console.error(error);
        
    }
}
doChores();