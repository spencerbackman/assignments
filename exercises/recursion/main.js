let threes = (num, counter) => {
    if(num === 1) {return counter};
    if(num % 3 === 0) {
        num = num / 3;
        counter += 1;
        return threes(num, counter)
    } else if(num - 1 % 3 !== 0) {
        return threes(num += 1, counter);
    } else if(num + 1 % 3 !== 0) {
        return gameOfThrees(num -= 1, counter);
    }   
} 

console.log(threes(709839487, 0))
