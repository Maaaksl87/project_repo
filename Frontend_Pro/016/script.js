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