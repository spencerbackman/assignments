var dictionary = {};

function addWord(word, define) {
    word = word.replace(/([^aiou])s/, '');
    dictionary[word] = define;
    return dictionary[word];
}

function lookItUp(word) {
    return dictionary[word]
}

addWord('cat', 'a animal')
console.log(dictionary)

module.exports = {
addWord,
lookItUp
}