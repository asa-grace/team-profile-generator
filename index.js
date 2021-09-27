const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');

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
}

employee();