// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'Title',
        message: 'What would you like to name your project?',
    },
    {
        type:'input',
        name: 'Description',
        message: 'Give a brief description of what your project is',
    },
    {
        type:'input',
        name: 'Table of Contents',
        message: 'Table of Contents',
    },
    {
        type:'input',
        name: 'Installation',
        message: 'What does the user need to install for this application to function?',
    },
    {
        type:'input',
        name: 'Usage',
        message: 'How can the user use your application?',
    },
    {
        type:'list',
        name: 'License',
        message: 'Which license will you be using?',
        choices: ['None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
    },
    {
        type:'input',
        name: 'Contributing',
        message: 'If you would like people to contribute to this application then please describe how the user can do so.',
    },
    {
        type:'input',
        name: 'Tests',
        message: 'What kind of testing was done to test the functionality of the application?',
    },
    {
        type:'input',
        name: 'Github',
        message: 'Provide your Github so users can contact you if needed.',
    },
    {
        type:'input',
        name: 'Email',
        message: 'Please provide your email as a second method of contact.',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("You did it! Noice!");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();