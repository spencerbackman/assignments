var array = [1,2,3];

function stringConcat(arr){
  return arr.reduce(function(final, num){
        return final += num;
    },0)
}

console.log(stringConcat(array))