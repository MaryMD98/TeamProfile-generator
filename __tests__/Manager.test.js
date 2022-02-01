const managerTEST = require('../lib/Manager');
const employeeTEST = require("../lib/Employee");

describe('managerTEST', () => {
    describe("Initialization", () => {
        it("should create and object with 'name' string, 'id' number, 'email' string and 'officeNumber' number ", () => {
            const manager = new managerTEST("name", 1, "email@text.com", 101);
            expect(manager.name).toEqual("name");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("email@text.com");
            expect(manager.officeNumber).toEqual(101);
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new managerTEST();
            expect(cb).toThrow();
        });

        it("should throw an error if 'officeNumber' is not a number", () => {
            const cb = () => new managerTEST("mino", 2, "email@text.com", "8");
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is a negative number", () => {
            const cb = () => new managerTEST("mino", 2, "email@text.com", -1);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'officeNumber' is a null number", () => {
            const cb = () => new managerTEST("mino", 2, "email@text.com", null);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(err);
        });
    });

    describe("getOfficenum", () => {
        // positive
        it("should return officeNumber", () => {
            const office = 101;
            const obj = new managerTEST("mino", 1, "me@test.com", office);
            const testname = obj.getOfficenum();
            expect(testname).toEqual(office);
        });
        // exception test
        it("should throw an error if number negative provided", () => {
            const cb = () => new managerTEST("mino", 1, "me@test.com", -30);
            const err = new Error("Expected parameter 'officeNumber' to be a non-negative number"); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole", () => {
        // positive
        it("should return Role", () => {
            const obj = new managerTEST("mino", 5, "me@test.com", 100);
            const testid = obj.getRole();
            expect(testid).toEqual("Manager");
        });
    });
});