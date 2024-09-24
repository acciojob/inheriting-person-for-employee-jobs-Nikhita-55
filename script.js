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
const person = new Person('Alice', 25);
person.greet(); 
const employee = new Employee('Bob', 30, 'Manager');
employee.jobGreet(); 
describe('Person and Employee Class Tests', () => {
    
    // Test the Person class greet method
    it('should correctly greet from Person class', () => {
        const person = new Person('Alice', 25);
        cy.spy(console, 'log');
        person.greet();
        expect(console.log).to.be.calledWith('Hello, my name is Alice, I am 25 years old.');
    });
    
    // Test the Employee class jobGreet method
    it('should correctly greet from Employee class', () => {
        const employee = new Employee('Bob', 30, 'Manager');
        cy.spy(console, 'log');
        employee.jobGreet();
        expect(console.log).to.be.calledWith('Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
    });

});

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
