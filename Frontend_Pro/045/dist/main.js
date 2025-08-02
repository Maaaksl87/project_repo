"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let newUser = {
    id: 1,
    name: "Max",
    email: "maaksl87@gmail.com",
    age: 20,
};
function printInfo(newUser) {
    console.log(`ID: ${newUser.id}`);
    console.log(`ID: ${newUser.name}`);
    console.log(`ID: ${newUser.email}`);
    console.log(`ID: ${newUser.age}`);
}
printInfo(newUser);
function getStatus(status) {
    switch (status) {
        case "success":
            return "Успішно!";
        case "error":
            return "Помилка!";
        case "pending":
            return "Очікування!";
    }
}
console.log(getStatus("success"));
// Завдання 3 - Робота з кортежами
let infoAboutStudent = ["Jhon", 3.75];
function getStudentInfo() {
    console.log(`Імя: ${infoAboutStudent[0]}, Середінй бал: ${infoAboutStudent[1]}`);
}
getStudentInfo();
// Завдання 4 - Enum для статусів
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Shipped"] = 1] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 2] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 3] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "очікуйте!";
        case OrderStatus.Shipped:
            return "Відправлено";
        case OrderStatus.Delivered:
            return "Смачного";
        case OrderStatus.Cancelled:
            return "Скасовано :(";
    }
}
console.log(getOrderStatus(OrderStatus.Delivered));
//# sourceMappingURL=main.js.map