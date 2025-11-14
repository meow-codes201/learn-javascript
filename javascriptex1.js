console.log(Math.floor(2.8));
console.log(Math.ceil(2.2));
//celcius to fahrenheit
function celciusToFahrenheit(celsius){
    return (celsius * 9/5) +32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
    
}
console.log(celciusToFahrenheit(25)+" F");
console.log(fahrenheitToCelsius(86)+" C");
console.log(celciusToFahrenheit(-5)+" F");


