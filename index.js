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
            EngineerPrompt();
        } else {
            console.log(" answer is no to continue on first prompt");
        }})
}
init ();

// function continueYESno will display the prompt to ask the user 
// to chose another card to create or end the info collection
// engineer, inteern and manager prompt  will call this function to check
// Engineer , Intern , i dont want to add any more team members
function continueYESno (){
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'continue',
                message: "Which type of team member would you like to add?",
                choices: ["Engineer","Intern","I  don't want to add any more team members."]
            }
        ])
        .then((response) => {
            if(response.continue === "Engineer"){EngineerPrompt();}
            if(response.continue === "Intern"){}
            // if response.continue === "I  don't want to add any more team members."
            // display results

        })

}
// Engineer prompt will be displayed when user selects to enter engineer info
// engineer = name, id, email, github
function EngineerPrompt(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engNAME',
                message: "What is your engineer's name?"
            },
            {
                type: 'input',
                name: 'engID',
                message: "What is your engineer's id?"
            },
            {
                type: 'input',
                name: 'engEMAIL',
                message: "What is your engineer's email?"
            },
            {
                type: 'input',
                name: 'engGItHUB',
                message: "What is your engineer's GitHub username?"
            }
        ])
        .then((response) => {
            // engNAME , engID , engEMAIL ,engGItHUB
            
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