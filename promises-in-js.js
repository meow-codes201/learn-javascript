function walkDog(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dogwalked = true;

            if(dogwalked){resolve('you walk the dog');
        // callback();
             }
             else{
                reject("you didnt walk the dog")
             }
                     },1500);
    });


}


function cleanKitchen(){
    // setTimeout(()=>{
    //     console.log('you clean the kitchen');
    
    // },2500);

    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('you clean the kitchen');
    
    },2500);

    })
}

function takeTrashOut(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('you take out the trash');
    },500);
    })
}
walkDog().then(value =>{console.log(value); return cleanKitchen()}).then(value=> {console.log(value); return takeTrashOut()}).then(value=>{console.log(value); console.log('you finished all the chores');
}).catch(error =>{console.error(error);
})

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeTrashOut(()=>{
//             console.log('work is over');
//         });
//     });
// });
