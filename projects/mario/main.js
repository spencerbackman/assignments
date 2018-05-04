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

document.total4.addEventListener("submit", function(e){
    e.preventDefault();
var ghowmany = document.goomba.value
var bhowmany = document.bobomb.value
var chowmany = document.cheepCheep.value

document.getElementById("total6").innerHTML = `${(ghowmany * 5) + (bhowmany * 7) + (chowmany * 11)}` 
})



