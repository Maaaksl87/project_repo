let person = {
    name: "Alice",
    age: 23,
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
    value: "Woman",
    writable: false,
    enumerable: true,
    configurable: false,
});

console.log(person.gender); // Woman
console.log("--------------------------------");

person.name = "Anna";

console.log(person.name); //Anna,змінено успішно
console.log("--------------------------------");

for (key in person) {
    console.log(key); //так, gender відображається. Якщо enumerable змінити на false, то не відображається.
}
console.log("--------------------------------");
delete person.age; // видалилось успішно
console.log(person);


console.log("////////////////////////////////");
let car = {
    brand: "Audi",
    model: "A4",
    year: 2017,
}

Object.preventExtensions(car);
car.color = "blue";

console.log(car);
console.log("---------------------------------");
let otherCar = {
    brand: "Audi",
    model: "A4",
    year: 2017,
}

console.log(Object.seal(otherCar));
console.log("---------------------------------");

delete otherCar.year // не видалилось
console.log(otherCar);

console.log("//////////////////////////////////");


let book = {
    title: "Lorem",
    author: "Franklin",
}

console.log("---------------------------------");
console.log(Object.freeze(book));

book.title = "NO_LOREM";
book.pages = 420;
delete book.author;

console.log(book); // нічого не змінилось

console.log("//////////////////////////////////");

let apple = {
    color: "green",
    isRipe: true
}

Object.freeze(apple);
apple.count = 2;
console.log(apple); // нічого не змінилося, оюєкт лише для читання.

