const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const renderHTML = require('./src/generateHTML.js');
const fs = require('fs');

const teamMEMBERS = [];
const idARRAY = [];

// Initialize the console and call the manager prompt
function init(){
    console.log("Welcome to the team generator!");
    console.log("Please build your team ♦️");
    ManagerPrompt();
}

init ();

// the first prompt will ask the Mnager questions and save the information of manager
function ManagerPrompt(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'manNAME',
                message: "What is the team manager's name?",
                validate: (answer) => { if(answer !== '' && answer.match(/[a-zA-Z]/i)){return true;}
                                        return "Please enter at least one letter character.";},
            },
            {
                type: 'input',
                name: 'manID',
                message: "What is the team manager's id?",
                validate: (answer) => { if(answer.match(/[1-9]/i)){
                                            if(idARRAY.includes(answer)){return "This ID is already in use, please chose a different one.";} 
                                            else {return true;}} return "Please enter a number greater than zero";},
            },
            {
                type: 'input',
                name: 'manEMAIL',
                message: "What is the team manager's email?",
                validate: (answer) => { if(answer !== '' && answer.includes("@") && answer.includes(".")){return true;}
                                        return "Please enter at valid email.";},
            },
            {
                type: 'input',
                name: 'manOFFICENUM',
                message: "What is the team manager's office number?",
                validate: (answer) => { if(answer.match(/[1-9]/i)){return true;} 
                                        return "Please enter a number greater than zero";},
            }
        ])
        .then((response) => {
            // manNAME , manID , manEMAIL ,manOFFICENUM
            const manager = new Manager(response.manNAME, response.manID, response.manEMAIL, response.manOFFICENUM);
            teamMEMBERS.push(manager);
            idARRAY.push(response.manID);
            continueYESno();
        })
}
// function continueYESno will display the prompt to ask the user 
// to chose another card to create or end the info collection
// engineer, inteern and manager prompt  will call this function to check
// Engineer , Intern , i dont want to add any more team members
function continueYESno(){
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
            else if(response.continue === "Intern"){InternPrompt();}
            // if response.continue === "I  don't want to add any more team members."
            // display results
            else{
                console.log("this is inside teams members");
                console.log(teamMEMBERS);

                fs.writeFile('./dist/team.html', renderHTML(teamMEMBERS),
                (error) => error ? console.error(error): console.log("Generating team cards...."))
            }
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
                message: "What is your engineer's name?",
                validate: (answer) => { if(answer !== '' && answer.match(/[a-zA-Z]/i)){return true;}
                                        return "Please enter at least one letter character.";},
            },
            {
                type: 'input',
                name: 'engID',
                message: "What is your engineer's id?",
                validate: (answer) => { if(answer.match(/[1-9]/i)){
                                            if(idARRAY.includes(answer)){return "This ID is already in use, please chose a different one.";} 
                                            else {return true;}} return "Please enter a number greater than zero";},
            },
            {
                type: 'input',
                name: 'engEMAIL',
                message: "What is your engineer's email?",
                validate: (answer) => { if(answer !== '' && answer.includes("@") && answer.includes(".")){return true;}
                                        return "Please enter at valid email.";},
            },
            {
                type: 'input',
                name: 'engGItHUB',
                message: "What is your engineer's GitHub username?",
                validate: (answer) => { if(answer !== '' && answer.match(/[a-zA-Z]/i)){return true;}
                                        return "Please enter at least one letter character.";},
            }
        ])
        .then((response) => {
            // engNAME , engID , engEMAIL ,engGItHUB
            const engineer = new Engineer(response.engNAME, response.engID, response.engEMAIL, response.engGItHUB);
            teamMEMBERS.push(engineer);
            idARRAY.push(response.engID);
            continueYESno();
        })
}

// Intern prompt will be displayed when user selects to enter Intern info
// // intern = name, id, email, school,
function InternPrompt(){
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'interNAME',
                message: "What is your intern's name?",
                validate: (answer) => { if(answer !== '' && answer.match(/[a-zA-Z]/i)){return true;}
                                        return "Please enter at least one letter character.";},
            },
            {
                type: 'input',
                name: 'interID',
                message: "What is your intern's id?",
                validate: (answer) => { if(answer.match(/[1-9]/i)){
                                            if(idARRAY.includes(answer)){return "This ID is already in use, please chose a different one.";} 
                                            else {return true;}} return "Please enter a number greater than zero";},
            },
            {
                type: 'input',
                name: 'interEMAIL',
                message: "What is your intern's email?",
                validate: (answer) => { if(answer !== '' && answer.includes("@") && answer.includes(".")){return true;}
                                        return "Please enter at valid email.";},
            },
            {
                type: 'input',
                name: 'interSch',
                message: "What is your intern's school?",
                validate: (answer) => { if(answer !== '' && answer.match(/[a-zA-Z]/i)){return true;}
                                        return "Please enter at least one letter character.";},
            }
        ])
        .then((response) => {
            // interNAME , interID , interEMAIL ,interSch
            const intern = new Intern(response.interNAME, response.interID, response.interEMAIL, response.interSch);
            teamMEMBERS.push(intern);
            idARRAY.push(response.interID);
            continueYESno()
        })
}
/// node index.js
// Welcome to the team generator!
// use `npm run reset` to reset the dist/folder

//Please build your team somesymbolgoeshere
// dist / style.css / team.html