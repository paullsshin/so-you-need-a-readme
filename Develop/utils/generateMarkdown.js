const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # __${data.Title}__
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]

## Description

${data.Description}

## Table of Contents

- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
The following will need to be installed to run the application ${data.Installation}

## Usage

To use this application you will need to, ${data.Usage}.


## License ${renderLicenseBadge(data.license)}

This product is licensed by ${data.License}.
${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

${data.Badges}


## How to Contribute

If you would like to contribute then please follow these instructions ${data.Contributing}.

## Tests

The functionality of the application was tested with ${data.Tests}

## Questions

If you have any questions then please contact me at 
* Github: http://github.com/${data.Github}
* Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
