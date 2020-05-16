// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Employee extends Engineer {
    constructor(gitHub) {

        super(name, type, email, id);
        this.gitHub = gitHub;
    }
}
