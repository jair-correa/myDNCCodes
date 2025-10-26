let buscarDadosNoServidor = new Promise((resolve, reject)=>{
        console.log("Buscando dados no sevidor...")

        //simula tempo de espera do servidor (ex: 2 segundos)
        setTimeout(()=>{
            const dadosEncontrados = true //simula se os dados foram encontrados
            if(dadosEncontrados) resolve({nome:"Joao", idade:30})
            else reject("nenhum dado encontrado no servidor")
        }, 10000)
    })


buscarDadosNoServidor
    .then(console.log)
    .catch(console.log)
/*
exemplo com async/await
// Função que retorna uma Promise
function buscarDadosDoServidor() {
  return new Promise((resolve, reject) => {
    console.log("🔍 Buscando dados no servidor...");

    setTimeout(() => {
      const dadosEncontrados = true; // Troque para false para simular erro

      if (dadosEncontrados) {
        resolve({ nome: "João", idade: 30 });
      } else {
        reject("❌ Nenhum dado encontrado no servidor");
      }
    }, 2000);
  });
}

// Função assíncrona usando async/await
async function executarBusca() {
  try {
    const dados = await buscarDadosDoServidor(); // Aguarda a Promise ser resolvida
    console.log("✅ Dados recebidos:", dados);
  } catch (erro) {
    console.error("⚠️ Erro:", erro); // Captura erro se a Promise for rejeitada
  }
}

executarBusca();

*/
