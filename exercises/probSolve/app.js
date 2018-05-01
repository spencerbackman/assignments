function largest(arr) {
    var largest = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(largest([32, 5, 2, 8, 19]));


function lettersWithStrings(arr, char) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(char) === -1) {
            continue;
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));



function isDivisible(num1, num2) {
    if(num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isDivisible(9,3));
console.log(isDivisible(11,3));
console.log(isDivisible(12,6));
