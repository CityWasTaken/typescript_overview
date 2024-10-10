import Employee from "./Employee.js";
class Engineer extends Employee {
    programmingLanguages;
    constructor(firstName, lastName, age, title, salary, programmingLanguages) {
        super(firstName, lastName, age, title, salary);
        this.programmingLanguages = programmingLanguages;
    }
}
export default Engineer;
