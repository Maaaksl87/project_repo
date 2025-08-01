
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