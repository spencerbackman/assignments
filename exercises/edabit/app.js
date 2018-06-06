function uniqueSort(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(!newArr.includes(arr[i])){
			newArr.push(arr[i]);
		} 
	}
	return newArr.sort(function(a,b){return a-b});
}


function adjacentElementsProduct(inputArray) {
    let total = -500;
    for(let i = 0; i < inputArray.length; i++) {
        var currentChar = inputArray[i];
        var nextChar = inputArray[i+1];
        if((currentChar * nextChar) > total) {
            total = currentChar * nextChar;
        }
    }
    return total;
}


