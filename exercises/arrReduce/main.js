// var array = [1,2,3];

// function stringConcat(arr){
//   return arr.reduce(function(final, num){
//         return final += num;
//     },0)
// }

// console.log(stringConcat(array));



// function stringCon(arr) {
//     str = "";
//     arr.reduce(function(final, num){
//         str += final;
//         str += num;
//     })
//     return str;
// }


// console.log(stringCon(array))


// function totalVotes(arr) {
//   arr.reduce(function(final, voter){
//         if(this.voted === true){
//         final += 1;
//         }
//         return final;
//     },0)
//    return i;
// }

// function votedCount(arr, property) {
// return arr.reduce(function (acc, obj){
//         var key = obj[property]
//         if(key === true) {
//             acc++;
//         }   
//         return acc;
//     },0) 
// } 

// let voteCount = (arr, property) => {
//     return arr.reduce(function(acc, obj){
//         var key = obj[property]
//         if(key){
//             final++
//         }
//         return final;
//     },0)
// }



// // console.log(voteCount(voters))



// function totalVotes(arr) {
//     return arr.reduce(function(final, voter){
//       if (voter.voted){
//         final++
//       }
//       return final
//     }, 0)
//   }
//   console.log(totalVotes(voters));

// console.log(votedCount(voters, "voted"));


// function shoppingSpree(arr)


// function shoppingSpree(arr, property) {
//     return arr.reduce(function(acc,obj){
//         var num = obj[property];
//         acc += num;
//         return acc;
//     },0)
// }

// var wishlist = [  
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];



// const shoppingSpree = (arr, property) =>  arr.reduce((final, obj) => final += obj[property], 0)


// console.log(shoppingSpree(wishlist, "price"))


var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const voterResults = arr => {
    var votes = {};
     arr.reduce((acc, obj) => {
        if(obj['age'] >= 18 && obj['age'] < 26) {
            if(!votes.young) {
                votes.young = 1;
            } else {
                votes.young++;
            }
            if(obj['voted'] === true) {
                if(!votes.youngVotes){
                    votes.youngVotes = 1;
                } else {
                    votes.youngVotes += 1;
                }
            }
        } else if(obj['age'] >= 26 && obj['age'] < 36) {
            if(!votes.mids){
                votes.mids = 1;
            } else {
            votes.mids += 1;
            }
            if(obj['voted'] === true) {
                if(!votes.midVotes) {
                    votes.midVotes = 1;
                } else {
                votes.midVotes += 1;
                }
            }
        } else if(obj['age'] >= 36 && obj['age'] < 56) {
            if(!votes.olds) {
                votes.olds = 1;
            } else {
            votes.olds += 1;
            }
            if(obj['voted'] === true) {
                if(!votes.oldVotes) {
                    votes.oldVotes = 1;
                } else {
                votes.oldVotes += 1
                }
            }
        }
    }, 0) 
    return votes;
}

console.log(voterResults(voters))
