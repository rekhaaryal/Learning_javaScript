// There are two types of data types 
// 1. Primitive Data types (string , numbers , booleans , Undefined, null, Bigint, symbols)
// 2. Object Data Type (An Object , An Array , A date)

//Numbers : Represent Numeric value (integer, floating-point)
var myFavNum = 8;
console.log(myFavNum);
//String : Represent a sequence of character enclosed in single or double quotes.
var myName = "Rekha";
console.log(myName);
// Boolean : Represent a Logical entity with two values: true/False
var isRaining = true;
console.log(isRaining);
// Undefined : Represents the absence of a value or an uninitialized variable.
var rekha;
console.log(rekha);
//Null : Represent the absence of a value . It is often used to explicitly indicate that a variable or object property has no assigned value.
var badMemories = null;
console.log(badMemories);
//BitInt : Represent integer or arbitrary precisioin (available since ECMAScript 2020).
const bigNumber =9887675654687980908765779098767890n;
//Symbol :
// Questions
//?1. What is the difference betn null and undefined in javascript?
// null: an empty Box 
// undefined : Box that wasnot open yet
//?2. What is the purpose of "typeof "operator in javascript?
var myName = "Rekha";
console.log(myName);
console.log(typeof myName);
//?3. What is the result of "typeof null" in javascript?
var myName = null;
console.log(myName);
console.log(typeof null);//its a bug
//? 4. What are the Primitive data type in javascript?

//? 5. Convert a string to a number?
var myFavNum2 = "333";
console.log(typeof +myFavNum2);
console.log(typeof Number(myFavNum2));
//?6. Convert a number to string?
var str1 = 5;
console.log(typeof String(str1));
console.log(typeof( str1 + ""));
