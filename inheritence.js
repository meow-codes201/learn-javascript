class Animal{
    aliive = true;
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
        
    }
}
class Cat extends Animal{
    name = 'Snowbell';
    catwalk(){
        console.log(`${this.name} is catwalking`);
        
    }
}
class Rabbit extends Animal{
    name = 'mr. knight';
    bounce(){
        ``
    }
}

const r = new Rabbit();
const c = new Cat();
console.log(c.aliive);
// console.log(c.eat());
c.eat();
r.sleep();