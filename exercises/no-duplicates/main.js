function noDuplicates(string) {
   var duplicates = '';
   var originals = '';
   for(var i = 0; i < string.length; i++) {
       var char = string[i];
       if(originals.indexOf(char) === -1) {
           originals += char;
       } else {
           duplicates += char;
       }
   }
   console.log(duplicates);
   console.log(originals);
}

noDuplicates("bookkeeper larry");