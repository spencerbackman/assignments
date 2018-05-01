function goomba(e){
    e.preventDefault();
    var nums = document.goomba.input.value;
    var a = parseInt(nums);
    var sum = a * 5;
    document.getElementById("total").innerHTML = sum + " coins";
    document.getElementById("total5").innerHTML += sum ;
}


document.goomba.addEventListener("submit", goomba)

function bobomb(e){
    e.preventDefault();
    var nums = document.bobomb.input.value;
    var a = parseInt(nums);
    var sum = a * 7;
    document.getElementById("total2").innerHTML = sum + " coins";
    document.getElementById("total5").innerHTML +=  sum;
}

document.bobomb.addEventListener("submit", bobomb)

function cheepCheep(e){
    e.preventDefault();
    var nums = document.cheepCheep.input.value;
    var a = parseInt(nums);
    var sum = a * 11;
   document.getElementById("total3").innerHTML = sum + " coins";
   document.getElementById("total5").innerHTML += sum;
}
document.cheepCheep.addEventListener("submit", cheepCheep)



document.getElementById('total4').addEventListener("click", function(){
 
})