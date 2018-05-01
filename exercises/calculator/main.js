var math = document.getElementById('add')
math.addEventListener("submit", function(){
   
    var num1 = document.add.add1.value;
    var num2 = document.add.add2.value;
    var num = number(num1);
    var num3 = number(num2);
    var sum = num + num3;
    alert(sum)
});

