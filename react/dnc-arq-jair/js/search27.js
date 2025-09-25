let promessaDeCompra = async () => new Promise((resolve, reject)=>{
    console.log('Estou indo comprar o caderno pra voce...');

    setTimeout(()=>{
       let sucesso = true;
       if(sucesso) resolve('Comprei o caderno');
        else reject('A loja esta fechada')
        
        console.log('Fazendo outras coisas...');
    
    },5000); //5s de tempo de espera
})


async function main(){
    try{
        const compra = await promessaDeCompra()
        console.log(compra)
    }catch(err){
        console.log('Não pude concluir a compra. ',err);
        
    }
}
main()
/*
console.log('Eu preciso de caderno novo');

let promessaDeCompra = new Promise((resolve, reject)=>{
    console.log('Estou indo comprar o caderno pra voce...');

    setTimeout(()=>{
       let sucesso = false;
       if(sucesso) resolve('Comprei o caderno');
        else reject('A loja esta fechada')
    
},5000); //5s de tempo de espera
})

console.log('Fazendo outras coisas...');


promessaDeCompra
.then((mensagem)=> console.log(mensagem))
.catch((err)=>console.log(err))

*/