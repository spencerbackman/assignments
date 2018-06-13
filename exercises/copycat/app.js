function copyCat(obj) {
    
}

const person = {name: "Joe"}  
const copy = copyCat(person);

console.log(person.name)
console.log(copy.name)

person.name = "Jane"

console.log(person.name)
console.log(copy.name)