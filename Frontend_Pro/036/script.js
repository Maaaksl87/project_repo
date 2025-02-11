document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('task-form');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const taskList = document.getElementById('task-list');
    const errorMessageEl = document.getElementById('error-message');


    const apiUrl = 'http://localhost:3000/tasks';

    // відображення повідомлення про помилку
    function showError(message) {
        if (errorMessageEl) {
            errorMessageEl.textContent = message;
            // Автоматично прибираємо повідомлення через 5 секунд
            setTimeout(() => {
                errorMessageEl.textContent = '';
            }, 5000);
        } else {
            alert(message);
        }
    }

    // Отримання завдань з сервера та відображення їх
    async function fetchTasks() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const tasks = await response.json();
            taskList.innerHTML = ''; // Очищення поточного списку завдань
            tasks.forEach(task => renderTask(task));
        } catch (error) {
            console.error('Помилка отримання завдань:', error);
            showError('Не вдалося завантажити завдання. Спробуйте пізніше.');
        }
    }

    // Відображення одного завдання у вигляді рядка таблиці
    function renderTask(task) {
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', task.id);

        const tdTitle = document.createElement('td');
        tdTitle.textContent = task.title;

        const tdDescription = document.createElement('td');
        tdDescription.textContent = task.description;

        const tdStatus = document.createElement('td');
        tdStatus.textContent = task.status;

        const tdActions = document.createElement('td');

        // Кнопка для перемикання статусу завдання
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent =
            task.status === 'pending' ? 'Mark Completed' : 'Mark Pending';
        toggleBtn.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white', 'py-1', 'px-2', 'rounded');
        toggleBtn.addEventListener('click', () => toggleStatus(task.id));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'py-1', 'px-2', 'rounded', 'ml-2');
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        tdActions.appendChild(toggleBtn);
        tdActions.appendChild(deleteBtn);

        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        tr.appendChild(tdStatus);
        tr.appendChild(tdActions);

        taskList.appendChild(tr);
    }

    async function addTask(title, description) {
        const newTask = { title, description, status: 'pending' };
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const task = await response.json();
            renderTask(task);
        } catch (error) {
            console.error('Помилка додавання завдання:', error);
            showError('Не вдалося додати завдання. Спробуйте пізніше.');
        }
    }

    async function toggleStatus(id) {
        const tr = document.querySelector(`tr[data-id="${id}"]`);
        if (!tr) return;

        const statusTd = tr.children[2];
        const currentStatus = statusTd.textContent.trim();
        const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';

        try {
            const response = await fetch(`${apiUrl}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const updatedTask = await response.json();
            statusTd.textContent = updatedTask.status;
            const toggleBtn = tr.children[3].querySelector('button');
            toggleBtn.textContent =
                updatedTask.status === 'pending' ? 'Mark Completed' : 'Mark Pending';
        } catch (error) {
            console.error('Помилка оновлення статусу завдання:', error);
            showError('Не вдалося оновити статус завдання. Спробуйте пізніше.');
        }
    }

    // Видалення завдання
    async function deleteTask(id) {
        try {
            const response = await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const tr = document.querySelector(`tr[data-id="${id}"]`);
            if (tr) {
                tr.remove();
            }
        } catch (error) {
            console.error('Помилка видалення завдання:', error);
            showError('Не вдалося видалити завдання. Спробуйте пізніше.');
        }
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        // Перевірка, щоб поля не були порожніми
        if (!title || !description) {
            showError('Будь ласка, заповніть всі поля форми.');
            return;
        }

        await addTask(title, description);

        titleInput.value = '';
        descriptionInput.value = '';
    });

    fetchTasks();
});
