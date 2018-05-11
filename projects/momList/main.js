var todoUrl = "https://api.vschool.io/spencer/todo/"
var display = document.getElementById('todos');

axios.get(todoUrl).then(function(response){
    displayData(response.data)
})


document.addTodo.addEventListener('submit', function(e){
    e.preventDefault();
    var newTodo = {
        newItem: document.addTodo.item.value
    }
    axios.post(todoUrl, newTodo).then(responce => displayData(response.data))
    
})


function displayData(arr) {
    if(arr.length) {
        arr.map(function(todo){
            var title = document.createElement('p');
            title.textContent = todo.title;

            display.appendChild(title)
        })
    }
}
