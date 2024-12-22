//! 028_1

// async function getUsers() {
//   try {
//виконуємо запит на сервер за допомогою fetch
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();

//     console.log(data);

//   } catch (error) {
//обробляємо помилки, які можуть виникнути під час оброблення запиту
//     console.error('Помилка отримання данних з сервера:', error);
//     throw error;
//   }
// }
// getUsers();

/////////////////////////////////

//! 028_2

/*
function getData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      return fetch(`https://api.example.com/details/${data.id}`)
        .then(detailsResponse => detailsResponse.json())
        .then(details => {
          console.log(details);
        });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
 */

// async function getData() {
//     try {
//         let response = await fetch('https://api.example.com/data');
//         let data = await response.json();

//         let detailsResponse = await fetch(`https://api.example.com/details/${data.id}`);
//         let details = await detailsResponse.json();

//         console.log(details);

//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


//! 028_3

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms * 1000));
// }


// async function performAfterDelay(ms) {
//   console.log(`Очікування ${ms} секунд...`);
//   await delay(ms);
//   console.log('Затримка пройшла, виконуємо дію');
// }

// performAfterDelay(3);

//! 028_4 *Поясніть, коли краще використовувати async / await у порівнянні зі звичайними обіцянками.*

// Async/await:
//  - коли потрбно запустити асинхронний код послідовно
//  - для складних асинхроних операцій, з багатьма послідовними запитами
//  - для кращої читабельності коду
//  - спрощення обробки помилок за допомогою try catch
//  - щоб уникнути"callback hell" або "promise hell"

// Promise:
//  - Коли потрібно запустити кілька асинхронних операцій паралельно
//  - для простих асинхроних дій, які не вимагають складної обробки


//! 028_6 *Поясніть, як обробляти помилки в асинхронних функціях з використанням try / catch та async / await.*

//  - Основний код пишемо в блоці try, а на випадок непередбучуваної помилки - відловлюємо її в блоці catch


//! 028_7 *Перепишіть наведений нижче код, використовуючи async / await для отримання результату від promiseFunction():*
/*
async function getResultFromPromise() {
  try {
    const result = await promiseFunction();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}
*/

//! 028_8 *Напишіть програму, яка виконує послідовні запити до сервера з використанням асинхронних функцій та async / await.*

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(`Помилка при виконанні запиту: ${error.message}`);
  }
}

async function fetchSequentialData() {
  try {
    let data1 = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Результат першого запиту:', data1);

    let data2 = await fetchData('https://jsonplaceholder.typicode.com/posts/2');
    console.log('Результат другого запиту:', data2);

    let data3 = await fetchData('https://jsonplaceholder.typicode.com/posts/3');
    console.log('Результат третього запиту:', data3);

    console.log('Послідовні запити завершено');
  } catch (error) {
    console.error('Сталася помилка під час виконання запитів:', error.message);
  }
}

fetchSequentialData();