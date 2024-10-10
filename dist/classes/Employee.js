class Employee {
    firstName;
    lastName;
    age;
    title;
    salary;
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
export default Employee;
