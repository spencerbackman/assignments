function checkTypes(arr) {
    return arr.every((array, i, parentArr) =>
        typeof array[i] === typeof parentArr[parentArr.length - 1][i]);
}
const m1 = [[1,2,3][1,3,4]]
console.log(checkTypes(m1))
