// Завдання 1 - Створення типізованого об'єкта
type User = {
  id: number;
  name: string;
  email: string;
  age: number | null;
};

let newUser: User = {
    id: 1,
    name: 'Max',
    email: "maaksl87@gmail.com",
    age: 20,
};

function printInfo (newUser: User): void {
    console.log(`ID: ${newUser.id}`);
    console.log(`ID: ${newUser.name}`);
    console.log(`ID: ${newUser.email}`);
    console.log(`ID: ${newUser.age}`);
};

printInfo(newUser);
