function randomPassword(num) {
    var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
        "y", "z", "A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "_", "-", "?" ];
     var str = "";

    for(var i = 0; i < num; i++) {
        var random = Math.floor(Math.random() * chars.length);
        str += chars[random];
    }
    return str;
}

console.log(randomPassword(32));