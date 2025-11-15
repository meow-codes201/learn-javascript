let cartQuan = 0;
const maxQty = 100;
/* maxQty+=1;
console.log(maxQty); //GIVES ERROR AS CONST CANNOT BE CHANGED 
*/
var storeName = "My Store";
console.log(typeof storeName);
console.log(typeof maxQty);
console.log(typeof cartQuan);




function showQty(){
    console.log("Quantity:"+cartQuan);
    
}
function add(){
    cartQuan ++;
    showQty();
}
function add2(){
    cartQuan += 2;
    showQty();
}
function add3(){
    cartQuan += 3;
    showQty();
}

function resetCart(){
cartQuan=0;
showQty();
console.log('cart  was reset');
}

function add4(){
    cartQuan +=4;
    showQty();
}
function add5(){
    cartQuan +=5;
    showQty();
}
function remove1(){
    cartQuan --;
    showQty();
}
function remove2(){
    cartQuan -=2;
    showQty();
}

function remove3(){
    cartQuan -=3;
    showQty();
}

// if (cartQuan > maxQty){
//     alert("You have reached the maximum quantity allowed");
//     // alert("Please reset your cart");
// }

console.log(3<5);
console.log(3>5);
console.log(3==5);
console.log(3>=5);
console.log(3<=5);
console.log(3===5);
console.log(3!=5);
console.log(3!==5);
console.log(5=='5.00');//true because of type coercion
console.log(5==='5'); //false because different data types
console.log('checcccccck');

console.log(5!='5');//false because of type coercion
console.log(5!=='5');//true because different data types


