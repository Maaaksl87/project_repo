function filterArr(arr) {
    return arr.filter(i => i % 2 === 0);
}
console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


function sumAllNum(arrnum) {
    return arrnum.reduce((acc, num) => acc + num, 0)
} console.log(sumAllNum([1, 2, 3, 4, 5, 6, 7, 8,]));


function replaceWords(input, target, replacement) {
    const words = input.split(' ');
    const replacedWords = words.map(word => {
        if (word.toLowerCase() === target.toLowerCase()) {
            return replacement;
        }
        return word;
    });

    return replacedWords.join(' ');
}

const input = "Тут має замінитися слово";
const target = "слово";
const replacement = "термін";

const output = replaceWords(input, target, replacement);
console.log(output);



function div(x) {
    return function (y) {
        return y === 0 ? "Ділення на нуль не можливе" : x / y;
    };
}

console.log(div(10)(5));


function accumulator(initialValue = 0) {
    let sum = initialValue;

    function add(value = 0) {
        sum += value;
        return sum;
    }

    return add;
}


const acc1 = accumulator(10);
console.log(acc1(5));
console.log(acc1(3));
console.log(acc1(2));
