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