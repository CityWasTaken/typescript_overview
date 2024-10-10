class Employee { 
    firstName: string;
    lastName: string;
    age: number;
    title: string;
    salary: number;

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        title: string,
        salary: number,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.title = title;
        this.salary = salary;
    }

    printFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    updateSalary(newSalary: number) {
        this.salary = newSalary;
    }

    getSalary() {
        return this.salary;
    }
}

export default Employee;