var readlineSync = require('readline-sync');

var options = ['Put hand in hole', 'Find the key', 'Open the door'];
var firstStep = readlineSync.keyInSelect(options, "What will you do first? ");

if(firstStep === 0) {
    console.log("You died!")
} else if(firstStep === 2) {
    console.log('The door is locked.');
} else {
    console.log('congrats you found the key!')

var secondStep = readlineSync.keyInSelect(options, "Now you have the key what will you do? ");

if(secondStep === 0) {
    console.log("You died!")
} else if(secondStep === 2) {
    console.log("congrats you made it through the door.")
} else {
    console.log("You already found the key!")
}


}