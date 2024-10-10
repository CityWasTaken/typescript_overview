import Employee from "./Employee.js";
class Analyst extends Employee {
    certifications;
    constructor(firstName, lastName, age, title, salary, certifications) {
        super(firstName, lastName, age, title, salary);
        this.certifications = certifications;
    }
}
export default Analyst;
