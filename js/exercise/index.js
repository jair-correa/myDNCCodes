//const { parse } = require("path");
const getTasksFromLocalStorage = () => {
    const localTasks = JSON.parse(window.localStorage.getItem('tasks'))
    return localTasks ? localTasks : []; // Se as tarefas existirem, retorna tasks senão, array vazio[]
} 

const setTasksInLocalStorage = () => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

const removeTask = (taskId) => { 

    const tasks = getTasksFromLocalStorage();// mantém só as tarefas que não foram removidas
    const updatedTasks = tasks.filter(({id}) => parseInt(id) !== parseInt(taskId));
    setTasksInLocalStorage(updatedTasks);

    document
        .getElementById("todo-list")
        .removeChild(document.getElementById(taskId));
}

const removeDoneTasks = () => {
    const tasksToRemove = tasks
        .filter(({checked}) => checked)
        .map(({id}) => id);

    // mantém só as não concluídas
    tasks = tasks.filter(({checked}) => !checked);
    setTasksInLocalStorage();

    // percorre IDs e remove do DOM
    tasksToRemove.forEach((taskId) => {
        const taskElement = document.getElementById(taskId);
        if (taskElement) {
            document
                .getElementById("todo-list")
                .removeChild(taskElement);
        }
    });
};

const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById('todo-list');
    const toDo = document.createElement('li');
    
    // botão de remover
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
}   

const onCheckboxClick = (event) => {
    const [id] = event.target.id.split('-');
    
    tasks = tasks.map((task) => {
        if (parseInt(id) === parseInt(task.id)) {
            return {...task, checked: event.target.checked}
        }
        return task;
    });

    setTasksInLocalStorage();
}

const getCheckboxInput = ({id, description, checked}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;
    checkbox.addEventListener('change', onCheckboxClick)

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = 'checkbox-label-container';
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}

const getNewTaskId = () =>{
    const lastId = tasks[tasks.length -1]?.id;
    return lastId ? lastId + 1 : 1;
}

const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();
    return {id, description, checked:false}; 
}

const getCreatedTaskInfo = (event) => new Promise((resolve) => {
    setTimeout(()=>{
        resolve(getNewTaskData(event));
    },3000)
})

const createTask = async (event) => {
    event.preventDefault();
    document.getElementById('save-task').setAttribute('disabled', 'true')
    
    const newTaskData = await getCreatedTaskInfo(event);
    const checkbox = getCheckboxInput(newTaskData);
    createTaskListItem(newTaskData, checkbox);
    
    tasks = [...tasks, newTaskData];
    setTasksInLocalStorage();
    
    event.target.reset(); // limpa o formulário após criar
    
    document.getElementById('description').textContent =  '';
    document.getElementById('save-task').removeAttribute('disabled')
}

window.onload = function(){
    const form  = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);
    
    tasks = getTasksFromLocalStorage(); // atualiza a variável global com o localStorage
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        createTaskListItem(task, checkbox);
    });
}
