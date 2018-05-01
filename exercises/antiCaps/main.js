

function antiCaps(str) {
    var string = "";
    for(var i = 0; i < str.length; i++) {
      if(letters[i] === letters[i].toUpperCase()) {
          string += letters[i].toLowerCase();
      } else {
          string += letters[i].toUpperCase();
      }
    }
    return string;

}

console.log(antiCaps("HeLlO HOW are YOu?"))