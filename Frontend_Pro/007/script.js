let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i)
}
console.log(numbers);


//завдання 2
let colors = ["червоний", "синій", "зелений", "жовтий", "чорний"];
let findColor = (el) => el === "зелений";
console.log(colors.findIndex(findColor)); //2

//видалення за допомогою pop
let colorsDel = ["червоний", "синій", "зелений", "жовтий", "чорний"];

let deleteBlack = colorsDel.pop("чорний");
console.log(colorsDel);

//видалення за допомогою filter
const black = "чорний";
const filterColor = colors.filter((ourColor) => ourColor !== black)
console.log(filterColor);
// також за допомогою splice можна, але якщо ми знаєм на який індекс займає наш елемент



//завдання 3
let fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];
fruits.sort();
console.log(fruits);

let str = fruits.join(", ")
console.log(str);

let filterArr = fruits.filter((n) => n.length > 5);
console.log(filterArr);

let mapArr = fruits.map(el => el.toUpperCase())
console.log(mapArr);

let reduceArr = fruits.reduce((accumulator, currentValue) => {
    return accumulator + "-" + currentValue;
});
console.log(reduceArr);
