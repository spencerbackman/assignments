var phrase = 'slimy smelly solution';

function letterFreq(str) {
  var freq = {};
  var newStr = '';
  for(var i = 0; i < str.length; i++) {
      var char = str[i];
      if(freq[char]) {
          freq[char]++;
      } else {
          freq[char] = 1;
          newStr += char;
      }
  }
  freq += newStr;
  return freq;
}

console.log(letterFreq(phrase))