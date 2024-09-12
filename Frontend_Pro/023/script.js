document.getElementById('button').addEventListener('click', function () {
    let header = document.getElementById('header');
    header.textContent = 'Заголовок змінено!';
});

document.querySelector('.add-element-btn').addEventListener('click', function () {
    let container = document.querySelector('.elements-container');
    let newElement = document.createElement('p');
    newElement.textContent = 'Новий елемент';
    container.appendChild(newElement);
});