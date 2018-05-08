var todoUrl = "https://api.vschool.io/spencer/todo/";
var display = document.getElementById('todos');

var todoId = "https://api.vschool.io/spencer/todo/_id"
console.log(todoId)
axios.get(todoUrl).then(function(response){
    displayData(response.data)
});


document.addTodo.addEventListener('submit', function(e){
    e.preventDefault();
    var newTodo = {
        title: document.addTodo.title.value,
        description: document.addTodo.description.value,
        price: document.addTodo.price.value,
    }


    axios.post(todoUrl, newTodo).then(function(response){
        displayData(response.data)
    })
})




function displayData(arr) {
    if(arr.length) {
        arr.map(function(todo){
        var title = document.createElement('h1');
        title.textContent = todo.title;

        var description = document.createElement('h3');
        description.textContent = todo.description;

        var price = document.createElement('h6');
        price.textContent = todo.price;

        var button = document.createElement('button');
        button.id = todo._id;
        button.className = "but";
        button.textContent = "delete";

        var check = document.createElement('input');
        check.type = "checkbox"
        check.className = "box";
        check.textContent = "complete";
        check.id = "id";
     
        var label = document.createElement('label');
        label.htmlFor = "id";
        label.appendChild(document.createTextNode('complete'));
        
        display.appendChild(title);
        display.appendChild(description);
        display.appendChild(price);
        display.appendChild(button);
        display.appendChild(check);
        display.appendChild(label);

        var buttons = document.getElementsByClassName("but");
        for(var i = 0; i < buttons.length; i++) {
            var char = buttons[i];
        char.addEventListener('click', function(e){
            console.log(e)
            axios.delete(todoUrl + e.target.id).then(function(response){
            console.log(response.data);
            })
        })
    }

        })
    }
 
}

