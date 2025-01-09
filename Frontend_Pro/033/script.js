//1. Створення шаблонних рядків

function introduce(name, age, city) {
    return `Привіт, мене звати ${name}. Мені ${age} років і я живу в ${city}.`
}

console.log(introduce('Alex', 20, 'Lviv'));

//2. Форматування багаторядкового тексту

function shoppingList(items) {
    return `Список покупок:\n${items.map(item => `- [${item}]`).join('\n')}`;
}

const items = ['item1', 'item2', 'item3'];
console.log(shoppingList(items));

//3. Використання тегованих рядків

function highlight(strings, ...values) {
    return strings.map((str, i) => `${str}${values[i] ? `<strong>${values[i]}</strong>` : ''}`).join('');
}

const firstName = "Maks";
const hobby = "coding";
const result = highlight`Hi, I'm ${firstName} and I like ${hobby}.`;

console.log(result);