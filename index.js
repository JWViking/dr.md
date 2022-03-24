// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = 
    [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project. (Required)',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter project usage information.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter test instructions.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license type.',
        choices: ['MIT', 'Apache', 'BSD', 'Unlicense', 'N/A']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your gitHub username. (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('You need to enter a gitHub username!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ('Please enter your email address.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
const writeMarkdown = (newREADME,answerArr) => {
    fs.writeFile(`${newREADME}.md`, answerArr, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README.md was written successfully!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeMarkdown(answers.title,generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
