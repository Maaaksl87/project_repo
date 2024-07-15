// var a = 5; // глобальна область видимості
// function one() {
//     let b = "Ця зміна оголошена в дочірній функції two";
//     console.log(a); //5

//     function two() {
//         var c = 45;
//         console.log(b);

//         function three() {
//             console.log(c); //45
//             const TEXT = "Ця зміна не буде доступна в двох поппередніх функціях, але доступна в цій!";
//             console.log(TEXT);
//         }
//         three();
//         console.log(TEXT); //ReferenceError: TEXT is not defined
//     }
//     two();
// }
// one();
// ну якось так :)



//завдання 2
//звичайне оголошення
// function first() {

//     console.log(number); //Cannot access 'number' before initialization
//     let number = 10;

//     console.log(PI); //Cannot access 'PI' before initialization
//     const PI = 3.14;

//     console.log(text); // undefined
//     var text = "var";
// };
// first()

//функ. вираз
// let second = function () {
//     console.log(number); //Cannot access 'number' before initialization
//     let number = 10;

//     console.log(PI); //Cannot access 'PI' before initialization
//     const PI = 3.14;

//     console.log(text); // undefined
//     var text = "var";
// };
// second();



// Глобальна область видимості
var globalVar = "глобальна var";
let globalLet = "глобальна let";
const globalConst = "глобальна const";

console.log("Глобальна область видимості:");
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

function testScope() {
    // Функціональна область видимості
    var functionVar = "функціональна var";
    let functionLet = "функціональна let";
    const functionConst = "функціональна const";

    console.log("Функціональна область видимості:");
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);

    if (true) {
        // Блочна область видимості
        var blockVar = "блочна var";
        let blockLet = "блочна let";
        const blockConst = "Я блочна константа const";

        console.log("блочна область видимості:");
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }

    // var має функціональну область видимості
    console.log(blockVar); // Я блочна змінна var
    // let і const мають блочну область видимості
    // console.log(blockLet); // Помилка: blockLet не визначено
    // console.log(blockConst); // Помилка: blockConst не визначено
}

testScope();

// var можна перевизначити та переназначити
globalVar = "Змінена глобальна змінна var";
var globalVar = "Перевизначена глобальна змінна var";
console.log(globalVar); // Перевизначена глобальна змінна var

// let можна лише переназначити, але не перевизначити
globalLet = "Змінена глобальна змінна let";
// let globalLet = "Перевизначена глобальна змінна let"; // Identifier 'globalLet' has already been declared
console.log(globalLet); // Змінена глобальна змінна let

// const не можна ні переназначити, ні перевизначити
// globalConst = "Змінена глобальна константа const"; // Assignment to constant variable
// const globalConst = "Перевизначена глобальна константа const"; //Identifier 'globalConst' has already been declared
console.log(globalConst);
