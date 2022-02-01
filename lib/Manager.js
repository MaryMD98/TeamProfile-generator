const employee = require("./Employee");

// manager = name, id, email, officenumber
// employee = name, id, email
class Manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

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