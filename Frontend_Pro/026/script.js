console.log("Start");

setTimeout(() => {
    console.log("2 сек");
}, 2000);

console.log("End");

/*
1. setTimeout реєструє функцію для виконання через певний інтервал часу
2. Цикл подій контролює, коли це завдання буде виконане.
3. після завершення синхронних операцій в стеку викликів.
   цикл подій бере завдання з черги подій і додає його в стек викликів для виконання.


*/


const button = document.getElementById("myButton");
button.onclick = function () {
    alert("Button clicked!");
};

//////////////////////////////////////

const div = document.getElementById("myDiv");

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue"
})
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "lightblue"
})