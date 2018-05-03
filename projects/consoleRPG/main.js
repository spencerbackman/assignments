var ask = require("readline-sync");
var isAlive = true;
var hp = 100;
var drogoHP = 75;
var drogoisAlive = true;
var johnIsAlive = true;
var items = [];

console.log("Greetings young padawan are you ready to play a game?");

var name = ask.question("whats your name?");

while(isAlive) {
var walk = ask.keyIn(`Hello ${name} Hit W to walk`, {limit: "w"});
if(walk) {
    var num = Math.random();
    var damage = Math.random() * 100 + 1;
    var luck = Math.random();
    var takeDamage = Math.random() * 50 + 1;
    if(num > .7) {
        var options = ["RUN!!!", "ATTACK!!!"]
        if(num <= .33) {
            while(drogoIsAlive) {
            var attack = ask.keyInSelect(options, "You've found the great dragon Drogo! What will do you?");
                if(options[attack] === 'RUN!!!') {
                    if(luck > .5) {
                        console.log("You've escaped!");
                    } else {
                        if(luck < .33) {
                            var d1 = takeDamage;
                            hp - d1;
                            console.log(`Drogo has attacked you! You've lost ${d1} hp.`);
                        } else {
                            var runOpt = ["hide in a cave", "keep running and don't look back"];
                            var run = ask.keyInSelect(runOpt, "Drogo is catching up what will you do?");
                            if(runOpt === "hide in a cave") {
                                console.log("You've found a hiding spot you're safe from Drogo!");
                            } else {
                                if(luck < .33) {
                                    var d2 = takeDamage;
                                    hp - d2;
                                    console.log(`Drogo has attacked you! You've lost ${d2} hp.`); 
                                }
                                console.log("You got away!");
                            }
                        }
                        }
                        
                    } 
                } else if(options[attack] === 'ATTACK!!!') {
                    var d3 = damage;
                    d3 - drogoHP;
                    if(drogoHP <= 0) {
                        drogoIsAlive = false;
                        console.log("You have killed the great dragon Drogo! Congradulations enjoy a health potion to give you full health and a helmet to help protect you!")
                        items.push("hp potion", "helmet")
                    }
                    console.log(`You've hit drogo and taken ${d3} hp from him`);
                    var attack1 = ask.keyInSelect(options, "Now that drogo has ${drogoHP} what will you do?")
                }
            }
         else if(num < .66 && num > .33) {
            var attack = ask.keyInSelect(options, "You've been challeged by John Snow! What wiil you do?")
              
             } else if(num >= .66) {
           var attack = ask.keyInSelect(options, "You've been challenged by Calise! What will you do?")
        }
 
    } 
}
}



