// create the layout out of the html page

// create the Manager card
function renderManager(teamMember){}

// create the Engineer card
function renderEngineer(teamMember){}

// create the Intern card
function renderIntern(teamMember){}

//create complete HTML page
function generateHTML(data){
    console.log("data in generatehtml ");
    console.log(data);
    console.log("lenght of data " + data.length);
    
    for(var i=0; i < data.length; i++){
        if(data[i].getRole() === "Manager"){
        console.log("here is in getRole");
        console.log(data[i].getRole());
        console.log("here is in getName");
        console.log(data[i].getName());
        console.log("here is in getId");
        console.log(data[i].getId());
        console.log("here is in getEmail");
        console.log(data[i].getEmail());
        console.log("ends of first data");    
        }
    }

    return `yes i work, i am returning from generate html`;
}

module.exports = generateHTML;