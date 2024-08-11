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

class TaskList {
    constructor(id, title, desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.el = [];
    }

    addToEl(item) {
        this.el.push(item);
        return this;
    }

    // Додавання завдання з датою виконання
    addTask(task, dueDate = null) {
        const taskObj = {
            task,
            dueDate: dueDate ? new Date(dueDate) : null,
            createdAt: new Date()
        };
        this.el.push(taskObj);
        return this;
    }

    getTasksForToday() { // Фільтрація завдань за сьогоднішньою датою
        const today = new Date();
        return this.el.filter(item =>
            item.dueDate &&
            item.dueDate.toDateString() === today.toDateString()
        );
    }

    getAllTasks() {
        return this.el;
    }
}
console.log("================");

class Planner {
    constructor(id, title, desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.taskLists = [];
    }

    addTaskList(taskList) {
        if (taskList instanceof TaskList) {
            this.taskLists.push(taskList);
        }
        return this;
    }

    getTaskLists() {
        return this.taskLists;
    }

    // Виведення всіх завдань з певного списку задач за сьогоднішньою датою
    getTasksForToday() {
        return this.taskLists.map(list => ({
            listTitle: list.title,
            tasks: list.getTasksForToday()
        }));
    }

    // Видалення задачі за його id
    removeTaskList(id) {
        this.taskLists = this.taskLists.filter(list => list.id !== id);
        return this;
    }

    // Оновлення інформації про список задач
    updateTaskList(id, newTitle, newDesc) {
        const taskList = this.taskLists.find(list => list.id === id);
        if (taskList) {
            taskList.title = newTitle || taskList.title;
            taskList.desc = newDesc || taskList.desc;
        }
        return this;
    }
}


const firstTasks = new TaskList(1, 'Робочі завдання', 'Завдання для швидкого завершення роботи');
firstTasks.addTask('Пройти урок з курсів todor.academy', '2024-08-11');
firstTasks.addTask('Вивчити щось нове', '2024-08-12');

const secondTasks = new TaskList(2, 'Домашні завдання', 'Список справ вдома');
secondTasks.addTask('Приготувати вечерю', '2024-08-11');
secondTasks.addTask('Погуляти з собфкою', '2024-08-11');

const myPlanner = new Planner(1, 'Мій Планер', 'повсякденні завдання');
myPlanner.addTaskList(firstTasks);
myPlanner.addTaskList(secondTasks);

// Виведення всіх завдань на сьогодні
console.log('Завдання на сьогодні:', myPlanner.getTasksForToday());

// Оновлення списку задач
myPlanner.updateTaskList(1, 'Оновлені робочі завдання', 'Опис змінено');
console.log('Оновлений список:', myPlanner.getTaskLists());

// Видалення задачі за id
myPlanner.removeTaskList(2);
console.log('Списки після видалення:', myPlanner.getTaskLists());


