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
