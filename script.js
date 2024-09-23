// complete this js code
function Person(name, age) {
constructor(name,age){
	this.name=name;
	this.age=age;
}
	 getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Employee class extends Person
class Employee extends Person {
    constructor(name, age, jobTitle, salary) {
        super(name, age); // Call the parent class constructor
        this.jobTitle = jobTitle;
        this.salary = salary;
    }

    // Method to get the employee's details (extends getDetails from Person)
    getDetails() {
        return `${super.getDetails()}, Job Title: ${this.jobTitle}, Salary: ${this.salary}`;
    }
}
	
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
