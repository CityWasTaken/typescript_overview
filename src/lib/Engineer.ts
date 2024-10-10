import Employee from "./Employee";


class Engineer extends Employee {
    programmingLanguages: String[];

    constructor(
        firstName: string,
        lastName: string,
        age: number,
        title: string,
        salary: number,
        programmingLanguages: String[]
    ) {
        super(firstName, lastName, age, title, salary);

        this.programmingLanguages = programmingLanguages;
    }
}

export default Engineer;