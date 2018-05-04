var ask = require("readline-sync");
var isAlive = true;
var hp = 100;
var drogoHP = 75;
var drogoIsAlive = true;
var johnIsAlive = true;
var items = [];
var player = {
    hp: 100
}

console.log("Greetings young padawan are you ready to play a game?");


var name = ask.question("whats your name?");
player.name = name 


while(isAlive) {
var walk = ask.keyIn(`Hello ${name} Hit W to walk`, {limit: "w"});


if(walk) {
    var num = Math.random();
    var damage = Math.random() * 100 + 1;
    var luck = Math.random();
    var takeDamage = Math.random() * 50 + 1;
    var options = ["RUN!!!", "ATTACK!!!"]
        if(num <= .33) {
            while(drogoIsAlive) {
            var attack = ask.keyInSelect(options, "You've found the great dragon Drogo! What will do you?");
                if(options[attack] === 'RUN!!!') {
                    if(Math.random() > .5) {
                        console.log("You've escaped!");
                        break;
                    } else {
                        if(Math.random() < .33) {
                            var d1 = Math.random() * 100 + 1;
                            player.hp -= d1;
                            console.log(`Drogo has attacked you! You've lost ${d1} hp.`);
                        } else {
                            var runOpt = ["hide in a cave", "keep running and don't look back"];
                            var run = ask.keyInSelect(runOpt, "Drogo is catching up what will you do?");
                            if(runOpt === "hide in a cave") {
                                console.log("You've found a hiding spot you're safe from Drogo!");
                                break;
                            } else {
                                if(Math.random() < .33) {
                                    var d2 = Math;
                                    hp - d2;
                                    console.log(`Drogo has attacked you! You've lost ${d2} hp.`); 
                                }
                                console.log("You got away!");
                                break;
                            }
                        }
                        }
                        
                    } else if(options[attack] === "ATTACK!!!") {
                        
                    }
                } 
            } else if(num > .33 && num < .66) {
                while(johnIsAlive) {
                    var attack = ask.keyInSelect(options, "You've encountered John Snow what will you do?");
                        if(options[attack] === "RUN!!!") {
                            if(luck > .5) {
                                console.log("You're lucky and escaped John Snow.");
                                break;
                            } else {
                                if(Math.random() > .66) {
                                    var dam1 = Math.random() * 100 + 1;
                                    player.hp -= dam1;
                                    console.log(`Johns hit you and you've lost ${dam1} hp`)
                                } else {
                                    var runnOption = ['climb a tree', 'keep running and dont look back'];
                                    var runn = ask.keyInSelect(runnOption, "John's right behind you what will you do now?");
                                    if(runnOption === "climb a tree") {
                                        console.log("John can't climb trees you've escaped!");
                                        break;
                                    } else {
                                        if(Math.random() > .66) {
                                            var dam2 = takeDamage;
                                            player.hp -= dam2;
                                            console.log("Johns hit you and you've lost ${dam2} hp");
                                        }
                                        console.log("you got away!");
                                        break;
                                    } 
                                }
                            }
                        }
                }
            } else if(num >= .66) {
                if(options[attack] === "RUN!!!") {
                    if(luck < .5) {
                        console.log("You lucky bastard escaped!");
                        break;
                    } else {
                        if(Math.random() < .33) {
                            var dm = Math.random() * 100 + 1;
                            player.hp -= dm;
                            console.log(`Calise attacked you and took ${dm} hp.`)
                        } else {
                            var escapeOpt = ['bow down to the mother of dragons', 'run and dont look back'] 
                        }
                    }
                }
            }
    
}
}



