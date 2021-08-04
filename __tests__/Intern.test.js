const Intern = require('../lib/intern');

describe('Intern',()=>{
    describe('Initialization',()=>{
        it('should return an object containing name, id, email, and school when called with new keyword',()=>{
            const obj = new Intern();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);

        });
    });
});