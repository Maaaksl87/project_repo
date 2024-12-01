
// function delayedGreeting(name) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(`Привіт, ${name}`);
//         }, 3000)
//     })
// }

// delayedGreeting('Марія')
//     .then((message) => {
//         console.log(message);
//     });

////////////////////////////////////////


function randomReject() {
    return new Promise((res, rej) => {
        const delay = Math.floor(Math.random() * 4000 + 1000);
        const phrase = `виконалось за ${delay}ms`;
        setTimeout(() => {
            (Math.random() > 0.5) ? res(`${Math.round(Math.random() * 10)}, ${phrase}`) : rej(`Виникла помикла, ${phrase} `)
        }, delay)
    });
}

randomReject()
    .then((result) => {
        console.log('Результат:', result); // Виведе випадкове число
    })
    .catch((error) => {
        console.error('Помилка:', error); // Виведе помилку
    });