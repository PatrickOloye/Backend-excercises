class Rectangle {
    //setup
    distance = 100
    constructor (_width, _height, _color) {
        console.log('the rectangle is created');

        this.width = _width;
        this.height = _height;
        this.color = _color;
        //this.distance = _distance;
    }

    getArea(){
        return this.width * this.height;
    }
    
    printDescription(){
        console.log(`i am a rectangle of ${this.width} * ${this.height}, and i am ${this.color} `)
    }
}

let Rectangle1 = new Rectangle(5, 4, 'green');
//let Rectangle2 = new Rectangle(10, 5, 'blue');
//let Rectangle3 = new Rectangle(10, 4, 'black');


console.log(Rectangle1)
//console.log(Rectangle2.getArea())

// myRectangle1.printDescription();
