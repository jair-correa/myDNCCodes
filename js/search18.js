const armario = [
    {tipo: 'livros', qtd: 5},
    {tipo: 'canetas', qtd: 15},
    {tipo: 'cadernos', qtd: 25},
    {tipo: 'laptop', qtd: 35},
    {tipo: 'colher', qtd: 45},
    {tipo: 'garfo', qtd: 55},
    {tipo: 'prato', qtd: 65},
]

const totalLaptop = armario.reduce((acumulador, item) => {
    if (item.tipo === 'cadernos'){
        return acumulador + item.qtd;
    }else {
        return acumulador;
    }
}, 0);

console.log(totalLaptop);

//Atribui a logica de soma a variavel valorTotal
const valorTotal = armario.reduce((valorPrevio, proximoValor) => valorPrevio + proximoValor.qtd, 0);
console.log(valorTotal);
