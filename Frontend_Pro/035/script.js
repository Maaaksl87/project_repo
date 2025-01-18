const xhrGet = new XMLHttpRequest();
xhrGet.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // вказуємо метод та адресу до якого буде здійснено запит , true - асинхронний запит(false - синхронний)
xhrGet.send(); // відправляємо запит на сервер
//відповідь сервера 200 - ок

const xhrPost = new XMLHttpRequest();
xhrPost.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhrPost.setRequestHeader('Content-Type', 'application/json'); //встановлюємо заголовок запиту, що вказує на формат відправлених даних(тут json)
xhrPost.send(JSON.stringify({ key: 'value' }));
//відповідь сервера 201 - created

const xhrPut = new XMLHttpRequest();
xhrPut.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1', true); //вказуємо url з id ресурсу, який буде змінено
xhrPut.setRequestHeader('Content-Type', 'application/json');
xhrPut.send(JSON.stringify({ key: 'newValue' }));
//відповідь сервера 200 - ок, в preview - id: 1, key: newValue

const xhrDelete = new XMLHttpRequest();
xhrDelete.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/2', true);
xhrDelete.send();
//відповідь сервера 200 - ок, в preview {}

///////////////////////////////

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())//перетворюємо відповідь сервера в json
    .then(data => console.log(data))//виводимо в консоль
    .catch(error => console.error('Error:', error));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log('POST response:', data))
    .catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: 1, title: 'foo', body: 'bar', userId: 1 })
})
    .then(response => response.json())
    .then(data => console.log('PUT response:', data))
    .catch(error => console.error('Error:', error));


fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('DELETE response: Resource deleted');
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => console.error('Error:', error));



/*
Порівняння fetch та XMLHttpRequest:
1. Синтаксис: fetch - простий та лаконічний, підтримує проміси; XMLHttpRequest - складніший, громіздкий та вимагає більше коду

2. Обробка відповідей та помилок: fetch використовує проміи з then/catch, що спрощує обробку відповідей та помилок; XMLHttpRequest використовує обробники подій(onload, onerror)

3. Підтримка промісів: fetch підтримує проміси, що дозволяє використовувати async/await; XMLHttpRequest не підтримує проміси

4. Зручність використання: fetch - простий та зручний у використанні; XMLHttpRequest - складний та вимагає більше коду

5. Сумісність з браузерами: fetch підтримується у всіх сучасних браузерах; XMLHttpRequest підтримується у старих браузерах



*/