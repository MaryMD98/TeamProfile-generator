const employeeTEST = require("../lib/Employee");

describe('employeeTEST', () => {
    describe("getName", () => {
        // positive
        it("should return Name", () => {
            const name = 'Mino';
            const obj = new employeeTEST(name, 1, "me@iteratee.com");

            expect(obj.name).toEqual(name);
        });
        // exception test
    });

});

// intalling jest test
// Try installing jest as a dev dependency.
// npm install --save-dev jest

// Then run it with npm test. Don't use jest command directly. It's not recommended.
// 