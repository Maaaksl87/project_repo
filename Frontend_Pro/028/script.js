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
