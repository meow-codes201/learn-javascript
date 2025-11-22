const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const rnd = Math.floor(Math.random() * (i+1));
        [array[i],array[rnd]] = [array[rnd],array[i]];


    }
}
shuffle(cards);
console.log(cards);
