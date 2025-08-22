let tasks = [
    {id:1, description:'comprar pao', checked:false},
    {id:2, description:'passear como cachorro', checked:false},
    {id:3, description:'fazer almoco', checked:false},
]
const getCheckboxInput = ({id, description, checked}) => {
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const wrapper = document.createElement('div');
    const checkboxId = `${id}-checkbox`;

    checkbox.type = 'checkbox';
    checkbox.id = `${id}-checkbox`;
    checkbox.checked = task.checked;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className= 'checkbox-label-container';
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}
window.onload = function(){
    tasks.forEach((task) =>{//para cada tarefa
        const list = document.getElementById('all-list');
        const toDo = document.createElement('li');

        toDo.textContent = task.description;

        list.appendChild(toDo);

    })
}
