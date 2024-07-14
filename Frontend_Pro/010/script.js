function first(callback) {
    console.log("okay");
    callback();
};

function whatIsCallback() {
    console.log(`
        Колбек - це функція яка є аргументом іншої функції та викликаються пізніше, після завершення певної операції.
        Основний принцип роботи: 
        - Передажмо функцію-колбек як аргумент іншій функції.
        - Ця функція викликає переданий колбек після завершення певної асинхронної дії.
        Колбеки корисні, тому що дозволяють виконувати інші дії не чекаючи завершення асинхронної дії.`);
};

first(whatIsCallback);


function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function display(result) {
    console.log(result);
}

sum(display, 5, 6);



const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;

        if (success) {
            resolve("Promise виконується успішно");
        } else {
            reject("Promise відхиляється");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });
