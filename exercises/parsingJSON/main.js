var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function parsePokemon() {
    document.getElementById("name").innerHTML = pokemon.name
}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();