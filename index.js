//add inquirer
const { init } = require('cjs-module-lexer');
const inquirer = require('inquirer');

//question arrays
const mgrQuestions = [
    {
        name: "manager_name",
        type: "input",
        message: "Please enter the team manager's name:"
    },
    {
        name: "manager_id",
        type: "input",
        message: "Please enter the team manager's ID:"
    },
    {
        name: "manager_email",
        type: "input",
        message: "Please enter the team manager's email:"
    },
    {
        name: "manager_office",
        type: "input",
        message: "Please enter the team manager's office number:"
    }
];


//initialization function
function init() {
    //start inquirer, get manager data, load menu
    inquirer.prompt(
        mgrQuestions
    ).then((answers)=>{
        answerBuilder(0,answers);
        mainMenu();
    });

}

init();