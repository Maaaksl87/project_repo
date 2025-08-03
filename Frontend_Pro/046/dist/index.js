"use strict";
// Завдання 1 - Абстрактний клас "Транспортний засіб"
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    move() {
        return "Vehicle is moving";
    }
}
class Car extends Vehicle {
    startEngine() {
        return "Car engine started";
    }
    drive() {
        console.log("Car is driving");
    }
}
const car = new Car();
console.log(car.startEngine());
console.log(car.move());
console.log(car.drive());
class Bicycle {
    drive() {
        console.log("Bicycle is being ridden");
    }
}
const newCar = new Car();
const newBicycle = new Bicycle();
newCar.drive();
newBicycle.drive();
//# sourceMappingURL=index.js.map