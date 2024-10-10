import Employee from "./Employee";

class Analyst extends Employee {
    certifications: String[];

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        title: string,
        salary: number,
        certifications: String[]
    ) {
        super(firstName, lastName, age, title, salary);

        this.certifications = certifications;
    }
}

export default Analyst;