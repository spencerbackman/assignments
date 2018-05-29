const axios = require('axios');

axios.get('https://swapi.co/api/people/1').then(response => {
    const film1 = response.data.films[0];
    return film1;
}).then(response => {
    axios.get(response).then(response => {
        return response.data.planets[0];
    }).then(response => {
        axios.get(response).then(response => {
            console.log(response)
        })
    })
}).catch(err => {
    console.log(err)
})