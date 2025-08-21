  // Exercício 2: Criar uma Promise que simula um pedido de compra em um e-commerce.
  let promessaDePedidoConfirmado =  () => new Promise((resolve, reject) =>{
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
  //Promise simulando o pagamento de um pedido
  //Aguardando o pagamento ser aprovado
  //Se o pagamento for aprovado, o pedido é confirmado
  //Se o pagamento for recusado, o pedido é cancelado
  let promessaDePagamento = (pedido) => new Promise((resolve, reject)=>{
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

  async function promessaDeCompra(){
    try {
      const pedido = await promessaDePedidoConfirmado();
      console.log("Pedido recebido: ", pedido)

      const pagamento = await promessaDePagamento(pedido)
      console.log("Pedido confirmado: ", pagamento)
    }catch(erro){
      console.log("O pagamento foi recusado. Tente novamente: ", erro)
    }
  }
  
  promessaDeCompra()