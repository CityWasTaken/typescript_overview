import 'console.table'

import Employee from "./Employee.js";
import EngineerProps from '../interfaces/EngineerProps.js';


class Engineer extends Employee implements EngineerProps {
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

    printProgrammingLanguages(): void {
        console.table(this.programmingLanguages);
    }

    getProgrammingLanguages(): String[] {
        return this.programmingLanguages
    }
}

export default Engineer;