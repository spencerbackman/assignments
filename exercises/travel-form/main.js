var sub = document.getElementById('sub')
sub.addEventListener('submit', function(){
    var fName = document.travel.firstName.value;
    var lName = document.travel.lastName.value;
    var age = document.travel.age.value;
    var gender = document.travel.male.value;
    var location = document.travel.destination.value;
    var issues = document.travel.issues.value;

    console.log(fName + lName + age + gender + location + issues)
})