//require employee class
const Employee = require('./employee');

class Intern extends Employee {
    //constructor to set superclass and school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //return School
    getSchool() {
        return this.school;
    }

    //return role
    getRole() {
        return 'Intern';
    }
}