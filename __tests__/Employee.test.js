const employeeTEST = require("../lib/Employee");

describe('employeeTEST', () => {
    describe("Initialization", () => {
        it("should create and object with 'name' string, 'id' number string, and 'email' string ", () => {
            const employee = new employeeTEST("name", "1", "email@text.com");
            expect(employee.name).toEqual("name");
            expect(employee.id).toEqual("1");
            expect(employee.email).toEqual("email@text.com");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new employeeTEST();
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new employeeTEST("3", "2", "email@text.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is an empty string", () => {
            const cb = () => new employeeTEST("", "2", "email@text.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is of negative value", () => {
            const cb = () => new employeeTEST("mino", "-2", "email@text.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is of type other than number", () => {
            const cb = () => new employeeTEST("mino", "a", "email@text.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if id is empty", () => {
            const cb = () => new employeeTEST("mino", "", "email@text.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' does not contain .", () => {
            const cb = () => new employeeTEST("mino", "2", "mina@");
            const err = new Error("Expected parameter 'email' to be a non-empty string and to inlcude @ and .");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' does not contain the @", () => {
            const cb = () => new employeeTEST("mino", "2", "emailtext.com");
            const err = new Error("Expected parameter 'email' to be a non-empty string and to inlcude @ and .");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' does not contain @ or .", () => {
            const cb = () => new employeeTEST("mino", "2", "email");
            const err = new Error("Expected parameter 'email' to be a non-empty string and to inlcude @ and .");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is an empty string", () => {
            const cb = () => new employeeTEST("mino", "2", "");
            const err = new Error("Expected parameter 'email' to be a non-empty string and to inlcude @ and .");
            expect(cb).toThrowError(err);
        });
    });

    describe("getName", () => {
        // positive
        it("should return Name", () => {
            const name = "Mino";
            const obj = new employeeTEST(name, "1", "me@test.com");
            const testname = obj.getName();
            expect(testname).toEqual(name);
        });
        // exception test
        it("should throw an error if no text provided", () => {
            const cb = () => new employeeTEST("", "5", "email@text.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string"); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getId", () => {
        // positive
        it("should return Id", () => {
            const id = "3";
            const obj = new employeeTEST("mino", id, "me@test.com");
            const testid = obj.getId();
            expect(testid).toEqual(id);
        });
        // exception test
        it("should throw an error if id is negative number", () => {
            const cb = () => new employeeTEST("mino", "-2", "email@text.com");
            const err = new Error("Expected parameter 'id' to be a non-negative number"); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getEmail", () => {
        // positive
        it("should return email", () => {
            const email = "me@test.com";
            const obj = new employeeTEST("mino", "5", email);
            const testid = obj.getEmail();
            expect(testid).toEqual(email);
        });
        // exception test
        it("should throw an error if email is an empty string", () => {
            const cb = () => new employeeTEST("mino", "5", "");
            const err = new Error("Expected parameter 'email' to be a non-empty string and to inlcude @ and ."); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole", () => {
        // positive
        it("should return Role", () => {
            const obj = new employeeTEST("mino", "5", "me@test.com");
            const testid = obj.getRole();
            expect(testid).toEqual('Employee');
        });
    });
});

// intalling jest test
// Try installing jest as a dev dependency.
// npm install --save-dev jest

// Then run it with npm test. Don't use jest command directly. It's not recommended.
// 