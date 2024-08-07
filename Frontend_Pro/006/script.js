console.log(true + false); //1
console.log(8 / '2'); //4
console.log("number" + 5 + 1); //number51
console.log(7 && 2); //2
console.log(2 && 7); //7
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log("five" + + "two"); //fiveNaN
console.log('true' == true); //false
console.log(false == 'false'); //false
console.log(null == ''); // false
console.log(!!"false" == !!"true"); //true !! - пертворення на булевий тип
console.log("4" - 3); //1
console.log("4px" - 3); //NaN
console.log(0 || "0" && 1); //1

//завдання 2
let numString = "42";
let numInt = parseInt(numString);
let numFloat = parseFloat(numString);
console.log(numString);
console.log(numInt);
console.log(numFloat);

//завдання 3
let isLoggedOut = false;
let loggedInString = String(isLoggedOut);
console.log(typeof loggedInString, loggedInString);

//завдання 4
const ageString = "25";
const yearsToAdd = 10;
console.log(+ageString + yearsToAdd); //35

//завдання 5
let inputValue = "true";
console.log(!!inputValue, typeof !!inputValue); // true boolean

// Завдання 6 "Комбіноване приведення типів"
console.log(typeof inputValue); //string (взято з минулого завдання)
console.log(Number(inputValue)) //NaN
//до булевого типу - в минулому завданні :)