var axios = require('axios')

var newTodo = {
    title: "practice axios todo",
    description: "It's only a practice"
}

axios.get(`http://api.vschool.io/spencer/todo/`).then(function(response){
    console.log(response.data)
}).catch(function(err){
    console.log(err)
})
   
