const Employee = require('../lib/employee');

describe('Employee',()=>{
    describe('Initialization',()=>{
        it('should return an object containing name, id, and email when called with new keyword',()=>{
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);

        });
    });
});