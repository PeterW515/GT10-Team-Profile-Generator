//require employee class
const Employee = require('./employee');

class Engineer extends Employee {
    //constructor to set superclass and github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //return github
    getGithub() {
        return this.github;
    }

    //return role
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;