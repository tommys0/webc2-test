const todos = [
    {
        title: 'WAR Ukol',
        text: 'Dodělat domácí úkol z reactu na useState Movies',
        done: false,
    },
    {
        title: 'WEB Test, learning',
        text: 'Test z nějakých zbytečných věcí, o kterých jsem nevěděl a píšu ho protože druhá skupina to měla psát',
        done: true,
    },
    {
        title: 'Mamka narozeniny, darek koupit',
        text: 'Zajít koupit dárek pro mamku na 45. maroziny, koupit do 25.1.',
        done: false,
    },
    {
        title: 'Koupit letenky',
        text: 'Koupit letenky do Milána na 27.1.2024 pro 4 osoby a zarezervovat místo v restauraci',
        done: true,
    },
    {
        title: 'S4T 3D prototype',
        text: 'Udělat 3D prototyp na S4T + schůze s Patrikem',
        done: false,
    },
];

const taskList = document.querySelector('.task-list');

function renderTasks() {
    for (let i = 0; i < todos.length; i++) {        const task = todos[i];
               const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-text">${task.text}</div>
        `;
    taskList.appendChild(newTask);
        if (newTask.done) {
            newTask.classList.add('task-done');
        }
    }
}

renderTasks();