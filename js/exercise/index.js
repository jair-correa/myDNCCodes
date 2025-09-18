//const { parse } = require("path");

let tasks = [
    {id:1, description:'comprar pão', checked:false},
    {id:2, description:'passear com o cachorro', checked:false},
    {id:3, description:'fazer almoço', checked:false},
]

const removeTask = (taskId) => {
    tasks = tasks.filter(({id}) => parseInt(id) !== parseInt(taskId));
 
    document
        .getElementById("todo-list")
        .removeChild(document.getElementById(taskId))
}

const removeDoneTasks = () => {
    const tasksToRemove = tasks //cria uma lista apenas com tarefas que queiram ser removidas
        .filter(({checked}) => checked )
        .map(({id}) => id)
    tasks = tasks.filter(({checked}) => !checked);

}
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
    })
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

const createTask = (event) => {
    event.preventDefault();

    const newTaskData = getNewTaskData(event);
    const checkbox = getCheckboxInput(newTaskData);
    createTaskListItem(newTaskData, checkbox);

    tasks = [...tasks, newTaskData];
}

window.onload = function(){
    const form  = document.getElementById('create-todo-form');
    form.addEventListener('submit', createTask);
    
    // renderiza tarefas iniciais com botão e checkbox
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        createTaskListItem(task, checkbox);
    });
}
