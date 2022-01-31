const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


function init(){
    inquirer
        .prompt([
            {
                type:'input',
                name:'testname',
                message: "did the prompt worked?"
            },
            {
                type:'input',
                name:'continue',
                message: "continue or no?"
            },
        ])
        .then((response) => {if(response.continue === "yes"){
            secondpromt();
        } else {
            console.log(" answer is no to continue on first prompt");
        }})
}
init ();

function secondpromt(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'secondpromt',
                message: "this is the secons prompt cab you see?"
            },
            {
                type: 'input',
                name: 'continuescond',
                message: "want to continue?"
            }
        ])
        .then((response) => {
            if (response.continuescond === "yes"){console.log("the answer was yes");}
            else { console.log("the answer is no, this is the second prompt");}
        })
}
/// node index.js
// Welcome to the team generator!
// use `npm run reset` to reset the dist/folder

//Please build your team somesymbolgoeshere
// What is the team manager's name?
// what is the team manager's id?
// what is the team manager's email?
// what is the team manager's office number?
// which type of team member would you like to add? (use arrow keys)
//// Engineer , Intern , i dont want to add any more team members
// What is your engineer's name?
// what is your engineer's id?
// what is your engineer's email?
// what is your engineer's GitHub username?
// which type of team member would you like to add? 
// What is your intern's name?
// what is your intern's id?
// what is your intern's email?
// What is your intern's school?
// which type of team member would you like to add?
// dist / style.css / team.html