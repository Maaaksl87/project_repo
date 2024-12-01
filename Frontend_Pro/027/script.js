
function delayedGreeting(name) {
    return new Promise((res) => {
        setTimeout(() => {
            res(`Привіт, ${name}`);
        }, 1000)
    })
}

delayedGreeting('Марія')
    .then((message) => {
        console.log(message);
    });