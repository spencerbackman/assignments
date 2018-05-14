var words = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

let matchWords = str => {
    return str.split(" ")
    .filter((word, i, all) => i !== all.indexOf(word)) 
    .filter((word, i , all) => i !== all.indexOf(word))
}
console.log(matchWords(words));