// geting external packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
//geting internal packages
const api = require('./utils/api.js')
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Tell me quickly about yourself!",
    name: "aboutme",
    default: "eg: I like soccer",
    validate: function (answer) {
      if (answer.length <= 1) {
        return console.log("You gotta tell me something, eh!");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your GitHub username? (No @ needed)",
    name: "username",
    default: "NGGKI",
    validate: function (answer) {
      if (answer.length <= 1) {
        return console.log("How am I going to pull right person if its invalid :(");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the name of your GitHub repo?",
    name: "repo",
    default: "readme-generator",
    validate: function (answer) {
      if (answer.length <= 1) {
        return console.log("A valid GitHub repo is required for a badge.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Project Title",
    validate: function (answer) {
      if (answer.length <= 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Write a short description of your project.",
    name: "description",
    default: "Project Description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: 'input',
    message: "If applicable, describe the steps required to install your project for the Installation section.",
    name: 'installation'
  },
  {
    type: 'input',
    message: "Provide instructions and examples of your project in use for the Usage section.",
    name: 'usage'
  },
  {
    type: 'input',
    message: "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: 'contributing'
  },
  {
    type: 'input',
    message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: 'tests'
  },
  {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
  }
];



// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }

    console.log("Success! Your README.md file has been generated")
  });
}

// function to initialize program
async function init() {
  const userResponses = await inquirer.prompt(questions)
  console.log("Your responses: ", userResponses);
  console.log("Thank you for your responses! Generating your README next...");
  const userInfo = await api.getUser(userResponses)
  /*  console.log("Your GitHub user info: ", userInfo); */
  writeToFile("README.md", generateMarkdown(userResponses, userInfo))
}

// function call to initialize program
init()