// "+"sign is not only used for arithmetic addition but also for string concatenation. 
// When the + operator is used with the strings , it concatenates the string together.
// if any operand of the + operator is a string , javascript will treat the other operands as string as well.
// if both operand are numbers then + operator perform numeric addition.
const str = "Hello " + "World";
console.log(str);
//Type coercion is the automatic conversion of "values" from one dataType to another.
// It is the fundamental part of the javascript and can be used to make code more readable and efficient.
// there are two type of type coercion in javascript :
// Implicit coercion happens automatically, while explicit coercion happens manually by the programmer.
// It's worth noting  that type coercion can lead to unexpected result , so it's essential to be aware of how javascript handles these situations.
let sum = "5"-5;
console.log(sum);
console.log(10+"20");
console.log(10-"20");
console.log("Java" + "script");
console.log("" + "");
console.log("" + 0);
console.log("Rekha" - "Aryal");
console.log(true + true);//truthly value is '1' so the ans is 2.
console.log(true + false);//falsly value is 0
console.log(false + true);
console.log(false - true);
let sum1 = "" + 0;
console.log(typeof sum1);

