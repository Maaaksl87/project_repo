function multipyByTwo(num) {
    return num * 2;
}

console.log(multipyByTwo(5));

console.log("Завдання 2");

function findMax(arr) {
    return Math.max(...arr);
}

const numbers = [10, 5, 8, 20, 3];
console.log(findMax(numbers));

console.log("Завдання 3");

function updateUserInfo(key, val) {
    return key.name = val;
}

function getUserInfo() {
    return user.name
}

const user = { name: 'John', age: 30 };
updateUserInfo(user, 'Alice');
console.log(getUserInfo(user));