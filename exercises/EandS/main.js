const every = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i])) {
            return false
        }
    }
    return true;
}


const some = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return true;
        }
    }
    return false;
}
const myArr = ["hello", 1, "3"]
console.log(some(myArr, (num) => {
    return typeof num === 'number'
}))