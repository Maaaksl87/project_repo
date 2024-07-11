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


