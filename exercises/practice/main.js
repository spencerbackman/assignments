var axios = require('axios')

axios.get('http://api.vschool.io/spencer/todo/').then(function(response){
    console.log(response.data)
})
