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

//ЗАВДАННЯ 5
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
console.log('////////////////////////');


//ЗАВДАННЯ 6
/*
Суть завдання:  систему управління університетом, яка буде включати інформацію про студентів,
 викладачів та курси. Система повинна дозволяти додавати нових студентів та викладачів, 
 призначати викладачів на курси, а також записувати студентів на курси.
*/


class Person_un {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student_un extends Person_un {
    constructor(firstName, lastName, age, courses = []) {
        super(firstName, lastName, age);
        this.courses = courses;
    }

    enrollCourse(course) {    // записує студента на курс
        this.courses.push(course);
    }
}

class Teacher extends Person_un {
    constructor(firstName, lastName, age, courses = []) {
        super(firstName, lastName, age);
        this.courses = courses;
    }

    assignCourse(course) {    // призначає викладача на курс
        this.courses.push(course);
    }
}

class Course {
    constructor(nameCourse) {
        this.nameCourse = nameCourse;
        this.teacher = null;
        this.students = [];
    }

    addStudent(student) { // додає студента на курс
        this.students.push(student);
        student.enrollCourse(this);
    }

    setTeacher(teacher) { // призначає викладача на курс
        this.teacher = teacher;
        teacher.assignCourse(this);
    }
}

class University {
    constructor(students = [], teachers = [], courses = []) {
        this.students = students;
        this.teachers = teachers;
        this.courses = courses;
    }

    addStudent(student) {
        this.students.push(student);
    }

    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    addCourse(course) {
        this.courses.push(course);
    }

    enrollStudentInCourse(student, course) {
        course.addStudent(student);
    }

    assignTeacherToCourse(teacher, course) {
        course.setTeacher(teacher);
    }
}

const university = new University();

const student1 = new Student_un('John', 'Doe', 20);
const student2 = new Student_un('Jane', 'Smith', 22);

const teacher1 = new Teacher('Dr.', 'Brown', 45);
const teacher2 = new Teacher('Prof.', 'Green', 50);

const course1 = new Course('Mathematics');
const course2 = new Course('Physics');

university.addStudent(student1);
university.addStudent(student2);

university.addTeacher(teacher1);
university.addTeacher(teacher2);

university.addCourse(course1);
university.addCourse(course2);

university.enrollStudentInCourse(student1, course1);
university.enrollStudentInCourse(student2, course2);

university.assignTeacherToCourse(teacher1, course1);
university.assignTeacherToCourse(teacher2, course2);

console.log('Students:');
university.students.forEach(student => {
    console.log(student.getFullName());

});

console.log('--------------');

console.log('Teachers:');
university.teachers.forEach(teacher => {
    console.log(teacher.getFullName());
});

console.log('--------------');

console.log('Courses:');
university.courses.forEach(course => {
    console.log(`${course.nameCourse} - Teacher: ${course.teacher.getFullName()}`);
    console.log('Students:');
    course.students.forEach(student => {
        console.log(student.getFullName());
    });
    console.log('--------------');
});

