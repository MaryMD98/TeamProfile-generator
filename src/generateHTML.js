// create the layout out of the html page
let cards = "";
// create the Manager card
// .getRole(), .getName(), .getId(), .getEmail(), .getOfficenum(), 
function renderManager(teamMember){
    
    return ` this is in  manager ${teamMember.getName()} `;
}

// create the Engineer card
// .getRole(), .getName(), .getId(), .getEmail(), .getGithub(), 
function renderEngineer(teamMember){
    return ` this is in engineer ${teamMember.getEmail()}`;
}

// create the Intern card
// .getRole(), .getName(), .getId(), .getEmail(), .getSchool() 
function renderIntern(teamMember){
    return ` this is in intern ${teamMember.getSchool()}`;
}

//create complete HTML page
function generateHTML(data){
    // data[i].getRole(), data[i].getName(), data[i].getId(), data[i].getEmail() 
    //   getOfficenum(), getGithub(), getSchool()  
    for(let i=0; i < data.length; i++){
        if(data[i].getRole() === "Manager"){ 
            cards = cards.concat(renderManager(data[i]));  
        } 
        if(data[i].getRole() === "Engineer"){ 
            cards = cards.concat(renderEngineer(data[i]));   
        } 
        if(data[i].getRole() === "Intern"){ 
            cards = cards.concat(renderIntern(data[i]));   
        } 
    }
    console.log(cards);
    return `yes i work, here is what i gathered ${cards} i am returning from generate html`;
}

module.exports = generateHTML;