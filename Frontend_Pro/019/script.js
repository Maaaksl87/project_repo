const Task = {
    constructor(id, title, description, deadline) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = 'Не виконано';
        this.deadline = new Date(deadline);
        return this;
    },

    markAsDone() {
        this.status = 'Виконано';
        console.log(`Завдання "${this.title}" позначено як виконане.`);
        return this;
    },
}


const task1 = Object.create(Task).constructor(1, 'Купити продукти', 'Молоко, хліб, яйця', '2024-08-10');
console.log(task1);
console.log(task1.markAsDone());
console.log(task1);

console.log('//////////////');

const TaskList = function (id, title, desc) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.el = [];

    TaskList.prototype.addToEl = function (item) {
        this.el.push(item);
        return this;
    };
};


const newTask = new TaskList(1, 'Зробити першу справу', 'lorem.....');
newTask.addToEl(123);
newTask.addToEl('text');
console.log(newTask);


const secondTask = new TaskList(1, 'Зробити наступну справу', 'Кроки для вирішення...');
secondTask.addToEl('елемент');
console.log(secondTask);




