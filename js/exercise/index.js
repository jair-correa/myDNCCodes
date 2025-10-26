//const { parse } = require("path");

let tasks = []; // variável global para armazenar as tarefas

// Recupera as tarefas do localStorage
const getTasksFromLocalStorage = () => {
    const localTasks = window.localStorage.getItem('tasks');
    return localTasks ? JSON.parse(localTasks) : []; 
};
    

// Salva as tarefas no localStorage
const setTasksInLocalStorage = (tasksToSave) => {
    window.localStorage.setItem('tasks', JSON.stringify(tasksToSave));
};

// Renderiza o contador de progresso
const renderTasksProgressData = (tasks) => {
    let tasksProgress;
    const tasksProgressDOM = document.getElementById('tasks-progress');

    if (tasksProgressDOM) tasksProgress = tasksProgressDOM;
    else {
        const newTasksProgressDom = document.createElement('div');
        newTasksProgressDom.id = 'tasks-progress';
        document.getElementById('todo-footer').appendChild(newTasksProgressDom);
        tasksProgress = newTasksProgressDom;
    }

    const doneTasks = tasks.filter(({ checked }) => checked).length;
    const totalTasks = tasks.length;
    tasksProgress.textContent = `${doneTasks} / ${totalTasks} concluídas`;
};

// Remove uma tarefa individual
const removeTask = (taskId) => {
    tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(({ id }) => parseInt(id) !== parseInt(taskId));
    setTasksInLocalStorage(updatedTasks);
    renderTasksProgressData(updatedTasks);

    const taskElement = document.getElementById(taskId);
    if (taskElement) {
        document.getElementById("todo-list").removeChild(taskElement);
    }

    tasks = updatedTasks; // mantém sincronizado
};

// Remove todas as tarefas concluídas
const removeDoneTasks = () => {
    const tasksToRemove = tasks.filter(({ checked }) => checked).map(({ id }) => id);

    tasks = tasks.filter(({ checked }) => !checked);
    setTasksInLocalStorage(tasks);

    tasksToRemove.forEach((taskId) => {
        const taskElement = document.getElementById(taskId);
        if (taskElement) {
            document.getElementById("todo-list").removeChild(taskElement);
        }
    });

    renderTasksProgressData(tasks);
};

// Cria o item visual da tarefa
const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');

    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'x';
    removeTaskButton.ariaLabel = 'Remover tarefa';
    removeTaskButton.className = 'remove-btn';
    removeTaskButton.onclick = () => removeTask(task.id);

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    toDo.appendChild(removeTaskButton);

    list.appendChild(toDo);

    return toDo;
};

// Atualiza tarefa ao clicar no checkbox
const onCheckboxClick = (event) => {
    const [id] = event.target.id.split('-');

    tasks = tasks.map((task) => {
        if (parseInt(id) === parseInt(task.id)) {
            return { ...task, checked: event.target.checked };
        }
        return task;
    });

    setTasksInLocalStorage(tasks);
    renderTasksProgressData(tasks);
};

// Cria input checkbox + label
const getCheckboxInput = ({ id, description, checked }) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;
    checkbox.addEventListener('change', onCheckboxClick);

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
};

// Gera novo ID
const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
};

// Pega dados do formulário
const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();
    return { id, description, checked: false };
};

// Simula delay de criação
const getCreatedTaskInfo = (event) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(getNewTaskData(event));
    }, 1000);
});

// Cria nova tarefa
const createTask = async (event) => {
    event.preventDefault();
    document.getElementById('save-task').setAttribute('disabled', 'true');

    const newTaskData = await getCreatedTaskInfo(event);
    const checkbox = getCheckboxInput(newTaskData);
    createTaskListItem(newTaskData, checkbox);

    tasks = [...tasks, newTaskData];
    setTasksInLocalStorage(tasks);

    event.target.reset();

    document.getElementById('save-task').removeAttribute('disabled');
    renderTasksProgressData(tasks);
};

// Inicialização
window.onload = function () {
    const form = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);

    tasks = getTasksFromLocalStorage();
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        createTaskListItem(task, checkbox);
    });

    renderTasksProgressData(tasks);
};
