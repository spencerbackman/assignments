function eachLetter(string) {
    for(var i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}

eachLetter("whats good")

function indexOfChar(string, char) {
    for(var i = 0; i < string.length; i++) {
        var chars = string[i];
        if(chars === char) {
            return i;
        } 
    }
    return "Character is not found"
}

console.log(indexOfChar("whats good g", "f"))

function findNum(array) {
    for(var i = 0; i < array.length; i++) {
        var num = array[i];
        if(num === 42) {
            return 42;
        }
    }
    return "42 not found"
}

console.log(findNum([3,4,6,2,6,2,42]))

var nums = [5,3,7,48,4,2,8,1,9,-34]

function smallest(array) {
    var smallest = array[0];

    for(var i = 0; i < array.length; i++) {
        var num = array[i];
        if(num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}

console.log(smallest(nums))