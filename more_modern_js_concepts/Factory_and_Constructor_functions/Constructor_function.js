function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}

let Car1 = new Car("Blue", "Audi");
let Car2 = new Car("Red","Tata");
let Car3 = new Car("Green", "BMW");
console.log(Car1);
console.log(Car2);
console.log(Car3);