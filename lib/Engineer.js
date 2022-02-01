const employee = require("./Employee");

// engineer = name, id, email, github
// employee = name, id, email
class Engineer extends employee {
    constructor(name, id, email, github){
        super(name, id, email);

        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

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