// const sortedDogOwners = (arr) => {
//     var dogOwners = arr.map(person => {
//         if(person.pets.includes('dog')) {
//             return person;
//         }
//     })
//     dogOwners.sort(function (a,b) {
//         return a.age - b.age;
//     })
//     return dogOwners;
// }

function sortedDogOwners(arr) {
    return arr.filter(person => person.pets.includes('dog'))
              .sort((a,b)=> a.age - b.age)
}





console.log(sortedDogOwners([  
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
]))



function arbitraryPractice(arr) {
    var finalNames = [];
    var nameArr = arr.filter(owner => owner.age > 20 && 
    owner.pets.filter(pet => pet.nickNames.length > 0).length === owner.pets.length)
}



function arbitraryPractice(people) {
    people = people.filter(function(person){
        if(! person.pets.filter(pet => pet.nickNames.length > 0).length) {
            return false;
        } 
        if(! person.pets.filter(pet => pet.type === 'dog').length) {
            return false;
        }
        if(person.age <= 20) {
            return false;
        }
        return true;
    })
    var pets = [];

    for(let i = 0; i < people.length; i++) {
        for(let j = 0; j < people[i].length; j++) {
            pets.push(<li>`${people[i].pets[j].name}`<li>)
        }
    }
}

