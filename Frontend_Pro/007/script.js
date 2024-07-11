let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i)
}
console.log(numbers);


//завдання 2
let colors = ["червоний", "синій", "зелений", "жовтий", "чорний"];
let findColor = (el) => el === "зелений";
console.log(colors.findIndex(findColor)); //2
