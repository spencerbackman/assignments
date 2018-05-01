var readline = require('readline-sync'); 
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? ')); 



function caesarCipher(str, num) {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var newStr = "";
    for(var i = 0; i < str.length; i++) {
        if(letters.indexOf(str[i]) === -1) {
            newStr += str[i];
        } else {
        char = str[i];
        var position = letters.indexOf(char);
        newStr += letters[(position + num) % 26];
        }
    }
    return newStr;
}



console.log(caesarCipher(input, shift));