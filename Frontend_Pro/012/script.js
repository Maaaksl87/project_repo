function calculateDiscount(dis) {

    function sum(num1, num2) {
        var summurize = num1 + num2;
        var result = summurize / 100 * dis;
        console.log(`${dis}% від ${summurize} = ${result}`);
    };
    sum(100, 0);
};
calculateDiscount(10);


function createCounter() {
    let counter = 0;

    return function () {
        counter += 1;
        return counter;
    }
}

const makecount = createCounter();

console.log(makecount());
console.log(makecount());
console.log(makecount());
console.log(makecount());



function createLogger() {
    let log = "";

    return function (str2) {
        log += (log ? ' ' : '') + str2;
        return log;
    };
}

const logger = createLogger();

console.log(logger('ssss'));
console.log(logger('test'));