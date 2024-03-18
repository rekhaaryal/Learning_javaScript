// Control flow refers to the order in which statements are executed in a program. In JavaScript, control flow can be managed using conditional statements (like if, else if, and else) and loops (such as for, while, and do...while). These constructs allow you to make decisions and repeat actions based on conditions.
//1. If Statement: The if statement allows you to execute a block of code if a specified condition is true. You can also include else if and else clauses to handle additional conditions.
let a = 10 ;
if(a>0){
    console.log('a is posivite');
}else if(a===0){
    console.log('a is zero');
}else
 {
    console.log('a is negetive');

}
//2.Switch Statement: The switch statement is another way to handle multiple conditions. It evaluates an expression and executes the corresponding case.
let day = 'Tuesday';

switch (day) {
    case 'Monday':
        console.log('It\'s Monday!');
        break;
    case 'Tuesday':
        console.log('It\'s Tuesday!');
        break;
    default:
        console.log('It\'s another day!');
}
//3.For Loop: The for loop allows you to execute a block of code multiple times. It typically consists of an initialization, a condition, and an iteration expression.
// for (let i = 0; i < 5; i++) {
//     console.log('Iteration ' + i);
// }
//4.While Loop: The while loop executes a block of code as long as a specified condition is true.
// let i = 0;
// do {
//     console.log('Iteration ' + i);
//     i++;
// } while (i < 5);
//5. Do...While Loop: The do...while loop is similar to the while loop, except that it always executes the block of code at least once before checking the condition.
// let i2 = 0;
// do {
//     console.log('Iteration ' + i2);
//     i++;
// } while (i2 < 5);

