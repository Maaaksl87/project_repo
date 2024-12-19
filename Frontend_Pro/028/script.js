async function getUsers() {
    try {
        //виконуємо запит на сервер за допомогою fetch
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();

        console.log(data);

    } catch (error) {
        //обробляємо помилки, які можуть виникнути під час оброблення запиту
        console.error('Помилка отримання данних з сервера:', error);
        throw error;
    }
}
getUsers();
