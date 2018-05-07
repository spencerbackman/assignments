var ask = require("readline-sync");

var player = {
    hp: 100
}

var enemy = {
    name: "panda",
    hp: 75
}

var enemy2 = {
    name: "snapping turtle",
    hp: 75
}

var enemy3 = {
    name: "dog",
    hp: 75
}



var rOrF = ["run", "fight"];


console.log("greetings are you ready to play a game?")

var name = ask.question("whats your name?");
player.name = name;
while(player.hp > 0) {
    walk();

}


function walk() {
    var walking = ask.keyIn(`hello ${name} push W to walk`, {limit: "w,p"});
    if(walking === "w") {
        if(Math.random() < .25){
            fight();
        } else {
            console.log("You didn't run into a monster.")
        }
    } else {
        console.log(player);
    }
}



function fight() {
   var runOrFight = ask.keyInSelect(rOrF, `You ran into an enemy! Are you going to run or fight?`); 
   if(rOrF[runOrFight] === "run") {
    run();
} else {
    fight();
}
   
   enemyCreation();
}

function attackEnemy() {
    var damage = Math.random() * 100 + 1;
    enemy["hp"] = enemy["hp"] - damage;
    console.log(`The enemy has ${enemy["hp"]}.`);
    if(enemy["hp"] < 1) {
        die();
    }
}

function enemyAttack() {
    var damage = Math.random() * 50;
    player['hp'] = player["hp"] - damage;
    console.log(`${name} the enemy hit you and you lost ${damage} hp.`);
    if(player['hp'] < 1) {
        die();
    }
}


function die() {
  console.log("dead")
}

function enemyDie() {
    if(enemy.hp <= 0) {
        console.log(`Congrats ${name} you've defeated the enemy`)
    }
}

function enemyCreation() {
    var num = Math.random();
  if(num <= .33) {
      console.log(`Your enemy is ${enemy["name"]}`);
  } else if(num > .33 && num < .66) {
      console.log(`Your enemy is ${enemy2["name"]}`)
  } else {
      console.log(`Your enemy is ${enemy3["name"]}`)
  }

}

function run() {
    var num = Math.random();
    if(num > .5) {
        console.log("You've succesfully gotten away!");
    } else if(num <= .5) {
        console.log("You were unable to run..")
        enemyAttack();
    }
}

