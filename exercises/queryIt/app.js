const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];


const filterDatabase = (query, arr) => {
  return database.filter(entry =>
    Object.keys(query).every(key => entry[key] === query[key])
  )
}

// const search = (arr, search) => {
//   var newArr = [];
//   for(var i = 0; i < arr.length; i++) {
//     for(let key in arr[i]) {
//       for(let newKey in arr[i][key]) {
//         if(newKey )
//       }
//     }
//   }
//   return newArr;
// }

console.log(filterDatabase({firstName: "Jack", age: 2}))



// if(arr[i][key].includes(search)!= -1) {
// newArr.push(arr[i]);
//
// }
