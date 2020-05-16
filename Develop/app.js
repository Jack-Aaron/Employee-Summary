const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let teamMemberName;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your team manager?',
            name: 'teamManagerName'
        }
    ]).then(function (response) {
        JSON.stringify(response);
        console.log(response.teamManagerName);
        getEmailAndID(response.teamManagerName, 'Manager');
    })

function getEmailAndID(name, type) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is ${name}'s email address?`,
                name: 'email'
            },
            {
                type: 'number',
                message: `What is ${name}'s ID number?`,
                name: 'id'
            }
        ]).then(function (response) {
            JSON.stringify(response);
            console.log(response.email);
            console.log(response.id);
            new Employee(name, type, response.email, response.id);
            promptNewMember();
        })
}

function promptNewMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add a team member?',
                name: 'addAnotherMember',
                choices: ['Yes', 'No']
            }
        ]).then(function (response) {
            if (response.addAnotherMember === 'Yes') {
                teamPrompt();
            }
        })
}

function teamPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the team member name?',
                name: 'teamMemberName'
            },
            {
                type: 'list',
                message: `Is ${teamMemberName} an Intern or an Engineer?`,
                name: 'employeeType',
                choices: ['Intern', 'Engineer']
            }
        ]).then(function (response) {
            JSON.stringify(response);
            let name = response.teamMemberName;
            console.log(name);
            console.log(response.employeeType);

            if (response.employeeType === 'Intern') {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: `What is ${name}'s School?`,
                            name: 'internSchool'
                        }
                    ]).then(function (response) {
                        JSON.stringify(response);
                        console.log(response.internSchool);
                        getEmailAndID(name);
                    })
            }
            else {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: `What is this ${name}'s Github Profile Name?`,
                            name: 'engineerGit'
                        }
                    ]).then(function (response) {
                        JSON.stringify(response);
                        console.log(response.engineerGit);
                        getEmailAndID(name);
                    })
            }
        })
}

function Employee(name, type, email, id) {
    this.name = name;
    this.type = type;
    this.email = email;
    this.id = id;
    console.log(`\n ${name} \n ${type} \n ${email} \n${id}`);
    // this.render = function () {
    // };
}

// class Employee extends Intern {
//     constructor(school) {

//         super(teamMemberName, employeeType);
//         this.school = school;
//     }
// }

// class Employee extends Engineer {
//     constructor(gitHub) {

//         super(teamMemberName, employeeType);
//         this.gitHub = gitHub;
//     }
// }


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
