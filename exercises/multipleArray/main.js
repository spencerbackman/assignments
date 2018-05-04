function sortedAge(arr) {
    var newArr = [];
    arr.map(function(obj){
        if(obj.age > 18) {
            newArr.push(obj.lastName)
        }
    })
   return newArr.sort()
}
var sortedOfAge =[  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];
  console.log(sortedAge(sortedOfAge));


  function inHtml(arr) {
     return arr.sort(function(a,b){
         return b.age - a.age
     }).map(function(person){
         return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
     })
    }


console.log(inHtml(sortedOfAge));