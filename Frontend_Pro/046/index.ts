// Завдання 1 - Абстрактний клас "Транспортний засіб"

abstract class Vehicle {
  abstract startEngine(): string;

  move(): string {
    return 'Vehicle is moving';
  }
}

class Car extends Vehicle implements Drivable {
  startEngine(): string {
    return 'Car engine started';
  }

  drive(): void {
    console.log('Car is driving');
  }
}

const car = new Car();

console.log(car.startEngine());
console.log(car.move());
car.drive();

// Завдання 2 - Інтерфейс "Керування транспортним засобом"

interface Drivable {
  drive(): void;
}

class Bicycle implements Drivable {
  drive(): void {
    console.log('Bicycle is being ridden');
  }
}

const newCar = new Car();
const newBicycle = new Bicycle();

newCar.drive();
newBicycle.drive();

// Завдання 3 - Абстрактний клас та інтерфейси у взаємодії

interface ElectricVehicle {
  chargeBattery(): string;
}

class ElectricCar extends Vehicle implements ElectricVehicle {
  startEngine(): string {
    return 'Electric car engine started';
  }

  chargeBattery(): string {
    return 'Electric car battery is charging';
  }
}

const electricCar = new ElectricCar();

console.log(electricCar.startEngine());
console.log(electricCar.move());
console.log(electricCar.chargeBattery());
