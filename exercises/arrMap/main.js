// var arr = [2,5,100];

// var doubleNums = arr.map(function(num) {
//     return num * 2;
// })

// console.log(doubleNums);


// var stringItUp = arr.map(function(num) {
//     return arr.toString();
// })

// console.log(stringItUp);


// var arr = ([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]);

// function namesOnly(arr) {
//     var newArr = [];
//     var names = arr.map(function(array){
//         newArr.push(array.name)
//     })
//     return newArr;
// }
// console.log(namesOnly(arr));




// function makeStrings(array) {
//     newArr = [];
//     array.map(function(array, i){
//         if(array.age < 18) {
//             newArr.push(`${array.name} is under age!`);
//         } else {
//             newArr.push(`${array.name} can go to the matrix!`)
//         }
//     })
//     return newArr;
// }

// console.log(makeStrings(arr))




// function readyDOM(array) {
//     h1 = [];
//     h2 = [];
//     array.map(function(array, i){
//      h1.push(array.name);
//      h2.push(array.age);
//     })
//     return [h1, h2];
// }

// console.log(readyDOM(arr))




// function greaterFive(arr) {
//     var nums = [];
//     arr.filter(function(num){ 
//         if(num > 5) {
//             nums.push(num);
//         }
//     })
//     return nums;
// }

// console.log(greaterFive([3,6,4,3,32]));



// function evens(arr) {
//     var newArr = [];
//     arr.filter(function(num) {
//         if(num % 2 === 0) {
//             newArr.push(num);
//         }
//     })
//     return newArr;
// }

// console.log(evens([3,6,8,9, 32,409,232]));




// function fewerFiveChar(arr) {
//     var newArr = [];
//     arr.filter(function(str){
//         if(str.length <= 5) {
//             newArr.push(str);
//         }
//     })

//     return newArr;
// }

// var five = (["dog", "wolf", "by", "family", "eater", "camping"]);
// console.log(fewerFiveChar(five));




// var clubMembers = ([  
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ])

// function illuminati(arr) {
//     newArr = [];
//     arr.filter(function(array){
//         if(array.member === true) {
//             newArr.push(array.name);
//         }
//     })
//     return newArr;
// }

// console.log(illuminati(clubMembers));


var peeps = ([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])


function ofAge(arr) {
    var newArr = [];
    arr.filter(function(array){
        if(array.age >= 18) {
            newArr.push(array.name);
        }
    })
    return newArr;
}



console.log(ofAge(peeps))