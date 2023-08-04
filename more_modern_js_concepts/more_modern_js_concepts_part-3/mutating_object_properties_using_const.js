//eg 3: Mutating Object properties
const car = {
    color : "blue",
    brand : "Audi"
   };
   car.color = "red";
   console.log(car.color);  // red
   
   //eg 4:But objects can't be reassigned.
   const car1 = {
    color : "blue",
    brand : "Audi"
   };
   car.color = "red";
   car1 = {};  // TypeError {"Assignment to constant variable."}