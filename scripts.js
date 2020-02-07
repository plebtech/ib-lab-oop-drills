// let person1 = {
//     name: 'Isabel',
//     sayHello: function() {
//         console.log("Hello! my name is " + this.name + "!");
//     }
// }
// let person2 = {
//     name: 'Justin',
//     sayHello: function() {
//         console.log("Hello! my name is " + this.name + "!");
//     }
// }
// let person3 = {
//     name: 'Joseph',
//     sayHello: function() {
//         console.log("Hello! my name is " + this.name + "!");
//     }
// }
// let person4 = {
//     name: 'Nadine',
//     sayHello: function() {
//         console.log("Hello! my name is " + this.name + "!");
//     }
// }
// let person5 = {
//     name: 'Tom',
//     sayHello: function() {
//         console.log("Hello! my name is " + this.name + "!");
//     }
// }
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();
// function Person(name, city, age) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }
// Person.prototype.sayHello = function(name, city, age) {
//     console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
// }

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
    }
}
// let person1 = new Person('Isabel', 'NSW', 19);
// person1.sayHello();
// let person2 = new Person('Justin', 'Birmingham', 36);
// person2.sayHello();
// let person3 = new Person('Joseph', 'Atlanta', 41);
// person3.sayHello();
// let person4 = new Person('Nadine', 'Dallas', 20);
// person4.sayHello();
// let person5 = new Person('Tom', 'Anaheim', 34);
// person5.sayHello();

class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels.`);
    }
}
class Truck extends Vehicle {
    constructor(type, manufacturer, wheels, doors, bed) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.bed = bed;
    }
    aboutVehicle() {
        let baseString = `Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels and ${this.doors} doors.`;
        if (this.bed === true) {
            baseString = (baseString + ' It has a truck bed.');
            console.log(baseString);
        } else {
            console.log(baseString);
        }
    }
}
class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, size, mpg) {
        super(type, manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels. Its size is ${this.size} and it gets ${this.mpg} miles to the gallon.`);
    }
}
class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, steering, doors) {
        super(type, manufacturer, wheels);
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        let baseString = `Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels.`;
        if (this.steering === 'bars' || this.steering === 'handlebars') {
            baseString = baseString + ` It steers via ${this.steering}.`;
        }
        if (this.doors === 0 || this.doors === 'none') {
            baseString = baseString + ` It has no doors (its a ${this.type}, duh).`;
        }
        console.log(baseString);
    }
}
let sedan = new Sedan('sedan', 'Honda', 4, 'medium', 30);
sedan.aboutVehicle();
let truck = new Truck('truck', 'Toyota', 4, 2, true);
truck.aboutVehicle();
let bike = new Motorcycle('motorcycle', 'Kawasaki', 2, 'handlebars', 'none');
bike.aboutVehicle();