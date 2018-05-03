function goomba(e){
    e.preventDefault();
    var nums = document.goomba.input.value;
    var a = parseInt(nums);
    var sum = a * 5;
    document.getElementById("total").innerHTML = sum + " coins";
    document.getElementById("total5").innerHTML = sum ;
}


document.goomba.addEventListener("submit", goomba)

function bobomb(e){
    e.preventDefault();
    var nums = document.bobomb.input.value;
    var a = parseInt(nums);
    var sum = a * 7;
    document.getElementById("total2").innerHTML = sum + " coins";
    document.getElementById("total6").innerHTML += sum;
}

document.bobomb.addEventListener("submit", bobomb)

function cheepCheep(e){
    e.preventDefault();
    var nums = document.cheepCheep.input.value;
    var a = parseInt(nums);
    var sum = a * 11;
   document.getElementById("total3").innerHTML = sum + " coins";
   document.getElementById("total7").innerHTML += sum;
}
document.cheepCheep.addEventListener("submit", cheepCheep)

function add(num1, num2, num3) {
    var num = document.getElementById('total5');
    var num4 = document.getElementById('total6');
    var num5 = document.getElementById('total6');
    alert(num + num4 + num5);
}




document.getElementById('total4').addEventListener("click", add)