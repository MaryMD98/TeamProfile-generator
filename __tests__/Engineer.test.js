const engineerTEST = require('../lib/Engineer');
const employeeTEST = require("../lib/Employee");

describe('engineerTEST', () => {
    describe("Initialization", () => {
        it("should create and object with 'name' string, 'id' number string, 'email' string and 'github' string ", () => {
            const engineer = new engineerTEST("name", "1", "email@text.com", "github");
            expect(engineer.name).toEqual("name");
            expect(engineer.id).toEqual("1");
            expect(engineer.email).toEqual("email@text.com");
            expect(engineer.github).toEqual("github");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new engineerTEST();
            expect(cb).toThrow();
        });

        it("should throw an error if 'github' is an empty string", () => {
            const cb = () => new engineerTEST("mino", "2", "email@text.com", "");
            const err = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
    });

    describe("getGithub", () => {
        // positive
        it("should return github", () => {
            const name = "github";
            const obj = new engineerTEST("mino", "1", "me@test.com", name);
            const testname = obj.getGithub();
            expect(testname).toEqual(name);
        });
        // exception test
        it("should throw an error if no text provided", () => {
            const cb = () => new engineerTEST("mino", "1", "me@test.com", "");
            const err = new Error("Expected parameter 'github' to be a non-empty string"); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole", () => {
        // positive
        it("should return Role", () => {
            const obj = new engineerTEST("mino", "5", "me@test.com", "github");
            const testid = obj.getRole();
            expect(testid).toEqual("Engineer");
        });
    });
});