var readlineSync = require('readline-sync');

var userName = readlineSync.question("What's your name? ");
console.log("Hi " + userName.toUpperCase() + "!");

var age = readlineSync.question("How old are you? ");
console.log("Wow " + userName + " you are " + age + " years old!");

var favAnimal = readlineSync.question("Whats your favorite animal? ");
var favDog = readlineSync.question("Whats your favorite type of dog?");
var combine = favAnimal.concat(favDog);
console.log(userName + " you chose " + combine + " same here!");

var favMusic = readlineSync.question("Whats your favorite genre of music and whats your favorite song?");
if(favMusic.length > 20) {
    console.log(favMusic.slice(favMusic.length / 2));
} else {
    console.log(favMusic)
}
