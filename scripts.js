let person1 = {
    name: 'Isabel',
    sayHello: function() {
        console.log("Hello! my name is " + this.name + "!");
    }
}
let person2 = {
    name: 'Justin',
    sayHello: function() {
        console.log("Hello! my name is " + this.name + "!");
    }
}
let person3 = {
    name: 'Joseph',
    sayHello: function() {
        console.log("Hello! my name is " + this.name + "!");
    }
}
let person4 = {
    name: 'Nadine',
    sayHello: function() {
        console.log("Hello! my name is " + this.name + "!");
    }
}
let person5 = {
    name: 'Tom',
    sayHello: function() {
        console.log("Hello! my name is " + this.name + "!");
    }
}
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();