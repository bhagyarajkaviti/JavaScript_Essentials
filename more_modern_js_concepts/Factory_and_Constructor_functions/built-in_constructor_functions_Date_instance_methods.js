//Instance Methods
//There are methods to access and set values like a year, month, etc. in the Date Object.
//Getting Date values
let date1 = new Date(1947, 7, 15, 1, 3, 15, 0);
console.log(date1.getFullYear());  // 1947
console.log(date1.getMonth());  // 7

//Setting Date Values
let date2 = new Date(1947, 7, 15);
date2.setYear(2021);
date2.setDate(1);
console.log(date2);  // Sun Aug 01 2021 00:00:00 GMT+0530 (India Standard Time) { }