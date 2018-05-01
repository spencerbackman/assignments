var readlineSync = require('readline-sync');

var firstNum = readlineSync.question('Please enter your first number');
var num1 = parseInt(firstNum);

var secondNum = readlineSync.question('Please enter your second number');
var num2 = parseInt(secondNum);

var opperation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div');
var opp = opperation;


if(opp === "add") {
    console.log("the result is: " + num1 + num2)
} else if(opp === "sub") {
    console.log("the result is: " + num1 - num2)
} else if(opp === "mul") {
    console.log("the result is: " + num1 * num2)
} else if(opp === "div") {
    console.log("the result is: " + num1 / num2)
}



