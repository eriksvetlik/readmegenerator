const fs = require("fs");
const inquirer = require("inquirer");

var questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "list",
    choices: ["MIT", "GPLv2", "Apache", "ISC"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];
inquirer.prompt(questions).then((response) => {
  console.log(response);

  fs.writeFile("README.md", generateREADME(response), (err) =>
    err ? console.log(err) : console.log("response written to file.")
  );
});

var generateREADME = (data) => {
  return `
  # ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)
  # Description
  ${data.description}
  # Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  ${data.license}
  # Contribution
  ${data.contribution}
  # Test
  ${data.test};
  # Questions
  - [Github](https://github.com/${data.username})
  - [Email](mailto:${data.email})
  `;
};
