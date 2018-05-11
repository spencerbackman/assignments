// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

// function names(arr) {
//     return arr.forEach(function(name){
//         console.log(name);
//     })
// }

// console.log(names(wizards))





// console.log(everyWiz(wizards, "name"));

// const goodWiz = (arr, property) => {
// return arr.forEach( obj => {
//   var wiz = "";
//   if(obj[property] === "neutral good") {
//     wiz += obj['name']
//   } 
//   return wiz;
// })
// }

// console.log(goodWiz(wizards, "alignment"))

var wizards = [  
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil",
    isAlive: true
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good",
    isAlive: true
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good",
    isAlive: true
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good",
    isAlive: true
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good",
    isAlive: true
  }
]


// console.log(wizards.findIndex( obj => {
//   if (obj === "alignment" && "alignment" === 'lawful good') {
//     return findIndex
//   }
// }))

// let lawfulGoodWizard = wizards.findIndex(wizard => wizard.alignment === 'lawful good')

// let lawfulGoodWizard = wizards.findIndex(function(wizard){
//     return wizard.alignment === 'lawful good'
// })

// console.log(lawfulGoodWizard)


// let wizAlive = wizards.every(wizard => wizard.isAlive === true)

// console.log(wizAlive)

// let wizNeutral = wizards.some(wizard => wizard.alignment === "neutral good")

// console.log(wizNeutral)


// let wiz = wizards.forEach(wizard => {
//   if(wizard.alignment === 'neutral good') {
//     wizard.isAlive = false;
//     console.log(wizard)
//   }
// })



let wizAlive = wizards.every(wizard => wizard.isAlive === true)
console.log(wizAlive)

let wizSomeAlive = wizards.some(wizard => wizard.isAlive === true)
console.log(wizSomeAlive)