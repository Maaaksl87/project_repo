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