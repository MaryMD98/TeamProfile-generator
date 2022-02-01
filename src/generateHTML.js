// create the layout out of the html page
let cards = "";
// create the Manager card
// .getName(), .getId(), .getEmail(), .getOfficenum(), 
function renderManager(teamMember){
    return ` <!-- Manager card -->
<div class="card">
    <div class="manager">
        <div class="title">
            <h2 class="titlehead">${teamMember.getName()}</h2>
            <h3><span>&#x2615</span> Manager</h3>
        </div>
        <div class="content">
            <p>ID: ${teamMember.getId()}</p>
            <span>Email:</span><a href="mailto:${teamMember.getEmail()}"> ${teamMember.getEmail()}</a>
            <p>Office number: ${teamMember.getOfficenum()}</p>
        </div>
    </div>
</div>
    `;
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
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <Link rel="stylesheet" type="text/css" href="../dist/css/style.css">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main>
    <!-- cards will be created here and added in a columns -->
    <div class="row">
    ${cards}

        <!-- Engineer card -->
        <div class="card">
            <div class="engineer">
                <div class="title">
                    <h2 class="titlehead">Samira</h2>
                    <h3><span>&#128083</span> Engineer</h3>
                </div>
                <div class="content">
                    <p>ID: number</p>
                    <span>Email:</span><a href="mailto:maribel.montes4@gmail.com"> montes4@gmail.com</a>
                    <br><br>
                    <span>GitHub:<a href="https://github.com/MaryMD98" target="_blank" rel="noopener noreferrer"> MaryMD98</a></span>
                </div>
            </div>
        </div>

        <!-- Intern Card -->
        <div class="card">
            <div class="intern">
                <div class="title">
                    <h2 class="titlehead">Celina</h2>
                    <h3><span>&#127891 &#8205</span> Intern</h3>
                </div>
                <div class="content">
                    <p>ID: number</p>
                    <span>Email:</span><a href="mailto:maribel.montes4@gmail.com"> montes4@gmail.com</a>
                    <p>School: Utexas</p>
                </div>
            </div>
        </div>

    </div>
    </main>
    
</body>
</html>
`;
}

module.exports = generateHTML;