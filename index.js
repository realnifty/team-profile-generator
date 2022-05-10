const fs = require('fs');
const inquirer = require('inquirer');

const genHTML = require('./src/genHTML')

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');