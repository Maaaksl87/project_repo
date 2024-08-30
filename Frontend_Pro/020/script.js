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

    work() {
        return `${this.name} is working as a ${this.position}.`;
    }
}

const firstEmployer = new Employee("Василь", 22, "Fronend dev", 2500);


class Developer extends Employee {
    constructor(name, age, position, baseSalary, programmingLanguage) {
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    work() {
        return `${this.name} is coding in ${this.programmingLanguage}.`;
    }
}

const secondEmployer = new Developer("Олег", 19, "Fronend dev", 500);


class Manager extends Employee {
    constructor(name, age, position, baseSalary, teamSize) {
        super(name, age, position, baseSalary);
        this.teamSize = teamSize;
    }
    calculateSalary() {
        const teamBonus = 100 * this.teamSize;
        const totalSalary = teamBonus + this.baseSalary;
        console.log(`У вас додатково є ${this.teamSize} співробітника, тому вам нараховано ${teamBonus}`);
        return `Ваш дохід ${totalSalary}`;

    }

    work() {
        return `${this.name} is managing a team of ${this.teamSize} people.`;
    }
}


const ManagerEmployer = new Manager("Світлана", 25, "Manager", 2000, 3);


console.log(firstEmployer.calculateSalary()); // 2500 $$$
console.log(firstEmployer.work()); // Василь is working as a Frontend dev.

console.log(secondEmployer.calculateSalary(500)); // 1000 $$$
console.log(secondEmployer.work()); // Олег is coding in JavaScript.

console.log(ManagerEmployer.calculateSalary()); // Ваш дохід 2300 $$$
console.log(ManagerEmployer.work()); // Світлана is managing a team of 3 people.

class TeamLead extends Manager {
    constructor(name, age, position, baseSalary, programmingLanguage, statusWork, teamSize) {
        super(name, age, position, baseSalary, programmingLanguage);
        this.statusWork = statusWork;
        this.teamSize = teamSize;
    }


    work() {
        return `Результатом роботи є ${this.statusWork}`
    }
}

const newTeamLead = new TeamLead('Руслан', 24, "TeamLead", 3000, ["js", "python", "php"], "плідно працює", 4);
console.log(newTeamLead.calculateSalary()); //У вас додатково є 4 співробітника, тому вам нараховано 400 Ваш дохід 3400
console.log(newTeamLead.work()); //Результатом роботи є плідно працює
