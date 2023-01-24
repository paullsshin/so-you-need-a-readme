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
        name: 'Repo',
        message: 'What is the name of your repository?',
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
            'Apache_2.0',
            'GNU_General_Public_License_v3.0',
            'MIT',
            'BSD_2-Clause_"Simplified"_License',
            'BSD_3-Clause_License',
            'Boost_Software_License 1.0',
            'Creative_Commons_Zero_v1.0_Universal',
            'Eclipse_Public_License_2.0',
            'GNU_Affero_General_Public_License_v3.0',
            'GNU_General_Public_License_v2.0',
            'GNU_Lesser_General_Public_License v2.1',
            'Mozilla_Public_License_2.0',
            'The_Unlicense'],
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
        name: 'Technology',
        message: 'What technology was used to create this application?',
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
        writeToFile("./dist/README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();