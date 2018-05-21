const val = num => {
    var nums = num.split('.');
    if(nums.length !== 4) {
        return false;
    }
   return nums.every(n => (n > 0 && n <= 255)) 
}

console.log(val("12.16.253.1"));
