//ЗАВДАННЯ 1
/*
Процедурне програмування - підхід до написання коду, заснований на використанні процедур, функцій і підпрограм. 
Воно описує програми у вигляді послідовності операцій, які виконуються по порядку.
Обєктно-орієнтоване програмування - розглядає програму як множину обєктів, що взаємодіють між собою.


Переваги ООП: 
можна розширювати код завдяки успадкування та поліморфізму.
Дані інкапсульовані в обєктах.

Переваги ПП: 
функції та процедури розділені заьзавданнями.
Швидке виконання через низький рівень абстракції.
Зрозуміло для початківців.


Недоліки ООП:
Виконується трохи повільніше через високий рівень абстракції.
Складніший для новачків, потрібен деякий досвід у написані коду.

Недоліки ПП: 
Здебільшого використовуються глобальні змінні.
Обмежена розширюваність коду через відсутність успадкування.
*/

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        console.log(`Привіт ${this.name}`);
    }
}

const woman = new Person("Іванка", 22, "woman");
const man = new Person("Олександр", 25, "man");
woman.greet();
man.greet();

//ЗАВДАННЯ 3
console.log("///////////////////");


class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }
    greet() {
        console.log(`Привіт ${this.name}, твій ID ${this.studentId}`);

    }
}

const stud = new Student("Сашко", 1);
stud.greet();

//ЗАВДАННЯ 4
console.log('//////////////////////');

class Shape {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    calculateArea() {
        return this.a * this.b;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, undefined);
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

const obj = new Circle(10);
console.log(obj.calculateArea());

console.log("//////////////////////");

class Library {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    returnBooks() {
        return this.books;
    }
}

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `${this.name} by ${this.author}, ${this.year} year`;
    }
}

const myLibrary = new Library();

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1988);
const book2 = new Book("A Sky Painted Gold", "Laura Wood", 2000);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

console.log("Books in the library:");
myLibrary.returnBooks().forEach(book => console.log(book.getInfo()));
