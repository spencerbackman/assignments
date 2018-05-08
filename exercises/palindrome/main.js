// function isPalindrome(str) {
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     var arr = str.split('');
//     var string = "";
//     arr.forEach(function(char){
//         for(var i = 0; i < alphabet.length; i++) {
//             if(char.toLowerCase() === alphabet[i]) {
//                 string += char;
//             } 
//         }
//     }) 
//     return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
// }


function isPalindrome(str) {
    var bareString = str.replace(/[^a-zA-Z]/g, '');
    return bareString.toLowerCase() === bareString.toLowerCase().split('').reverse().join('');
}




console.log(isPalindrome("Star Rats!"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));