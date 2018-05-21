function balance(str) {
    var count1 = 0;
    var count2 = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            count1++;
        } else if(str[i] === ')') {
            count2++;
        }
        if(count2 > count1) {
            return false;
        } 
    }
    if(count1 !== count2) {
        return false;
    }
    return true;
}


console.log(balance("()((()"))