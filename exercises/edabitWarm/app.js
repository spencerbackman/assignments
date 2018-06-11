function keysAndValues(obj) {
    arr = [];
    arr2 = [];
	for(let key in obj) {
        arr.push(key);
        arr2.push(obj[key])
    }
    return [arr, arr2]
}

console.log(keysAndValues({a: 1, b: 2, c: 3}))