function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));
console.log(calculateArea(3, 5));
console.log(calculateArea(1, 8));



let printMessage = (message) => console.log(message);


function sendMessage(message, callback) {
    callback(message);
}

sendMessage("hello, world?", printMessage);

let square = function (num) {
    return Math.pow(num, 2);
}

console.log(square(2));
console.log(square(5));
console.log(square(9));




let check = (num) => {
    typeof num === "number" ? console.log("Аргумент є числом") : console.log("Аргумент не є числом");
}

check(12);
check("sflsf");
check(Boolean);
check({});
