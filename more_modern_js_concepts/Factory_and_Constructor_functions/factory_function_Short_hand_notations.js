function createCar (color, brand){
    return {
        color,  //Ensure that argument names and the object property name Should be same.
        brand,
        start() {
            console.log("started");
        }
    };
}
let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Tata");
let car3 = createCar("green", "BMW");

console.log(car1);  //
console.log(car2);
console.log(car3);