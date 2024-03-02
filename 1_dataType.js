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
//?7 Explain the concept of truthly and falsy values in javascript . Provide example
// Truthly value (true , non empty string "hello", non zero number"34" , array and object)
// falsely value(false , o , "", null, undefined , NAN)
//? To check if a non-empty string is truthly or falsly in javascript , we can directly use if statement.

var myName = '';
if(myName){
    console.log('this is truthly value');
}
else{
    console.log('this is falsely value ');
}
var myName = 'Rekha Aryal'
if(myName){
    console.log('this is truthly value');
}
else{
    console.log('this is falsely value ');
}
// parseInt & parseFloat are both functions in javascript used for converting string to number,but they have different use cases. 
// parseInt is used to parse a string and convert it to an integer(whole number).
var myName = "23";
var myNumber = parseInt(myName);
console.log(myNumber);
//parseFloat is used to parse a string and convert it to a floating point number(decimal number).
var myName = "23.2222";
var myNumber = parseFloat(myName);
console.log(myNumber);
console.log(parseInt("123"));//123
console.log(parseInt("123",10));//123
console.log(parseInt("  123  "));//123 (Whitespace is ignore)
console.log(parseInt("023"));//23 (0 is ignore)
console.log(parseInt("3.22"));//3(decimal part is truncated)
console.log(parseInt("$22"));
console.log(parseInt("-322"));
console.log(parseInt("xyz"));
//? NaN is stand for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
console.log(isNaN("rekha")); 
console.log(isNaN("111")); 
//! NaN===NaN , why is it false?
if(NaN==NaN)
{
    console.log("both are equal");
}
else 
{
    console.log("not equal");
}