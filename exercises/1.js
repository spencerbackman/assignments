function add(a,b) {
    return a+b;
}

function largest(a,b,c) {
    if(a > b && a > c) {
        return a;
    } else if(b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log("even")
    } else {
        console.log("odd")
    }
}

function length(str) {
    if(str.length <= 20) {
        return str + str;
    } else {
        var string = str.slice(str.length /2)
        return string;
    }
}

console.log(length("kkkklsjkdflkdahfgoa;iehfak"))


function fibonacci(n) {
    if(n < 1) {
        n = 1;
    }   var nextNum = n + n;
    return nextNum;
}
console.log(fibonacci(1))


function isCaps(letter) {
    return letter === letter.toUpperCase();
}

function antiCaps(string) {
    var str = "";
    var letter = string.split('');
    for(var i = 0; i < string.length; i++) {
        if(isCaps(letter[i])) {
            str += letter[i].toLowerCase();
        } else {
            str += letter[i].toUpperCase();
        }
    }
    return str;
}

console.log(antiCaps("i Love lEaN"))


function capFirstLetter(string) {
    var words = string.split(' ');
    for(var i = 0; i < words.length; i++) {
        words[i] = words[i].slice(0,1).toUpperCase().concat(1);
    }
    return words;
}



function factorial(n) {
    sum = 0;
    var num = n;
    for(var i = n; i > 0; i--) {
        var num1 = num;
        var num2 = num -1;
        var total = num1 * num2;
        sum += total;
        num = num2;
    }
    return sum;
}

console.log(factorial(1))
console.log(factorial(10))