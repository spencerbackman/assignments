// const mult = () => {
//     var result = '\n';
//     for(var i = 1; i <=10; i++) {
//         for(var j = 1; j <= 10; j++) {
//             result += (i * j) + " ";
//         }
//         result += '\n'
//     }
//     return result
// }

const mult = () => {
    var result = [];
    for(var i = 1; i <= 10; i++) {
        result[i] = [];
        for(var j = 1; j <= 10; j++) {
            result[i].push((i * j));
        }
       result.push('\n')
    }
    return result
}


console.log(mult());