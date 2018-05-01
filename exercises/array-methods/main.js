var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 
var poppedItem = vegetables.pop();
console.log(poppedItem);
var first = fruit.shift();
console.log(first)
console.log(fruit.indexOf("orange"))
var num = fruit.push(1);
console.log(fruit);
var length = vegetables.length;
console.log(length);
var nums = vegetables.push(3);
console.log(vegetables);
var food = fruit.concat(vegetables);
console.log(food);
var removed = food.splice(4,2);
console.log(food)
var reverse = food.reverse();
console.log(reverse);
var str = "";
str += food;
console.log(str)