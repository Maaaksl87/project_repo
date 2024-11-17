function printNumbersInterval(from, to) {
    let current = from;
    const timerId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbersInterval(1, 5);

///////////////////////////////////////

function printNumbersTimeout(from, to) {
    let current = from;
    function print() {
        console.log(current);
        if (current < to) {
            setTimeout(print, 1000);
        }
        current++;
    }
    print();
}

printNumbersTimeout(1, 5);

///////////////////////////////// timer

function countToNewYear() {
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();

    function updateTimer() {
        const now = new Date().getTime(); // поточний час
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            console.log('З Новим Роком!');
            return;
        }
        //кількість часу що залишилась
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        console.log(`Залишилось: ${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`);


        setTimeout(updateTimer, 1000);
    }
    updateTimer();
}
countToNewYear();