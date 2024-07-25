//ЗАВДАННЯ 1
let user = {}

user.name = "user123";
user.email = "user@example.com";

console.log(user); // { name: 'user123', email: 'user@example.com' }

//*Інший спосіб */

let otherName = "otherUser";
let otherEmail = "otheruser@example.com";

let otherUser = {
    otherName,
    otherEmail,
}

console.log(otherUser); //{ otherName: 'otherUser', otherEmail: 'otheruser@example.com' }

//ЗАВДАННЯ 2
let calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    },
    divis(a, b) {
        return a / b;
    }
}

console.log(calculator.add(5, 2));

//ЗАВДАННЯ 3
let circle = {
    pi: 3.14,
    _radius: 25,
    get area() { return (this._radius > 0 ? this.pi * Math.pow(this._radius, 2) : "Радіус повинен бути додатнім") },
    set radius(value) { this._radius = value },
}
console.log(circle.area); //1962.5
circle.radius = 10;
console.log(circle.area); //314