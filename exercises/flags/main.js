
var count = 20;
var countTimer = function() {
    count--;
    demo.textContent = ("00:00:" + count);
    if(count <= 0) {
        head.textContent =("Its the end of the world!");
        clearInterval(intervalId)
    }
}

var intervalId = setInterval(countTimer, 1000);




var head = document.getElementById('header');

var demo = document.getElementById('demo');



