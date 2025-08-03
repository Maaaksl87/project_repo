// Завдання 1 - Абстрактний клас "Транспортний засіб"

abstract class Vehicle {
  abstract startEngine(): string;

  move(): string {
    return "Vehicle is moving";
  }
}

class Car extends Vehicle {
  startEngine(): string {
    return "Car engine started";
  }
}

const car = new Car();

console.log(car.startEngine()); 
console.log(car.move()); 