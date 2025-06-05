    let tasks={
        "caminnhar com o cachorro":true,
        "comprar ingredientes para o cafe da manha":true,
        "preparar o almoco":false,
        "ir para a academia":false,
    }

    for (let key in tasks){
        console.log(`A tarefa: : ${key} esta ${tasks[key]? 'concluida' : 'incompleta'}`);
    }