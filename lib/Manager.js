const employee = require("./Employee");

// manager = name, id, email, officenumber
// employee = name, id, email
class Manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficenum(){
        return this.officeNumber;
    }
    
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;