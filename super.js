// super - call constructor/properties/methods of superclass by subclass
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`${this.name} can move at a speed of ${speed}mph`);
        
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    // super();
    constructor(name,age,swimSpeed){
       super(name,age);
        this.swimSpeed = swimSpeed;

    }
    swim(){
      console.log(`${this.name} can swim`);
    super.move(this.swimSpeed);    
    }
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;

}
fly(){
    console.log(`${this.name} can fly`);
    super.move(this.flySpeed);
}
}
const r = new Rabbit('bunny',1,25);
const f = new Fish('Nemo',2,12);
const h = new Hawk('Hawkie',3,50);
console.log(r.name);
console.log(r.age)
console.log(r.runSpeed);

console.log(f.name);
console.log(f.age)
console.log(f.swimSpeed);

console.log(h.name);
console.log(h.age)
console.log(h.flySpeed);
// r.move();
r.run();
f.swim();
h.fly();
