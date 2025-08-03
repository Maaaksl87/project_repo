// Завдання 1 - Абстрактний клас "Транспортний засіб"

abstract class Vehicle {
  abstract startEngine(): string;

  move(): string {
    return "Vehicle is moving";
  }
}

class Car extends Vehicle implements Drivable {
  startEngine(): string {
    return "Car engine started";
  }

  drive(): void {
    console.log("Car is driving");
  }
}

const car = new Car();

console.log(car.startEngine());
console.log(car.move());
console.log(car.drive());

// Завдання 2 - Інтерфейс "Керування транспортним засобом"

interface Drivable {
  drive(): void;
}

class Bicycle implements Drivable {
  drive(): void {
    console.log("Bicycle is being ridden");
  }
}

const newCar = new Car();
const newBicycle = new Bicycle();

newCar.drive();
newBicycle.drive();
