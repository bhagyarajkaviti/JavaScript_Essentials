let now = new Date();
console.log(now);
console.log(typeof(now));

//Date(datestring)
let now1 = new Date("2022-08-04");
console.log(now1);
let date = new Date("2020-08");
console.log(date);  // Sat Aug 01 2020 05:30:00 GMT+0530 (India Standard Time) { }
let date1 = new Date("2020");
console.log(date1);  // Wed Jan 01 2020 05:30:00 GMT+0530 (India Standard Time) { }
// short date format "MM/DD/YYYY"
let date2 = new Date("03/25/2015");
console.log(date2);  // Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time) { }
// long date format "MMM DD YYYY"
let date3 = new Date("Jul 1 2021");
console.log(date3);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
//Month and Day can be in any order
let date4 = new Date("1 Jul 2021");
console.log(date4);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
//The month can be full or abbreviated. Also, month names are case insensitive.
let date5 = new Date("July 1 2021");
console.log(date5);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }
// commas are ignored
let date6 = new Date("JULY, 1, 2021");
console.log(date6);  // Thu Jul 01 2021 00:00:00 GMT+0530 (India Standard Time) { }

//new Date(year, month, day, hours, minutes, seconds, milliseconds)
let time1 = new Date(2021, 1, 20, 4, 12, 11, 0);
console.log(time1);  // Sat Feb 20 2021 04:12:11 GMT+0530 (India Standard Time) { }
//Here, months are counted from 0 to 11. January is 0 and December is 11. The passed argument has a specific order.
//If four numbers are passed, it represents the year, month, day and hours.
let time2 = new Date(2021, 1, 20, 4);
console.log(time2);  // Sat Feb 20 2021 04:00:00 GMT+0530 (India Standard Time) { }
//Similarly, if two arguments are passed, it represents year and month.
let time3 = new Date(2020, 1);
console.log(time3);  // Sat Feb 01 2020 00:00:00 GMT+0530 (India Standard Time) { }

//AutoCorrection in Date Object
//When you assign out of range values in the Date object, it auto-corrects itself.
let date7 = new Date(2008, 0, 33);
// Jan does not have 33 days
console.log(date7);  // Sat Feb 02 2008 00:00:00 GMT+0530 (India Standard Time) { }