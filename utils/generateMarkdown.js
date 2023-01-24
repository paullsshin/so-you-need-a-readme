// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `- [License](#license)`
  };
  return ``
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `${license}`;
}
  return ``;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # __${data.Title}__
  ${renderLicenseBadge(data.License)}
## Description

${data.Description}

## __Table of Contents__

- [Installation](#installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Testing](#Tests)
- [Technology](#Technology)
- [Questions](#Questions)

## __Installation__
The following will need to be installed to run the application ${data.Installation}. Also, feel free to visit my [repository](http://github.com/${data.Github}/${data.Repo})

## __Usage__

To use this application you will need to, ${data.Usage}.


## __License__

${renderLicenseBadge(data.License)}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## __How to Contribute__

If you would like to contribute then please follow these instructions ${data.Contributing}.

## __Testing__

The functionality of the application was tested with ${data.Tests}

## __Technology__

## __Questions__

If you have any questions then please contact me at 
* Github: http://github.com/${data.Github}
* Email: ${data.Email}

`;
}

module.exports = generateMarkdown;
