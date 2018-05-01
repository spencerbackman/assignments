var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];


function combine(arr) {
    var str = "";
    for(var i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    return str;
}

// console.log(combine(lyrics));
// console.log(combine(lyrics.reverse()));

function everyOther(arr) {
    var str = "";
    for(var i = 0; i < arr.length; i += 2) {
        str += arr[i] + " ";
    } 
    return str;
}
// console.log(everyOther(lyrics));

function everyOtherReverse(arr) {
    var array = [];
    for(var i = 0; i < arr.length; i +=2) {
        array.push(arr[i + 1], arr[i]);
    }
    return array.join(' ');
}
console.log(everyOtherReverse(lyrics));