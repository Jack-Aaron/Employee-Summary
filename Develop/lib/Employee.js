// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, type, email, id) {
        this.name = name;
        this.type = type;
        this.email = email;
        this.id = id;
    }
  
    printInfo() {
      for (var key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }

  module.exports = Employee;