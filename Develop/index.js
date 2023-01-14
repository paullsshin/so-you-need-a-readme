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
        validate: (value) => {if (value) {return true} else {return 'Please enter a Project Title.'}}
    },
    {
        type:'input',
        name: 'Description',
        message: 'Give a brief description of what your project is',
        validate: (value) => {if (value) {return true} else {return 'Please enter a brief description of your application.'}}
    },
    // {
    //     type:'input',
    //     name: 'Table of Contents',
    //     message: 'Table of Contents',
    //     validate: (value) => {if (value) {return true} else {return 'Please enter a Project Title.'}}
    // },
    {
        type:'input',
        name: 'Installation',
        message: 'What does the user need to install for this application to function?',
        validate: (value) => {if (value) {return true} else {return 'Please provide a description of what is needed to install the application.'}}
    },
    {
        type:'input',
        name: 'Usage',
        message: 'How can the user use your application?',
        validate: (value) => {if (value) {return true} else {return 'Please provide a description of how the user can use your application.'}}
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
            validate: (value) => {if (value) {return true} else {return 'Please select an option.'}}
    },
    {
        type:'input',
        name: 'Contributing',
        message: 'Who contributed to help create the application?',
        validate: (value) => {if (value) {return true} else {return 'Please enter some kind of information.'}}
    },
    {
        type:'input',
        name: 'Tests',
        message: 'What kind of testing was done to test the functionality of the application?',
        validate: (value) => {if (value) {return true} else {return 'Please enter something that the user can work with.'}}
    },
    {
        type:'input',
        name: 'Questions',
        message: 'Provide your contact information so the user can contact you if they have any questions.',
        validate: (value) => {if (value) {return true} else {return "Please enter your contact information. I promise it's safe with me."}}
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
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
        writeToFile("README.md", generateMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();