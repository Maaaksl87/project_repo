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