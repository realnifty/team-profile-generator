const fs = require('fs');
const inquirer = require('inquirer');

const genHTML = require('./src/genHTML')

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employeeArr = [];

const mngrPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter your team manager's name.`
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter your team manager's ID.`
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter your team manager's email address.`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Enter your team manager's office number.`
        }
    ])
    .then(inputData => {
        const { name, id, email, officeNumber } = inputData;
        const manager = new Manager(name, id, email, officeNumber);
        employeeArr.push(manager);
    })
};

const employeePrompt = () => {
    console.log('Add new employees.');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose a role for your employee.',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is this employee's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is this employee's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is this employee's email address?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is this employee's GitHub username?`,
        },
        {
            when: (inputData) => inputData.role === 'Intern',
            type: 'input',
            name: 'school',
            message: 'Where did this employee go to school?',
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to an additional employee?',
            default: false
        }
    ])
};

employeePrompt();