let tasks = [
    {id:1, description:'comprar pao', checked:false},
    {id:2, description:'passear como cachorro', checked:false},
    {id:3, description:'fazer almoco', checked:false},
]

window.onload = function(){
    tasks.forEach((task) =>{//para cada tarefa
        const list = document.getElementById('all-list');
        const toDo = document.createElement('li');

        toDo.textContent = task.description;

        list.appendChild(toDo);

    })
}
