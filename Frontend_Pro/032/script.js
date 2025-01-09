// Завдання 1: Використання Spread оператора

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = [...arr1, ...arr2, 7];

console.log(newArr);

//Завдання 2: Використання значень параметрів за замовчуванням та Rest параметрів

function greetPeople(greeting = "Hello", ...names) {
    return names.map(name => `${greeting}, ${name}`);
}

const greetings = greetPeople("Hi", "Alice", "Bob", "Charlie");
console.log(greetings); // ["Hi, Alice", "Hi, Bob", "Hi, Charlie"]

const defaultGreetings = greetPeople(undefined, "Alice", "Bob");
console.log(defaultGreetings); // ["Hello, Alice", "Hello, Bob"]