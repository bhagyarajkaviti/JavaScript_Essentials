//All the Objects are mutable. eg: Object, Array, Function
//eg 2: mutable
let x = { value: 5 };
let y = x;
let z = { value: 20 };

y.value = 10;

console.log(x);  // Object { value: 10 }
console.log(y);  // Object { value: 10 }

y = z;

console.log(x);  // Object { value: 10 }
console.log(y);  // Object { value: 20 }