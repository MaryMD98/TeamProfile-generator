const employee = require("./Employee");

// engineer = name, id, email, github
// employee = name, id, email
class Engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;