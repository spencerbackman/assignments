function goomba(e){
    e.preventDefault();
    var nums = document.goomba.input.value;
    var a = parseInt(nums);
    var sum = a * 5;
    document.getElementById("total").innerHTML = sum + " coins";
}


document.goomba.addEventListener("submit", goomba)

function bobomb(e){
    e.preventDefault();
    var nums = document.bobomb.input.value;
    var a = parseInt(nums);
    var sum = a * 7;
    document.getElementById("total2").innerHTML = sum + " coins";

}

document.bobomb.addEventListener("submit", bobomb)

function cheepCheep(e){
    e.preventDefault();
    var nums = document.cheepCheep.input.value;
    var a = parseInt(nums);
    var sum = a * 11;
   document.getElementById("total3").innerHTML = sum + " coins";

}
document.cheepCheep.addEventListener("submit", cheepCheep)



var total4 = document.getElementById('total4')

total4.addEventListener("click", function(e){
    e.preventDefault();
var g = document.goomba.input.value
var b = document.bobomb.input.value
var c = document.cheepCheep.input.value
var sum = (g * 5) + (b * 7) + (c * 11)
document.getElementById("total6").innerHTML = `Your total for today is ${sum} coins!`;
})



