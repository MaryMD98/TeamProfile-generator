const employee = require("./Employee");

// intern = name, id, email, school,
// employee = name, id, email
class Intern extends employee {
    constructor(name, id, email, school){
        super(name, id, email);

        if (!school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;