function calculateDiscount(dis) {

    return function (purchaseAmount) {
        var discountAmount = purchaseAmount * (dis / 100);
        console.log(`${dis}% від ${purchaseAmount} = ${discountAmount}`);
        return discountAmount;
    };
}

var discount = calculateDiscount(10);
discount(100);


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


function generateUniqueId() {
    let id = 0;

    return function () {
        id++;
        return "id_#" + id;
    }
}
const genId = generateUniqueId();

console.log(genId());


function multiplyBy(num) {

    return function (arg) {
        return num * arg;
    };
};

const multy = multiplyBy(3);

console.log(multy(5));
console.log(multy(8));