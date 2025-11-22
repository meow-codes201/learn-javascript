function Car(make,model,year,color){
this.make=make,
this.model=model,
this.year=year,
this.color=color
this.start = () =>{
    console.log(this.model + ' has started....');
    
}

}
car1 = new Car('BMW','BMW',2025,'black');
console.log(car1);
console.log(typeof Car);
car2 = new Car("ford","mustang",2023,'white');
console.log(car2);
car1.start();


