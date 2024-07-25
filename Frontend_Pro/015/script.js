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