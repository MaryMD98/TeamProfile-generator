const internTEST = require('../lib/Intern');
const employeeTEST = require("../lib/Employee");

describe('internTEST', () => {
    describe("Initialization", () => {
        it("should create and object with 'name' string, 'id' number, 'email' string and 'school' string ", () => {
            const intern = new internTEST("name", 1, "email@text.com", "Utexas");
            expect(intern.name).toEqual("name");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("email@text.com");
            expect(intern.school).toEqual("Utexas");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new internTEST();
            expect(cb).toThrow();
        });

        it("should throw an error if 'school' is not a string", () => {
            const cb = () => new internTEST("mino", 2, "email@text.com", 8);
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'school' is an empty string", () => {
            const cb = () => new internTEST("mino", 2, "email@text.com", "");
            const err = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(err);
        });
    });

    describe("getSchool", () => {
        // positive
        it("should return School", () => {
            const name = 'utexas';
            const obj = new internTEST("mino", 1, "me@test.com", name);
            const testname = obj.getSchool();
            expect(testname).toEqual(name);
        });
        // exception test
        it("should throw an error if no text provided", () => {
            const cb = () => new internTEST("mino", 1, "me@test.com", "");
            const err = new Error("Expected parameter 'school' to be a non-empty string"); 
            expect(cb).toThrowError(err);
        });
    });

    describe("getRole", () => {
         // positive
         it("should return Role", () => {
            const obj = new internTEST("mino", 5, "me@test.com", "Utexas");
            const testid = obj.getRole();
            expect(testid).toEqual("Intern");
        });
    });
});