//function nomeDaFuncao(parametro1, parametro2) {
//    //corpo da funcao
//    let resultado = parametro1 + parametro2
//    return resultado
//}
function iniciaContador(tempo) {
    let segundosRestantes = tempo
    const atualizadorContador = setInterval(() => {
        console.log(segundosRestantes)
        if (segundosRestantes === 0) {
            clearInterval(atualizadorContador)
        } else {
            segundosRestantes--;
        }
    }, 1000);
}

//iniciaCOntador(10)

iniciaContador(10)