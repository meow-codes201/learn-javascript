class Products{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
    displayProduct(){
        console.log(this.name);
        console.log(this.price.toFixed(2));
        
        
    }

    calculateTotal(salesTax){
        return (this.price + (this.price * salesTax)).toFixed(2);
    }
}
const p1 = new Products('shirt',19.99);
p1.displayProduct();
const p2 = new Products('Pants',22.50);
p2.displayProduct();
const salesTax = 0.05;
console.log(p2.calculateTotal(salesTax)
);
console.log(p1.calculateTotal(salesTax));

//static 
class Meth{
    static PI = 3.14;
}
console.log(Meth.PI); // ACCESS THROUGH VLASS DIRECTLY
const m1 = new Meth; // DOESNT WORK
console.log(m1.PI); //UNDEFINED

class User{
    static users = 0;
    constructor(username){
        this.username = username;
        User.users ++;
    }
}
const u1 = new User(("Barbie"));
console.log(User.users);
const u2 = new User('just trolling '); 
const u3 = new User('just trolling ');
const u4 = new User('just trolling '); 
const u5 = new User('just trolling '); 
console.log(User.users);


