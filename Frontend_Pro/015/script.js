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

