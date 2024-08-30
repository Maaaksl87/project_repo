class Employee {
    constructor(name, age, position, baseSalary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.baseSalary = baseSalary;

    }

    calculateSalary(bonus) {
        return `Hello ${this.name} you salary is ${bonus ? bonus + this.baseSalary : this.baseSalary} $$$`
    }
}

const firstAmployer = new Employee("Василь", 22, "Fronend dev", 2500);
console.log(firstAmployer.calculateSalary()); //2500$$$


class Developer extends Employee {
    constructor(name, age, position, baseSalary, programmingLanguage) {
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }
}

const secondAmployer = new Developer("Олег", 19, "Fronend dev", 500);
console.log(secondAmployer.calculateSalary(500)); // 1000 $$$


