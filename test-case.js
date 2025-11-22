import { formattedPrice } from "./func-for-test.js";

if (formattedPrice(2095) === '20.95') {
    console.log('passed');
}
if (formattedPrice(0)==="0.00"){
    console.log('passed');
    
}
if(formattedPrice(2000.5)==='20.01'){
    console.log('passed');   
}
