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
const rect = new Rectangle(5,9);
// console.log(rect.width + " " + rect.height);
rect.width = 10;
rect.height = 18;
console.log(rect.height);
console.log(rect.height);
console.log(rect.area);
