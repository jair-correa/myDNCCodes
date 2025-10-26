//object

let mochila = {
    caderno: 'desenho',
    lapis: 'colrir',
    borraacha: 'apagar',
    apontador: 'apontar',
}

delete mochila.lapis;
delete mochila.apontador;

//acessando as propriedades do objeto mochila
console.log(mochila.caderno);
console.log(mochila.borraacha);
console.log(mochila);

