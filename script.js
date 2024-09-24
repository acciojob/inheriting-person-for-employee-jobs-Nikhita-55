// complete this js code
// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet with name and age
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
    }
}

// Define the Employee class that extends Person
class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent class constructor to set name and age
        super(name, age);
        this.jobTitle = jobTitle;
    }

    // Method to greet with name, age, and job title
    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

// Example usage:
const person = new Person('John Doe', 30);
person.greet();  // Output: Hello, my name is John Doe, I am 30 years old.

const employee = new Employee('Jane Smith', 28, 'Software Engineer');
employee.jobGreet();  // Output: Hello, my name is Jane Smith, I am 28 years old, and my job title is Software Engineer.

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
