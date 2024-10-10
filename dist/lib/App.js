import 'console.table';
import inquirer from "inquirer";
import Analyst from "./Analyst.js";
import Engineer from "./Engineer.js";
class App {
    static started = false;
    static employees = [];
    static seedEmployees() {
        const city = new Engineer('City', 'Smith', 27, 'developer', 20000, ['JS', 'Python']);
        const mike = new Engineer('Mike', 'Smith', 27, 'developer', 30000, ['JS', 'Python', 'Java']);
        const adonis = new Analyst('Adonis', 'Smith', 27, 'vault specialist', 40000, ['BSAP', 'ODOP']);
        const magic = new Analyst('Magic', 'Smith', 27, 'vault specialist', 40000, ['BSAP', 'ODOP']);
        this.employees.push(city, mike, adonis, magic);
    }
    static async showMainMenu() {
        if (!this.started) {
            console.log('---------\nWelcome To The Employee Tracker!\n---------');
            this.started = true;
        }
        else {
            console.log('---------\n');
        }
        const menuChoiceObj = await inquirer.prompt({
            message: 'Please choose an option',
            name: 'menuChoices',
            type: 'list',
            choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Exit']
        });
        switch (menuChoiceObj.menuChoices) {
            case 'Show Employees':
                await this.showEmployees();
                this.showMainMenu();
                break;
            case 'Add Employee':
                await this.showAddEmployeeInterface();
                this.showMainMenu();
                break;
            case 'Update Employee Salary':
                await this.showUpdateSalaryInterface();
                this.showMainMenu();
                break;
            default:
                console.log('--------\nThanks for using the Employee tracker!\n---------');
        }
    }
    static showEmployees() {
        if (!this.employees.length) {
            console.log('No employees \'_\' Do it yourself!');
        }
        console.table(this.employees);
    }
    static async showAddEmployeeInterface() {
        const addAnswerObj = await inquirer.prompt([
            {
                message: 'What type of employee would you like to add?',
                name: 'employeeType',
                type: 'list',
                choices: ['Analyst', 'Engineer']
            },
            {
                message: 'Type in the employee\'s first name',
                name: 'firstName',
                type: 'input'
            },
            {
                message: 'Type in the employee\'s last name',
                name: 'lastName',
                type: 'input'
            },
            {
                message: 'Type in the employee\'s age',
                name: 'age',
                type: 'number'
            },
            {
                message: 'Type in the employee\'s title',
                name: 'title',
                type: 'input'
            },
            {
                message: 'Type in the employee\'s salary',
                name: 'salary',
                type: 'number'
            }
        ]);
        let employeeObj;
        if (addAnswerObj.employeeType === 'Analyst') {
            let keepAsking = true;
            const certifications = [];
            while (keepAsking) {
                const certOption = await inquirer.prompt({
                    message: 'Please choose an option',
                    name: 'option',
                    type: 'list',
                    choices: ['Enter a certification', 'Done']
                });
                if (certOption.option === 'Done') {
                    keepAsking = false;
                    break;
                }
                const certAnswer = await inquirer.prompt({
                    message: 'Please type in a certification',
                    name: 'certification',
                    type: 'input'
                });
                certifications.push(certAnswer.certification);
            }
            employeeObj = new Analyst(addAnswerObj.firstName, addAnswerObj.lastName, addAnswerObj.age, addAnswerObj.title, addAnswerObj.salary, certifications);
        }
        else {
            let keepAsking = true;
            const languages = [];
            while (keepAsking) {
                const langOption = await inquirer.prompt({
                    message: 'Please choose an option',
                    name: 'option',
                    type: 'list',
                    choices: ['Enter a language', 'Done']
                });
                if (langOption.option === 'Done') {
                    keepAsking = false;
                    break;
                }
                const langAnswer = await inquirer.prompt({
                    message: 'Please type in a language',
                    name: 'language',
                    type: 'input'
                });
                languages.push(langAnswer.language);
            }
            employeeObj = new Engineer(addAnswerObj.firstName, addAnswerObj.lastName, addAnswerObj.age, addAnswerObj.title, addAnswerObj.salary, languages);
        }
        this.employees.push(employeeObj);
        console.log('Eployee Successfully Added!');
    }
    static showUpdateSalaryInterface() {
        console.log('Show the update employee interface');
    }
}
export default App;
