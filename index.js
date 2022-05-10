const fs = require('fs');
const inquirer = require('inquirer');

const genHTML = require('./src/genHTML')

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const mngrPrompt = () => {
    return inquirer.prompt ([
        {
            type:'input',
            name: 'name',
            message: `Enter your team manager's name.`
        },
        {
            type:'input',
            name: 'id',
            message: `Enter your team manager's ID.`
        },
        {
            type:'input',
            name: 'email',
            message: `Enter your team manager's email address.`
        },
        {
            type:'input',
            name: 'officeNumber',
            message: `Enter your team manager's office number.`
        }
    ])
};