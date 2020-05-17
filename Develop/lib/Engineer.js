// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHub) {

        super(name, type, email, id);
        this.gitHub = gitHub;
    }
}

Engineer.getRole = function() {
    return 'Engineer';
}




// class Vehicle {
//     constructor(id, numberOfWheels, sound) {
//       this.id = id;
//       this.numberOfWheels = numberOfWheels;
//       this.sound = sound;
//     }
  
// class Boat extends Vehicle {
//     constructor(id, type, crew) {
//       super(id, 0, "bwom");
//       this.type = type;
//       this.crew = crew;
//     }

//     class Car extends Vehicle {
//         constructor(id, color, passengers) {
//           super(id, 4, "beep");
//           this.color = color;
//           this.passengers = passengers;
//         }