const isEqual = str => {
  let xCount = 0;
  let oCount = 0;
  for(var i = 0; i < str.length; i++) {
    var char = str[i];
    console.log(char)
    if(char === 'o' || char === 'O') {
      oCount++;

    } else if(char === "x" || char === 'X') {
      xCount++;
    }
  }
  if(oCount !== xCount) {
    return false;
  } else {
    return true;
  }
}

console.log(isEqual('ooxx'))
