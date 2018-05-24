function twoSum(arr, target) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if(arr[i] + arr[j] === target) {
              return [i, j]
            }
        }
    }
}

console.log(twoSum([1,2,3], 4))
console.log(twoSum([7,4,18,4,3,1,21], 8))