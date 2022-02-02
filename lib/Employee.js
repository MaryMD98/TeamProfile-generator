class Employee{
    constructor(name, id, email){

        if (!name.match(/[a-zA-Z]/i) || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (!id.match(/[1-9]/i) || !id.trim().length || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
        }

        if (!email.includes(".") || !email.trim().length || !email.includes("@")) {
            throw new Error("Expected parameter 'email' to be a non-empty string and to inlcude @");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;