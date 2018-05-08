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
    var walking = ask.keyIn(`hello ${name} push W to walk`, {limit: "w,p,u"});
    if(walking === "w") {
        if(Math.random() < .35){
            fight();
        } else {
            console.log("You didn't run into a monster.")
        }
    } else if(walking === "p") {
        console.log(player);
    } else{
        player.hp = 100;
        console.log(player);
        if(player.item === "heath potion") {
            player.item === "none"
        }
    }
}



function fight() {
   var runOrFight = ask.keyInSelect(rOrF, `You ran into an enemy! Are you going to run or fight?`); 
   if(rOrF[runOrFight] === "run") {
    run();
} else {
    attackEnemy();
}
}

function attackEnemy() {
    var num = Math.random();
    if(num <= .33) {
        if(enemy['hp'] < 1) {
            console.log("the enemy is dead");
        } else {
        console.log(`Your enemy is ${enemy["name"]}`);
        var damage = Math.floor(Math.random() * 75);
        enemy["hp"] = enemy['hp'] - damage;
        console.log(`The enemy lost ${damage} hp. The enemy now has ${enemy["hp"]} hp.`);
        if(enemy['hp'] < 1) {
            console.log(`you've killed ${enemy['name']} you have a new item push u to use what you got!`);
            enemyDie();
        }
    }
    } else if(num > .33 && num < .66) {
        if(enemy2['hp'] < 1) {
            console.log("the enemy is dead")
        } else {
        console.log(`Your enemy is ${enemy2["name"]}`)
        var damage2 = Math.floor(Math.random() * 75);
        enemy2["hp"] = enemy2['hp'] - damage2;
        console.log(`The enemy lost ${damage2} hp. The enemy now has ${enemy2["hp"]} hp.`)
        if(enemy2['hp'] < 1) {
            console.log(`you've killed ${enemy2['name']} you have a new item push u to use what you got!`);
            enemyDie();
        }
    }
    } else if(num >= .66) {
        if(enemy3['hp'] < 1) {
            console.log('the enemy is dead')
        } else {
        console.log(`Your enemy is ${enemy3["name"]}`);
        var damage3 = Math.floor(Math.random() * 75);
        enemy3['hp'] = enemy3['hp'] - damage3;
         console.log(`The enemy lost ${damage3} hp. The enemy now has ${enemy3["hp"]} hp.`);
            if(enemy["hp"] < 1) {
        console.log(`you've killed ${enemy3['name']} you have a new item push u to use what you got!`);
        
        enemyDie();
    }
}
    }

}

function enemyDie() {
    player.item = "health potion";
    console.log("The enemy is dead congrats :)")
}


function enemyAttack() {
    var damage = Math.floor(Math.random() * 50);
    player['hp'] = player["hp"] - damage;
    console.log(`${name} the enemy hit you and you lost ${damage} hp.`);
    if(player['hp'] < 1) {
        die();
    }
}

function die() {
  console.log("you're dead")
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

