const employeeTEST = require("../lib/Employee");

describe('employeeTEST', () => {
    describe("Initialization", () => {
        it("should create and object with 'name' string, 'id' number, and 'email' string ", () => {
            const employee = new employeeTEST("name", 1, "email@text.com");
            expect(employee).toEqual({ name: "name", id: 1, email: "email@text.com" });
        });

    });

    describe("getName", () => {
        // positive
        it("should return Name", () => {
            const name = 'Mino';
            const obj = new employeeTEST(name, 1, "me@test.com");

            expect(obj.name).toEqual(name);
        });
        // exception test
        it("should throw an error if no text provided", () => {
            const cb = () => new employeeTEST("", 1, "me@test.com");
            const err = new Error("Expected parameter to be a non empty string"); 
            
            expect(cb).toThrowError(err);
        });
    });

    describe("getId", () => {
        expect(true).toEqual(true);
    });

    describe("getEmail", () => {
        expect(true).toEqual(true);
    });

    describe("getRole", () => {
        expect(true).toEqual(true);
    });

});

// intalling jest test
// Try installing jest as a dev dependency.
// npm install --save-dev jest

// Then run it with npm test. Don't use jest command directly. It's not recommended.
// 