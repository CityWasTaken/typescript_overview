"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName, age, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.title = title;
        this.salary = salary;
    }
    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    updateSalary(newSalary) {
        this.salary = newSalary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.default = Employee;
