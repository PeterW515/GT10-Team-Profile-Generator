//require employee class
const Employee = require('./employee');

class Manager extends Employee {
    //constructor to set name, id, email of employee superclass and officenumber of manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    //return office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    //return role
    getRole() {
        return 'Manager';
    }
}