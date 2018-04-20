var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count = 0;

for(var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        count += 1;
    }
}

console.log(count);


var peopleWhoWantToSeeMadMax = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMax.length; i++) {
    if(peopleWhoWantToSeeMadMax[i].age >= 17) {
        console.log(peopleWhoWantToSeeMadMax[i].name + " can go to mad max fury road!")
    } else {
        console.log(peopleWhoWantToSeeMadMax[i].name + " is not old enough to see mad max fury road :(")
    }
  }