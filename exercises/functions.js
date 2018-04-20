function sums(num1, num2) {
    return num1 + num2;
}

console.log(sums(5,90));


function largestNum(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } else if(num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(largestNum(5,30,3));


function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

evenOrOdd(7);



function strLength(string) {
    if(string.length <= 20) {
        console.log(string + string)
    } else {
        
    }
}

strLength("as;ieowkdnvie")