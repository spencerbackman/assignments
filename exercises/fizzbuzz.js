function fizzBuzz() {
    var arr = [];
    
    for(var i = 0; i <= 100; i++) {
     
        if(i % 3 === 0 && i % 5 === 0) {
            arr.push("fizzbuzz")
        } else if(i % 3 === 0) {
            arr.push('fizz')
        } else if(i % 5 === 0) {
            arr.push('buzz')
        } else {
            arr.push(i);
        }
    }
    return arr;
}

console.log(fizzBuzz())