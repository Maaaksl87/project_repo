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

//4. Створення HTML шаблону

function createCard(title, description) {
    return `<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
</div>`
}

console.log(createCard("Subject", "Lorem ipsum****"))

//5. Динамічне формування URL

function generateURL(protocol, domain, path) {
    return `${protocol}://${domain}/${path}`
}

console.log(generateURL("https", "google.com", "#"))

//6. Додаткове завдання (необов'язкове). Розширене тегування

function emphasize(strings, ...values) {
    let result = strings.map((str, i) => {
        let value = values[i] ? `<em>${values[i]}</em>` : '';
        return str + value;
    }).join('');

    result = result.replace("важливо", '<strong>важливо</strong>');
    return result;
}

console.log(emphasize`Потрібно ${"постійно"} практикуватися! Це дуже важливо!`);