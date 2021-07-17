//add inquirer
const inquirer = require('inquirer');

//add employee classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//employee array
let employees = [];


//question arrays
const mgrQuestions = [
    {
        name: "name",
        type: "input",
        message: "Please enter the team manager's name:"
    },
    {
        name: "id",
        type: "input",
        message: "Please enter the team manager's ID:"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the team manager's email:"
    },
    {
        name: "office",
        type: "input",
        message: "Please enter the team manager's office number:"
    }
];

const engrQuestions = [
    {
        name: "name",
        type: "input",
        message: "Please enter the engineer's name:"
    },
    {
        name: "id",
        type: "input",
        message: "Please enter the engineer's ID:"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the engineer's email:"
    },
    {
        name: "github",
        type: "input",
        message: "Please enter the engineer's Github username:"
    }
];

const intrQuestions = [
    {
        name: "name",
        type: "input",
        message: "Please enter the intern's name:"
    },
    {
        name: "id",
        type: "input",
        message: "Please enter the intern's ID:"
    },
    {
        name: "email",
        type: "input",
        message: "Please enter the intern's email:"
    },
    {
        name: "school",
        type: "input",
        message: "Please enter the intern's school:"
    }
];

//run this function if user chooses to add engineer
function addEngineer() {
    //start inquirer, get engineer data, add to array, and go back to menu
    inquirer.prompt(
        engrQuestions
    ).then((answers)=>{
        employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        mainMenu();
    });

}

//run this function if users chooses to add intern
function addIntern() {
    //start inquirer, get intern data, add to array, and go back to menu
    inquirer.prompt(
        intrQuestions
    ).then((answers)=>{
        employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        mainMenu();
    });

}

//display menu after adding manager
function mainMenu() {
    //prompt to add engineer, intern, or exit
    inquirer.prompt(
        [
            {
                name:"choice",
                type:"list",
                message:"Please choose an option:",
                choices:[
                    "Add an engineer to the team",
                    "Add an intern to the team",
                    "Finish building the team"
                ]
            }
        ]
    ).then((answers)=>{
        //if else to determine what user wants to do
        if (answers.choice === 'Add an engineer to the team') {
            addEngineer();
        } else if (answers.choice === 'Add an intern to the team') {
            addIntern();
        } else if(answers.choice === 'Finish building the team'){
            //buildTeam();
            console.log(employees)
        }
    })
}

//initialization function
function init() {
    //start inquirer, get manager data, load menu
    inquirer.prompt(
        mgrQuestions
    ).then((answers)=>{
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.office));
        mainMenu();
    });

}

init();