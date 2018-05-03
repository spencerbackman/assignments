var chai = require('chai');
var assert = chai.assert;
var addWord = require('./main.js').addWord;
var lookItUp = require('./main.js').lookItUp;

describe("Create a dictionary that has words and their definitions", function(){
    it("Should add a word and a definition for that word", function(){
        assert.equal(addWord('cat', 'a animal'),  'a animal');
    })
     it("Should return definition of word we give", function(){
        assert.equal(lookItUp('cat'), 'a animal')
    }) 
    it("Should not allow plurals of the same word", function(){
        assert.equal(addWord('cats', 'a similar animal'), 
    addWord('cat', 'a similar animal'))
    })
})

