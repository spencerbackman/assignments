var display = document.getElementById('todos');

document.addTodo.addEventListener('submit' function(e){
    e.preventDefault();
    var newTodo = {
        newItem: document.addTodo.item.value;
    }
    
})


function displayData(arr) {
    if(arr.length) {
        arr.map(function(todo){
            var title = document.createElement('p');
            title.textContent = todo.title;
        })
    }
}
