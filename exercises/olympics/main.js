for(var i = 0; i < 10; i++) {
    console.log(i);
}

for(var i = 9; i >= 0; i--) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"] 

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

var nums = [];

for(var i = 0; i < 10; i++) {
    nums.push(i);
}
console.log(nums)


for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"] 
var fruitArr= [];
for(var i = 0; i < fruits.length; i += 2) {
    fruitArr.push(fruits[i])
}
console.log(fruitArr)


var people = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name:"Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

for(var i = 0; i < people.length; i++) {
    console.log(people[i].name)
}

// var names = [];
// var occupations = [];

// for(var i = 0; i < people.length; i++) {
//     names.push(people[i].name)
//     occupations.push(people[i].occupation)
// }

// console.log(names);
// console.log(occupations)

var person = [];
var job = [];

for(var i = 0; i < people.length; i += 2) {
    person.push(people[i].name)
    job.push(people[i].occupation)
}
console.log(person);
console.log(job)