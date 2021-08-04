const Manager = require('../lib/manager');

describe('Manager',()=>{
    describe('Initialization',()=>{
        it('should return an object containing name, id, email, and office number when called with new keyword',()=>{
            const obj = new Manager();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);

        });
    });
});