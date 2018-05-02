function countCode(string) {
    var count = 0;
    for(var i = 0; i < string.length -3; i++) {
        if(string[i] === 'c') {
            if(string[i + 1] === 'o') {
                if(string[i + 3] === 'e') {
                    count++;
                } 
            } 
        } 
    }
    return count;
}

console.log(countCode("aaacodeaaa"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcope"));