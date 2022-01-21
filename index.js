const inquirer = require("inquirer");
const fs = require("fs");

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
    choices: ["MIT", "MIT2"],
    name: "license",
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
  # Description
  ${data.description}
  # Table of Contents
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
  `;
};
