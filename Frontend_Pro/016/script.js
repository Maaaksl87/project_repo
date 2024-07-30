let person = {
    name: "Alice",
    age: 23,
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));

Object.defineProperty(person, "gender", {
    value: "Woman",
    writeable: false,
    enumerable: true,
    configurable: false,
});

console.log(person.gender);