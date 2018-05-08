var saveBtn = document.getElementById('ttt');
var display = document.getElementById('top');

var count = localStorage.count;
display.textContent = count;

saveBtn.addEventListener('click', counter);

localStorage.setItem(key, value)

function counter() {
    if(!localStorage.count) {
        localStorage.count = 0;
    }
    localStorage.count++;
    display.textContent = localStorage.count;
}