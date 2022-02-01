// create the layout out of the html page

// create the Manager card
function renderManager(teamMember){
    return ` this is in manager `;
}

// create the Engineer card
function renderEngineer(teamMember){
    return ` this is in engineer `;
}

// create the Intern card
function renderIntern(teamMember){
    return ` this is in intern `;
}

//create complete HTML page
function generateHTML(data){
    // data[i].getRole(), data[i].getName(), data[i].getId(), data[i].getEmail() 
    //     
    for(var i=0; i < data.length; i++){
        if(data[i].getRole() === "Manager"){    
        }
    }

    return `yes i work, i am returning from generate html`;
}

module.exports = generateHTML;