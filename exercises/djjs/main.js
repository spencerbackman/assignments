var box = document.getElementById("box");
box.addEventListener("mouseover", function() {
    if(event) {
        console.log(event)
        box.style.backgroundColor = "blue"
    }
})

box.addEventListener("mousedown", function(){
    if(event) {
        box.style.backgroundColor = "red"
    }
})

box.addEventListener("click", function(){
    if(event) {
        box.style.backgroundColor = "yellow"
    }
})

box.addEventListener("dblclick", function(){
    if(event) {
        box.style.backgroundColor = "green"
    }
})

box.addEventListener("wheel", function(){
    if(event) {
        box.style.backgroundColor = "orange"
    }
})


var box2 = document.getElementById("box2")
box2.addEventListener("keydown", function(){
    if(event.keyCode === 80) {
        box2.style.backgroundColor = "purple"
    } else if(event.keyCode === 66) {
        box2.style.backgroundColor = "blue"
    } else if(event.keyCode === 82) {
        box2.style.backgroundColor = "red"
    } else if(event.keyCode === 79) {
        box2.style.backgroundColor = "orange"
    } else if(event.keyCode === 71) {
        box2.style.backgroundColor = "green"
    } else if(event.keyCode === 89) {
        box2.style.backgroundColor = "yellow"
    } else if(event.keyCode === 86) {
        box2.style.backgroundColor = "violet"
    } else if(event.keyCode === 65) {
        box2.style.backgroundColor = "aqua"
    } else if(event.keyCode === 67) {
        box2.style.backgroundColor = "chocolate"
    } else if(event.keyCode === 68) {
        box2.style.backgroundColor = "deeppink"
    } else if(event.keyCode === 70) {
        box2.style.backgroundColor = "firebrick"
    } else if(event.keyCode === 72) {
        box2.style.backgroundColor = "hotpink"
    }else if(event.keyCode === 73) {
        box2.style.backgroundColor = "indigo"
    }else if(event.keyCode === 75) {
        box2.style.backgroundColor = "khaki"
    } else if(event.keyCode === 76) {
        box2.style.backgroundColor = "lavender"
    } else if(event.keyCode === 77) {
        box2.style.backgroundColor = "magenta"
    } else if(event.keyCode === 78) {
        box2.style.backgroundColor = "navy"
    } else if(event.keyCode === 83) {
        box2.style.backgroundColor = "salmon"
    } else if(event.keyCode === 84) {
        box2.style.backgroundColor = "teal"
    } else if(event.keyCode === 87) {
        box2.style.backgroundColor = "whitesmoke"
    }
})
