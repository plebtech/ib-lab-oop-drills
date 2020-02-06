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
let person1 = new Person('Isabel', 'NSW', 19);
person1.sayHello();
let person2 = new Person('Justin', 'Birmingham', 36);
person2.sayHello();
let person3 = new Person('Joseph', 'Atlanta', 41);
person3.sayHello();
let person4 = new Person('Nadine', 'Dallas', 20);
person4.sayHello();
let person5 = new Person('Tom', 'Anaheim', 34);
person5.sayHello();