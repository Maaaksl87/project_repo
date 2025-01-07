//1. Поясніть, що таке функція-генератор в JavaScript та які особливості її використання.
/* Функція-генератор - це функція яка може призупиняти своє виконання, виводити проміжні результати та відтворювати виконання пізніше.
    Особливості використання:
    додамо * після function(перед ідентифікатором нашої функції) щоб зробити функцію-генератором
    використовуємо ключове слово yield для виводу проміжних результатів
    для керування виконанням функції-генератора використовуємо методи next(), return() та throw(), 
    де next() викликає наступний yield, return() завершує виконання функції та повертає значення, а throw() викликає помилку.
*/

//2. Напишіть функцію-генератор, яка генерує послідовність натуральних чисел, починаючи з 1, і кожного разу збільшує число на 2.

function* numbers() {
    let i = 1;
    while (true) {
        yield i;
        i += 2;
    }
}
const res = numbers();
console.log(res.next())//{ value: 1, done: false }
console.log(res.next())//{ value: 3, done: false }

//3. Створіть функцію-генератор, яка видає послідовність Фібоначчі. Перші два числа послідовності - 0 і 1, кожне наступне число дорівнює сумі двох попередніх.

function* fibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())


//4. Напишіть функцію-генератор, яка приймає масив чисел як параметр та повертає кожне число з масиву, збільшене на 1.

function* arrOfNum(arr) {
    for (const el of arr) {
        yield el + 1;
    }
}

const r = arrOfNum([1, 2, 3, 4, 5, 6]);
console.log(r.next());
console.log(r.next());
console.log(r.next());


//5. Створіть функцію-генератор, яка генерує послідовність простих чисел.

function* primeNum() {
    let num = 2;
    while (true) {
        if (isPrime(num)) {
            yield num
        }
        num++
    }
}

// функція для перевірки, чи є число простим
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const result = primeNum();

console.log(result.next())
console.log(result.next())
console.log(result.next())


//6. Напишіть програму, яка використовує функцію-генератор для генерації геометричної прогресії. 
// Програма повинна приймати початкове значення, коефіцієнт прогресії та кількість членів у прогресії.

function* geometricProgression(start, step, count) {
    let current = start;
    for (let i = 0; i < count; i++) {
        yield current;
        current *= step;
    }
}
const gp = geometricProgression(1, 3, 5);
console.log(gp.next()); // { value: 1, done: false }
console.log(gp.next()); // { value: 3, done: false }
console.log(gp.next()); //value 9
console.log(gp.next()); //value 27
console.log(gp.next()); //value 81
console.log(gp.next()); //value undefined done true

//7. Поясніть, як використовувати методи "next()" та "yield" для взаємодії з функцією-генератором.

/* 
next() - метод, який викликає наступний yield в функції-генераторі. При виклику next() виконання функції-генератора призупиняється на yield.
у функції-генератора використовуємо yield для виводу проміжних результатів. next() використовується уже при самому виклику функції-генератора в консолі наприклад.
*/