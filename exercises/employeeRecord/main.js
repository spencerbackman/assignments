var employees = ["Spencer", "student", -100, "fulltime"];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printForm = function() {
        return `Name: ${this.name}, ${this.jobTitle}, Salary: $${this.salary}/per hour, Status: ${this.status}`
    }
}

console.log(Employee(employees).printForm);