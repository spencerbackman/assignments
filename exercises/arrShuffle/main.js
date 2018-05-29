// const shuffle = arr => {
//     var newArr = [];
//         while(newArr.length < arr.length) {
//         var num = Math.floor(Math.random() * arr.length);
//         if(newArr.includes(arr[num])) {
//             continue;
//         } else {
//             newArr.push(arr[num])
//         }
//     }
//     return newArr;
// }


// const shuffle = arr => {
//     const shuffledArr = [];
//     const len = arr.length;
//     for(let i = 0; i < len; i++) {
//         shuffledArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0])
//     }
//     return shuffledArr;
// }

console.log(shuffle([1,2,3,4,5]))
console.log(shuffle(['dog','cat','bird','fish']))
