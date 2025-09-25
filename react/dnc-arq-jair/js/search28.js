let buscarDadosServidor = async () => new Promise((resolve, reject)=>{
    console.log('Iniciando busca de dados no servidor...');

    setTimeout(()=>{
        let sucesso = true
        if(sucesso) resolve({nome: 'Joao', idade: 25})
            else reject('Aconteceu um erro na busca de dados')
    }, 5000)
    
})

const data = await buscarDadosServidor()
console.log(data);


/*
Utilizando o await
O operador await é usado dentro de funções assíncronas para esperar pela resolução de uma Promise:

async function exemplo() { const resultado = await operacaoAssincrona(); console.log(resultado); }

Observação: O await só pode ser usado dentro de funções declaradas com async.

Tratamento de erros
Com Async/Await, podemos usar o tradicional bloco try/catch para lidar com erros, tornando o tratamento de exceções mais intuitivo:

async function exemploComTratamentoDeErro() { try { const resultado = await operacaoAssincrona(); console.log(resultado); } catch (erro) { console.error("Ocorreu um erro:", erro); } }

Exemplos Práticos
Buscando dados de um servidor
Vamos examinar um exemplo prático de como usar Async/Await para buscar dados de um servidor:

async function buscarDadosDoServidor() { try { console.log("Iniciando busca de dados no servidor..."); const dados = await buscarDadosNoServidor(); console.log("Dados obtidos:", dados); } catch (erro) { console.error("Erro ao buscar dados:", erro); } } // Função que simula uma busca no servidor function buscarDadosNoServidor() { return new Promise((resolve) => { setTimeout(() => { resolve({ nome: "Fábio", idade: 30 }); }, 2000); }); } buscarDadosDoServidor();

Neste exemplo, buscarDadosDoServidor é uma função assíncrona que utiliza await para esperar pela resolução da Promise retornada por buscarDadosNoServidor. Isso permite que o código pareça síncrono, mesmo lidando com uma operação assíncrona.

Encadeamento de operações assíncronas
Async/Await brilha especialmente quando precisamos encadear múltiplas operações assíncronas:

async function processoPedidoOnline() { try { const pedido = await criarPedido(); const pagamentoConfirmado = await processarPagamento(pedido); if (pagamentoConfirmado) { const envioConfirmado = await enviarPedido(pedido); console.log("Pedido processado com sucesso:", envioConfirmado); } } catch (erro) { console.error("Erro no processo de pedido:", erro); } }

Este exemplo demonstra como Async/Await pode tornar o código mais limpo e fácil de seguir, mesmo com múltiplas operações assíncronas dependentes.

Melhores Práticas e Considerações
Quando usar Async/Await
Operações sequenciais: Ideal para quando você precisa esperar que uma operação termine antes de iniciar outra.
Melhor legibilidade: Use quando o fluxo de código assíncrono precisa ser claro e fácil de entender.
Tratamento de erros simplificado: Quando você deseja usar try/catch para gerenciar erros em operações assíncronas.
Cuidados ao usar Async/Await
Não bloquear desnecessariamente: Evite usar await para operações que podem ser executadas em paralelo.
Lembre-se que funções async sempre retornam Promises: Trate o retorno adequadamente quando chamar funções assíncronas.
Não esqueça do tratamento de erros: Sempre use try/catch ou .catch() ao lidar com Promises.
Otimizando o desempenho
Para operações assíncronas que não dependem umas das outras, considere usar Promise.all():

async function buscarMultiplosDados() { try { const [dados1, dados2, dados3] = await Promise.all([ buscarDados1(), buscarDados2(), buscarDados3() ]); console.log(dados1, dados2, dados3); } catch (erro) { console.error("Erro ao buscar dados:", erro); } }

Esta abordagem permite que múltiplas operações assíncronas sejam iniciadas simultaneamente, melhorando o desempenho geral.

Conclusão
Async/Await representa um avanço significativo na forma como lidamos com código assíncrono em JavaScript. Ao proporcionar uma sintaxe mais limpa e intuitiva, essa abordagem não apenas melhora a legibilidade do código, mas também simplifica o processo de escrita e manutenção de operações assíncronas complexas.

Dominar o uso de Async/Await é essencial para desenvolvedores JavaScript modernos, pois permite criar aplicações mais robustas e eficientes. À medida que você se familiariza com essa técnica, descobrirá que ela se torna uma ferramenta indispensável em seu arsenal de desenvolvimento, permitindo que você escreva código assíncrono com a mesma facilidade e clareza do código síncrono tradicional.

Lembre-se de praticar regularmente e explorar diferentes cenários de uso para aprimorar suas habilidades com Async/Await. Com o tempo e a experiência, você será capaz de aproveitar todo o potencial dessa poderosa feature do JavaScript moderno.
*/