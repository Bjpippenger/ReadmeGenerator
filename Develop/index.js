const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "Installation",
    message: "Provide installation instructions for your project",
  },
  {
    type: "input",
    name: "Usage",
    message: "Include information about how to run your application",
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "Provide information for future contributors to understand how they can get involved",
  },
  {
    type: "input",
    name: "Tests",
    message:
      "Information about the testing process and how to run tests for the project",
  },
  {
    type: "input",
    name: "Questions",
    message: "Point of contact for users or potential contributors",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

// Initialize app
init();
