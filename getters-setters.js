class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error('width must be a positive number');
            
        }
    }



    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight;
        }
        else{
            console.error('height must be a positive number');
            
        }
    }

get width(){
    return this._width;;
}
get height(){
    return this._height;
}

get area(){
    return this._height*this.width;
}


}
class Person{
    constructor(firstName,lastName,age){
        this.firstName= firstName;
        this.lastName = lastName;
        this.age = age;
    }
set firstName(newfn){
    if(typeof newfn === 'string' && newfn.length>0){
        this._firstName = newfn;
    }
    else
        console.error('must be written in alphabets');
    
}

set lastName(newln){
    if(typeof newln === 'string' && newln.length>0){
        this._lastName = newln;
    }
    else
        console.error('must be written in alphabets');
        
}


set age(newAge){
    if(typeof newAge === 'number' && newAge>0){
        this._age = newAge;
    }
    else
        console.error('age = non negative');
        
}
get firstName(){
    return this._firstName;
}
get lastName(){
    return this._lastName;
}
get age(){
    return this._age;
}
get fullName(){
    return `${this._firstName} ${this._lastName}`;
}


}

// const person1 = new Person(420,69,'kebab')
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);




const person1 = new Person('Horrid','Henry',18)
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.fullName);

























// const rect = new Rectangle(5,9);
// // console.log(rect.width + " " + rect.height);
// rect.width = 10;
// rect.height = 18;
// console.log(rect.height);
// console.log(rect.height);
// console.log(rect.area);


