function reverseStr(str) {
    var reverseStr = "";
    for(var i = str.length-1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseStr("whats good"));




function isNum(str) {
    var nums = ["1","2","3","4","5","6","7","8","9","0"]
    if(nums.indexOf(str) === -1) {
        return false;
    } else {
        return true;
    }
}

console.log(isNum("3"));




function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(10));




var ave = [5,-10,10,20]

function averageArr(arr) {
    var average = 0;
    for(var i = 0; i < arr.length; i++){
    var num = arr[i];
    average += num;
  }
  return average/ arr.length; 
}

console.log(averageArr(ave));



function combineArrays(arr1, arr2) {
    var str = arr1.join('');
    var str1 = arr2.join('')
    var newArr = [];
    for(var i = 0; i < str.length; i++) {
        char = str[i];
        char1 = str1[i];
        newArr.push(char);
        newArr.push(char1)
    }
    return newArr;
}

var arr = ["a","b","c"];
var arr3 = [1,2,3];

console.log(combineArrays(arr,arr3))

