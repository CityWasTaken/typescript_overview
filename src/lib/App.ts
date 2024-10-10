import inquirer from "inquirer";

class App {
    static async showMainMenu() {
        const menuChoiceObj = await inquirer.prompt({
            message: 'Please choose an option',
            name: 'menuChoices',
            type: 'list',
            choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Exit']
        });

        switch(menuChoiceObj.menuChoices) {
            case 'Show Employees':
                await this.showEmployees();
                this.showMainMenu
                break;
            case 'Add Employee':
                await this.showAddEmployeeInterface();
                break;
            case 'Update Employee Salary':
                await this.showUpdateSalaryInterface();
                break;
            default:
                console.log('--------\nThanks for using the Employee tracker!\n---------');
                
        }
    }

    
    static showEmployees() {
        console.log('Show Employees');
        
    }


    static showAddEmployeeInterface() {
        console.log('Show employee interface');
        
    }

    static showUpdateSalaryInterface() {
        console.log('Show the update employee interface');
        
    }

}

export default App;