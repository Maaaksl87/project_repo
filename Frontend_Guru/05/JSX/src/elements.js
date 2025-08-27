// Завдання 1 - Створення простого JSX елементу
const welcomeElement = <h1>Hello, world!</h1>

// Завдання 2 - Інтерполяція та JSX
let userAge = 20;
const welcomeOtherElement = <p>Привіт! Тобі {userAge} років!</p>

// Завдання 3 - Перевірка на відвідувача
const isVisitor = true;
const visitorStatusElement = <p>{(isVisitor) ? 'Ласкаво просимо на наш курс!' : 'Будь ласка, зареєструйтесь для доступу'}</p>