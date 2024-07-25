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


//ЗАВДАННЯ 4
let car = {
    brand: "Audi",
    model: "A4",
    description() {
        return (`Машина марки ${this.brand} ${this.model}`)
    },
}

console.log(car.description());


//ЗАВДАННЯ 5

let product = {
    name: "apple",
    price: 20,
    applyDiscount(discount) {
        console.log(`Знижка: ${discount}% на продукт ${this.name} з початковою ціно ${this.price}`);
        let discountAmount = this.price * (discount / 100);
        this.price = this.price - discountAmount;
        console.log(`Ціна після знижки: ${this.price}`);
    },
}
product.applyDiscount(15);


//ДОДАТКОВЕ ЗАВДАННЯ 
let userProfile = {
    name: "James",
    email: "james@gmail.com",
    age: 25,
    _parol: 12345,

    get parol() {
        return this._parol;
    },
    set parol(val) {
        this._parol = val;
    },

    updateProfile(newName, newAge, newEmail) {
        this.name = newName;
        (typeof newAge === "number" && newAge > 0) ? this.age = newAge : console.log("Ви вказали неправильний вік");
        (typeof newEmail === 'string' && newEmail.includes('@')) ? this.email = newEmail : console.log("Невірна електронна адреса");

    }
}

console.log(userProfile.parol);

userProfile.parol = "New_Parol";

console.log(userProfile.parol);

userProfile.updateProfile("Max", 18, "email@gm.com");
console.log(userProfile.name); //Max
console.log(userProfile.email); //email@gm.com
console.log(userProfile.age); //18
