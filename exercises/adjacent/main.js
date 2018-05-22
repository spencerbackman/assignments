const combined = arr => {
    let total = 0;
    for(var i = 0; i < arr.length - 2; i++) {
        let combine = arr[i].length + arr[i + 1].length + arr[i + 2].length;
        if(combine > total) {
            total = combine;
            var newArr = [arr[i], arr[i + 1], arr[i + 2]];
        }
    }
    return newArr;
}


console.log(combined(['this', 'is', 'cool', 'arrays']))