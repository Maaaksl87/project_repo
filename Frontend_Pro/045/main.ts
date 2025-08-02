// Завдання 1 - Створення типізованого об'єкта
type User = {
  id: number;
  name: string;
  email: string;
  age: number | null;
};

let newUser: User = {
  id: 1,
  name: "Max",
  email: "maaksl87@gmail.com",
  age: 20,
};

function printInfo(newUser: User): void {
  console.log(`ID: ${newUser.id}`);
  console.log(`ID: ${newUser.name}`);
  console.log(`ID: ${newUser.email}`);
  console.log(`ID: ${newUser.age}`);
}

printInfo(newUser);

// Завдання 2 - Літеральні типи

type Status = "success" | "error" | "pending";
function getStatus(status: Status): string {
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

let infoAboutStudent: [string, number] = ["Jhon", 3.75];

function getStudentInfo(): void {
  console.log(
    `Імя: ${infoAboutStudent[0]}, Середінй бал: ${infoAboutStudent[1]}`
  );
}
getStudentInfo();

// Завдання 4 - Enum для статусів

enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled,
}

function getOrderStatus(status: OrderStatus): string {
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

// Завдання 5 - Utility Types: Partial та Omit

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type ProductUpdate = Partial<Product>;
type ProductSummary = Omit<Product, 'description'>;