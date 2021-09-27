const { ADDRGETNETWORKPARAMS } = require('dns');
const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const newTeam = [];

function employee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Employee name Required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employees ID number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Employee Id Required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employees Email Address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Employee Email address Required!');
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'select a role for your employee',
            choices: ['Manager', 'Engineer', 'Employee']
        }
    ])
    .then(answers => {
        if (answers.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Enter the Managers office number',
                    validate: numberInput => {
                        if (numberInput) {
                            return true;
                        } else {
                            console.log('Office Number is Required!');
                        }
                    }
                }
            ])
            .then(response => {
                const newManager = new Manager(answers.name, answers.email, answers.id, answers.role, response.officeNumber)
                newTeam.push(newManager);
                addNew();
            })
        } else if (answers.role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'Enter the Engineers Github',
                    validate: gitHubInput => {
                        if (gitHubInput) {
                            return true;
                        } else {
                            console.log('Github information Required');
                        }
                    }
                }
            ])
            .then(response => {
                const newEngineer = new Engineer(answers.name, answers.email, answers.id, answers.role, response.gitHub)
                newTeam.push(newEngineer);
                addNew();
            })
        } else if (answers.role === 'Employee') {
            const newEmployee = new Employee(answers.name, answers.email, answers.id, answers.role)
            newTeam.push(newEmployee);
            addNew();
        }

        function addNew() {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'addNew',
                    message: 'Would you like to add another Employee?'
                }
            ])
            .then(response => {
                if (response.addNew === true) {
                    employee(newEmployee);
                } else {
                    // formHtml
                }
            })
        }
    })
}

employee();