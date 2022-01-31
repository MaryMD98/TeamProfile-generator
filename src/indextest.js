// const { createReadStream } = require("fs");
// const inquirer = require("inquirer");


// if(pass){
//     if (idArray.includes(answer)){
//         return "this ID is already taken. please enter a different number";
//     } else { return true;}
// } return "please enter a positive number greater than zero.";
// },
// },
// {
//     type: 'input',
//     name: 'engineerGIthub'
//     message: "what is your engineer's github username?",
//     validate: (answer) => {
//         if (answer !== ''){return true;}
//         return "please enter at least one character.";
//     },
// },
// ])
// .then((answers) => {
//     const engineer = new engineer (
// answers.engineerName,
// answers.engineerID,
// answers.engineerEmail,
// answers.engineergithub
// ),
// teamMembers.push(engineer);
// idArray.push(answers.engineerID);
// createTeam();
// });
// }


// function addIntern(){
// inquirer
// .prompt ([
//     {
//         type: 'input'


// return true;
// }
// return 'please enter at least one character.'
// },
// },
// {
// type: 'input',
//  name: "internId"
//  message: "what is your intern's id?",
//  validate: (answer) => {
//     const pass = answer.match(/^[1-9]\d*$/);
//     if(pass){
//             if (idArray.includes(answer)){
 
//  return "this ID is already taken. Please enter a different number"
// } else {
// return true;
// }
// }
// return "please enter a number greater than zero";
// },
// },
// {
// type: 'input',
// name: 'internEmail',
// message: "what is your intern's email?",
// validate: (answer)=>{
//     const pass = answer.match(/\S+@\S+\.\S+/);
//     if(pass){return true;}
//     return 'please enter a valid email address.';
//     },
// },
// {
// type:'input',
// name: 'internschool',
// message: "what is your Intern's school?",
// validate: (answer) => {
//     if (answer !== '') {return true;}
//     return "please enter a valid name."
//     }
// }