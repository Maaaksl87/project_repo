// Завдання 1 - Типізація змінних та функцій

let userName: string = "Max";
let age: number = 19;
let isStudent: boolean = true;

const greet = (name: string) => {
  return `Hello, ${name}`;
};

console.log(greet("Max"));

// Завдання 2 - Типізація масивів та кортежів

let arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
let arrayOfFruits: string[] = ["apple", "banana", "cherry"];
let person: [number, string] = [25, "John"]; //кортеж

// Завдання 3 - Створення інтерфейсу для об'єктів

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let user: Person = {
  name: "Max",
  age: 19,
  isStudent: true,
};
console.log(user);

// Завдання 4 - Типізація функцій та generics

function addNumbers(argOne: number, argTwo: number): number {
  return argOne + argTwo;
}

function indentify<T>(arg: T): T {
    return arg;
}

let str = indentify<string>("This is a string");
let num = indentify<number>(20);
