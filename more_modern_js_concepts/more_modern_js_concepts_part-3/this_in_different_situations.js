// this In Object methods
//eg 1:
let car = {
    color: "Blue",
    brand: "Audi",
    start: function(){
        console.log(this);   // Object { color: "blue", brand: "Audi", start: ƒ() }
    }
};
car.start();

//this in regular functions
//eg 2:
function start(){
    console.log(this);   // Window { }
}
start();

//eg 3:
console.log(this);   // Window { }
// this in arrow functions
//eg 4:
let car1 = {
    color: "blue",
    brand: 'Audi',
    start: () => {
        console.log(this);  // Window { }
    }
};
car1.start();


//this in Arrow Functions with Callback function
//eg 5:
let car2 = {
    color: "blue",
    brand: 'Audi',
    start: function(){
        setTimeout(() => {
            console.log(this);  // Object { color: "blue", brand: "Audi", start: ƒ() } 
        }, 2000);
    } 
};
car2.start();
//eg 6:
let cars = ['Audi', "BMW", 'Mercedes'];
let car3 = {
    color: "blue",
    brand: "Audi",
    start: function() {
        let audiIndex = cars.findIndex((car3) => console.log(this));
    }
};
car3.start();

//this in Constructor Functions
//In Constructor Function, this refers to the instance object.
// eg 7:
function Car(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = function() {
    console.log(this);  // Car { }
  };
}
let car4 = new Car("blue", "Audi");
car4.start();
//In the above example, this refers to the object car4.
//eg 8:Arrow Functions
function Car1(color, brand) {
  this.color = color;
  this.brand = brand;
  this.start = () => {
    console.log(this);  // Car { }
  };
}
let car5 = new Car1("blue", "Audi");
car5.start();