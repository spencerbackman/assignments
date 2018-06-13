function disemvowel(string) {
    var obj = {
        str: '',
        vowels: ''
    }
    string = string.toLowerCase();
    var vowel = 'aeiou';
    for(var i = 0; i < string.length; i++) {
        if(vowel.includes(string[i])) obj.vowels += string[i]; 
            else if(string[i] === ' ') continue;
                else obj.str += string[i]; 
    }
    return obj;
}

const disemvowel = str => {
    let letters = str.toLowerCase().replace(/ /g, '').split('');
    return letters.reduce((final, char) => {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            final.vowels += char
        } else {
            final.consts += char
        }
        return final
    }, {consts: '', vowels: ''})
}

console.log(disemvowel('Pickle Rick!'))