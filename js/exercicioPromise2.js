  // Exercício 2: Criar uma Promise que simula um pedido de compra em um e-commerce.
  let promessaDePedidoConfirmado = new Promise((resolve, reject) =>{
    console.log("Processando seu pedido..."); 

    setTimeout(()=>{
      let sucesso = true
      if(sucesso){
        console.log("Pedido confirmado com sucesso!")
        resolve({id:1, confirmation:true, payment: 'WAITING_PAYMENT'})
      }
      else reject({confirmation:false, message: "O pedido nao pose ser confirmado"})
    }, 5000)
  })

  let promessaDePagamento = (pedido)=> new Promise((resolve, reject)=>{
    console.log("Aguardando pagamento ser aprovado...");
    setTimeout(()=>{
      let pagamentoAprovado = true
      if(pagamentoAprovado){
        console.log("Pagamento aprovado com sucesso!");
      resolve({id: pedido.id, confirmation: pedido.confirmation,payment: 'PAID'})
      }
      else reject({
        id:pedido.id,
        confirmation: pedido.confirmation,
        payment: 'CANCELED'
      })
    }, 3000)
    
  })

  const promessaResolvida = promessaDePedidoConfirmado
    .then((pedido)=>{
      console.log("Pedido recebido: ", pedido)
      return promessaDePagamento(pedido)
    })
    .then((pagamento) =>{(console.log("Pedido confirmado: ", pagamento))})
    .catch((erro)=>{
      console.log("Erro: ", erro)
    })